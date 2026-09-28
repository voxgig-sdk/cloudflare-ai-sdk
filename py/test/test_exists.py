# CloudflareAi SDK exists test

import pytest
from cloudflareai_sdk import CloudflareAiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareAiSDK.test(None, None)
        assert testsdk is not None
