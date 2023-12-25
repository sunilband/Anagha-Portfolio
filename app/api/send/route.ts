import { Resend } from "resend";
import { templete } from "./templete";
import { NextRequest, NextResponse } from "next/server";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, name, message } = await req.json();
    const data = await resend.emails.send({
      from: "Anagha Yawale <anagha@anagha.tech>",
      to: email,
      subject: "Contact Form Submission",
      html: templete(name, email),
    });
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
