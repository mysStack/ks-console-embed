const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const source = fs.readFileSync(path.join(__dirname, 'nginx.conf'), 'utf8');

test('hashed v3dist assets are cached immutably', () => {
  assert.match(source, /gzip_vary\s+on/);
  assert.match(source, /max-age=31536000,\s*immutable/);
});

test('manifest json is not cached as immutable', () => {
  assert.match(source, /location = \/dist\/v3dist\/manifest\.json/);
  assert.match(source, /location = \/dist\/v3dist\/manifest\.locale\.json/);
  const hashedBlock = source.slice(source.indexOf('location /dist/v3dist/'));
  const manifestBlock = source.slice(
    source.indexOf('location = /dist/v3dist/manifest.json'),
    source.indexOf('location /dist/v3dist/'),
  );
  assert.match(manifestBlock, /max-age=60/);
  assert.doesNotMatch(manifestBlock, /immutable/);
  assert.match(hashedBlock, /immutable/);
});

test('missing hashed files are plain text 404', () => {
  assert.match(source, /error_page\s+404\s+=404\s+@plain_not_found/);
  const block = source.slice(source.indexOf('location @plain_not_found'));
  assert.match(block, /types\s*\{\s*\}/);
  assert.match(block, /default_type\s+text\/plain/);
  assert.match(block, /Cache-Control "no-store"/);
  assert.doesNotMatch(block, /text\/html/);
});
