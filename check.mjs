// node check.mjs [الرابط]
const base = process.argv[2] || 'https://adwmx-reels3.jffnco.workers.dev';
const r = await fetch(base + '/ping'); const t = await r.text(); console.log(r.status, t);
try { const j = JSON.parse(t); console.log(j.ok && j.db && j.r2 ? '✅ شغّال (D1 + R2)' : '❌ فيه مشكلة: R2=' + j.r2); } catch { console.log('❌ الرد مش JSON'); }
