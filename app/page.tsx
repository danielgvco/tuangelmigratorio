"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Tu Angel Migratorio — Página de inicio (ES, solo tema claro)
 * Next.js (App Router) + TailwindCSS
 * Layout inspirado en Outshine, todo en español y sin variantes dark.
 */

// ------------------------------
// Datos simulados (reemplaza con tu CMS/API)
// ------------------------------
const servicios = [
  {
    title: "Estrategia de Visas",
    href: "/services/visa-strategy",
    img: "/images/services/visa-strategy.png",
    blurb:
      "Planes claros y paso a paso según tu objetivo: estudio, trabajo, familia o negocios.",
  },
  {
    title: "Permisos de Estudio",
    href: "/services/study-permits",
    img: "/images/services/study-permits.png",
    blurb:
      "Apoyo en admisiones, armado de documentos y cartas de intención que convencen.",
  },
  {
    title: "Visas de Trabajo",
    href: "/services/work-visas",
    img: "/images/services/work-visas.png",
    blurb:
      "Patrocinios, puntajes, LMIA y transiciones de estatus con mínima fricción.",
  },
  {
    title: "Patrocinio Familiar",
    href: "/services/family-sponsorship",
    img: "/images/services/family.png",
    blurb:
      "Esposo(a), pareja, dependientes y padres con evidencia sólida y organizada.",
  },
  {
    title: "Inmigración de Negocios",
    href: "/services/business",
    img: "/images/services/business.png",
    blurb:
      "Estrategias para emprender, invertir, startups y expansión internacional.",
  },
  {
    title: "Ciudadanía y Naturalización",
    href: "/services/citizenship",
    img: "/images/services/citizenship.png",
    blurb:
      "Revisión de elegibilidad, preparación de examen y presentación sin estrés.",
  },
  {
    title: "Preparación de Documentos",
    href: "/services/document-prep",
    img: "/images/services/documents.png",
    blurb:
      "Cartas de explicación (LOE), traducciones, affidávits y copias certificadas.",
  },
  {
    title: "Seguimiento y Apelaciones",
    href: "/services/tracking-appeals",
    img: "/images/services/appeals.png",
    blurb:
      "Notas GCMS, respuestas por justicia procesal y apelaciones bien fundamentadas.",
  },
];

const casosExito = [
  {
    title: "Patrocinio conyugal aprobado en 4 meses",
    img: "/images/case-studies/spouse.jpg",
    href: "/case-studies/spouse-sponsorship",
  },
  {
    title: "Permiso de estudio aprobado tras 1 negativa",
    img: "/images/case-studies/study.jpg",
    href: "/case-studies/study-permit-approval",
  },
  {
    title: "LMIA + permiso de trabajo en tiempo récord",
    img: "/images/case-studies/work.jpg",
    href: "/case-studies/lmia-work-permit",
  },
];

// ------------------------------
// Componentes pequeños
// ------------------------------
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur transition-colors">
      {children}
    </span>
  );
}

function CookieBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div
      role="region"
      aria-label="Consentimiento de cookies"
      className="fixed inset-x-3 bottom-3 z-50 rounded-xl border border-zinc-200 bg-white p-4 shadow-lg"
    >
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-700">
          Usamos cookies para mejorar tu navegación, analizar el tráfico y personalizar
          contenido. Puedes aceptar o gestionar tus preferencias.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
          >
            Gestionar
          </button>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg bg-black px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-lg font-semibold">Tu Angel Migratorio</span>
          <button aria-label="Cerrar menú" onClick={onClose} className="rounded-lg p-2 hover:bg-zinc-100">✕</button>
        </div>
        <nav className="grid gap-3 text-lg">
          <Link href="#services" onClick={onClose} className="rounded-lg px-3 py-2 hover:bg-zinc-100">Servicios</Link>
          <Link href="#approach" onClick={onClose} className="rounded-lg px-3 py-2 hover:bg-zinc-100">Proceso</Link>
          <Link href="#results" onClick={onClose} className="rounded-lg px-3 py-2 hover:bg-zinc-100">Resultados</Link>
          <Link href="#about" onClick={onClose} className="rounded-lg px-3 py-2 hover:bg-zinc-100">Nosotros</Link>
          <Link href="/contact" className="mt-2 inline-flex w-fit items-center justify-center rounded-xl bg-amber-500 px-4 py-2 font-semibold text-white shadow hover:bg-amber-600">Contacto</Link>
        </nav>
      </div>
    </div>
  );
}

function Check({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M20 6L9 17l-5-5"/></svg>
      <span className="text-sm font-semibold text-zinc-800">{label}</span>
    </div>
  );
}

// ------------------------------
// Página
// ------------------------------
export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <CookieBanner />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight">Tu Angel Migratorio</span>
            <Tag>Inmigración • Visas • Consultoría</Tag>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#services" className="text-sm font-medium hover:text-amber-600">Servicios</Link>
            <Link href="#approach" className="text-sm font-medium hover:text-amber-600">Proceso</Link>
            <Link href="#results" className="text-sm font-medium hover:text-amber-600">Resultados</Link>
            <Link href="#about" className="text-sm font-medium hover:text-amber-600">Nosotros</Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600"
            >
              Contacto
            </Link>
          </nav>
          <button
            className="inline-flex items-center rounded-lg p-2 md:hidden hover:bg-zinc-100"
            aria-label="Abrir menú"
            onClick={() => setMobileOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.18),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.12),transparent_45%)]"></div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Asesoría migratoria <span className="text-amber-600">precisa</span> y orientada a <span className="text-amber-600">resultados</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-zinc-600">
              Ayudamos a solicitantes y familias a lograr permisos de estudio, trabajo y residencia
              con estrategia rigurosa, documentos impecables y comunicación transparente.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow hover:bg-zinc-800">
                Solicitar evaluación gratuita
              </Link>
              <Link href="#services" className="inline-flex items-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-zinc-50">
                Ver servicios
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>Atención 100% en Español</Tag>
              <Tag>Revisión documental y LOE</Tag>
              <Tag>Apelaciones y Notas GCMS</Tag>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-100 shadow-xl">
            <img src="/images/hero-immigration.jpg" alt="Asesor revisando documentos de visa" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ALIVIO DE DOLORES: 3 CHECKS HORIZONTALES */}
      <section aria-labelledby="alivios" className="border-y border-zinc-100 bg-zinc-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="alivios" className="sr-only">Beneficios clave</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Check label="Precios claros siempre" />
            <Check label="Respuesta rápida diaria" />
            <Check label="Documentos sin errores" />
          </div>
        </div>
      </section>

      {/* BLOQUES DE VALOR */}
      <section className="px-4 py-16 sm:px-6 lg:px-8" id="approach">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-100 shadow-xl">
              <img src="/images/feature-questions.jpg" alt="Preparación de entrevistas y argumentos" className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Responde a las preguntas del oficial antes de que las haga</h2>
              <p className="mt-4 text-zinc-600">
                Conectamos estrategia y ejecución: cada requisito con su evidencia exacta. Tu expediente
                demuestra elegibilidad, intención y vínculos sin ambigüedades.
              </p>
              <Link href="/case-studies" className="mt-4 inline-block text-zinc-900 underline underline-offset-4 hover:text-amber-600">
                Casos complejos que resolvimos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight">Nosotros nos metemos al detalle, para que tú no tengas que hacerlo</h2>
              <p className="mt-4 text-zinc-600">
                Seguimiento integral de tu caso: plazos, biométricos, correspondencia y actualizaciones GCMS.
                Analizamos cada detalle y optimizamos proactivamente para reducir riesgos de negativa.
              </p>
              <Link href="/analytics" className="mt-4 inline-block text-zinc-900 underline underline-offset-4 hover:text-amber-600">
                Nuestro seguimiento y analítica
              </Link>
            </div>
            <div className="order-1 relative overflow-hidden rounded-2xl border border-zinc-100 shadow-xl lg:order-2">
              <img src="/images/feature-analytics.jpg" alt="Línea de tiempo y analítica del caso" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8" id="results">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-100 shadow-xl">
              <img src="/images/feature-team.jpg" alt="Equipo especialista" className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">La experiencia correcta, a un mensaje de distancia</h2>
              <p className="mt-4 text-zinc-600">
                Canales compartidos de Slack/WhatsApp, reuniones semanales y tableros en vivo.
                Respuestas rápidas y prioridades claras.
              </p>
              <Link href="/approach" className="mt-4 inline-block text-zinc-900 underline underline-offset-4 hover:text-amber-600">
                Cómo trabajamos contigo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA RÁPIDA */}
      <section className="border-y border-zinc-100 bg-amber-50/60 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 md:grid-cols-3">
            <h2 className="text-2xl font-bold md:col-span-2">Hablemos de tu plan migratorio</h2>
            <div className="md:text-right">
              <Link href="/contact" className="inline-flex items-center rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white shadow hover:bg-amber-600">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="services" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">Qué hacemos</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Servicios integrales de inmigración</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {servicios.map((s) => (
              <div key={s.title} className="group flex h-full flex-col rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="overflow-hidden rounded-xl border border-zinc-100">
                  <img src={s.img} alt={s.title} className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{s.blurb}</p>
                <div className="mt-4">
                  <Link href={s.href} className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800">
                    Más información
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
          <div className="grid items-center gap-6 md:grid-cols-[160px_1fr]">
            <div className="flex flex-col items-center gap-3">
              <img src="/images/testimonials/client.jpg" alt="Foto del cliente" className="h-24 w-24 rounded-full object-cover" />
              <img src="/images/testimonials/logo.png" alt="Logo del cliente" className="h-6 w-auto opacity-70" />
            </div>
            <div>
              <blockquote className="text-xl font-semibold">“Estábamos abrumados por los requisitos. Tu Angel Migratorio convirtió nuestro caso en una historia clara y convincente — y nos aprobaron.”</blockquote>
              <p className="mt-2 text-sm text-zinc-600">Laura G. — Permiso de estudio (tras 1 negativa)</p>
              <Link href="/case-studies" className="mt-2 inline-block text-sm text-zinc-900 underline underline-offset-4 hover:text-amber-600">
                Ver más casos de éxito
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS DE ÉXITO */}
      <section className="border-y border-zinc-100 bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">Conoce nuestro trabajo</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {casosExito.map((c) => (
              <div key={c.title} className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition hover:shadow-md">
                <img src={c.img} alt="Caso de éxito" className="h-44 w-full rounded-xl object-cover" />
                <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
                <Link href={c.href} className="mt-3 inline-block rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600">
                  Ver caso de éxito
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSOTROS + SELLOS */}
      <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Sobre Tu Angel Migratorio</h2>
              <p className="mt-4 text-zinc-600">
                Combinamos experiencia migratoria, documentación meticulosa y acompañamiento humano para que
                alcances tus objetivos de estudio, trabajo, familia o residencia permanente. Comunicación
                clara, precios transparentes y tiempos confiables.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-zinc-100 p-4">
                <p className="text-sm text-zinc-500">Acreditaciones</p>
                <div className="mt-2 flex items-center gap-3">
                  <img src="/images/partners/google-partner.png" className="h-8 w-auto" alt="Insignia de socio (ejemplo)" />
                  <img src="/images/partners/meta-partner.png" className="h-8 w-auto" alt="Insignia de socio (ejemplo)" />
                </div>
              </div>
              <div className="rounded-xl border border-zinc-100 p-4">
                <p className="text-sm text-zinc-500">Idiomas</p>
                <p className="mt-2 font-medium">Español • Inglés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="/images/logo-mark.png" alt="Isotipo" className="h-8 w-8" />
              <span className="text-lg font-bold">Tu Angel Migratorio</span>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm">
              <Link href="/case-studies" className="hover:underline">Casos de éxito</Link>
              <Link href="/approach" className="hover:underline">Proceso</Link>
              <Link href="/pricing" className="hover:underline">Precios</Link>
              <Link href="/about-us" className="hover:underline">Nosotros</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
              <Link href="/contact" className="hover:underline">Contacto</Link>
            </nav>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:underline">Política de Privacidad</Link>
              <Link href="/security" className="hover:underline">Seguridad</Link>
              <Link href="/terms-of-use" className="hover:underline">Términos de Uso</Link>
              <Link href="/cookie-policy" className="hover:underline">Política de Cookies</Link>
            </div>
            <p>© {new Date().getFullYear()} Tu Angel Migratorio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
