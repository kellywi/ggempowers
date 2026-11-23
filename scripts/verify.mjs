import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

// Run after npm run build. Check the actual static output rather than source templates.
const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Page IDs must be unique');
for (const match of html.matchAll(/\bhref="#([^"]+)"/g)) {
  assert.ok(ids.includes(match[1]), `Missing anchor target: ${match[1]}`);
}
for (const id of ['main', 'about', 'offerings', 'experiences', 'testimonials', 'contact']) {
  assert.ok(ids.includes(id), `Missing section: ${id}`);
}
assert.ok(!/<script\b/i.test(html), 'This static site should ship no JavaScript');
assert.ok(html.includes('noindex, nofollow'), 'Keep the draft out of search engines');
assert.ok(html.includes('No testimonials have been supplied.'), 'Show the honest testimonial empty state');
console.log('Static output verified: section links, unique IDs, draft metadata, empty state, and zero scripts.');
