import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imagenEcommerce from "./assets/IMAGEN_PARA_ECOMMERCE.png";
import imagenPortfolio from "./assets/PROYECTO_PORTAFOLIO.png";
import imagenSys from "./assets/IMAGEN_SYS.png";

import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPrisma,
  SiAuth0,
  SiCss3,
  SiNpm,
  SiGit,
  SiElectron,
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiHeadlessui,
  SiIconify,
  SiReactrouter,
  SiRedux,
  SiChartdotjs,
  SiMapbox,
  SiJsonwebtokens,
  SiMailgun,
  SiClockify,
  SiGnubash,
  SiDatacamp,
  SiDotnet,
  SiSharp,
  SiCloudflare,
} from "react-icons/si";
import { PiFileJsFill } from "react-icons/pi";
import { PiDatabaseFill } from "react-icons/pi";
import type { JSX } from "react";

const credisoftGaleria = [
  { src: "/credisoft/dashboard.jpg", labelKey: "dashboard" },
  { src: "/credisoft/login.jpg", labelKey: "login" },
  { src: "/credisoft/cobro-cuota.jpg", labelKey: "cobroCuota" },
  { src: "/credisoft/simulador-credito.jpg", labelKey: "simulador" },
];

export default function App() {
  const { t, i18n } = useTranslation();
  const [galeriaAbierta, setGaleriaAbierta] = useState(false);

  const techIcons: { [key: string]: JSX.Element } = {
    "Next.js": <SiNextdotjs className="text-4xl" />,
    React: <SiReact className="text-4xl" />,
    "Node.js": <SiNodedotjs className="text-4xl" />,
    Express: <SiExpress className="text-4xl" />,
    MySQL: <SiMysql className="text-4xl" />,
    Prisma: <SiPrisma className="text-4xl" />,
    "NextAuth.js": <SiAuth0 className="text-4xl" />,
    CSS: <SiCss3 className="text-4xl" />,
    npm: <SiNpm className="text-4xl" />,
    Git: <SiGit className="text-4xl" />,
    Electron: <SiElectron className="text-4xl" />,
    Vite: <SiVite className="text-4xl" />,
    TypeScript: <SiTypescript className="text-4xl" />,
    "Tailwind CSS": <SiTailwindcss className="text-4xl" />,
    "Headless UI": <SiHeadlessui className="text-4xl" />,
    Heroicons: <SiIconify className="text-4xl" />,
    "Lucide Icons": <SiIconify className="text-4xl" />,
    "React Router": <SiReactrouter className="text-4xl" />,
    Zustand: <SiRedux className="text-4xl" />,
    "react-apexcharts": <SiChartdotjs className="text-4xl" />,
    "react-jvectormap": <SiMapbox className="text-4xl" />,
    JWT: <SiJsonwebtokens className="text-4xl" />,
    bcryptjs: <SiAuth0 className="text-4xl" />,
    "Cookie-Parser": <SiDatacamp className="text-4xl" />,
    Nodemailer: <SiMailgun className="text-4xl" />,
    jsreport: <PiFileJsFill className="text-4xl" />,
    "node-cron": <SiClockify className="text-4xl" />,
    dotenv: <SiGnubash className="text-4xl" />,
    "React Slick": <SiReact className="text-4xl" />,
    "React Icons": <SiIconify className="text-4xl" />,
    "C#": <SiSharp className="text-4xl" />,
    ".NET 8": <SiDotnet className="text-4xl" />,
    WPF: <SiDotnet className="text-4xl" />,
    "SQL Server": <PiDatabaseFill className="text-4xl" />,
    Dapper: <SiDotnet className="text-4xl" />,
    "Cloudflare Tunnel": <SiCloudflare className="text-4xl" />,
  };

  const projects = useMemo(
    () => [
      {
        key: "ecommerce",
        title: t("projects.items.ecommerce.title"),
        imagen: imagenEcommerce,
        description: t("projects.items.ecommerce.description"),
        link: "https://github.com/angeljrcurtido2/ecommerce",
        tecnologias: [
          "Next.js",
          "React",
          "Node.js",
          "Express",
          "MySQL",
          "Prisma",
          "NextAuth.js",
          "CSS",
          "npm",
          "Git",
        ],
      },
      {
        key: "inventory",
        title: t("projects.items.inventory.title"),
        imagen: imagenSys,
        description: t("projects.items.inventory.description"),
        link: "https://github.com/angeljrcurtido2/Project_Vite_React_TSX",
        tecnologias: [
          "Electron",
          "Vite",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Headless UI",
          "Heroicons",
          "Lucide Icons",
          "React Router",
          "Zustand",
          "react-apexcharts",
          "react-jvectormap",
          "Node.js",
          "Express",
          "MySQL",
          "JWT",
          "bcryptjs",
          "Cookie-Parser",
          "Nodemailer",
          "jsreport",
          "node-cron",
          "dotenv",
          "npm",
          "Git",
        ],
      },
      {
        key: "portfolio",
        title: t("projects.items.portfolio.title"),
        imagen: imagenPortfolio,
        description: t("projects.items.portfolio.description"),
        link: "https://github.com/angeljrcurtido2/portfolio",
        tecnologias: [
          "Vite",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "React Slick",
          "React Icons",
          "npm",
          "Git",
        ],
      },
      {
        key: "credisoft",
        title: t("projects.items.credisoft.title"),
        imagen: credisoftGaleria[0].src,
        description: t("projects.items.credisoft.description"),
        link: "https://github.com/angeljrcurtido2/SistemaMultiLocal",
        tieneGaleria: true,
        tecnologias: [
          "C#",
          ".NET 8",
          "WPF",
          "SQL Server",
          "Dapper",
          "Cloudflare Tunnel",
          "Git",
        ],
      },
    ],
    [t]
  );

  const allTechnologies = useMemo(
    () => [...new Set(projects.flatMap((p) => p.tecnologias))],
    [projects]
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, centerPadding: "15px" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, centerPadding: "10px" },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2, centerPadding: "10px" },
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-400">
          {t("brand")}
        </h1>
        <nav className="space-x-6 flex items-center">
          <a href="#projects" className="hover:text-blue-400 transition">
            {t("nav.projects")}
          </a>
          <a href="#technologies" className="hover:text-blue-400 transition">
            {t("nav.technologies")}
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            {t("nav.contact")}
          </a>
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={() => i18n.changeLanguage("es")}
              className={`px-3 py-1 rounded transition ${i18n.language === "es"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              ES
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`px-3 py-1 rounded transition ${i18n.language === "en"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-4">
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 text-blue-400">
          {t("hero.title")}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          {t("hero.description")}
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition"
        >
          {t("hero.button")}
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-400">
          {t("projects.title")}
        </h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.key}
              className="bg-gray-700 rounded-xl p-6 shadow hover:scale-105 transition"
            >
              <button
                type="button"
                onClick={() => project.tieneGaleria && setGaleriaAbierta(true)}
                className={`w-full ${project.tieneGaleria ? "cursor-zoom-in" : "cursor-default"}`}
                aria-label={
                  project.tieneGaleria
                    ? t("projects.openGallery", { title: project.title })
                    : undefined
                }
              >
                <img
                  src={project.imagen}
                  alt={t("projects.alt", { title: project.title })}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              </button>
              <h4 className="text-xl font-semibold mb-2">
                {project.title}
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                {project.description.slice(0, 150)}...
              </p>
              <div className="mb-4">
                <h5 className="text-sm font-medium text-blue-400">
                  {t("projects.technologiesLabel")}
                </h5>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.tecnologias.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("projects.viewDetails")} →
                </a>
                {project.tieneGaleria && (
                  <button
                    type="button"
                    onClick={() => setGaleriaAbierta(true)}
                    className="text-blue-400 hover:underline text-sm font-medium"
                  >
                    {t("projects.viewGallery")}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-6 bg-gray-800">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-400">
          {t("technologies.title")}
        </h3>
        <div className="max-w-7xl mx-auto">
          <Slider {...(settings as any)}>
            {allTechnologies.map((tech, index) => (
              <div key={index} className="px-2">
                <div className="flex flex-col items-center bg-gray-700 rounded-full p-4 shadow hover:bg-gray-600 transition w-24 h-24 justify-center">
                  {techIcons[tech] || <span className="text-4xl">?</span>}
                  <span className="text-xs text-gray-300 mt-1 text-center">
                    {tech}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-24 px-4">
        <h3 className="text-3xl font-bold text-blue-400 mb-6">
          {t("contact.title")}
        </h3>
        <p className="text-gray-300 mb-8">
          {t("contact.description")}
        </p>
        <a
          href="mailto:angeljrcurtido@gmail.com"
          className="px-6 py-3 bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition"
        >
          {t("contact.button")}
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700 text-gray-400 text-sm">
        {t("footer.copy", { year: new Date().getFullYear() })}
      </footer>

      {/* Galería CrediSoft/ElectroMar */}
      {galeriaAbierta && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setGaleriaAbierta(false)}
        >
          <div
            className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold text-blue-400">
                {t("projects.items.credisoft.title")}
              </h4>
              <button
                type="button"
                onClick={() => setGaleriaAbierta(false)}
                className="text-gray-300 hover:text-white text-2xl leading-none"
                aria-label={t("projects.closeGallery")}
              >
                ×
              </button>
            </div>

            <video
              src="/credisoft/demostracion.mp4"
              controls
              className="w-full rounded-lg mb-6 bg-black"
            >
              {t("projects.videoUnsupported")}
            </video>

            <div className="grid sm:grid-cols-2 gap-4">
              {credisoftGaleria.map((img) => (
                <div key={img.labelKey}>
                  <img
                    src={img.src}
                    alt={t(`projects.items.credisoft.gallery.${img.labelKey}`)}
                    className="w-full rounded-lg mb-2"
                  />
                  <p className="text-gray-300 text-sm text-center">
                    {t(`projects.items.credisoft.gallery.${img.labelKey}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
