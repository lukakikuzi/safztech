export const runtime = 'nodejs';

const BOT = /bot|crawl|spider|preview|scanner|curl|wget|python|go-http|headless|proofpoint|mimecast|barracuda|slackbot/i;

export async function GET(req: Request) {
  const d = (new URL(req.url).searchParams.get('d') || '').toLowerCase();
  const ua = req.headers.get('user-agent') || '';
  if (/^[a-z0-9.-]{3,100}$/.test(d) && !BOT.test(ua) && process.env.TRACK_SHEET_URL) {
    try {
      await fetch(process.env.TRACK_SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ type: 'click', domain: d, at: new Date().toISOString() }),
        signal: AbortSignal.timeout(8000),
      });
    } catch {}
  }
  return Response.redirect('https://safztech.com/contact', 302);
}