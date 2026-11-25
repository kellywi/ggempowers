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
assert.ok(html.includes('id="hero-video"'), 'Include the background video');
assert.ok(html.includes('Pause background video') || html.includes('Play background video'), 'Provide a video playback control');
assert.ok(html.includes('noindex, nofollow'), 'Keep the draft out of search engines');
assert.ok(html.includes('No testimonials have been supplied.'), 'Show the honest testimonial empty state');
const dance = readFileSync(new URL('../dist/somatic-dance/index.html', import.meta.url), 'utf8');
assert.ok(html.includes('href="/somatic-dance/"'), 'Link to Somatic Dance from the homepage');
assert.ok(dance.includes('Somatic Dance | GG Empowers'), 'Give the dance page its own title');
const danceIds = [...dance.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(danceIds).size, danceIds.length, 'Dance page IDs must be unique');
for (const match of dance.matchAll(/\bhref="#([^"]+)"/g)) {
  assert.ok(danceIds.includes(match[1]), `Missing dance page anchor: ${match[1]}`);
}
assert.ok(dance.includes('mailto:giselle@ggempowers.com?subject=Somatic%20Dance%20enquiry'), 'Provide a real enquiry destination');
console.log('Both static pages verified: navigation, unique IDs, titles, draft content, video control, and enquiry link.');
