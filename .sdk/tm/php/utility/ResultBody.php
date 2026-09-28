<?php
declare(strict_types=1);

// CloudflareAi SDK utility: result_body

class CloudflareAiResultBody
{
    public static function call(CloudflareAiContext $ctx): ?CloudflareAiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
