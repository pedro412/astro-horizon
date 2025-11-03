export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

type NavItem = { label: string; href: string };
type Service = { id: string; title: string; description: string; image: string };
type Testimonial = { quote: string; name: string; role: string };
type SocialLink = { label: string; href: string };

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
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
    heading: string;
    lead: string;
    bullets: { title: string; description: string }[];
  };
  services: {
    heading: string;
    intro: string;
    items: Service[];
  };
  testimonials: {
    heading: string;
    intro: string;
    items: Testimonial[];
  };
  contact: {
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
  };
};

export const messages: Record<Locale, Messages> = {
  en: {
    meta: {
      title: 'BlueHorizon Maritime Services & Docks',
      description:
        'Integrated offshore logistics, port operations, and vessel support from BlueHorizon in Ciudad del Carmen and Cancún, Mexico.',
    },
    nav: [
      { label: 'Home', href: '#hero' },
      { label: 'Our Edge', href: '#value' },
      { label: 'Services', href: '#services' },
      { label: 'Success Stories', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      tag: 'Trusted along the Gulf & Caribbean',
      title: 'Full-spectrum maritime support for offshore excellence.',
      subtitle:
        'From deepwater operations to fast-turn dockside service, BlueHorizon keeps your fleet mission-ready with bilingual crews, modern infrastructure, and 24/7 command centers.',
      primaryCta: 'Schedule a strategy call',
      secondaryCta: 'Our service playbook',
      backgroundVideo:
        'https://cdn.coverr.co/videos/coverr-sea-port-during-sunset-1656675360835?download=1',
      backgroundFallback:
        'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1600&q=80',
      highlightStats: [
        { label: 'Years in offshore logistics', value: '18+' },
        { label: 'Average vessel uptime', value: '99.2%' },
        { label: 'Operations managed per month', value: '120+' },
      ],
    },
    value: {
      heading: 'Precision operations designed around your mission',
      lead:
        'Our dual-port network bridges the Gulf of Mexico and the Caribbean, so your crews, cargo, and compliance move in sync.',
      bullets: [
        {
          title: 'Integrated control centers',
          description:
            'Real-time visibility across Ciudad del Carmen and Cancún with bilingual dispatch and weather intelligence.',
        },
        {
          title: 'Safety-first methodology',
          description:
            'Our ISM-certified protocols deliver impeccable HSE performance without compromising turnaround speed.',
        },
        {
          title: 'Custom playbooks',
          description:
            'Tailored SOPs for drilling, survey, and support fleets to minimize idle time and regulatory friction.',
        },
      ],
    },
    services: {
      heading: 'High-impact services that keep your fleet moving',
      intro:
        'BlueHorizon combines maritime expertise with shore-side logistics so every port call feels orchestrated.',
      items: [
        {
          id: 'harbor-operations',
          title: 'Harbor & dock operations',
          description:
            'Coordinated berthing, fueling, and provisioning with on-dock maintenance crews and bonded warehousing.',
          image:
            'https://images.unsplash.com/photo-1505731132164-cca90383e1af?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'offshore-logistics',
          title: 'Offshore logistics',
          description:
            'Crew transfers, heavy-lift coordination, and supply chain management for deepwater and shallow operations.',
          image:
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'compliance-services',
          title: 'Regulatory & compliance services',
          description:
            'Port agency, customs clearance, and documentation handled by specialists fluent in Mexican maritime law.',
          image:
            'https://images.unsplash.com/photo-1531861219967-02dae2706ea8?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    testimonials: {
      heading: 'Voices from the bridge',
      intro:
        'Maritime leaders across energy, survey, and cruise trust BlueHorizon with their most complex itineraries.',
      items: [
        {
          quote:
            'Their Cancún team mobilized a full crew change and emergency provisions in under six hours. BlueHorizon is the operational heartbeat we count on.',
          name: 'Araceli Montoya',
          role: 'Logistics Director, GulfStream Surveys',
        },
        {
          quote:
            'From customs to quay, every stakeholder is briefed, bilingual, and accountable. Our downtime has dropped by 35% year over year.',
          name: 'James Miller',
          role: 'Fleet Manager, Coral Energy',
        },
      ],
    },
    contact: {
      heading: 'Let’s chart your next operation',
      subheading:
        'Tell us about your vessel schedule and mission requirements. Our coordination team will respond within one business hour.',
      form: {
        nameLabel: 'Full name',
        emailLabel: 'Email',
        companyLabel: 'Company / Vessel',
        messageLabel: 'Mission details',
        submitCta: 'Request logistics plan',
      },
      quickAction: {
        label: 'Need an immediate answer?',
        description: 'Ping our operations desk on WhatsApp for rapid coordination.',
        whatsappCta: 'Message WhatsApp',
      },
    },
    footer: {
      tagline: 'BlueHorizon Maritime Services & Docks — Trusted since 2006.',
      officesHeading: 'Port offices',
      offices: [
        {
          city: 'Ciudad del Carmen',
          address: 'Av. 31 #124, Zona Industrial Laguna Azul, 24140 Campeche',
        },
        {
          city: 'Cancún',
          address: 'Terminal Marítima, Blvd. Kukulcán Km 4, Zona Hotelera, 77500 Quintana Roo',
        },
      ],
      contactHeading: 'Contact',
      contact: {
        phone: '+52 938 444 2100',
        email: 'ops@bluehorizon.mx',
      },
      socialHeading: 'Follow us',
      socials: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/bluehorizon-mx/' },
        { label: 'Facebook', href: 'https://www.facebook.com/bluehorizonmx/' },
        { label: 'YouTube', href: 'https://www.youtube.com/@bluehorizonmx' },
      ],
      legal: '© 2025 BlueHorizon Maritime Services & Docks. All rights reserved.',
    },
  },
  es: {
    meta: {
      title: 'BlueHorizon Servicios Marítimos & Muelles',
      description:
        'Logística costa afuera, operaciones portuarias y soporte a embarcaciones desde BlueHorizon en Ciudad del Carmen y Cancún, México.',
    },
    nav: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Ventaja', href: '#value' },
      { label: 'Servicios', href: '#services' },
      { label: 'Casos de Éxito', href: '#testimonials' },
      { label: 'Contacto', href: '#contact' },
    ],
    hero: {
      tag: 'Referentes en el Golfo y el Caribe',
      title: 'Soporte marítimo integral para operaciones offshore.',
      subtitle:
        'Desde maniobras en aguas profundas hasta atención exprés en muelle, BlueHorizon mantiene tu flota lista con equipos bilingües, infraestructura moderna y centros de mando 24/7.',
      primaryCta: 'Agenda una llamada estratégica',
      secondaryCta: 'Nuestro manual de servicios',
      backgroundVideo:
        'https://cdn.coverr.co/videos/coverr-sea-port-during-sunset-1656675360835?download=1',
      backgroundFallback:
        'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1600&q=80',
      highlightStats: [
        { label: 'Años en logística offshore', value: '18+' },
        { label: 'Disponibilidad promedio de flota', value: '99.2%' },
        { label: 'Operaciones coordinadas al mes', value: '120+' },
      ],
    },
    value: {
      heading: 'Operaciones de precisión alineadas a tu misión',
      lead:
        'Nuestra red de puertos conecta el Golfo de México con el Caribe para sincronizar tripulación, carga y cumplimiento normativo.',
      bullets: [
        {
          title: 'Centros de control integrados',
          description:
            'Visibilidad en tiempo real entre Ciudad del Carmen y Cancún con despacho bilingüe y monitoreo meteorológico.',
        },
        {
          title: 'Metodología safety-first',
          description:
            'Protocolos certificados ISM que logran un desempeño HSE impecable sin sacrificar velocidad de respuesta.',
        },
        {
          title: 'Playbooks a la medida',
          description:
            'SOPs personalizados para flotas de perforación, prospección y soporte que reducen tiempos muertos y trámites.',
        },
      ],
    },
    services: {
      heading: 'Servicios clave que mantienen tu flota en movimiento',
      intro:
        'BlueHorizon integra experiencia marítima con logística en tierra para que cada arribo al puerto sea impecable.',
      items: [
        {
          id: 'harbor-operations',
          title: 'Operaciones de muelle y puerto',
          description:
            'Coordinación de atraque, abastecimiento y provisiones con cuadrillas en muelle y almacenes fiscalizados.',
          image:
            'https://images.unsplash.com/photo-1505731132164-cca90383e1af?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'offshore-logistics',
          title: 'Logística costa afuera',
          description:
            'Transferencia de tripulaciones, coordinación de izajes y cadena de suministro para operaciones en aguas profundas y someras.',
          image:
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'compliance-services',
          title: 'Servicios regulatorios y de cumplimiento',
          description:
            'Agenciamiento portuario, despacho aduanal y trámites a cargo de especialistas en legislación marítima mexicana.',
          image:
            'https://images.unsplash.com/photo-1531861219967-02dae2706ea8?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    testimonials: {
      heading: 'La voz del puente de mando',
      intro:
        'Líderes marítimos en energía, prospección y cruceros confían en BlueHorizon para sus itinerarios más complejos.',
      items: [
        {
          quote:
            'Su equipo en Cancún coordinó cambio de tripulación y provisiones de emergencia en menos de seis horas. BlueHorizon es el pulso operativo en el que confiamos.',
          name: 'Araceli Montoya',
          role: 'Directora de Logística, GulfStream Surveys',
        },
        {
          quote:
            'Del despacho a la maniobra, todos informados, bilingües y responsables. Reducimos 35% los tiempos muertos año contra año.',
          name: 'James Miller',
          role: 'Gerente de Flota, Coral Energy',
        },
      ],
    },
    contact: {
      heading: 'Diseñemos tu próxima operación',
      subheading:
        'Cuéntanos el calendario de tu embarcación y los requisitos de misión. Nuestro equipo responde en menos de una hora hábil.',
      form: {
        nameLabel: 'Nombre completo',
        emailLabel: 'Correo electrónico',
        companyLabel: 'Empresa / Embarcación',
        messageLabel: 'Detalles de la misión',
        submitCta: 'Solicitar plan logístico',
      },
      quickAction: {
        label: '¿Necesitas respuesta inmediata?',
        description: 'Escríbenos por WhatsApp y coordinamos al instante.',
        whatsappCta: 'Enviar WhatsApp',
      },
    },
    footer: {
      tagline: 'BlueHorizon Servicios Marítimos & Muelles — Confianza desde 2006.',
      officesHeading: 'Oficinas portuarias',
      offices: [
        {
          city: 'Ciudad del Carmen',
          address: 'Av. 31 #124, Zona Industrial Laguna Azul, 24140 Campeche',
        },
        {
          city: 'Cancún',
          address: 'Terminal Marítima, Blvd. Kukulcán Km 4, Zona Hotelera, 77500 Quintana Roo',
        },
      ],
      contactHeading: 'Contacto',
      contact: {
        phone: '+52 938 444 2100',
        email: 'ops@bluehorizon.mx',
      },
      socialHeading: 'Redes sociales',
      socials: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/bluehorizon-mx/' },
        { label: 'Facebook', href: 'https://www.facebook.com/bluehorizonmx/' },
        { label: 'YouTube', href: 'https://www.youtube.com/@bluehorizonmx' },
      ],
      legal: '© 2025 BlueHorizon Servicios Marítimos & Muelles. Todos los derechos reservados.',
    },
  },
};

export function isSupportedLocale(value: string | undefined): value is Locale {
  return value ? locales.includes(value as Locale) : false;
}

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
