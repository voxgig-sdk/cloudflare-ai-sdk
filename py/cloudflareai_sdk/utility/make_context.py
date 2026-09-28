# CloudflareAi SDK utility: make_context

from cloudflareai_sdk.core.context import CloudflareAiContext


def make_context_util(ctxmap, basectx):
    return CloudflareAiContext(ctxmap, basectx)
