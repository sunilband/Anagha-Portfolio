import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import Reciever from "@/components/EmailTempletes/Reciever/Reciever";
import Sender from "@/components/EmailTempletes/Sender/Sender";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, name, message } = await req.json();
    const data = await resend.batch.send([
      {
        from: "Anagha Yawale <anagha@anagha.tech>",
        to: email,
        subject: "Contact Form Submission",
        react: Reciever({ name }),
      },
      {
        from: `${name} <anagha@anagha.tech>`,
        to: "anaghayawale7@gmail.com",
        subject: "Contact Form Submission",
        react: Sender({ name, email, message }),
      },
    ]);

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
