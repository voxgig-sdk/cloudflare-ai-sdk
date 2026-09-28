-- CloudflareAi SDK exists test

local sdk = require("cloudflare-ai_sdk")

describe("CloudflareAiSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
