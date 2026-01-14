import type { ImageMetadata } from 'astro';
import geotubosCover from '../assets/geo1.jpg';

export type CaseStudySection = {
  heading: string;
  paragraphs: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  coverImage: ImageMetadata;
  coverAlt: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'la-manigua-ciudad-del-carmen',
    title: 'Recuperación de playa en La Manigua',
    subtitle: 'Caso de éxito en La Manigua, Ciudad del Carmen, Campeche',
    location: 'La Manigua, Ciudad del Carmen, Campeche',
    date: '2025-02-05',
    excerpt:
      'Implementación técnica con geotubos para estabilizar la línea de costa y recuperar playa afectada por erosión.',
    metaTitle: 'Recuperación de playas con geotubos: La Manigua | Blue Horizon',
    metaDescription:
      'Caso real de recuperación de playa con geotubos en La Manigua, Ciudad del Carmen. Problema de erosión costera, solución técnica y resultados.',
    coverImage: geotubosCover,
    coverAlt: 'Geotubos para recuperación de playas afectadas por erosión costera en México',
    sections: [
      {
        heading: 'Problema detectado',
        paragraphs: [
          'La zona de La Manigua, en Ciudad del Carmen, Campeche, registraba pérdida acelerada de arena por erosión costera, con afectación directa a la franja de playa y al uso recreativo del sitio.',
          'El diagnóstico confirmó la necesidad de una recuperación de playas en México que devolviera estabilidad al frente costero sin afectar la dinámica natural.',
        ],
      },
      {
        heading: 'Solución implementada',
        paragraphs: [
          'Se diseñó un sistema de contención y recuperación de playas con geotubos, integrando geotextiles y relleno arenoso controlado para detener la erosión costera y recuperar la playa.',
        ],
      },
      {
        heading: 'Proceso de recuperación',
        paragraphs: [
          'Delimitación del área de intervención, colocación de geotubos, relleno y perfilado de arena, y monitoreo del comportamiento del oleaje para asegurar la integración con el entorno local.',
        ],
      },
      {
        heading: 'Resultados obtenidos',
        paragraphs: [
          'La solución permitió estabilizar el frente de playa, recuperar arena y mejorar las condiciones de uso en el litoral de Ciudad del Carmen, Campeche.',
        ],
      },
      {
        heading: 'Aplicación para hoteles y residencias',
        paragraphs: [
          'Este enfoque es replicable en hoteles y residencias frente al mar que requieren soluciones técnicas de recuperación de playas con geotubos en México.',
        ],
      },
      {
        heading: 'Solicita un diagnóstico de tu playa',
        paragraphs: [
          'Nuestro equipo evalúa la viabilidad técnica y el diseño óptimo para contener erosión costera en proyectos turísticos y residenciales.',
        ],
      },
    ],
  },
  {
    slug: 'isla-aguada-campeche',
    title: 'Recuperación de playa en Isla Aguada',
    subtitle: 'Caso de éxito en Isla Aguada, Campeche',
    location: 'Isla Aguada, Campeche',
    date: '2025-02-12',
    excerpt:
      'Recuperación funcional mediante geotubos para controlar erosión y restablecer la playa con enfoque técnico.',
    metaTitle: 'Recuperación de playas con geotubos: Isla Aguada | Blue Horizon',
    metaDescription:
      'Caso real de recuperación de playa con geotubos en Isla Aguada, Campeche. Problema de erosión costera, solución técnica y resultados.',
    coverImage: geotubosCover,
    coverAlt: 'Geotubos para recuperación de playas afectadas por erosión costera en México',
    sections: [
      {
        heading: 'Problema detectado',
        paragraphs: [
          'En Isla Aguada, Campeche, la playa presentaba erosión costera, pérdida de arena y afectaciones a la infraestructura recreativa del frente costero.',
          'Se identificó la necesidad de recuperación de playas en México con una solución compatible con las condiciones locales.',
        ],
      },
      {
        heading: 'Solución implementada',
        paragraphs: [
          'Se instaló un sistema de geotubos para contención, con relleno de arena y protección perimetral que permitió iniciar la recuperación de playas de forma controlada.',
        ],
      },
      {
        heading: 'Proceso de recuperación',
        paragraphs: [
          'Levantamiento topográfico, colocación de geotubos, aporte de material arenoso y seguimiento del comportamiento del oleaje para ajustar la intervención.',
        ],
      },
      {
        heading: 'Resultados obtenidos',
        paragraphs: [
          'La recuperación permitió reducir la erosión costera, estabilizar la playa y mejorar la protección natural en Isla Aguada, Campeche.',
        ],
      },
      {
        heading: 'Aplicación para hoteles y residencias',
        paragraphs: [
          'La solución es ideal para hoteles y residencias que buscan recuperación de playas con geotubos en México y protección frente a la erosión costera.',
        ],
      },
      {
        heading: 'Solicita un diagnóstico de tu playa',
        paragraphs: [
          'Solicita una evaluación técnica para definir un plan de recuperación de playas adaptado a tu proyecto en Isla Aguada o cualquier zona costera.',
        ],
      },
    ],
  },
];
