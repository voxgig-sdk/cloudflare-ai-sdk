# AiGatewayEvaluation entity test

import json
import os
import time

import pytest

from cloudflareai_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflareai_sdk import CloudflareAiSDK
from cloudflareai_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestAiGatewayEvaluationEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareAiSDK.test(None, None)
        ent = testsdk.AiGatewayEvaluation(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "ai_gateway_evaluation": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = CloudflareAiSDK.test(seed, None)
        seen = list(base.AiGatewayEvaluation(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from cloudflareai_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = CloudflareAiSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.AiGatewayEvaluation(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _ai_gateway_evaluation_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "ai_gateway_evaluation." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_AI_TEST_AI_GATEWAY_EVALUATION_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        ai_gateway_evaluation_ref01_ent = client.AiGatewayEvaluation(None)
        ai_gateway_evaluation_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.ai_gateway_evaluation"), "ai_gateway_evaluation_ref01"))
        ai_gateway_evaluation_ref01_data["account_id"] = setup["idmap"]["account01"]
        ai_gateway_evaluation_ref01_data["gateway_id"] = setup["idmap"]["gateway01"]

        ai_gateway_evaluation_ref01_data = helpers.to_map(runner.entity_data(ai_gateway_evaluation_ref01_ent.create(ai_gateway_evaluation_ref01_data, None)))
        assert ai_gateway_evaluation_ref01_data is not None
        assert ai_gateway_evaluation_ref01_data["id"] is not None

        # LIST
        ai_gateway_evaluation_ref01_match = {
            "account_id": setup["idmap"]["account01"],
        }

        ai_gateway_evaluation_ref01_list_result = ai_gateway_evaluation_ref01_ent.list(ai_gateway_evaluation_ref01_match, None)
        assert isinstance(ai_gateway_evaluation_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(ai_gateway_evaluation_ref01_list_result),
            {"id": ai_gateway_evaluation_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # LOAD
        ai_gateway_evaluation_ref01_match_dt0 = {
            "id": ai_gateway_evaluation_ref01_data["id"],
        }
        ai_gateway_evaluation_ref01_data_dt0_loaded = ai_gateway_evaluation_ref01_ent.load(ai_gateway_evaluation_ref01_match_dt0, None)
        ai_gateway_evaluation_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(ai_gateway_evaluation_ref01_data_dt0_loaded))
        assert ai_gateway_evaluation_ref01_data_dt0_load_result is not None
        assert ai_gateway_evaluation_ref01_data_dt0_load_result["id"] == ai_gateway_evaluation_ref01_data["id"]

        # REMOVE
        ai_gateway_evaluation_ref01_match_rm0 = {
            "id": ai_gateway_evaluation_ref01_data["id"],
        }
        ai_gateway_evaluation_ref01_ent.remove(ai_gateway_evaluation_ref01_match_rm0, None)

        # LIST
        ai_gateway_evaluation_ref01_match_rt0 = {
            "account_id": setup["idmap"]["account01"],
        }

        ai_gateway_evaluation_ref01_list_rt0_result = ai_gateway_evaluation_ref01_ent.list(ai_gateway_evaluation_ref01_match_rt0, None)
        assert isinstance(ai_gateway_evaluation_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(ai_gateway_evaluation_ref01_list_rt0_result),
            {"id": ai_gateway_evaluation_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _ai_gateway_evaluation_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/ai_gateway_evaluation/AiGatewayEvaluationTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareAiSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["ai_gateway_evaluation01", "ai_gateway_evaluation02", "ai_gateway_evaluation03", "account01", "account02", "account03", "gateway01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CLOUDFLARE_AI_TEST_AI_GATEWAY_EVALUATION_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_AI_TEST_AI_GATEWAY_EVALUATION_ENTID": idmap,
        "CLOUDFLARE_AI_TEST_LIVE": "FALSE",
        "CLOUDFLARE_AI_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_AI_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_AI_TEST_AI_GATEWAY_EVALUATION_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("CLOUDFLARE_AI_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("CLOUDFLARE_AI_APIKEY"),
            },
            extra or {},
        ])
        client = CloudflareAiSDK(helpers.to_map(merged_opts))

    _live = env.get("CLOUDFLARE_AI_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CLOUDFLARE_AI_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
