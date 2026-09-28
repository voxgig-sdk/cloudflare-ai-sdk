<?php
declare(strict_types=1);

// CloudflareAi SDK utility: prepare_headers

class CloudflareAiPrepareHeaders
{
    public static function call(CloudflareAiContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
