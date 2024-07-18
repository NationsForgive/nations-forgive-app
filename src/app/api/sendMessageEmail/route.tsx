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

const resend = new Resend("re_ADuKVxRQ_7SaWy56k9rpwXW31wu3vAP7n");

export async function POST(request: Request) {
  const requestBody = await request.json();
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "padroncjosel@gmail.com",
      subject: "Notificación de contribución",
      html: htmlForMessage(requestBody),
    });

    return Response.json(true);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
