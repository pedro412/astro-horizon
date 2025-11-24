import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, l as renderSlot, r as renderTemplate, k as renderComponent, n as renderHead, u as unescapeHTML, o as renderScript } from './astro/server_CrhB6vN6.mjs';
/* empty css                         */
import 'clsx';

const $$Astro$7 = createAstro("https://www.bluehorizonmexico.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    href,
    type = "button",
    class: className = "",
    target,
    rel
  } = Astro2.props;
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60 backdrop-blur-xl";
  const variantStyles = {
    primary: "bg-[#FF7B00] !text-white shadow-[0_25px_70px_-25px_rgba(255,123,0,0.65)] hover:bg-[#FF9833] focus-visible:outline-[#FF7B00]/60 active:scale-[0.99]",
    secondary: "bg-white/10 !text-white border border-white/20 shadow-[0_20px_50px_-30px_rgba(15,118,230,0.6)] hover:bg-white/20 focus-visible:outline-white/60 active:scale-[0.99]",
    ghost: "bg-transparent !text-white border border-white/25 hover:border-white/50 hover:bg-white/10 focus-visible:outline-white/60 active:scale-[0.99]"
  };
  const sizeStyles = {
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base"
  };
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`, "class")}${addAttribute(href, "href")}${addAttribute(target, "target")}${addAttribute(rel, "rel")}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(type, "type")}${addAttribute(`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`, "class")}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/Users/pedro412/astro-horizon/agreeable-asteroid/src/components/ui/Button.astro", void 0);

const $$Astro$6 = createAstro("https://www.bluehorizonmexico.com");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Container;
  const { as = "div", class: className = "", id } = Astro2.props;
  const Tag = as;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "id": id, "class": `mx-auto w-full max-w-6xl px-6 sm:px-10 ${className}` }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/pedro412/astro-horizon/agreeable-asteroid/src/components/ui/Container.astro", void 0);

const buzo1 = new Proxy({"src":"/_astro/buzo1.hEeTRzKB.jpeg","width":736,"height":981,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pedro412/astro-horizon/agreeable-asteroid/src/assets/buzo1.jpeg";
							}
							
							return target[name];
						}
					});

const buzo2 = new Proxy({"src":"/_astro/buzo2.BIUJZts_.jpeg","width":720,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pedro412/astro-horizon/agreeable-asteroid/src/assets/buzo2.jpeg";
							}
							
							return target[name];
						}
					});

const buzo3 = new Proxy({"src":"/_astro/buzo3.CXIp-YuW.jpeg","width":736,"height":928,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pedro412/astro-horizon/agreeable-asteroid/src/assets/buzo3.jpeg";
							}
							
							return target[name];
						}
					});

const geo1 = new Proxy({"src":"/_astro/geo1.Cjd_cU-g.jpg","width":1280,"height":719,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pedro412/astro-horizon/agreeable-asteroid/src/assets/geo1.jpg";
							}
							
							return target[name];
						}
					});

const geo2 = new Proxy({"src":"/_astro/geo2.BFGKjrEJ.jpg","width":1280,"height":960,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pedro412/astro-horizon/agreeable-asteroid/src/assets/geo2.jpg";
							}
							
							return target[name];
						}
					});

const geo3 = new Proxy({"src":"/_astro/geo3.CzGesDbU.jpg","width":956,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pedro412/astro-horizon/agreeable-asteroid/src/assets/geo3.jpg";
							}
							
							return target[name];
						}
					});

const service1 = new Proxy({"src":"/_astro/service1.BbPjqDoz.jpeg","width":736,"height":1129,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pedro412/astro-horizon/agreeable-asteroid/src/assets/service1.jpeg";
							}
							
							return target[name];
						}
					});

const service2 = new Proxy({"src":"/_astro/service2.D5ToKY29.jpeg","width":1080,"height":809,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pedro412/astro-horizon/agreeable-asteroid/src/assets/service2.jpeg";
							}
							
							return target[name];
						}
					});

const service3 = new Proxy({"src":"/_astro/service3.DVnSYIwj.jpeg","width":1080,"height":809,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pedro412/astro-horizon/agreeable-asteroid/src/assets/service3.jpeg";
							}
							
							return target[name];
						}
					});

const locales = ["es", "en"];
const defaultLocale = "es";
const messages = {
  en: {
    meta: {
      title: "Blue Horizon – Maritime & Onshore Solutions",
      description: "Marine construction, port maintenance, industrial diving, dredging, and coastal recovery services for oil & gas and port operators across Mexico.",
      keywords: [
        "marine services Mexico",
        "industrial diving Mexico",
        "port maintenance specialists",
        "coastal recovery and dredging",
        "geotube installation Mexico",
        "Blue Horizon maritime solutions"
      ],
      siteName: "Blue Horizon",
      locale: "en_US",
      ogImage: {
        src: geo2.src,
        alt: "Industrial divers coordinating maintenance near a pier"
      }
    },
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Services", href: "/services" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Contact", href: "#contact" }
    ],
    hero: {
      tag: "Marine & onshore experts in Mexico",
      title: "Blue Horizon – Maritime & Onshore Solutions",
      subtitle: "Specialists in marine construction, port maintenance, industrial diving, dredging, and coastal recovery that support oil & gas, port, and civil infrastructure projects nationwide.",
      primaryCta: "Request a quote",
      secondaryCta: "Contact us",
      backgroundVideo: "https://cdn.coverr.co/videos/coverr-sea-port-during-sunset-1656675360835?download=1",
      backgroundFallback: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1600&q=80",
      highlightStats: [
        { label: "Years delivering marine solutions", value: "20+" },
        { label: "Specialized service lines", value: "15+" },
        { label: "Coverage across Mexico", value: "Gulf & Caribbean" }
      ]
    },
    value: {
      eyebrow: "ABOUT BLUE HORIZON",
      heading: "Leaders in marine maintenance, onshore services, and industrial diving in Mexico",
      lead: "For more than 20 years we have executed marine and onshore projects that protect people, the environment, and critical infrastructure with world-class safety protocols.",
      cards: [
        {
          title: "Oil & gas operations",
          description: "Support for offshore platforms, subsea assets, and coastal facilities that demand certified diving teams and resilient logistics.",
          image: {
            src: service1.src,
            alt: "Industrial divers preparing equipment on a vessel deck"
          }
        },
        {
          title: "Port industry",
          description: "Maintenance for terminals, docks, and breakwaters, including inspections, dredging, and fabrication of fender systems.",
          image: {
            src: service2.src,
            alt: "Aerial view of a commercial port at sunset"
          }
        },
        {
          title: "Navigation & shipyards",
          description: "Hull cleaning, class inspections, and sonar assessments that keep fleets, shipyards, and naval infrastructure operational.",
          image: {
            src: buzo2.src,
            alt: "Engineers surveying coastal infrastructure with digital tablet"
          }
        },
        {
          title: "Civil works",
          description: "Structural reviews, coastal recovery, and geotextile installation that reinforce public and private projects.",
          image: {
            src: geo1.src,
            alt: "Geotube installation along a Mexican shoreline"
          }
        },
        {
          title: "Our philosophy",
          description: "“We protect people, the environment, and the facilities under our care. We operate with world-class safety protocols.”",
          image: {
            src: geo2.src,
            alt: "Industrial divers coordinating maintenance near a pier"
          }
        }
      ]
    },
    services: {
      eyebrow: "SERVICES",
      heading: "Marine, onshore, and engineering solutions",
      intro: "Comprehensive maritime services, industrial diving, terrestrial maintenance, and specialized engineering tailored to complex coastal operations.",
      showMoreLabel: "Show more",
      categories: [
        {
          id: "marine-services",
          title: "Marine Services & Industrial Diving",
          description: "Certified divers deliver underwater inspections, marine maintenance, dredging, and coastal recovery for mission-critical assets.",
          image: {
            src: buzo1.src,
            alt: "Industrial divers preparing equipment alongside a marine platform"
          },
          items: [
            "Class inspection",
            "Dock and vessel inspection & cleaning",
            "Beach recovery and geotube installation",
            "Underwater tracking, location, and salvage",
            "Metal thickness measurements",
            "Non-destructive testing (LP, PM, ultrasound)",
            "Hyperbaric welding",
            "Sacrificial anode installation and maintenance",
            "Dredging and bathymetry",
            "Marine structure inspection with side scan sonar",
            "Submersible pump recovery",
            "Concrete mattress placement (Colchacreto)",
            "Pier fender fabrication and installation"
          ]
        },
        {
          id: "onshore-services",
          title: "Onshore Services",
          description: "Surface maintenance optimized for keywords such as terrestrial maintenance, steelwork, sandblasting, and hot tapping.",
          image: {
            src: service3.src,
            alt: "Onshore maintenance team guiding heavy machinery near the coastline"
          },
          items: [
            "Hot tapping",
            "Installation of non-metallic sleeves",
            "Rope access (industrial rappelling)",
            "Welding and steel fabrication",
            "Fuel tank cleaning",
            "Sandblasting and industrial coating",
            "Process line interconnection and flange work",
            "Maintenance for elevated potable water tanks"
          ]
        },
        {
          id: "engineering-services",
          title: "Specialized Engineering",
          description: "Engineering for maritime and structural projects, including preventive and corrective strategies backed by technical field teams.",
          image: {
            src: buzo3.src,
            alt: "Engineers inspecting marine infrastructure plans on site"
          },
          items: [
            "Analysis of maritime and onshore structures",
            "Technical evaluation for maintenance projects",
            "Engineering for preventive and corrective solutions",
            "Technical field supervision and support"
          ]
        }
      ]
    },
    successStories: {
      eyebrow: "SUCCESS STORIES",
      heading: "Showcasing marine and onshore maintenance projects",
      intro: "Documented experience in Mexico’s coasts with dredging, diving, structural rehabilitation, and coastal recovery.",
      featuredProjects: {
        heading: "Highlighted marine and onshore maintenance projects",
        items: [
          "Construction, rehabilitation, and maintenance of docks",
          "Geotube placement and beach recovery",
          "Professional underwater inspection",
          "Guiding drilling barriers",
          "Foundation of marine structures",
          "Salvage of sunken vessels",
          "Channel dredging and coastal cleaning",
          "Hyperbaric welding and cutting",
          "Laying of submarine lines and cables",
          "Industrial coating application on elevated tanks"
        ]
      },
      timeline: {
        heading: "Documented experience by year",
        items: [
          { year: "2001", description: "Strategic alliances in maritime services" },
          { year: "2005", description: "Dock maintenance programs" },
          { year: "2007", description: "Bridge maintenance projects" },
          { year: "2008", description: "Pipeline laying operations" },
          { year: "2018", description: "Breakwater construction" },
          { year: "2020", description: "Specialized coastal projects" }
        ]
      },
      recentProjects: {
        heading: "Recent projects with high SEO value",
        items: [
          { year: "2021", description: "Geotube placement and pile removal" },
          { year: "2022", description: "Subsea leak recovery and sump maintenance" },
          { year: "2023", description: "Painting of elevated tanks and submarine cable laying" },
          { year: "2024", description: "Beach recovery and channel dredging (Hotel Mayakoba)" },
          {
            year: "2025",
            description: "Beach recovery in Villa Isla Blanca, Manigua, and Cielo Lindo; maintenance of pumping systems"
          }
        ]
      },
      gallery: [
        {
          src: geo1.src,
          alt: "Geotube installation along a Mexican shoreline"
        },
        {
          src: geo2.src,
          alt: "Industrial divers coordinating maintenance near a pier"
        },
        {
          src: geo3.src,
          alt: "Excavator working on coastal dredging operations at dusk"
        }
      ]
    },
    contact: {
      eyebrow: "CONTACT",
      heading: "Request a quote for marine or onshore services",
      subheading: "Blue Horizon provides specialized industrial diving, marine maintenance, terrestrial services, engineering, coastal recovery, and dredging. Complete the form and our team will send a tailored proposal.",
      form: {
        nameLabel: "Full name",
        emailLabel: "Email",
        companyLabel: "Company",
        messageLabel: "Project requirements",
        submitCta: "Request a quote",
        successMessage: "Message sent. We will contact you shortly.",
        errorMessage: "Something went wrong. Please try again or email gerencia@bluehorizonmexico.com."
      },
      quickAction: {
        label: "Need immediate assistance?",
        description: "Contact our specialists on WhatsApp for rapid coordination.",
        whatsappCta: "Message WhatsApp"
      }
    },
    footer: {
      tagline: "Blue Horizon — Marine and onshore solutions for Mexico’s strategic infrastructure.",
      officesHeading: "Port offices",
      offices: [
        {
          city: "Ciudad del Carmen",
          address: "C. 50 3, Aviación, 24170 Cdad. del Carmen, Camp."
        }
      ],
      contactHeading: "Contact",
      contact: {
        phone: "938 133 0463",
        email: "gerencia@bluehorizonmexico.com"
      },
      socialHeading: "Follow us",
      socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/company/bluehorizon-mx/" },
        { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583442551000" },
        { label: "YouTube", href: "https://www.youtube.com/@bluehorizonmx" }
      ],
      legal: "© 2025 Blue Horizon. All rights reserved.",
      seoLinks: [
        { label: "Marine services", href: "/services#marine-services" },
        { label: "Industrial diving", href: "/services#marine-services" },
        { label: "Onshore maintenance", href: "/services#onshore-services" },
        { label: "Engineering", href: "/services#engineering-services" },
        { label: "Success stories", href: "/success-stories" },
        { label: "Contact", href: "#contact" },
        { label: "Privacy notice", href: "/aviso-de-privacidad" }
      ]
    }
  },
  es: {
    meta: {
      title: "Blue Horizon – Soluciones Marítimas y Terrestres",
      description: "Especialistas en construcción marítima, mantenimiento de muelles, buceo industrial, dragados y recuperación de playas para la industria petrolera y portuaria en México.",
      keywords: [
        "servicios marítimos México",
        "buceo industrial México",
        "mantenimiento de muelles",
        "dragado y batimetría",
        "colocación de geotubos México",
        "Blue Horizon servicios marinos"
      ],
      siteName: "Blue Horizon",
      locale: "es_MX",
      ogImage: {
        src: geo2.src,
        alt: "Buzos industriales coordinando mantenimiento cerca de un muelle"
      }
    },
    nav: [
      { label: "Inicio", href: "/" },
      { label: "Nosotros", href: "/#about" },
      { label: "Servicios", href: "/services" },
      { label: "Casos de éxito", href: "/success-stories" },
      { label: "Contacto", href: "#contact" }
    ],
    hero: {
      tag: "Soluciones marítimas y terrestres",
      title: "Blue Horizon – Soluciones Marítimas y Terrestres",
      subtitle: "Más de 20 años brindando servicios marítimos y terrestres, incluyendo mantenimiento en muelles, inspecciones submarinas, colocación de geotubos, dragados y apoyo a la industria petrolera y portuaria en México.",
      primaryCta: "Solicitar cotización",
      secondaryCta: "Contáctanos",
      backgroundVideo: "https://cdn.coverr.co/videos/coverr-sea-port-during-sunset-1656675360835?download=1",
      backgroundFallback: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1600&q=80",
      highlightStats: [
        { label: "Años de experiencia comprobada", value: "20+" },
        { label: "Servicios marinos y terrestres especializados", value: "15+" },
        { label: "Cobertura en México", value: "Golfo y Caribe" }
      ]
    },
    value: {
      eyebrow: "NOSOTROS",
      heading: "Líderes en mantenimiento marino, terrestre y buceo industrial en México",
      lead: "En Blue Horizon contamos con más de 20 años de experiencia en proyectos marinos y terrestres. Nuestro equipo especializado desarrolla inspecciones submarinas, recuperación de playas, dragados, mantenimiento a muelles y soldadura hiperbárica con estándares de seguridad de clase mundial.",
      cards: [
        {
          title: "Petróleo y gas",
          description: "Soluciones confiables para plataformas, ductos y terminales terrestres que requieren buceo industrial y apoyo especializado.",
          image: {
            src: service1.src,
            alt: "Equipo de buzos industriales preparando equipo en cubierta"
          }
        },
        {
          title: "Industria portuaria",
          description: "Mantenimiento integral de muelles, defensas y estructuras marítimas con inspecciones submarinas y dragados programados.",
          image: {
            src: service2.src,
            alt: "Vista aérea de un puerto comercial al atardecer"
          }
        },
        {
          title: "Navegación y astilleros",
          description: "Servicios para embarcaciones y astilleros: limpieza de cascos, medición de espesores, pruebas no destructivas y rescate submarino.",
          image: {
            src: buzo2.src,
            alt: "Ingenieros revisando infraestructura costera con tablet digital"
          }
        },
        {
          title: "Obra civil",
          description: "Ingeniería para infraestructura costera, colocación de geotubos, recuperación de playas y cimentación de estructuras marinas.",
          image: {
            src: geo1.src,
            alt: "Colocación de geotubos en una playa para recuperación costera"
          }
        },
        {
          title: "Nuestra filosofía",
          description: "“Protegemos al factor humano, al medio ambiente y a las instalaciones. Operamos con protocolos de seguridad de clase mundial.”",
          image: {
            src: geo2.src,
            alt: "Buzos industriales inspeccionando el casco de un barco"
          }
        }
      ]
    },
    services: {
      eyebrow: "SERVICIOS",
      heading: "Servicios marítimos, terrestres e ingeniería especializada",
      intro: "Optimiza tus búsquedas con servicios marítimos, buceo industrial, mantenimiento terrestre, pailería, sand blast, hot tapping e ingeniería para estructuras.",
      showMoreLabel: "Ver más",
      categories: [
        {
          id: "marine-services",
          title: "Servicios Marinos y Buceo Industrial",
          description: "Expertos en servicios marítimos, buceo industrial e inspecciones submarinas con equipos certificados y listos para operar en todo México.",
          image: {
            src: buzo1.src,
            alt: "Buzos industriales preparando equipo en plataforma marina"
          },
          items: [
            "Inspección de clase",
            "Inspección y limpieza de muelles y embarcaciones",
            "Recuperación de playa e instalación de geotubos",
            "Rastreo, localización y rescate submarino",
            "Medición de espesores metálicos",
            "Pruebas no destructivas (LP, PM, Ultrasonido)",
            "Soldadura hiperbárica",
            "Instalación y mantenimiento de ánodos de sacrificio",
            "Dragados y batimetrías",
            "Inspección de estructuras marinas con sonar de barrido lateral",
            "Recuperación de bombas submarinas",
            "Colocación de matrices (Colchacreto)",
            "Fabricación e instalación de defensas de muelle"
          ]
        },
        {
          id: "onshore-services",
          title: "Servicios Terrestres",
          description: "Mantenimiento terrestre optimizado para pailería, sand blast, hot tapping y acceso por cuerdas en instalaciones industriales.",
          image: {
            src: service3.src,
            alt: "Cuadrilla de mantenimiento terrestre operando maquinaria cerca de la costa"
          },
          items: [
            "Hot Tapping",
            "Instalación de envolventes no metálicas",
            "Rope Access (rapel industrial)",
            "Soldadura y pailería",
            "Lavado de tanques de combustible",
            "Sand blast y pintura industrial",
            "Interconexión y embridaje de líneas de proceso",
            "Mantenimiento de tanques elevados de agua potable"
          ]
        },
        {
          id: "engineering-services",
          title: "Ingeniería Especializada",
          description: "Ingeniería marítima y estructural con análisis de riesgo, soluciones preventivas y acompañamiento técnico en campo.",
          image: {
            src: buzo3.src,
            alt: "Equipo de ingeniería revisando planos de infraestructura marina en sitio"
          },
          items: [
            "Análisis de estructuras marítimas y terrestres",
            "Evaluación técnica para proyectos de mantenimiento",
            "Ingeniería para soluciones preventivas y correctivas",
            "Acompañamiento técnico en campo"
          ]
        }
      ]
    },
    successStories: {
      eyebrow: "CASOS DE ÉXITO",
      heading: "Proyectos destacados en mantenimiento marino y terrestre",
      intro: "Experiencia documentada en construcción, mantenimiento marino, buceo industrial y recuperación de playas a lo largo de México.",
      featuredProjects: {
        heading: "Hemos liderado y ejecutado proyectos clave como:",
        items: [
          "Construcción, rehabilitación y mantenimiento de muelles",
          "Colocación de geotubos y recuperación de playas",
          "Inspección submarina profesional",
          "Guiado de barreras de perforación",
          "Cimentación de estructuras marinas",
          "Recuperación de barcos hundidos",
          "Dragado de canales y limpieza de áreas costeras",
          "Soldadura y corte hiperbárico",
          "Tendido de líneas y cables submarinos",
          "Aplicación de pintura industrial en tanques elevados"
        ]
      },
      timeline: {
        heading: "Timeline — Experiencia documentada por año",
        items: [
          { year: "2001", description: "Alianzas estratégicas en servicios marítimos" },
          { year: "2005", description: "Mantenimiento a muelles" },
          { year: "2007", description: "Mantenimiento a puentes" },
          { year: "2008", description: "Tendido de líneas" },
          { year: "2018", description: "Construcción de rompeolas" },
          { year: "2020", description: "Proyectos costeros especializados" }
        ]
      },
      recentProjects: {
        heading: "Proyectos recientes con alto valor SEO",
        items: [
          { year: "2021", description: "Colocación de geotubos y retiro de pilotes" },
          { year: "2022", description: "Recuperación de fugas submarinas y mantenimiento de cárcamos" },
          { year: "2023", description: "Pintura en tanques elevados y tendido de cables eléctricos submarinos" },
          { year: "2024", description: "Recuperación de playas y dragado de canales (Hotel Mayakoba)" },
          {
            year: "2025",
            description: "Recuperación de playa en Villa Isla Blanca, Manigua y Cielo Lindo; mantenimiento de sistemas de bombeo"
          }
        ]
      },
      gallery: [
        {
          src: geo1.src,
          alt: "Colocación de geotubos en una playa para recuperación costera"
        },
        {
          src: geo2.src,
          alt: "Buzos industriales inspeccionando el casco de un barco"
        },
        {
          src: geo3.src,
          alt: "Excavadora realizando labores de dragado costero al atardecer"
        }
      ]
    },
    contact: {
      eyebrow: "CONTACTO",
      heading: "Solicita una cotización para servicios marítimos o terrestres",
      subheading: "En Blue Horizon ofrecemos buceo industrial, mantenimiento marino, mantenimiento terrestre, ingeniería para instalaciones marítimas y terrestres, recuperación de playas, dragados y batimetrías. Completa el formulario y te enviaremos una propuesta personalizada.",
      form: {
        nameLabel: "Nombre completo",
        emailLabel: "Correo electrónico",
        companyLabel: "Empresa",
        messageLabel: "Requerimientos del proyecto",
        submitCta: "Solicitar cotización",
        successMessage: "Mensaje enviado. Te contactaremos en breve.",
        errorMessage: "Ocurrió un error. Inténtalo de nuevo o escribe a gerencia@bluehorizonmexico.com."
      },
      quickAction: {
        label: "¿Necesitas respuesta inmediata?",
        description: "Contacta a nuestros especialistas por WhatsApp para coordinar tu proyecto.",
        whatsappCta: "Enviar WhatsApp"
      }
    },
    footer: {
      tagline: "Blue Horizon — Servicios marítimos y terrestres que impulsan la infraestructura estratégica de México.",
      officesHeading: "Oficinas portuarias",
      offices: [
        {
          city: "Ciudad del Carmen",
          address: "C. 50 3, Aviación, 24170 Cdad. del Carmen, Camp."
        }
      ],
      contactHeading: "Contacto",
      contact: {
        phone: "938 133 0463",
        email: "gerencia@bluehorizonmexico.com"
      },
      socialHeading: "Redes sociales",
      socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/company/bluehorizon-mx/" },
        { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583442551000" },
        { label: "YouTube", href: "https://www.youtube.com/@bluehorizonmx" }
      ],
      legal: "© 2025 Blue Horizon. Todos los derechos reservados.",
      seoLinks: [
        { label: "Servicios marítimos", href: "/services#marine-services" },
        { label: "Buceo industrial", href: "/services#marine-services" },
        { label: "Mantenimiento terrestre", href: "/services#onshore-services" },
        { label: "Ingeniería", href: "/services#engineering-services" },
        { label: "Casos de éxito", href: "/success-stories" },
        { label: "Contacto", href: "#contact" },
        { label: "Aviso de privacidad", href: "/aviso-de-privacidad" }
      ]
    }
  }
};
function getMessages(locale) {
  return messages[locale];
}

const logo = new Proxy({"src":"/_astro/bluehorizon-logo.ckE30nX8.png","width":1060,"height":1060,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pedro412/astro-horizon/agreeable-asteroid/src/assets/bluehorizon-logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro("https://www.bluehorizonmexico.com");
const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SiteHeader;
  const { nav, locale, languageSwitcher, contactCta } = Astro2.props;
  const homeHref = locale === defaultLocale ? "/" : `/${locale}`;
  const resolveHref = (href) => {
    if (href.startsWith("#") || href.startsWith("http")) {
      return href;
    }
    if (href.startsWith("/")) {
      if (locale === defaultLocale) {
        return href;
      }
      if (href === "/") {
        return `/${locale}`;
      }
      return `/${locale}${href}`;
    }
    return href;
  };
  const resolvedNav = nav.map((item) => ({
    ...item,
    href: resolveHref(item.href)
  }));
  return renderTemplate`${maybeRenderHead()}<header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(5,9,20,0.72)] shadow-[0_20px_60px_-40px_rgba(10,132,255,0.6)] backdrop-blur-2xl"> ${renderComponent($$result, "Container", $$Container, { "class": "flex h-20 items-center gap-6" }, { "default": ($$result2) => renderTemplate` <a${addAttribute(homeHref, "href")} class="flex items-center gap-3 text-white transition hover:opacity-90"> <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/5"> <img${addAttribute(logo.src, "src")} alt="Blue Horizon logo" class="h-full w-full object-contain" loading="lazy" decoding="async"> </div> <div class="leading-tight"> <p class="font-display text-lg font-semibold text-white">
Blue Horizon
</p> </div> </a> <nav class="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-white md:flex"> ${resolvedNav.map((item) => renderTemplate`<a class="rounded-full px-3 py-2 text-white transition-colors hover:bg-white/10 hover:text-white"${addAttribute(item.href, "href")}> ${item.label} </a>`)} </nav> <div class="ml-auto hidden items-center gap-3 md:flex"> <div class="flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs font-medium text-white shadow-[0_15px_50px_-30px_rgba(10,132,255,0.55)] backdrop-blur-xl"> ${languageSwitcher.options.map((option) => renderTemplate`<a${addAttribute(`rounded-full px-2.5 py-1 transition ${option.value === languageSwitcher.current ? "bg-white/20 text-white shadow-inner shadow-white/20" : "text-white hover:bg-white/10 hover:text-white"}`, "class")}${addAttribute(option.href, "href")}> ${option.label} </a>`)} </div> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "size": "md", "href": "#contact" }, { "default": ($$result3) => renderTemplate`${contactCta}` })} </div> <details class="relative ml-auto flex md:hidden"> <summary class="flex list-none cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 p-2 text-xs font-semibold text-white shadow-[0_15px_50px_-30px_rgba(10,132,255,0.55)] backdrop-blur-xl"> <span class="sr-only">Menu</span> <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </summary> <div class="absolute right-0 top-14 z-50 min-w-[240px] space-y-4 rounded-[26px] border border-white/20 bg-[rgba(10,18,41,0.72)] p-5 text-white shadow-[0_35px_120px_-45px_rgba(10,132,255,0.65)] backdrop-blur-3xl [&_a:link]:text-white [&_a:visited]:text-white [&_a:hover]:text-white [&_a:focus]:text-white [&_a:focus-visible]:text-white"> <nav class="space-y-2 text-sm font-medium text-white"> ${resolvedNav.map((item) => renderTemplate`<a class="block rounded-xl px-3 py-2 text-white transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 visited:text-white"${addAttribute(item.href, "href")}> ${item.label} </a>`)} </nav> <div class="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 p-2 text-white"> ${languageSwitcher.options.map((option) => renderTemplate`<a${addAttribute(`flex-1 rounded-lg px-3 py-2 text-center text-xs font-medium ${option.value === languageSwitcher.current ? "bg-white/20 text-white shadow-inner shadow-white/20" : "text-white hover:bg-white/10 hover:text-white"}`, "class")}${addAttribute(option.href, "href")}> ${option.label} </a>`)} </div> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "size": "lg", "href": "#contact", "class": "w-full justify-center" }, { "default": ($$result3) => renderTemplate`${contactCta}` })} </div> </details> ` })} </header>`;
}, "/Users/pedro412/astro-horizon/agreeable-asteroid/src/components/layout/SiteHeader.astro", void 0);

const $$Astro$4 = createAstro("https://www.bluehorizonmexico.com");
const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SiteFooter;
  const { footer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-white/10 bg-[rgba(5,9,20,0.72)] text-white backdrop-blur-2xl"> ${renderComponent($$result, "Container", $$Container, { "class": "grid gap-12 py-16 md:grid-cols-4" }, { "default": ($$result2) => renderTemplate` <div class="md:col-span-2"> <div class="flex items-center gap-4"> <div class="flex h-11 w-11 items-center justify-center rounded-full bg-white/5"> <img${addAttribute(logo.src, "src")} alt="Blue Horizon logo" class="h-full w-full object-contain" loading="lazy" decoding="async"> </div> <div class="leading-tight"> <p class="font-display text-xl font-semibold text-white">Blue Horizon</p> <p class="text-xs uppercase tracking-[0.25em] text-white/80">Maritime &amp; Docks</p> </div> </div> <p class="mt-6 max-w-md text-sm text-white">${footer.tagline}</p> <nav aria-label="Enlaces internos" class="mt-6"> <ul class="flex flex-wrap gap-3 text-sm"> ${footer.seoLinks.map((link) => renderTemplate`<li> <a class="rounded-full border border-white/15 px-3 py-1.5 text-white transition hover:border-white/40 hover:text-white"${addAttribute(link.href, "href")}> ${link.label} </a> </li>`)} </ul> </nav> </div> <div> <h4 class="text-xs font-semibold uppercase tracking-[0.25em] text-white">${footer.officesHeading}</h4> <ul class="mt-4 space-y-3 text-sm text-white"> ${footer.offices.map((office) => renderTemplate`<li> <p class="font-semibold text-white">${office.city}</p> <p>${office.address}</p> </li>`)} </ul> </div> <div class="space-y-8"> <div> <h4 class="text-xs font-semibold uppercase tracking-[0.25em] text-white">${footer.contactHeading}</h4> <div class="mt-4 space-y-2 text-sm text-white"> <a class="block transition hover:text-white"${addAttribute(`tel:${footer.contact.phone.replace(/[^+\d]/g, "")}`, "href")}> ${footer.contact.phone} </a> <a class="block transition hover:text-white"${addAttribute(`mailto:${footer.contact.email}`, "href")}> ${footer.contact.email} </a> </div> </div> <div> <h4 class="text-xs font-semibold uppercase tracking-[0.25em] text-white">${footer.socialHeading}</h4> <ul class="mt-4 flex flex-wrap gap-3 text-sm"> ${footer.socials.map((social) => renderTemplate`<li> <a class="rounded-full border border-white/15 px-3 py-1.5 text-white transition hover:border-white/40 hover:text-white"${addAttribute(social.href, "href")} target="_blank" rel="noopener noreferrer"> ${social.label} </a> </li>`)} </ul> </div> </div> ` })} <div class="border-t border-white/10"> ${renderComponent($$result, "Container", $$Container, { "class": "py-6 text-center text-xs uppercase tracking-[0.2em] text-white" }, { "default": ($$result2) => renderTemplate`${footer.legal}` })} </div> </footer>`;
}, "/Users/pedro412/astro-horizon/agreeable-asteroid/src/components/layout/SiteFooter.astro", void 0);

function resolveLocale(param) {
  return locales.includes(param) ? param : defaultLocale;
}
function buildLocaleUrl(locale, url) {
  const hash = url.hash ?? "";
  const segments = url.pathname.split("/").filter(Boolean);
  if (segments[0] && locales.includes(segments[0])) {
    segments.shift();
  }
  const localizedPath = locale === defaultLocale ? `/${segments.join("/")}` : `/${locale}${segments.length ? `/${segments.join("/")}` : ""}`;
  const normalizedPath = localizedPath.replace(/\/{2,}/g, "/").replace(/\/$/, "") || "/";
  return `${normalizedPath}${hash}`;
}
function getAlternateLinks(currentLocale, url) {
  return locales.filter((locale) => locale !== currentLocale).map((locale) => ({
    lang: locale,
    href: buildLocaleUrl(locale, url)
  }));
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro$3 = createAstro("https://www.bluehorizonmexico.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    locale,
    messages,
    alternateLinks = [],
    languageSwitcher,
    pageMeta,
    additionalStructuredData = []
  } = Astro2.props;
  const canonicalPath = buildLocaleUrl(locale, Astro2.url);
  const canonicalUrl = new URL(canonicalPath, Astro2.url.origin).toString();
  const meta = {
    title: pageMeta?.title ?? messages.meta.title,
    description: pageMeta?.description ?? messages.meta.description,
    keywords: pageMeta?.keywords ?? messages.meta.keywords
  };
  const keywords = meta.keywords?.join(", ");
  const sanitizedPhone = messages.footer.contact.phone.replace(/[^+\d]/g, "");
  const primaryOffice = messages.footer.offices[0];
  const socialProfiles = messages.footer.socials.map((social) => social.href).filter(Boolean);
  const localeToOg = { es: "es_MX", en: "en_US" };
  const alternateOgLocales = locales.filter((code) => code !== locale).map((code) => localeToOg[code]);
  const ogImageSrc = typeof messages.meta.ogImage.src === "string" ? messages.meta.ogImage.src : messages.meta.ogImage.src.src;
  const logoUrl = new URL("/favicon.png", Astro2.url.origin).toString();
  const structuredDataObject = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: messages.meta.siteName,
    url: canonicalUrl,
    image: ogImageSrc,
    logo: logoUrl,
    description: messages.meta.description,
    telephone: sanitizedPhone,
    areaServed: {
      "@type": "Country",
      name: "Mexico"
    },
    sameAs: socialProfiles,
    knowsLanguage: ["es", "en"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: messages.services.heading,
      itemListElement: messages.services.categories.map((category) => ({
        "@type": "OfferCatalog",
        name: category.title,
        description: category.description,
        itemListElement: category.items.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item,
            areaServed: "Mexico"
          }
        }))
      }))
    },
    ...primaryOffice ? {
      address: {
        "@type": "PostalAddress",
        streetAddress: primaryOffice.address,
        addressLocality: primaryOffice.city,
        addressCountry: "MX"
      }
    } : {}
  };
  const structuredData = JSON.stringify(structuredDataObject, null, 2);
  return renderTemplate(_b || (_b = __template(["<html", ' class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png" sizes="32x32"><meta name="generator"', "><title>", '</title><meta name="description"', '><link rel="canonical"', ">", '<meta name="robots" content="index,follow"><meta name="language"', '><meta name="geo.region" content="MX">', '<meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:alt"', '><meta property="og:site_name"', '><meta property="og:locale"', ">", '<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600&display=swap" rel="stylesheet">', '<script type="application/ld+json">', "<\/script>", "", '</head> <body class="relative min-h-screen"> ', ' <main class="relative min-h-screen overflow-hidden pt-20 sm:pt-20"> ', " </main> ", " </body></html>"])), addAttribute(locale, "lang"), addAttribute(Astro2.generator, "content"), meta.title, addAttribute(meta.description, "content"), addAttribute(canonicalUrl, "href"), keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`, addAttribute(locale, "content"), primaryOffice && renderTemplate`<meta name="geo.placename"${addAttribute(primaryOffice.city, "content")}>`, addAttribute(meta.title, "content"), addAttribute(meta.description, "content"), addAttribute(canonicalUrl, "content"), addAttribute(ogImageSrc, "content"), addAttribute(messages.meta.ogImage.alt, "content"), addAttribute(messages.meta.siteName, "content"), addAttribute(messages.meta.locale, "content"), alternateOgLocales.map((ogLocale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(ogLocale, "content")}>`), addAttribute(meta.title, "content"), addAttribute(meta.description, "content"), addAttribute(ogImageSrc, "content"), alternateLinks.map((link) => renderTemplate`<link rel="alternate"${addAttribute(link.lang, "hreflang")}${addAttribute(link.href, "href")}>`), unescapeHTML(structuredData), additionalStructuredData.map((data) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(data, null, 2)))), renderHead(), renderComponent($$result, "SiteHeader", $$SiteHeader, { "locale": locale, "nav": messages.nav, "contactCta": messages.contact.form.submitCta, "languageSwitcher": languageSwitcher }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "SiteFooter", $$SiteFooter, { "footer": messages.footer }));
}, "/Users/pedro412/astro-horizon/agreeable-asteroid/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro("https://www.bluehorizonmexico.com");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    id,
    class: className = "",
    background = "default",
    spacing = "default"
  } = Astro2.props;
  const backgroundStyles = {
    default: "bg-transparent",
    tint: "relative isolate overflow-hidden border-y border-white/10 bg-[rgba(12,18,30,0.72)] backdrop-blur-2xl",
    dark: "bg-[#030711]"
  };
  const spacingStyles = {
    compact: "py-10 sm:py-14",
    default: "py-16 sm:py-20",
    relaxed: "py-24 sm:py-32"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${backgroundStyles[background]} ${spacingStyles[spacing]} ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/pedro412/astro-horizon/agreeable-asteroid/src/components/ui/Section.astro", void 0);

const $$Astro$1 = createAstro("https://www.bluehorizonmexico.com");
const $$SectionHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionHeading;
  const {
    eyebrow,
    title,
    description,
    align = "left",
    theme = "light"
  } = Astro2.props;
  const alignStyles = align === "center" ? "mx-auto text-center" : "";
  const eyebrowStyles = theme === "dark" ? "text-xs font-semibold uppercase tracking-[0.25em] text-white" : "text-xs font-semibold uppercase tracking-[0.25em] text-white";
  const titleStyles = theme === "dark" ? "font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white" : "font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white";
  const descriptionStyles = theme === "dark" ? "mt-4 text-base text-white" : "mt-4 text-base text-white";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`max-w-3xl ${alignStyles}`, "class")}> <p${addAttribute(eyebrowStyles, "class")}>${eyebrow}</p> <h2${addAttribute(titleStyles, "class")}>${title}</h2> ${description && renderTemplate`<p${addAttribute(descriptionStyles, "class")}>${description}</p>`} </div>`;
}, "/Users/pedro412/astro-horizon/agreeable-asteroid/src/components/ui/SectionHeading.astro", void 0);

const $$Astro = createAstro("https://www.bluehorizonmexico.com");
const $$ContactSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactSection;
  const { contact, phoneNumber } = Astro2.props;
  const whatsappHref = `https://wa.me/${phoneNumber.replace(/[^+\d]/g, "")}`;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "contact", "background": "tint" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "class": "grid gap-12 lg:grid-cols-[1.1fr_1fr]" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result3, "SectionHeading", $$SectionHeading, { "eyebrow": contact.eyebrow, "title": contact.heading, "description": contact.subheading })} <div class="relative mt-10 overflow-hidden rounded-[28px] border border-white/20 bg-[rgba(0,0,0,0)] p-8 backdrop-blur-2xl"> <form class="grid gap-6" method="post" action="/api/contact" data-contact-form${addAttribute(contact.form.successMessage, "data-success-message")}${addAttribute(contact.form.errorMessage, "data-error-message")}> <label class="block"> <span class="text-xs font-medium uppercase tracking-[0.2em] text-white"> ${contact.form.nameLabel} </span> <input type="text" name="name" required class="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white shadow-inner shadow-black/10 focus:border-coral-200/60 focus:outline-none focus:ring-2 focus:ring-coral-200/30"> </label> <label class="block"> <span class="text-xs font-medium uppercase tracking-[0.2em] text-white"> ${contact.form.emailLabel} </span> <input type="email" name="email" required class="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white shadow-inner shadow-black/10 focus:border-coral-200/60 focus:outline-none focus:ring-2 focus:ring-coral-200/30"> </label> <label class="block"> <span class="text-xs font-medium uppercase tracking-[0.2em] text-white"> ${contact.form.companyLabel} </span> <input type="text" name="company" class="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white shadow-inner shadow-black/10 focus:border-coral-200/60 focus:outline-none focus:ring-2 focus:ring-coral-200/30"> </label> <label class="block"> <span class="text-xs font-medium uppercase tracking-[0.2em] text-white"> ${contact.form.messageLabel} </span> <textarea name="message"${addAttribute(4, "rows")} required class="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white shadow-inner shadow-black/10 focus:border-coral-200/60 focus:outline-none focus:ring-2 focus:ring-coral-200/30"></textarea> </label> ${renderComponent($$result3, "Button", $$Button, { "type": "submit", "variant": "primary", "size": "lg", "class": "justify-center" }, { "default": async ($$result4) => renderTemplate`${contact.form.submitCta}` })} <p class="text-sm font-medium text-emerald-200" data-contact-status role="status" aria-live="polite" hidden></p> </form> </div> </div> <aside class="relative flex flex-col justify-center gap-6 overflow-hidden rounded-[28px] border border-white/20 bg-[rgba(0,0,0,0)] p-10 text-white backdrop-blur-2xl"> <p class="text-xs font-semibold uppercase tracking-[0.25em] text-white">${contact.quickAction.label}</p> <p class="text-2xl font-display font-semibold leading-snug text-white"> ${contact.quickAction.description} </p> ${renderComponent($$result3, "Button", $$Button, { "variant": "secondary", "size": "lg", "href": whatsappHref, "target": "_blank", "rel": "noopener noreferrer", "class": "justify-center" }, { "default": async ($$result4) => renderTemplate`${contact.quickAction.whatsappCta}` })} </aside> ` })} ` })} ${renderScript($$result, "/Users/pedro412/astro-horizon/agreeable-asteroid/src/components/sections/ContactSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pedro412/astro-horizon/agreeable-asteroid/src/components/sections/ContactSection.astro", void 0);

export { $$Layout as $, getMessages as a, buildLocaleUrl as b, $$ContactSection as c, defaultLocale as d, $$Container as e, $$Button as f, getAlternateLinks as g, $$SectionHeading as h, $$Section as i, locales as l, resolveLocale as r };
