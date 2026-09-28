<?php
declare(strict_types=1);

// CloudflareAi SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareAiMakeContext
{
    public static function call(array $ctxmap, ?CloudflareAiContext $basectx): CloudflareAiContext
    {
        return new CloudflareAiContext($ctxmap, $basectx);
    }
}
