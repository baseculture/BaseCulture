
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const button = body?.untrustedData?.buttonIndex;

  if (!button) {
    return new NextResponse(`
      <html>
        <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://placehold.co/600x400/0A0F1F/FFFFFF?text=BASECULTURE" />
          <meta property="fc:frame:button:1" content="Mint Culture" />
        </head>
      </html>
    `);
  }

  return new NextResponse(`
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://placehold.co/600x400/1E3A8A/FFFFFF?text=Culture+Minted" />
        <meta property="fc:frame:button:1" content="Success 🎉" />
      </head>
    </html>
  `);
}
