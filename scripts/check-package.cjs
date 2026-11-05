const assert = require('node:assert/strict');
const { access } = require('node:fs/promises');
const path = require('node:path');
const pkg = require('../package.json');

async function main() {
  const esm = await import(pkg.name);
  const cjs = require(pkg.name);
  assert.deepEqual(Object.keys(esm).sort(), Object.keys(cjs).sort());
  await access(path.resolve(__dirname, '..', pkg.types));
  await access(path.resolve(__dirname, '..', 'dist/index.d.cts'));

  for (const sdk of [esm, cjs]) {
    assert.equal(sdk.getVersion(), pkg.version);
    assert.equal(sdk.SDK_VERSION, pkg.version);
    assert.equal(sdk.IpGeolocationClient.defaultUserAgent(), `ipgeolocation-javascript-sdk/${pkg.version}`);
    const config = new sdk.IpGeolocationClientConfig({ apiKey: 'package-test' });
    assert.equal(config.baseUrl, 'https://api.ipgeolocation.io');
    assert.equal(Object.isFrozen(config), true);
    for (const formatter of [esm, cjs]) {
      assert.equal(JSON.parse(formatter.toJson(config)).apiKey, '[REDACTED]');
    }
    const request = new sdk.LookupIpGeolocationRequest({ ip: '2001:db8::1' });
    assert.equal(request.ip, '2001:db8::1');
    assert.equal(request.output, sdk.ResponseFormat.JSON);
    const client = new sdk.IpGeolocationClient(config);
    assert.equal(typeof client.bulkLookupIpGeolocationRaw, 'function');
    await client.close();
  }
  console.log(`ESM, CommonJS and declarations checked on ${process.version}`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
