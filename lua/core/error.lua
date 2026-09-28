-- CloudflareAi SDK error

local CloudflareAiError = {}
CloudflareAiError.__index = CloudflareAiError


function CloudflareAiError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareAiError)
  self.is_sdk_error = true
  self.sdk = "CloudflareAi"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareAiError:error()
  return self.msg
end


function CloudflareAiError:__tostring()
  return self.msg
end


return CloudflareAiError
