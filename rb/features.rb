# CloudflareAi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareAiFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareAiBaseFeature.new
    when "test"
      CloudflareAiTestFeature.new
    else
      CloudflareAiBaseFeature.new
    end
  end
end
