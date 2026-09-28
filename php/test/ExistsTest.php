<?php
declare(strict_types=1);

// CloudflareAi SDK exists test

require_once __DIR__ . '/../cloudflareai_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CloudflareAiSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
