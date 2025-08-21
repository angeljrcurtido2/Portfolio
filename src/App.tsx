import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagenEcommerce from './assets/IMAGEN_PARA_ECOMMERCE.png';
import imagenPortfolio from './assets/PROYECTO_PORTAFOLIO.png';
import imagenSys from './assets/IMAGEN_SYS.png';
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
} from 'react-icons/si';
import { PiFileJsFill } from "react-icons/pi";
import type { JSX } from 'react';

export default function App() {
  const Project = [
    {
      title: "Ecommerce",
      imagen: imagenEcommerce,
      description:
        "Un sistema de comercio electrónico con panel de administración desarrollado con Next.js y Node.js. Es un proyecto personal de Ángel Curtido, graduado en Análisis de Sistemas y desarrollador full-stack. La aplicación está desarrollada desde cero con un diseño personalizado, es totalmente responsiva y está basada en MySQL. Este proyecto forma parte de mi portafolio profesional, donde demuestro mi capacidad para diseñar, implementar e implementar una tienda online moderna que gestiona todo el proceso de compra, además de un completo panel de administración para la gestión de productos, pedidos y usuarios",
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
      title: "InventorySys",
      imagen: imagenSys,
      description:
        "Una aplicación de escritorio para la gestión de inventarios, desarrollada con Electron, Vite, React y TypeScript para el frontend, y Node.js con Express y MySQL para el backend. Implementa autenticación segura con JWT y cookies, ofrece una interfaz moderna con visualización de datos mediante gráficos y mapas, generación de reportes en PDF y notificaciones por correo electrónico. Es una solución multiplataforma compatible con Windows, macOS y Linux, diseñada para optimizar la gestión de inventarios con backups automatizados y tareas programadas.",
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
      title: "Personal Portfolio",
      imagen: imagenPortfolio,
      description:
        "Una aplicación web que muestra mi portafolio profesional, destacando mis proyectos y habilidades como desarrollador full-stack. Desarrollada con Vite, React y TypeScript, incluye un carrusel interactivo de tecnologías creado con React Slick y un diseño moderno con Tailwind CSS. La aplicación es completamente responsiva y optimizada para ofrecer una experiencia fluida en dispositivos móviles y de escritorio. Incluye secciones para proyectos, tecnologías y contacto, con un enfoque en la usabilidad y el diseño visual.",
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
  ];

  const allTechnologies = [...new Set(Project.flatMap((project) => project.tecnologias))];

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
  };

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
        settings: {
          slidesToShow: 4,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-400">MiPortafolio</h1>
        <nav className="space-x-6">
          <a href="#projects" className="hover:text-blue-400 transition">
            Proyectos
          </a>
          <a href="#technologies" className="hover:text-blue-400 transition">
            Tecnologías
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contacto
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-4">
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 text-blue-400">
          ¡Hola! Soy Angel Curtido
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Soy Licenciado en Análisis de Sistemas y Desarrollador Frontend con
          experiencia en React, Next.js, TypeScript y TailwindCSS. También
          desarrollo apps móviles para Android con React Native y Expo, y cuento
          con conocimientos en backend con Node.js (Express) y PHP/Laravel. Mi
          enfoque es crear interfaces modernas y optimizadas, ofreciendo
          experiencias rápidas y funcionales tanto en web como en móvil.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition"
        >
          Ver mis proyectos
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-400">
          Mis Proyectos
        </h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {Project.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-xl p-6 shadow hover:scale-105 transition"
            >
              <img
                src={project.imagen}
                alt={`Captura de pantalla de ${project.title}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-300 text-sm mb-4">
                {project.description.slice(0, 150)}...
              </p>
              <div className="mb-4">
                <h5 className="text-sm font-medium text-blue-400">Tecnologías:</h5>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.tecnologias.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="text-xs bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                className="text-blue-400 hover:underline text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver detalles →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-6 bg-gray-800">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-400">
          Tecnologías
        </h3>
        <div className="max-w-7xl mx-auto">
          <Slider {...settings}>
            {allTechnologies.map((tech, index) => (
              <div key={index} className="px-2">
                <div className="flex flex-col items-center bg-gray-700 rounded-full p-4 shadow hover:bg-gray-600 transition w-24 h-24 justify-center">
                  {techIcons[tech] || <span className="text-4xl">?</span>}
                  <span className="text-xs text-gray-300 mt-1 text-center">{tech}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-24 px-4">
        <h3 className="text-3xl font-bold text-blue-400 mb-6">
          ¿Quieres trabajar conmigo?
        </h3>
        <p className="text-gray-300 mb-8">
          Contáctame para colaborar en proyectos web modernos y optimizados.
        </p>
        <a
          href="mailto:angeljrcurtido@gmail.com"
          className="px-6 py-3 bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Contáctame
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700 text-gray-400 text-sm">
        © {new Date().getFullYear()} Angel | Todos los derechos reservados
      </footer>
    </div>
  );
}