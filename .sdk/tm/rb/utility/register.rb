# CloudflareAi SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CloudflareAiUtility.registrar = ->(u) {
  u.clean = CloudflareAiUtilities::Clean
  u.done = CloudflareAiUtilities::Done
  u.make_error = CloudflareAiUtilities::MakeError
  u.feature_add = CloudflareAiUtilities::FeatureAdd
  u.feature_hook = CloudflareAiUtilities::FeatureHook
  u.feature_init = CloudflareAiUtilities::FeatureInit
  u.fetcher = CloudflareAiUtilities::Fetcher
  u.make_fetch_def = CloudflareAiUtilities::MakeFetchDef
  u.make_context = CloudflareAiUtilities::MakeContext
  u.make_options = CloudflareAiUtilities::MakeOptions
  u.make_request = CloudflareAiUtilities::MakeRequest
  u.make_response = CloudflareAiUtilities::MakeResponse
  u.make_result = CloudflareAiUtilities::MakeResult
  u.make_point = CloudflareAiUtilities::MakePoint
  u.make_spec = CloudflareAiUtilities::MakeSpec
  u.make_url = CloudflareAiUtilities::MakeUrl
  u.param = CloudflareAiUtilities::Param
  u.prepare_auth = CloudflareAiUtilities::PrepareAuth
  u.prepare_body = CloudflareAiUtilities::PrepareBody
  u.prepare_headers = CloudflareAiUtilities::PrepareHeaders
  u.prepare_method = CloudflareAiUtilities::PrepareMethod
  u.prepare_params = CloudflareAiUtilities::PrepareParams
  u.prepare_path = CloudflareAiUtilities::PreparePath
  u.prepare_query = CloudflareAiUtilities::PrepareQuery
  u.graphql_body = CloudflareAiUtilities::GraphqlBody
  u.graphql_errors = CloudflareAiUtilities::GraphqlErrors
  u.result_basic = CloudflareAiUtilities::ResultBasic
  u.result_body = CloudflareAiUtilities::ResultBody
  u.result_headers = CloudflareAiUtilities::ResultHeaders
  u.transform_request = CloudflareAiUtilities::TransformRequest
  u.transform_response = CloudflareAiUtilities::TransformResponse
}
