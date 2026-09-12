import imgGrid from "./assets/inno-grid.webp";
import imgSolar from "./assets/inno-panel.webp";
import imgWind from "./assets/inno-wind.webp";

export const innovationsSection = {
  title: "Nuestro Valor Agregado",
  subheading1_1: "Descubra nuestra metodología ",
  subheading1_2: "basada en el rigor profesional",
  innovations: [
    {
      title: "Auditoría Continua y Transparencia",
      description:
        "Aplicamos el rigor de la auditoría financiera a la administración diaria de su comunidad. Revisamos cada peso ingresado y gastado, garantizando que los gastos comunes reflejen la realidad contable. Entregamos reportes claros y detallados para que el comité y los residentes tengan control absoluto sobre sus recursos.",
      visual: imgGrid,
    },
    {
      title: "Sólido Respaldo Normativo",
      description:
        "No dejamos espacio a la improvisación legal. Nuestra gestión se basa en el estricto cumplimiento de la Ley de Copropiedad Inmobiliaria y las normativas laborales vigentes. Minimizamos el riesgo de multas y demandas, blindando a la comunidad ante contingencias legales y asegurando un funcionamiento impecable.",
      visual: imgSolar,
    },
    {
      title: "Trayectoria y Experiencia",
      description:
        "Respaldamos nuestro trabajo con más de una década administrando comunidades de manera exitosa. Entendemos que cada edificio es un ecosistema único con desafíos particulares. Nuestra trayectoria nos permite anticipar problemas, optimizar el mantenimiento preventivo y resolver conflictos con rapidez y total empatía.",
      visual: imgWind,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Transforme la administración de su edificio con SN Consultores.",
  button: "Agendar Asesoría",
};
