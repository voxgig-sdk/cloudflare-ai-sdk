
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareAiSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareAiSDK.test()
    equal(testsdk instanceof CloudflareAiSDK, true,
      'CloudflareAiSDK.test() must return a client synchronously')
  })

})
