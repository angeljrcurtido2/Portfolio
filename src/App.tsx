import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

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
  SiGithub,
  SiLinkedin,
  SiExpo,
  SiAxios,
  SiGoogleplay,
  SiWhatsapp,
} from "react-icons/si";
import { PiFileJsFill, PiDatabaseFill, PiArrowUpRightBold, PiCertificateFill, PiDownloadSimpleBold, PiEyeBold, PiEnvelopeSimpleBold } from "react-icons/pi";
import { SiGooglescholar } from "react-icons/si";
import type { JSX } from "react";

const credisoftGaleria = [
  { src: "/credisoft/dashboard.jpg", labelKey: "dashboard" },
  { src: "/credisoft/login.jpg", labelKey: "login" },
  { src: "/credisoft/cobro-cuota.jpg", labelKey: "cobroCuota" },
  { src: "/credisoft/simulador-credito.jpg", labelKey: "simulador" },
];

const kontrolxGaleria = [
  { src: "/kontrolx/dashboard.webp", labelKey: "dashboard" },
  { src: "/kontrolx/login.webp", labelKey: "login" },
  { src: "/kontrolx/nueva-venta.webp", labelKey: "nuevaVenta" },
  { src: "/kontrolx/reporte-ventas.webp", labelKey: "reporteVentas" },
  { src: "/kontrolx/chat-ia.webp", labelKey: "chatIa" },
  { src: "/kontrolx/egresos-chat.webp", labelKey: "egresosChat" },
];

const credenciales = [
  {
    key: "universidad",
    link: null,
    imagen: "/credenciales/titulo-universidad.jpg",
    icon: <SiGooglescholar />,
  },
  {
    key: "codingdojo",
    link: "https://app.diplomasafe.com/en-US/diploma/d8a240725cad5eee6e837c81f83a649b8ec6c8205",
    icon: <PiCertificateFill />,
  },
  {
    key: "linkedin",
    link: "https://www.linkedin.com/learning/certificates/f579a1ba1ae34b04e061de17be9eac223da86d8ca741e6ecf331258da5ad0fca",
    icon: <PiCertificateFill />,
  },
];

const terminalSessions = [
  {
    tab: "electromar.exe",
    lines: [
      { prompt: "~/credimar-sa", cmd: "git log --oneline -1" },
      { out: "c8e4172 feat: descuentos por nota de credito" },
      { prompt: "~/credimar-sa", cmd: "dotnet run --project ElectroMar" },
      { out: "[14/14 sucursales] Cloudflare Tunnel: conectado" },
      { out: "Sistema listo. Usuarios activos: 37" },
    ],
  },
  {
    tab: "kontrolx",
    lines: [
      { prompt: "~/sysapp", cmd: "npx expo start" },
      { out: "Metro bundler listo · Expo Go conectado" },
      { prompt: "~/sysapp", cmd: 'chat.parse("Ingreso de 150 por venta de equipos")' },
      { out: "✓ Ingreso registrado: Gs. 150 · categoria: ventas" },
      { out: "Publicado en Google Play · com.angeljrcurtido.kontrolx" },
    ],
  },
  {
    tab: "ecommerce",
    lines: [
      { prompt: "~/ecommerce", cmd: "npx prisma migrate deploy" },
      { out: "5 migrations applied · MySQL conectado" },
      { prompt: "~/ecommerce", cmd: "npm run build" },
      { out: "✓ Next.js build completo · panel admin listo" },
    ],
  },
  {
    tab: "inventorysys",
    lines: [
      { prompt: "~/inventorysys", cmd: "npm run electron:build" },
      { out: "✓ Empaquetado para Windows, macOS y Linux" },
      { prompt: "~/inventorysys", cmd: "node-cron: backup diario" },
      { out: "Backup automatizado ejecutado · JWT auth activa" },
    ],
  },
];

export default function App() {
  const { t, i18n } = useTranslation();
  const [galeriaAbierta, setGaleriaAbierta] = useState(false);
  const [galeriaKontrolx, setGaleriaKontrolx] = useState(false);
  const [tituloAbierto, setTituloAbierto] = useState(false);
  const [cvAbierto, setCvAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sesionActual, setSesionActual] = useState(0);
  const [lineaVisible, setLineaVisible] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lineasSesion = terminalSessions[sesionActual].lines;

  useEffect(() => {
    if (lineaVisible < lineasSesion.length) {
      const delay = lineasSesion[lineaVisible].cmd ? 700 : 450;
      const id = setTimeout(() => setLineaVisible((n) => n + 1), delay);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setSesionActual((s) => (s + 1) % terminalSessions.length);
      setLineaVisible(0);
    }, 3200);
    return () => clearTimeout(id);
  }, [lineaVisible, lineasSesion]);

  const techIcons: { [key: string]: JSX.Element } = {
    "Next.js": <SiNextdotjs />,
    React: <SiReact />,
    "Node.js": <SiNodedotjs />,
    Express: <SiExpress />,
    MySQL: <SiMysql />,
    Prisma: <SiPrisma />,
    "NextAuth.js": <SiAuth0 />,
    CSS: <SiCss3 />,
    npm: <SiNpm />,
    Git: <SiGit />,
    Electron: <SiElectron />,
    Vite: <SiVite />,
    TypeScript: <SiTypescript />,
    "Tailwind CSS": <SiTailwindcss />,
    "Headless UI": <SiHeadlessui />,
    Heroicons: <SiIconify />,
    "Lucide Icons": <SiIconify />,
    "React Router": <SiReactrouter />,
    Zustand: <SiRedux />,
    "react-apexcharts": <SiChartdotjs />,
    "react-jvectormap": <SiMapbox />,
    JWT: <SiJsonwebtokens />,
    bcryptjs: <SiAuth0 />,
    "Cookie-Parser": <SiDatacamp />,
    Nodemailer: <SiMailgun />,
    jsreport: <PiFileJsFill />,
    "node-cron": <SiClockify />,
    dotenv: <SiGnubash />,
    "React Slick": <SiReact />,
    "React Icons": <SiIconify />,
    "C#": <SiSharp />,
    ".NET 8": <SiDotnet />,
    WPF: <SiDotnet />,
    "SQL Server": <PiDatabaseFill />,
    Dapper: <SiDotnet />,
    "Cloudflare Tunnel": <SiCloudflare />,
    Expo: <SiExpo />,
    "React Native": <SiReact />,
    Axios: <SiAxios />,
    NativeWind: <SiTailwindcss />,
    "Expo Router": <SiExpo />,
  };

  const projects = useMemo(
    () => [
      {
        key: "credisoft",
        title: t("projects.items.credisoft.title"),
        imagen: credisoftGaleria[0].src,
        description: t("projects.items.credisoft.description"),
        link: "https://github.com/angeljrcurtido2/SistemaMultiLocal",
        tieneGaleria: "credisoft" as const,
        featured: true,
        meta: t("projects.items.credisoft.meta"),
        tecnologias: ["C#", ".NET 8", "WPF", "SQL Server", "Dapper", "Cloudflare Tunnel", "Git"],
      },
      {
        key: "kontrolx",
        title: t("projects.items.kontrolx.title"),
        imagen: kontrolxGaleria[0].src,
        description: t("projects.items.kontrolx.description"),
        link: "https://github.com/angeljrcurtido2/sysapp",
        tieneGaleria: "kontrolx" as const,
        featured: true,
        meta: t("projects.items.kontrolx.meta"),
        tecnologias: ["Expo", "React Native", "TypeScript", "Zustand", "Axios", "NativeWind", "Expo Router", "Git"],
      },
      {
        key: "ecommerce",
        title: t("projects.items.ecommerce.title"),
        imagen: imagenEcommerce,
        description: t("projects.items.ecommerce.description"),
        link: "https://github.com/angeljrcurtido2/ecommerce",
        tecnologias: ["Next.js", "React", "Node.js", "Express", "MySQL", "Prisma", "NextAuth.js", "CSS", "npm", "Git"],
      },
      {
        key: "inventory",
        title: t("projects.items.inventory.title"),
        imagen: imagenSys,
        description: t("projects.items.inventory.description"),
        link: "https://github.com/angeljrcurtido2/Project_Vite_React_TSX",
        tecnologias: [
          "Electron", "Vite", "React", "TypeScript", "Tailwind CSS", "Headless UI",
          "Heroicons", "Lucide Icons", "React Router", "Zustand", "react-apexcharts",
          "react-jvectormap", "Node.js", "Express", "MySQL", "JWT", "bcryptjs",
          "Cookie-Parser", "Nodemailer", "jsreport", "node-cron", "dotenv", "npm", "Git",
        ],
      },
      {
        key: "portfolio",
        title: t("projects.items.portfolio.title"),
        imagen: imagenPortfolio,
        description: t("projects.items.portfolio.description"),
        link: "https://github.com/angeljrcurtido2/portfolio",
        tecnologias: ["Vite", "React", "TypeScript", "Tailwind CSS", "React Slick", "React Icons", "npm", "Git"],
      },
    ],
    [t]
  );

  const allTechnologies = useMemo(
    () => [...new Set(projects.flatMap((p) => p.tecnologias))],
    [projects]
  );

  return (
    <div className="min-h-screen bg-ink text-paper font-body selection:bg-teal selection:text-ink">
      {/* Navbar flotante */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-ink/80 backdrop-blur-md border-b border-ink-line" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="#top" className="font-display font-semibold tracking-tight text-lg">
            {t("brand")}
            <span className="text-teal">.</span>
          </a>
          <nav className="flex items-center gap-6 font-mono text-sm">
            <a href="#projects" className="hidden sm:inline text-paper-dim hover:text-teal transition-colors">
              {t("nav.projects")}
            </a>
            <a href="#technologies" className="hidden sm:inline text-paper-dim hover:text-teal transition-colors">
              {t("nav.technologies")}
            </a>
            <a href="#education" className="hidden sm:inline text-paper-dim hover:text-teal transition-colors">
              {t("nav.education")}
            </a>
            <a href="#contact" className="hidden sm:inline text-paper-dim hover:text-teal transition-colors">
              {t("nav.contact")}
            </a>
            <div className="flex items-center gap-1 border border-ink-line rounded-full p-1">
              <button
                onClick={() => i18n.changeLanguage("es")}
                aria-label={t("aria.toggleLang")}
                className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
                  i18n.language === "es" ? "bg-teal text-ink" : "text-paper-dim hover:text-paper"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => i18n.changeLanguage("en")}
                aria-label={t("aria.toggleLang")}
                className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
                  i18n.language === "en" ? "bg-teal text-ink" : "text-paper-dim hover:text-paper"
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-grid pt-40 pb-28 px-6">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center relative">
          <div>
            <p className="font-mono text-sm text-teal mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              {t("hero.eyebrow")}
            </p>
            <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.03] tracking-tight text-balance mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-paper-dim text-lg max-w-xl mb-10 leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-ink font-medium rounded-full hover:bg-teal-dim transition-colors"
              >
                {t("hero.button")}
                <PiArrowUpRightBold />
              </a>
              <button
                type="button"
                onClick={() => setCvAbierto(true)}
                className="inline-flex items-center gap-2 px-6 py-3 border border-ink-line rounded-full text-paper hover:border-teal hover:text-teal transition-colors"
              >
                <PiEyeBold />
                {t("hero.previewCv")}
              </button>
              <a
                href="/CV_Angel_Curtido.pdf"
                download="CV_Angel_Curtido.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-ink-line rounded-full text-paper hover:border-teal hover:text-teal transition-colors"
              >
                <PiDownloadSimpleBold />
                {t("hero.downloadCv")}
              </a>
              <a
                href="mailto:angeljrcurtido@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-ink-line rounded-full text-paper hover:border-teal hover:text-teal transition-colors"
              >
                {t("contact.button")}
              </a>
            </div>
          </div>

          {/* Mockup de terminal */}
          <div className="glow-teal rounded-xl border border-ink-line bg-ink-soft overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ink-line">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <div className="ml-3 flex items-center gap-3">
                {terminalSessions.map((session, i) => (
                  <span
                    key={session.tab}
                    className={`font-mono text-xs transition-colors ${
                      i === sesionActual ? "text-teal" : "text-paper-dim/50"
                    }`}
                  >
                    {session.tab}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed min-h-[220px]">
              {lineasSesion.slice(0, lineaVisible).map((line, i) =>
                line.cmd ? (
                  <p key={i} className="text-paper">
                    <span className="text-teal">{line.prompt}</span>
                    <span className="text-paper-dim"> $ </span>
                    {line.cmd}
                  </p>
                ) : (
                  <p key={i} className="text-paper-dim pl-0 mb-1">
                    {line.out}
                  </p>
                )
              )}
              <span className="inline-block w-2 h-4 bg-teal align-middle animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects — bento grid */}
      <section id="projects" className="py-24 px-6 border-t border-ink-line">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-sm text-teal mb-2">{t("projects.eyebrow")}</p>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">
                {t("projects.title")}
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.key}
                className="group relative rounded-2xl border border-ink-line bg-ink-soft overflow-hidden transition-colors hover:border-teal/40 flex flex-col"
              >
                {project.tieneGaleria ? (
                  <button
                    type="button"
                    onClick={() =>
                      project.tieneGaleria === "kontrolx"
                        ? setGaleriaKontrolx(true)
                        : setGaleriaAbierta(true)
                    }
                    className="block w-full h-44 overflow-hidden cursor-zoom-in shrink-0"
                    aria-label={t("projects.openGallery", { title: project.title })}
                  >
                    <img
                      src={project.imagen}
                      alt={t("projects.alt", { title: project.title })}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-44 overflow-hidden cursor-pointer shrink-0"
                    aria-label={t("projects.openGallery", { title: project.title })}
                  >
                    <img
                      src={project.imagen}
                      alt={t("projects.alt", { title: project.title })}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                )}

                <div className="p-5 flex flex-col flex-1">
                  {project.featured && (
                    <span className="inline-flex w-fit items-center gap-1.5 font-mono text-xs text-amber mb-2 uppercase tracking-wide">
                      {t("projects.featuredLabel")}
                    </span>
                  )}
                  <h3 className="font-display font-semibold text-lg mb-1 text-balance">
                    {project.title}
                  </h3>
                  {project.meta && (
                    <p className="font-mono text-xs text-paper-dim mb-2">{project.meta}</p>
                  )}
                  <p className="text-paper-dim text-sm leading-relaxed mb-4">
                    {project.description.slice(0, 150)}...
                  </p>

                  <ul className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                    {project.tecnologias.slice(0, 6).map((tech) => (
                      <li
                        key={tech}
                        className="font-mono text-xs text-teal-dim bg-teal/10 px-2 py-0.5 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-paper hover:text-teal transition-colors"
                    >
                      {t("projects.viewDetails")}
                      <PiArrowUpRightBold />
                    </a>
                    {project.tieneGaleria && (
                      <button
                        type="button"
                        onClick={() =>
                          project.tieneGaleria === "kontrolx"
                            ? setGaleriaKontrolx(true)
                            : setGaleriaAbierta(true)
                        }
                        className="text-sm font-medium text-teal hover:text-teal-dim transition-colors"
                      >
                        {t("projects.viewGallery")}
                      </button>
                    )}
                    {project.key === "kontrolx" && (
                      <a
                        href="https://play.google.com/store/apps/details?id=com.angeljrcurtido.kontrolx&hl=es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal-dim transition-colors"
                      >
                        <SiGoogleplay />
                        {t("projects.items.kontrolx.playStore")}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="py-24 px-6 border-t border-ink-line bg-ink-soft/40">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm text-teal mb-2">{t("technologies.eyebrow")}</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight mb-12">
            {t("technologies.title")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {allTechnologies.map((tech) => (
              <div
                key={tech}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-ink-line bg-ink hover:border-teal/50 hover:bg-teal/5 transition-colors"
              >
                <span className="text-lg text-paper-dim group-hover:text-teal transition-colors">
                  {techIcons[tech] || <PiDatabaseFill />}
                </span>
                <span className="font-mono text-sm text-paper-dim group-hover:text-paper transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 px-6 border-t border-ink-line">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm text-teal mb-2">{t("education.eyebrow")}</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight mb-12">
            {t("education.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {credenciales.map((cred) => (
              <div
                key={cred.key}
                className="rounded-2xl border border-ink-line bg-ink-soft p-6 flex flex-col hover:border-teal/40 transition-colors"
              >
                <span className="text-2xl text-teal mb-4">{cred.icon}</span>
                <h3 className="font-display font-semibold text-lg mb-1 text-balance">
                  {t(`education.items.${cred.key}.title`)}
                </h3>
                <p className="text-paper-dim text-sm mb-1">
                  {t(`education.items.${cred.key}.institution`)}
                </p>
                <p className="font-mono text-xs text-paper-dim/70 mb-5">
                  {t(`education.items.${cred.key}.meta`)}
                </p>
                {cred.link && (
                  <a
                    href={cred.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal-dim transition-colors mt-auto"
                  >
                    {t("education.viewCredential")}
                    <PiArrowUpRightBold />
                  </a>
                )}
                {cred.imagen && (
                  <button
                    type="button"
                    onClick={() => setTituloAbierto(true)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal-dim transition-colors mt-auto"
                  >
                    {t("education.viewCredential")}
                    <PiArrowUpRightBold />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden py-28 px-6 border-t border-ink-line">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-teal/10 blur-3xl" />
        <div className="max-w-2xl mx-auto text-center relative">
          <p className="font-mono text-sm text-teal mb-3">{t("contact.eyebrow")}</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl tracking-tight text-balance mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-paper-dim text-lg mb-10">{t("contact.description")}</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <a
              href="https://wa.me/595983312082"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-ink-line bg-ink-soft hover:border-teal/50 transition-colors text-left"
            >
              <SiWhatsapp className="text-2xl text-teal shrink-0" />
              <span>
                <span className="block font-mono text-xs text-paper-dim uppercase tracking-wide">
                  {t("contact.phoneLabel")}
                </span>
                <span className="block font-display font-semibold">+595 983 312 082</span>
              </span>
            </a>
            <a
              href="mailto:angeljrcurtido@gmail.com"
              className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-ink-line bg-ink-soft hover:border-teal/50 transition-colors text-left"
            >
              <PiEnvelopeSimpleBold className="text-2xl text-teal shrink-0" />
              <span>
                <span className="block font-mono text-xs text-paper-dim uppercase tracking-wide">
                  {t("contact.emailLabel")}
                </span>
                <span className="block font-display font-semibold text-sm sm:text-base break-all">
                  angeljrcurtido@gmail.com
                </span>
              </span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/angeljrcurtido2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-ink-line rounded-full hover:border-teal hover:text-teal transition-colors"
              aria-label="GitHub"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/angel-curtido-quiñonez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-ink-line rounded-full hover:border-teal hover:text-teal transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin />
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-ink-line font-mono text-xs text-paper-dim">
        {t("footer.copy", { year: new Date().getFullYear() })}
      </footer>

      {/* Vista previa del CV */}
      {cvAbierto && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setCvAbierto(false)}
        >
          <div
            className="bg-ink-soft border border-ink-line rounded-2xl max-w-3xl w-full h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-ink-line shrink-0">
              <h4 className="font-display font-semibold text-xl">{t("hero.previewCv")}</h4>
              <div className="flex items-center gap-4">
                <a
                  href="/CV_Angel_Curtido.pdf"
                  download="CV_Angel_Curtido.pdf"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal-dim transition-colors"
                >
                  <PiDownloadSimpleBold />
                  {t("hero.downloadCv")}
                </a>
                <button
                  type="button"
                  onClick={() => setCvAbierto(false)}
                  className="text-paper-dim hover:text-teal text-2xl leading-none transition-colors"
                  aria-label={t("projects.closeGallery")}
                >
                  ×
                </button>
              </div>
            </div>
            <iframe
              src="/CV_Angel_Curtido.pdf"
              title={t("hero.previewCv")}
              className="w-full flex-1"
            />
          </div>
        </div>
      )}

      {/* Título universitario */}
      {tituloAbierto && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setTituloAbierto(false)}
        >
          <div
            className="bg-ink-soft border border-ink-line rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h4 className="font-display font-semibold text-xl">
                {t("education.items.universidad.title")}
              </h4>
              <button
                type="button"
                onClick={() => setTituloAbierto(false)}
                className="text-paper-dim hover:text-teal text-2xl leading-none transition-colors"
                aria-label={t("projects.closeGallery")}
              >
                ×
              </button>
            </div>
            <img
              src="/credenciales/titulo-universidad.jpg"
              alt={t("education.items.universidad.title")}
              className="w-full rounded-lg border border-ink-line"
            />
          </div>
        </div>
      )}

      {/* Galería CrediSoft/ElectroMar */}
      {galeriaAbierta && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setGaleriaAbierta(false)}
        >
          <div
            className="bg-ink-soft border border-ink-line rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h4 className="font-display font-semibold text-xl">
                {t("projects.items.credisoft.title")}
              </h4>
              <button
                type="button"
                onClick={() => setGaleriaAbierta(false)}
                className="text-paper-dim hover:text-teal text-2xl leading-none transition-colors"
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
                    className="w-full rounded-lg mb-2 border border-ink-line"
                  />
                  <p className="font-mono text-xs text-paper-dim text-center">
                    {t(`projects.items.credisoft.gallery.${img.labelKey}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Galería KontrolX */}
      {galeriaKontrolx && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setGaleriaKontrolx(false)}
        >
          <div
            className="bg-ink-soft border border-ink-line rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h4 className="font-display font-semibold text-xl">
                {t("projects.items.kontrolx.title")}
              </h4>
              <button
                type="button"
                onClick={() => setGaleriaKontrolx(false)}
                className="text-paper-dim hover:text-teal text-2xl leading-none transition-colors"
                aria-label={t("projects.closeGallery")}
              >
                ×
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {kontrolxGaleria.map((img) => (
                <div key={img.labelKey}>
                  <img
                    src={img.src}
                    alt={t(`projects.items.kontrolx.gallery.${img.labelKey}`)}
                    className="w-full rounded-lg mb-2 border border-ink-line"
                  />
                  <p className="font-mono text-xs text-paper-dim text-center">
                    {t(`projects.items.kontrolx.gallery.${img.labelKey}`)}
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
