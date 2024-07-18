import * as React from "react";

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

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (
  props
) => {
  return props.forOrganization ? (
    <div>
      <h1>Notificación de contribución</h1>
      <h4>
        La persona de nombre: {props.name}, ha realizado la contribución a
        través del canal {props.methodOfPayment} de una cantidad USD{" "}
        {props.contribution}
        .
        <br />
        <br />
        Adicional la persona de nombre {props.name}, ha decidido que su
        identidad sea {props.anonymous ? "anonimo" : "publica"}
      </h4>
    </div>
  ) : (
    <div>
      <h1>Notificación de contribución</h1>
      <h4>Hola, {props.name}, esperamos que te encuentres muy bien.</h4>
      <br />
      <h5>
        {props.name}, Queremos agradecerte por tu contribución a nuestra
        organizacion y te invitamos a seguir nuestra mision en todas nuestras
        redes sociales y sitio web.
      </h5>
      <br />
      <br />
      <h5>
        Facebook:{" "}
        <a
          href="https://www.facebook.com/CentroCristianoAA1"
          target="_blank"
          rel="noopener noreferrer"
        >
          @CentroCristianoAA1
        </a>
      </h5>
      <h5>
        Instagram:{" "}
        <a
          href="https://www.instagram.com/ccacarigua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ccacarigua
        </a>
      </h5>
      <h5>
        Youtube:{" "}
        <a
          href="https://www.youtube.com/@centrocristianoaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          @centrocristianoaa
        </a>
      </h5>
      <h5>
        Sitio web:{" "}
        <a
          href="https://nations-forgive.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          nations-forgive.org
        </a>
      </h5>
    </div>
  );
};
