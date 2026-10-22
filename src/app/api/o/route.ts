export const runtime = 'nodejs';

const GIF = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
const BOT = /bot|crawl|spider|scanner|curl|wget|python|go-http|headless|proofpoint|mimecast|barracuda/i;

export async function GET(req: Request) {
  const d = (new URL(req.url).searchParams.get('d') || '').toLowerCase();
  const ua = req.headers.get('user-agent') || '';
  if (/^[a-z0-9.-]{3,100}$/.test(d) && !BOT.test(ua) && process.env.TRACK_SHEET_URL) {
    try {
      await fetch(process.env.TRACK_SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ type: 'open', domain: d, at: new Date().toISOString() }),
        signal: AbortSignal.timeout(8000),
      });
    } catch {}
  }
  return new Response(GIF, { headers: { 'Content-Type': 'image/gif', 'Cache-Control': 'no-store, max-age=0' } });
}