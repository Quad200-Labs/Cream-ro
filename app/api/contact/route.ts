/* eslint-disable @typescript-eslint/no-explicit-any */
import { Resend } from "resend";

const resend = new Resend("re_8a54YZ5z_BUnhTynN8Nv5DxxYx54ffbU7");

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  try {
    const { error } = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: "info@maxcream.lk",
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
      <div style="background-color: #fff9eb; padding: 32px 24px; border-radius: 12px; max-width: 620px; margin: auto; box-shadow: 0 8px 24px rgba(0,0,0,0.05); font-family: 'Segoe UI', sans-serif;">
        
        <div style="text-align: center; margin-bottom: 24px;">
          <img src="https://hkakezruxsleppd7.public.blob.vercel-storage.com/Logo-hXNf2xU9hD8EzUeZEu4up1bHbYFV9o.png" alt="CreamRo Logo" width="140" style="margin-bottom: 12px;" />
        </div>
    
        <h2 style="text-align: center; color: #a68160; font-size: 24px; font-weight: 700; margin-bottom: 20px;">
          🍦 You've got a new message!
        </h2>
    
        <table style="width: 100%; font-size: 16px; color: #333; margin-bottom: 30px;">
          <tr>
            <td style="padding: 8px 0;"><strong>Name:</strong></td>
            <td>${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Email:</strong></td>
            <td><a href="mailto:${email}" style="color: #a68160; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; vertical-align: top;"><strong>Message:</strong></td>
            <td style="white-space: pre-line;">${message}</td>
          </tr>
        </table>
    
        <div style="text-align: center; margin-bottom: 30px;">
          <a href="mailto:${email}" style="background-color: #a68160; color: #fff; padding: 12px 24px; font-size: 16px; border-radius: 8px; text-decoration: none; font-weight: 600;">
            ✉️ Reply Now
          </a>
        </div>
    
        <div style="text-align: center; margin-bottom: 16px;">
          <img src="https://hkakezruxsleppd7.public.blob.vercel-storage.com/email-template-K8T0Hwg4xXW6ZSnWoqh5iSpW3hM9vq.png" alt="CreamRo Product" width="120" />
        </div>
    
        <p style="text-align: center; color: #999; font-size: 14px; margin-top: 10px;">
          CreamRo | Nature's Creamy Delight 🍨
        </p>
      </div>
    `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return Response.json({ error: "Unexpected error" }, { status: 500 });
  }
}
