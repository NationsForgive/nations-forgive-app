import { Resend } from "resend";
interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function htmlForMessage(requestBody: EmailTemplateProps) {
  return `<div>
      <h2>${requestBody.name}, ha enviado un mensaje.</h2>
      <h3>Asunto: ${requestBody.subject}</h3>
      <h4>
        ${requestBody.message}
      </h4>
    </div>`;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const requestBody = await request.json();
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: process.env.RESEND_RECEPTION_CONTIBUTIONS_EMAIL as string,
      subject: "Notificación de mensaje",
      html: htmlForMessage(requestBody),
    });

    return Response.json(true);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
