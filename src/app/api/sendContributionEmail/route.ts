import { Resend } from "resend";
interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  contribution: number;
  methodOfPayment: string;
  message: string;
  anonymous: boolean;
  forOrganization: boolean;
}

function htmlForContributor(requestBody: EmailTemplateProps) {
  return `<div>
      <h1>Notificación de contribución</h1>
      <h4>Hola, ${requestBody.name}, esperamos que te encuentres muy bien.</h4>
      <br />
      <h5>
        ${requestBody.name}, Queremos agradecerte por tu contribución a nuestra
        organizacion y te invitamos a seguir nuestra mision en todas nuestras
        redes sociales y sitio web.
      </h5>
      <br />
      <br />
      <h5>
        Facebook:
        <a
          href="https://www.facebook.com/CentroCristianoAA1"
          target="_blank"
          rel="noopener noreferrer"
        >
          @CentroCristianoAA1
        </a>
      </h5>
      <h5>
        Instagram:
        <a
          href="https://www.instagram.com/ccacarigua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ccacarigua
        </a>
      </h5>
      <h5>
        Youtube:
        <a
          href="https://www.youtube.com/@centrocristianoaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          @centrocristianoaa
        </a>
      </h5>
      <h5>
        Sitio web:
        <a
          href="https://nations-forgive.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          nations-forgive.org
        </a>
      </h5>
    </div>`;
}

function htmlForOrganization(requestBody: EmailTemplateProps) {
  return `<div>
      <h1>Notificación de contribución</h1>
      <h4>
        La persona de nombre: ${
          requestBody.name
        }, ha realizado la contribución a
        través del canal {requestBody.methodOfPayment} de una cantidad USD
        ${requestBody.contribution}
        .
        <br />
        <br />
        Adicional la persona de nombre ${requestBody.name}, ha decidido que su
        identidad sea ${requestBody.anonymous ? "anonimo" : "publica"}
      </h4>
    </div>`;
}

const resend = new Resend("re_ADuKVxRQ_7SaWy56k9rpwXW31wu3vAP7n");

export async function POST(request: Request) {
  const requestBody = await request.json();
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: requestBody.email,
      subject: "Notificación de contribución",
      html: htmlForContributor(requestBody),
    });

    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "padroncjosel@gmail.com",
      subject: "Notificación de contribución",
      html: htmlForOrganization(requestBody),
    });

    return Response.json(true);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
