# CloudflareAi SDK utility: make_context
require_relative '../core/context'
module CloudflareAiUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareAiContext.new(ctxmap, basectx)
  }
end
