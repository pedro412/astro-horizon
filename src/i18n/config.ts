import type { ImageMetadata } from 'astro';
import buzo1 from '../assets/buzo1.jpeg';
import buzo2 from '../assets/buzo2.jpeg';
import buzo3 from '../assets/buzo3.jpeg';
import geo1 from '../assets/geo1.jpg';
import geo2 from '../assets/geo2.jpg';
import geo3 from '../assets/geo3.jpg';
import service1 from '../assets/service1.jpeg';
import service2 from '../assets/service2.jpeg';
import service3 from '../assets/service3.jpeg';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

type NavItem = { label: string; href: string };
type ImageAsset = {
  src: string | ImageMetadata;
  alt: string;
};
type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  items: string[];
  image: ImageAsset;
};
type TimelineEntry = { year: string; description: string };
type SocialLink = { label: string; href: string };
type Meta = {
  title: string;
  description: string;
  keywords: string[];
  siteName: string;
  locale: string;
  ogImage: ImageAsset;
};

export type Messages = {
  meta: Meta;
  nav: NavItem[];
  hero: {
    tag: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    backgroundVideo: string;
    backgroundFallback: string;
    highlightStats: { label: string; value: string }[];
  };
  value: {
    eyebrow: string;
    heading: string;
    lead: string;
    cards: {
      title: string;
      description: string;
      image: ImageAsset;
    }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    categories: ServiceCategory[];
  };
  successStories: {
    eyebrow: string;
    heading: string;
    intro: string;
    featuredProjects: { heading: string; items: string[] };
    timeline: { heading: string; items: TimelineEntry[] };
    recentProjects: { heading: string; items: TimelineEntry[] };
    gallery: ImageAsset[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      companyLabel: string;
      messageLabel: string;
      submitCta: string;
    };
    quickAction: {
      label: string;
      description: string;
      whatsappCta: string;
    };
  };
  footer: {
    tagline: string;
    officesHeading: string;
    offices: { city: string; address: string }[];
    contactHeading: string;
    contact: { phone: string; email: string };
    socialHeading: string;
    socials: SocialLink[];
    legal: string;
    seoLinks: { label: string; href: string }[];
  };
};

export const messages: Record<Locale, Messages> = {
  en: {
    meta: {
      title: 'Blue Horizon – Maritime & Onshore Solutions',
      description:
        'Marine construction, port maintenance, industrial diving, dredging, and coastal recovery services for oil & gas and port operators across Mexico.',
      keywords: [
        'marine services Mexico',
        'industrial diving Mexico',
        'port maintenance specialists',
        'coastal recovery and dredging',
        'geotube installation Mexico',
        'Blue Horizon maritime solutions',
      ],
      siteName: 'Blue Horizon',
      locale: 'en_US',
      ogImage: {
        src: 'https://images.unsplash.com/photo-1473181488821-2d23949a045a?auto=format&fit=crop&w=1600&q=80',
        alt: 'Marine infrastructure project with divers preparing equipment on deck',
      },
    },
    nav: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/#about' },
      { label: 'Services', href: '/services' },
      { label: 'Success Stories', href: '/success-stories' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      tag: 'Marine & onshore experts in Mexico',
      title: 'Blue Horizon – Maritime & Onshore Solutions',
      subtitle:
        'Specialists in marine construction, port maintenance, industrial diving, dredging, and coastal recovery that support oil & gas, port, and civil infrastructure projects nationwide.',
      primaryCta: 'Request a quote',
      secondaryCta: 'Contact us',
      backgroundVideo:
        'https://cdn.coverr.co/videos/coverr-sea-port-during-sunset-1656675360835?download=1',
      backgroundFallback:
        'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1600&q=80',
      highlightStats: [
        { label: 'Years delivering marine solutions', value: '20+' },
        { label: 'Specialized service lines', value: '15+' },
        { label: 'Coverage across Mexico', value: 'Gulf & Caribbean' },
      ],
    },
    value: {
      eyebrow: 'ABOUT BLUE HORIZON',
      heading: 'Leaders in marine maintenance, onshore services, and industrial diving in Mexico',
      lead:
        'For more than 20 years we have executed marine and onshore projects that protect people, the environment, and critical infrastructure with world-class safety protocols.',
      cards: [
        {
          title: 'Oil & gas operations',
          description:
            'Support for offshore platforms, subsea assets, and coastal facilities that demand certified diving teams and resilient logistics.',
          image: {
            src: service1.src,
            alt: 'Industrial divers preparing equipment on a vessel deck',
          },
        },
        {
          title: 'Port industry',
          description:
            'Maintenance for terminals, docks, and breakwaters, including inspections, dredging, and fabrication of fender systems.',
          image: {
            src: service2.src,
            alt: 'Aerial view of a commercial port at sunset',
          },
        },
        {
          title: 'Navigation & shipyards',
          description:
            'Hull cleaning, class inspections, and sonar assessments that keep fleets, shipyards, and naval infrastructure operational.',
          image: {
            src: buzo2.src,
            alt: 'Engineers surveying coastal infrastructure with digital tablet',
          },
        },
        {
          title: 'Civil works',
          description:
            'Structural reviews, coastal recovery, and geotextile installation that reinforce public and private projects.',
          image: {
            src: geo1.src,
            alt: 'Geotube installation along a Mexican shoreline',
          },
        },
        {
          title: 'Our philosophy',
          description:
            '“We protect people, the environment, and the facilities under our care. We operate with world-class safety protocols.”',
          image: {
            src: geo2.src,
            alt: 'Industrial divers coordinating maintenance near a pier',
          },
        },
      ],
    },
    services: {
      eyebrow: 'SERVICES',
      heading: 'Marine, onshore, and engineering solutions',
      intro:
        'Comprehensive maritime services, industrial diving, terrestrial maintenance, and specialized engineering tailored to complex coastal operations.',
      categories: [
        {
          id: 'marine-services',
          title: 'Marine Services & Industrial Diving',
          description:
            'Certified divers deliver underwater inspections, marine maintenance, dredging, and coastal recovery for mission-critical assets.',
          image: {
            src: buzo1.src,
            alt: 'Industrial divers preparing equipment alongside a marine platform',
          },
          items: [
            'Class inspection',
            'Dock and vessel inspection & cleaning',
            'Beach recovery and geotube installation',
            'Underwater tracking, location, and salvage',
            'Metal thickness measurements',
            'Non-destructive testing (LP, PM, ultrasound)',
            'Hyperbaric welding',
            'Sacrificial anode installation and maintenance',
            'Dredging and bathymetry',
            'Marine structure inspection with side scan sonar',
            'Submersible pump recovery',
            'Concrete mattress placement (Colchacreto)',
            'Pier fender fabrication and installation',
          ],
        },
        {
          id: 'onshore-services',
          title: 'Onshore Services',
          description:
            'Surface maintenance optimized for keywords such as terrestrial maintenance, steelwork, sandblasting, and hot tapping.',
          image: {
            src: service3.src,
            alt: 'Onshore maintenance team guiding heavy machinery near the coastline',
          },
          items: [
            'Hot tapping',
            'Installation of non-metallic sleeves',
            'Rope access (industrial rappelling)',
            'Welding and steel fabrication',
            'Fuel tank cleaning',
            'Sandblasting and industrial coating',
            'Process line interconnection and flange work',
            'Maintenance for elevated potable water tanks',
          ],
        },
        {
          id: 'engineering-services',
          title: 'Specialized Engineering',
          description:
            'Engineering for maritime and structural projects, including preventive and corrective strategies backed by technical field teams.',
          image: {
            src: buzo3.src,
            alt: 'Engineers inspecting marine infrastructure plans on site',
          },
          items: [
            'Analysis of maritime and onshore structures',
            'Technical evaluation for maintenance projects',
            'Engineering for preventive and corrective solutions',
            'Technical field supervision and support',
          ],
        },
      ],
    },
    successStories: {
      eyebrow: 'SUCCESS STORIES',
      heading: 'Showcasing marine and onshore maintenance projects',
      intro:
        'Documented experience in Mexico’s coasts with dredging, diving, structural rehabilitation, and coastal recovery.',
      featuredProjects: {
        heading: 'Highlighted marine and onshore maintenance projects',
        items: [
          'Construction, rehabilitation, and maintenance of docks',
          'Geotube placement and beach recovery',
          'Professional underwater inspection',
          'Guiding drilling barriers',
          'Foundation of marine structures',
          'Salvage of sunken vessels',
          'Channel dredging and coastal cleaning',
          'Hyperbaric welding and cutting',
          'Laying of submarine lines and cables',
          'Industrial coating application on elevated tanks',
        ],
      },
      timeline: {
        heading: 'Documented experience by year',
        items: [
          { year: '2001', description: 'Strategic alliances in maritime services' },
          { year: '2005', description: 'Dock maintenance programs' },
          { year: '2007', description: 'Bridge maintenance projects' },
          { year: '2008', description: 'Pipeline laying operations' },
          { year: '2018', description: 'Breakwater construction' },
          { year: '2020', description: 'Specialized coastal projects' },
        ],
      },
      recentProjects: {
        heading: 'Recent projects with high SEO value',
        items: [
          { year: '2021', description: 'Geotube placement and pile removal' },
          { year: '2022', description: 'Subsea leak recovery and sump maintenance' },
          { year: '2023', description: 'Painting of elevated tanks and submarine cable laying' },
          { year: '2024', description: 'Beach recovery and channel dredging (Hotel Mayakoba)' },
          {
            year: '2025',
            description: 'Beach recovery in Villa Isla Blanca, Manigua, and Cielo Lindo; maintenance of pumping systems',
          },
        ],
      },
      gallery: [
        {
          src: geo1.src,
          alt: 'Geotube installation along a Mexican shoreline',
        },
        {
          src: geo2.src,
          alt: 'Industrial divers coordinating maintenance near a pier',
        },
        {
          src: geo3.src,
          alt: 'Excavator working on coastal dredging operations at dusk',
        },
      ],
    },
    contact: {
      eyebrow: 'CONTACT',
      heading: 'Request a quote for marine or onshore services',
      subheading:
        'Blue Horizon provides specialized industrial diving, marine maintenance, terrestrial services, engineering, coastal recovery, and dredging. Complete the form and our team will send a tailored proposal.',
      form: {
        nameLabel: 'Full name',
        emailLabel: 'Email',
        companyLabel: 'Company',
        messageLabel: 'Project requirements',
        submitCta: 'Request a quote',
      },
      quickAction: {
        label: 'Need immediate assistance?',
        description: 'Contact our specialists on WhatsApp for rapid coordination.',
        whatsappCta: 'Message WhatsApp',
      },
    },
    footer: {
      tagline: 'Blue Horizon — Marine and onshore solutions for Mexico’s strategic infrastructure.',
      officesHeading: 'Port offices',
      offices: [
        {
          city: 'Ciudad del Carmen',
          address: 'C. 50 3, Aviación, 24170 Cdad. del Carmen, Camp.',
        },
      ],
      contactHeading: 'Contact',
      contact: {
        phone: '938 133 0463',
        email: 'gerencia@bluehorizonmexico.com',
      },
      socialHeading: 'Follow us',
      socials: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/bluehorizon-mx/' },
        { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583442551000' },
        { label: 'YouTube', href: 'https://www.youtube.com/@bluehorizonmx' },
      ],
      legal: '© 2025 Blue Horizon. All rights reserved.',
      seoLinks: [
        { label: 'Marine services', href: '/services#marine-services' },
        { label: 'Industrial diving', href: '/services#marine-services' },
        { label: 'Onshore maintenance', href: '/services#onshore-services' },
        { label: 'Engineering', href: '/services#engineering-services' },
        { label: 'Success stories', href: '/success-stories' },
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy notice', href: '/aviso-de-privacidad' },
      ],
    },
  },
  es: {
    meta: {
      title: 'Blue Horizon – Soluciones Marítimas y Terrestres',
      description:
        'Especialistas en construcción marítima, mantenimiento de muelles, buceo industrial, dragados y recuperación de playas para la industria petrolera y portuaria en México.',
      keywords: [
        'servicios marítimos México',
        'buceo industrial México',
        'mantenimiento de muelles',
        'dragado y batimetría',
        'colocación de geotubos México',
        'Blue Horizon servicios marinos',
      ],
      siteName: 'Blue Horizon',
      locale: 'es_MX',
      ogImage: {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
        alt: 'Equipo marítimo mexicano realizando obras en un muelle al amanecer',
      },
    },
    nav: [
      { label: 'Inicio', href: '/' },
      { label: 'Nosotros', href: '/#about' },
      { label: 'Servicios', href: '/services' },
      { label: 'Casos de éxito', href: '/success-stories' },
      { label: 'Contacto', href: '#contact' },
    ],
    hero: {
      tag: 'Soluciones marítimas y terrestres',
      title: 'Blue Horizon – Soluciones Marítimas y Terrestres',
      subtitle:
        'Más de 20 años brindando servicios marítimos y terrestres, incluyendo mantenimiento en muelles, inspecciones submarinas, colocación de geotubos, dragados y apoyo a la industria petrolera y portuaria en México.',
      primaryCta: 'Solicitar cotización',
      secondaryCta: 'Contáctanos',
      backgroundVideo:
        'https://cdn.coverr.co/videos/coverr-sea-port-during-sunset-1656675360835?download=1',
      backgroundFallback:
        'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1600&q=80',
      highlightStats: [
        { label: 'Años de experiencia comprobada', value: '20+' },
        { label: 'Servicios marinos y terrestres especializados', value: '15+' },
        { label: 'Cobertura en México', value: 'Golfo y Caribe' },
      ],
    },
    value: {
      eyebrow: 'NOSOTROS',
      heading: 'Líderes en mantenimiento marino, terrestre y buceo industrial en México',
      lead:
        'En Blue Horizon contamos con más de 20 años de experiencia en proyectos marinos y terrestres. Nuestro equipo especializado desarrolla inspecciones submarinas, recuperación de playas, dragados, mantenimiento a muelles y soldadura hiperbárica con estándares de seguridad de clase mundial.',
      cards: [
        {
          title: 'Petróleo y gas',
          description:
            'Soluciones confiables para plataformas, ductos y terminales terrestres que requieren buceo industrial y apoyo especializado.',
          image: {
            src: service1.src,
            alt: 'Equipo de buzos industriales preparando equipo en cubierta',
          },
        },
        {
          title: 'Industria portuaria',
          description:
            'Mantenimiento integral de muelles, defensas y estructuras marítimas con inspecciones submarinas y dragados programados.',
          image: {
            src: service2.src,
            alt: 'Vista aérea de un puerto comercial al atardecer',
          },
        },
        {
          title: 'Navegación y astilleros',
          description:
            'Servicios para embarcaciones y astilleros: limpieza de cascos, medición de espesores, pruebas no destructivas y rescate submarino.',
          image: {
            src: buzo2.src,
            alt: 'Ingenieros revisando infraestructura costera con tablet digital',
          },
        },
        {
          title: 'Obra civil',
          description:
            'Ingeniería para infraestructura costera, colocación de geotubos, recuperación de playas y cimentación de estructuras marinas.',
          image: {
            src: geo1.src,
            alt: 'Colocación de geotubos en una playa para recuperación costera',
          },
        },
        {
          title: 'Nuestra filosofía',
          description:
            '“Protegemos al factor humano, al medio ambiente y a las instalaciones. Operamos con protocolos de seguridad de clase mundial.”',
          image: {
            src: geo2.src,
            alt: 'Buzos industriales inspeccionando el casco de un barco',
          },
        },
      ],
    },
    services: {
      eyebrow: 'SERVICIOS',
      heading: 'Servicios marítimos, terrestres e ingeniería especializada',
      intro:
        'Optimiza tus búsquedas con servicios marítimos, buceo industrial, mantenimiento terrestre, pailería, sand blast, hot tapping e ingeniería para estructuras.',
      categories: [
        {
          id: 'marine-services',
          title: 'Servicios Marinos y Buceo Industrial',
          description:
            'Expertos en servicios marítimos, buceo industrial e inspecciones submarinas con equipos certificados y listos para operar en todo México.',
          image: {
            src: buzo1.src,
            alt: 'Buzos industriales preparando equipo en plataforma marina',
          },
          items: [
            'Inspección de clase',
            'Inspección y limpieza de muelles y embarcaciones',
            'Recuperación de playa e instalación de geotubos',
            'Rastreo, localización y rescate submarino',
            'Medición de espesores metálicos',
            'Pruebas no destructivas (LP, PM, Ultrasonido)',
            'Soldadura hiperbárica',
            'Instalación y mantenimiento de ánodos de sacrificio',
            'Dragados y batimetrías',
            'Inspección de estructuras marinas con sonar de barrido lateral',
            'Recuperación de bombas submarinas',
            'Colocación de matrices (Colchacreto)',
            'Fabricación e instalación de defensas de muelle',
          ],
        },
        {
          id: 'onshore-services',
          title: 'Servicios Terrestres',
          description:
            'Mantenimiento terrestre optimizado para pailería, sand blast, hot tapping y acceso por cuerdas en instalaciones industriales.',
          image: {
            src: service3.src,
            alt: 'Cuadrilla de mantenimiento terrestre operando maquinaria cerca de la costa',
          },
          items: [
            'Hot Tapping',
            'Instalación de envolventes no metálicas',
            'Rope Access (rapel industrial)',
            'Soldadura y pailería',
            'Lavado de tanques de combustible',
            'Sand blast y pintura industrial',
            'Interconexión y embridaje de líneas de proceso',
            'Mantenimiento de tanques elevados de agua potable',
          ],
        },
        {
          id: 'engineering-services',
          title: 'Ingeniería Especializada',
          description:
            'Ingeniería marítima y estructural con análisis de riesgo, soluciones preventivas y acompañamiento técnico en campo.',
          image: {
            src: buzo3.src,
            alt: 'Equipo de ingeniería revisando planos de infraestructura marina en sitio',
          },
          items: [
            'Análisis de estructuras marítimas y terrestres',
            'Evaluación técnica para proyectos de mantenimiento',
            'Ingeniería para soluciones preventivas y correctivas',
            'Acompañamiento técnico en campo',
          ],
        },
      ],
    },
    successStories: {
      eyebrow: 'CASOS DE ÉXITO',
      heading: 'Proyectos destacados en mantenimiento marino y terrestre',
      intro:
        'Experiencia documentada en construcción, mantenimiento marino, buceo industrial y recuperación de playas a lo largo de México.',
      featuredProjects: {
        heading: 'Hemos liderado y ejecutado proyectos clave como:',
        items: [
          'Construcción, rehabilitación y mantenimiento de muelles',
          'Colocación de geotubos y recuperación de playas',
          'Inspección submarina profesional',
          'Guiado de barreras de perforación',
          'Cimentación de estructuras marinas',
          'Recuperación de barcos hundidos',
          'Dragado de canales y limpieza de áreas costeras',
          'Soldadura y corte hiperbárico',
          'Tendido de líneas y cables submarinos',
          'Aplicación de pintura industrial en tanques elevados',
        ],
      },
      timeline: {
        heading: 'Timeline — Experiencia documentada por año',
        items: [
          { year: '2001', description: 'Alianzas estratégicas en servicios marítimos' },
          { year: '2005', description: 'Mantenimiento a muelles' },
          { year: '2007', description: 'Mantenimiento a puentes' },
          { year: '2008', description: 'Tendido de líneas' },
          { year: '2018', description: 'Construcción de rompeolas' },
          { year: '2020', description: 'Proyectos costeros especializados' },
        ],
      },
      recentProjects: {
        heading: 'Proyectos recientes con alto valor SEO',
        items: [
          { year: '2021', description: 'Colocación de geotubos y retiro de pilotes' },
          { year: '2022', description: 'Recuperación de fugas submarinas y mantenimiento de cárcamos' },
          { year: '2023', description: 'Pintura en tanques elevados y tendido de cables eléctricos submarinos' },
          { year: '2024', description: 'Recuperación de playas y dragado de canales (Hotel Mayakoba)' },
          {
            year: '2025',
            description: 'Recuperación de playa en Villa Isla Blanca, Manigua y Cielo Lindo; mantenimiento de sistemas de bombeo',
          },
        ],
      },
      gallery: [
        {
          src: geo1.src,
          alt: 'Colocación de geotubos en una playa para recuperación costera',
        },
        {
          src: geo2.src,
          alt: 'Buzos industriales inspeccionando el casco de un barco',
        },
        {
          src: geo3.src,
          alt: 'Excavadora realizando labores de dragado costero al atardecer',
        },
      ],
    },
    contact: {
      eyebrow: 'CONTACTO',
      heading: 'Solicita una cotización para servicios marítimos o terrestres',
      subheading:
        'En Blue Horizon ofrecemos buceo industrial, mantenimiento marino, mantenimiento terrestre, ingeniería para instalaciones marítimas y terrestres, recuperación de playas, dragados y batimetrías. Completa el formulario y te enviaremos una propuesta personalizada.',
      form: {
        nameLabel: 'Nombre completo',
        emailLabel: 'Correo electrónico',
        companyLabel: 'Empresa',
        messageLabel: 'Requerimientos del proyecto',
        submitCta: 'Solicitar cotización',
      },
      quickAction: {
        label: '¿Necesitas respuesta inmediata?',
        description: 'Contacta a nuestros especialistas por WhatsApp para coordinar tu proyecto.',
        whatsappCta: 'Enviar WhatsApp',
      },
    },
    footer: {
      tagline: 'Blue Horizon — Servicios marítimos y terrestres que impulsan la infraestructura estratégica de México.',
      officesHeading: 'Oficinas portuarias',
      offices: [
        {
          city: 'Ciudad del Carmen',
          address: 'C. 50 3, Aviación, 24170 Cdad. del Carmen, Camp.',
        },
      ],
      contactHeading: 'Contacto',
      contact: {
        phone: '938 133 0463',
        email: 'gerencia@bluehorizonmexico.com',
      },
      socialHeading: 'Redes sociales',
      socials: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/bluehorizon-mx/' },
        { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583442551000' },
        { label: 'YouTube', href: 'https://www.youtube.com/@bluehorizonmx' },
      ],
      legal: '© 2025 Blue Horizon. Todos los derechos reservados.',
      seoLinks: [
        { label: 'Servicios marítimos', href: '/services#marine-services' },
        { label: 'Buceo industrial', href: '/services#marine-services' },
        { label: 'Mantenimiento terrestre', href: '/services#onshore-services' },
        { label: 'Ingeniería', href: '/services#engineering-services' },
        { label: 'Casos de éxito', href: '/success-stories' },
        { label: 'Contacto', href: '#contact' },
        { label: 'Aviso de privacidad', href: '/aviso-de-privacidad' },
      ],
    },
  },
};

export function isSupportedLocale(value: string | undefined): value is Locale {
  return value ? locales.includes(value as Locale) : false;
}

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
