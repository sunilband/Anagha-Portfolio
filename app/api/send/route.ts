import { Resend } from "resend";
import { templete } from "./templete";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: any, res: any) {
  try {
    console.log("ran");
    const { email, name, message } = await req.json();
    console.log(email, name, message);
    const data = await resend.emails.send({
      from: "Anagha Yawale <anagha@anagha.tech>",
      to: email,
      subject: "Contact Form Submission",
      html: templete(name, email),
    });

    const sendToMyself = await resend.emails.send({
      from: `${name} <${email}>`,
      to: "anaghayawale7@gmail.com",
      subject: "Contact Form Submission",
      text: message,
    });

    return Response.json({
      data,
      sendToMyself,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
