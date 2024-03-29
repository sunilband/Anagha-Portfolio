import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();
    // const { email, name, message } = await req.json();
    // const data = await resend.emails.send({
    //   from: "Anagha Yawale <anagha@anagha.tech>",
    //   to: email,
    //   subject: "Contact Form Submission",
    //   html: templete(name, email),
    // });
    console.log(req.body);
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
