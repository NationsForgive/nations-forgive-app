import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend("re_ADuKVxRQ_7SaWy56k9rpwXW31wu3vAP7n");

export async function POST(request: Request) {
  const requestBody = await request.json();
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: requestBody.email,
      subject: "Notificación de contribución",
      react: EmailTemplate({ ...requestBody, forOrganization: false }),
    });

    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "padroncjosel@gmail.com",
      subject: "Notificación de contribución",
      react: EmailTemplate({ ...requestBody, forOrganization: true }),
    });

    return Response.json(true);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
