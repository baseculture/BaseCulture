import { NextResponse } from "next/server";

function frameHTML(image: string, button: string) {
  return `
  <html>
    <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${image}" />
      <meta property="fc:frame:button:1" content="${button}" />
    </head>
  </html>
  `;
}

// 👉 GET: untuk preview & Warpcast initial load
export async function GET() {
  return new NextResponse(
    frameHTML(
      "https://placehold.co/600x400/0A0F1F/FFFFFF?text=BASECULTURE",
      "Mint Culture"
    ),
    { headers: { "Content-Type": "text/html" } }
  );
}

// 👉 POST: untuk handle button click
export async function POST(req: Request) {
  const body = await req.json();
  const button = body?.untrustedData?.buttonIndex;

  if (button === 1) {
    return new NextResponse(
      frameHTML(
        "https://placehold.co/600x400/1E3A8A/FFFFFF?text=Culture+Minted",
        "Success 🎉"
      ),
      { headers: { "Content-Type": "text/html" } }
    );
  }

  return GET();
}
