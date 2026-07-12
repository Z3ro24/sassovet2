# Agent Instructions: Website Structure for Veterinarian Home Service

## 1. Project Overview
*   **Business:** Veterinary Home Service (Veterinaria a domicilio).
*   **Target Locations:** Rancagua, Machalí, Olivar (O'Higgins Region, Chile).
*   **Goal:** Build a multi-page informational website optimized for local SEO to rank independently in each target commune, solving the issue of diluted search relevance.

---

## 2. Website Architecture & URL Structure
The site must follow a strict multi-page layout. Every page requires specific local SEO meta tags.

*   ` / ` (Home) -> General service overview.
*   ` /servicios ` -> Details of veterinary services offered at home.
*   ` /veterinaria-a-domicilio-rancagua ` -> Location landing page for Rancagua.
*   ` /veterinaria-a-domicilio-machali ` -> Location landing page for Machalí.
*   ` /veterinaria-a-domicilio-olivar ` -> Location landing page for Olivar.
*   ` /contacto ` -> Contact form and direct WhatsApp links.

---

## 3. Page-by-Page Technical Specifications

### 3.1. Home Page (Inicio)
*   **Meta Title:** Veterinaria a Domicilio | Atención Médica de Mascotas
*   **Meta Description:** Servicio veterinario profesional en la comodidad de tu hogar. Atendemos en Rancagua, Machalí y Olivar. Evita el estrés del traslado. ¡Agenda por WhatsApp!
*   **H1:** `<h1>Servicio Veterinario a Domicilio para tus Mascotas</h1>`
*   **Key Sections:**
    *   Hero section with a clear Call to Action (CTA): "Agendar Visita".
    *   Benefits of home care (stress-free, convenience).
    *   **Crucial SEO Section:** "Zonas de Cobertura" featuring 3 distinct visual cards linking to the respective location pages (Rancagua, Machalí, Olivar).

### 3.2. Location Page: Machalí
*   **Meta Title:** Veterinaria a Domicilio en Machalí | Cuidado Profesional
*   **Meta Description:** Médicos veterinarios van a tu casa en Machalí. Atención médica, vacunas y controles sin salir de tu hogar. Cobertura en San Juan, El Polo y más.
*   **H1:** `<h1>Veterinario a Domicilio en Machalí</h1>`
*   **Content Rules:**
    *   Must explicitly mention local landmarks/sectors: *Avenida San Juan, Escrivá de Balaguer, El Polo, Nogales, Machalí Centro*.
    *   Contextual text: Mention avoiding traffic on Carretera del Cobre.
    *   CTA: "Agendar Veterinario en Machalí".

### 3.3. Location Page: Rancagua
*   **Meta Title:** Veterinaria a Domicilio en Rancagua | Atención Médica
*   **Meta Description:** Llevamos la clínica veterinaria al hogar de tu mascota en Rancagua. Vacunas, consultas y exámenes a domicilio. ¡Reserva tu hora hoy!
*   **H1:** `<h1>Veterinaria a Domicilio en Rancagua</h1>`
*   **Content Rules:**
    *   Must explicitly mention local sectors: *Rancagua Norte, Sector Sur, Centro, Manzanal, Bosques de San Francisco*.
    *   CTA: "Agendar Veterinario en Rancagua".

### 3.4. Location Page: Olivar
*   **Meta Title:** Veterinaria a Domicilio en Olivar | Consulta Veterinaria
*   **Meta Description:** Servicio veterinario a domicilio en la comuna de Olivar. Atención profesional para perros y gatos en Olivar Alto, Olivar Bajo y Gultro.
*   **H1:** `<h1>Servicio Veterinario a Domicilio en Olivar</h1>`
*   **Content Rules:**
    *   Must explicitly mention local sectors: *Olivar Alto, Olivar Bajo, Gultro*.
    *   CTA: "Agendar Veterinario en Olivar".

---

## 4. Global Elements (Header & Footer)

### 4.1. Header Navigation
*   Must include a "Zonas de Cobertura" dropdown menu linking directly to the 3 location pages.
*   Sticky navigation bar on scroll for easy access to the contact CTA.

### 4.2. Global Footer Specification
The footer must be global, persistent across all pages, and specifically optimized for local SEO interlinking.
*   **Layout:** 3-column layout on desktop, stacking into a single column on mobile. Dark contrast background.

#### Column 1: Contact Info (Contáctanos)
*   Include Vet Logo or Icon.
*   Text: Phone: [Insert Phone] (with `tel:` link).
*   Text: WhatsApp: [Insert WhatsApp Number] (with `https://wa.me/` link).
*   Text: Email: [Insert Email] (with `mailto:` link).

#### Column 2: Local SEO Interlinking (Nuestra Cobertura)
*   **Header:** `<h3>Nuestra Cobertura</h3>`
*   **Bullet list with exact internal links:**
    *   `* <a href="/veterinaria-a-domicilio-rancagua">Rancagua</a>`
    *   `* <a href="/veterinaria-a-domicilio-machali">Machalí</a>`
    *   `* <a href="/veterinaria-a-domicilio-olivar">Olivar</a>`
*   *Developer Note: These exact links are mandatory on every page to distribute search authority (link juice) to the location pages.*

#### Column 3: Business Hours (Horario de Atención)
*   Text: Lunes a Sábado: 9:00 - 19:00 hrs.
*   Text: Urgencias: Consultar Disponibilidad.
*   **CTA Button:** "Reservar Hora Online" (Triggers WhatsApp chat).

#### Bottom Bar (Sub-footer)
*   Copyright notice: `© 2026 [Nombre Marca]. Todos los derechos reservados.`
*   Links to: Política de Privacidad | Términos de Servicio.

---

## 5. SEO & Copywriting Guidelines for the Agent
1.  **No Duplicate Content:** The texts for Machalí, Rancagua, and Olivar cannot be identical copy-pastes with just the city name swapped. Google will penalize this. Rewrite the paragraphs naturally for each city.
2.  **Keyword Proximity:** Ensure the primary keyword (e.g., *veterinaria a domicilio machali*) appears within the first 100 words of its respective page.
3.  **Local Context:** Keep the tone close, trustworthy, and heavily referenced to the O'Higgins region lifestyle.
