import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // TODO: Client can configure direct email delivery via:
    // 1. Resend (https://resend.com)
    // 2. Formspree endpoint (https://formspree.io/f/YOUR_FORM_ID)
    // 3. SendGrid / Nodemailer
    console.log("New contact form submission received:", {
      name,
      email,
      projectType,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Thank you! Your message has been received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
