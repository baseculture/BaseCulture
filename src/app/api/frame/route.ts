import { NextResponse } from "next/server";

const FRAME_IMAGE_URL =
  "https://placehold.co/1200x630/0A0F1F/FFFFFF?text=BASECULTURE";
const SUCCESS_IMAGE_URL =
  "https://placehold.co/1200x630/1E3A8A/FFFFFF?text=Culture+Minted";

export async function GET() {
  return new NextResponse(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${FRAME_IMAGE_URL}" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/api/frame" />
        <meta property="fc:frame:button:1" content="Mint Culture" />
      </head>
      <body></body>
    </html>
    `,
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const buttonIndex = body?.untrustedData?.buttonIndex;

    if (buttonIndex === 1) {
      return new NextResponse(
        `
        <!DOCTYPE html>
        <html>
          <head>
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="${SUCCESS_IMAGE_URL}" />
            <meta property="fc:frame:button:1" content="Success 🎉" />
          </head>
          <body></body>
        </html>
        `,
        {
          headers: {
            "Content-Type": "text/html",
          },
        }
      );
    }

    // Default response if buttonIndex is not 1
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${FRAME_IMAGE_URL}" />
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/api/frame" />
          <meta property="fc:frame:button:1" content="Mint Culture" />
        </head>
        <body></body>
      </html>
      `,
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  } catch (error) {
    console.error("Frame error:", error);

    // Return initial frame on error
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${FRAME_IMAGE_URL}" />
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/api/frame" />
          <meta property="fc:frame:button:1" content="Mint Culture" />
        </head>
        <body></body>
      </html>
      `,
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  }
}
