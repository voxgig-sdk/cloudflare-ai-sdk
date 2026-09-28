<?php
declare(strict_types=1);

// CloudflareAi SDK utility: result_headers

class CloudflareAiResultHeaders
{
    public static function call(CloudflareAiContext $ctx): ?CloudflareAiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
