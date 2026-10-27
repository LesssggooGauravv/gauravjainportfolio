import {readdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {parseFile} from 'music-metadata';

const DIR = 'music';
const files = (await readdir(DIR))
  .filter(f => /\.mp3$/i.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, {numeric: true}));

const tracks = [];
for (const f of files) {
  let title = '', artist = '';
  try {
    const {common} = await parseFile(path.join(DIR, f), {duration: false});
    title = common.title || '';
    artist = common.artist || '';
  } catch (e) {
    console.warn('could not read tags:', f, e.message);
  }
  // fallback: parse "Artist - Title.mp3" from the filename
  if (!title) {
    const base = f.replace(/\.mp3$/i, '').replace(/_/g, ' ');
    const m = base.match(/^(.+?)\s+-\s+(.+)$/);
    if (m) { if (!artist) artist = m[1]; title = m[2]; }
    else title = base;
  }
  tracks.push({title: title.trim(), artist: (artist || 'Unknown').trim(), src: `${DIR}/${f}`});
}

await writeFile(path.join(DIR, 'playlist.json'), JSON.stringify(tracks, null, 2));
console.log(`playlist.json written: ${tracks.length} tracks`);