# GUÍA PARA AGREGAR NUEVAS EMPRESAS AL DIRECTORIO EUREK.MX

## Documento de Auditoría y Procedimientos

**Versión:** 1.0
**Última actualización:** Diciembre 2024
**Autor:** Equipo de Desarrollo EUREK.MX

---

## ÍNDICE

1. [Introducción](#1-introducción)
2. [Información Requerida de la Empresa](#2-información-requerida-de-la-empresa)
3. [Estructura de Archivos](#3-estructura-de-archivos)
4. [Paso 1: Crear la Card en la Categoría](#4-paso-1-crear-la-card-en-la-categoría)
5. [Paso 2: Crear la Página de Perfil de Empresa](#5-paso-2-crear-la-página-de-perfil-de-empresa)
6. [Guía de Redacción SEO](#6-guía-de-redacción-seo)
7. [Checklist de Publicación](#7-checklist-de-publicación)
8. [Templates de Código](#8-templates-de-código)

---

## 1. INTRODUCCIÓN

Este documento establece los procedimientos estándar para agregar nuevas empresas al directorio empresarial EUREK.MX. Seguir esta guía garantiza consistencia en el diseño, optimización SEO y una experiencia de usuario profesional.

### Principios de Diseño

- **Sin animaciones ni transiciones**: El sitio mantiene un diseño limpio y estático
- **Diseño dark theme**: Fondo oscuro con acentos en azul (#007AFF)
- **Mobile-first responsive**: Todos los elementos deben verse correctamente en dispositivos móviles
- **SEO optimizado**: Cada página debe incluir meta tags, Schema.org y contenido optimizado

---

## 2. INFORMACIÓN REQUERIDA DE LA EMPRESA

Antes de comenzar, recopile la siguiente información de la empresa:

### Datos Básicos (Obligatorios)

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| Nombre comercial | Nombre oficial de la empresa | Proyecto Red |
| Slug URL | Nombre en formato URL (minúsculas, guiones) | proyecto-red |
| Iniciales | 2 letras para el logo placeholder | PR |
| Tagline | Frase corta que define a la empresa | Protegiendo tu seguridad, defendiendo tu futuro |
| Categoría | Categoría principal del directorio | equipos-contra-incendios |

### Información de Contacto (Obligatorios)

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| Ciudad y Estado | Ubicación principal | Ciudad de México, CDMX |
| Dirección completa | Calle, colonia, CP | Paseo de la Reforma 26, Col. Juárez, 06600 |
| Correo electrónico | Email de contacto | info@proyectored.com.mx |
| Teléfono | Número con formato | +52 55 5555 5555 |
| WhatsApp | Número para enlace wa.me | 5215555555555 |
| Sitio web | URL completa | https://proyectored.com.mx/ |
| Horario de atención | Días y horas | Lun - Vie: 9:00 - 18:00 |

### Contenido Descriptivo (Obligatorios)

| Campo | Descripción | Longitud Recomendada |
|-------|-------------|---------------------|
| Descripción corta (card) | Para la tarjeta en categoría | 150-200 palabras |
| Descripción larga (perfil) | Para la página de perfil | 3-4 párrafos |
| Párrafos de marketing (hero) | Contenido SEO para el hero | 2 párrafos extensos |
| Servicios/Productos | Lista de servicios principales | 4-8 elementos |

### Badges y Certificaciones

| Badge | Clase CSS | Cuándo Usar |
|-------|-----------|-------------|
| Verificada | `badge-verified` | Empresa con datos verificados |
| Premium | `badge-premium` | Empresas con plan de pago |
| ISO 9001 | `badge-iso` | Certificación ISO |
| Top 10 | `badge-top` | Empresas mejor calificadas |
| Distribuidor Autorizado | `badge-iso` | Distribuidores oficiales |

---

## 3. ESTRUCTURA DE ARCHIVOS

### Ubicación de Archivos

```
EUREK.MX/
├── categorias/
│   └── [nombre-categoria]/
│       ├── index.html          ← Aquí va la CARD de la empresa
│       └── empresa/
│           └── [slug-empresa]/
│               └── index.html  ← Aquí va el PERFIL completo
```

### Ejemplo Real

```
EUREK.MX/
├── categorias/
│   └── equipos-contra-incendios/
│       ├── index.html                              ← Card de Proyecto Red
│       └── empresa/
│           └── proyecto-red/
│               └── index.html                      ← Perfil de Proyecto Red
```

### Crear la Carpeta de la Empresa

```bash
mkdir -p categorias/[categoria]/empresa/[slug-empresa]
```

---

## 4. PASO 1: CREAR LA CARD EN LA CATEGORÍA

La card de empresa se agrega en el archivo `categorias/[categoria]/index.html` dentro del contenedor `<div class="companies-grid-pro">`.

### Ubicación en el HTML

Buscar la sección:
```html
<div class="companies-grid-pro">
  <!-- Aquí van las cards de empresas -->
</div>
```

### Template de Card de Empresa

```html
<!-- [NOMBRE EMPRESA] -->
<article class="company-card-pro">
  <div class="company-card-header">
    <div class="company-logo-pro">
      <span>[INICIALES]</span>
    </div>
    <div class="company-header-info">
      <div class="company-badges-pro">
        <span class="badge badge-verified">Verificada</span>
        <span class="badge badge-premium">Premium</span>
        <!-- Agregar más badges según corresponda -->
      </div>
      <h3 class="company-name-pro">[NOMBRE EMPRESA]</h3>
      <p class="company-tagline-pro">[TAGLINE DE LA EMPRESA]</p>
    </div>
  </div>

  <div class="company-card-body">
    <p class="company-desc-pro"><strong>[NOMBRE EMPRESA]</strong> [DESCRIPCIÓN OPTIMIZADA PARA SEO - Incluir palabras clave en negritas, mencionar ubicación, servicios principales y diferenciadores. Extensión: 150-200 palabras aproximadamente.]</p>

    <div class="company-services-pro">
      <span class="service-chip">[Servicio 1]</span>
      <span class="service-chip">[Servicio 2]</span>
      <span class="service-chip">[Servicio 3]</span>
      <span class="service-chip">[Servicio 4]</span>
      <span class="service-chip">[Servicio 5]</span>
    </div>

    <div class="company-info-grid">
      <div class="company-info-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span>[Ciudad, Estado]</span>
      </div>
      <div class="company-info-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <a href="mailto:[EMAIL]">[EMAIL]</a>
      </div>
      <div class="company-info-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <a href="[URL SITIO WEB]" target="_blank" rel="noopener">[dominio.com]</a>
      </div>
      <div class="company-info-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span>[TELÉFONO]</span>
      </div>
    </div>
  </div>

  <div class="company-card-footer">
    <a href="/categorias/[CATEGORIA]/empresa/[SLUG]/" class="btn-ver-perfil">Ver Perfil Completo</a>
    <a href="https://wa.me/[WHATSAPP]" target="_blank" rel="noopener" class="btn-whatsapp-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      WhatsApp
    </a>
  </div>
</article>
```

---

## 5. PASO 2: CREAR LA PÁGINA DE PERFIL DE EMPRESA

Crear el archivo `index.html` en la carpeta de la empresa con la estructura completa.

### Estructura del Perfil de Empresa

El perfil de empresa consta de las siguientes secciones:

1. **Head** - Meta tags, SEO, Schema.org
2. **Breadcrumb** - Navegación jerárquica
3. **Hero** - Presentación principal (2 columnas)
4. **Contenido Principal** - Información detallada
5. **Sidebar** - Información complementaria

### Template Completo de Perfil

```html
<!doctype html>
<html lang="es-MX">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>[NOMBRE EMPRESA] | [CATEGORÍA] en [CIUDAD] | EUREK.MX</title>
  <link rel="stylesheet" href="/css/style.css">
  <meta name="description" content="[NOMBRE EMPRESA] - [Descripción breve de 150-160 caracteres incluyendo servicios principales y ubicación]">
  <meta name="keywords" content="[palabra clave 1], [palabra clave 2], [palabra clave 3], [ciudad], [servicios]">

  <!-- Open Graph -->
  <meta property="og:title" content="[NOMBRE EMPRESA] | [CATEGORÍA] | EUREK.MX">
  <meta property="og:type" content="business.business">
  <meta property="og:url" content="https://eurek.mx/categorias/[CATEGORIA]/empresa/[SLUG]/">
  <meta property="og:image" content="https://eurek.mx/img/empresas/[SLUG]-og.jpg">
  <meta property="og:description" content="[Descripción para redes sociales - 200 caracteres max]">
  <meta property="og:locale" content="es_MX">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#0a1628">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "[NOMBRE EMPRESA]",
    "description": "[Descripción de la empresa]",
    "url": "[URL SITIO WEB EMPRESA]",
    "telephone": "[TELÉFONO CON FORMATO +52-XX-XXXX-XXXX]",
    "email": "[EMAIL]",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[CALLE Y NÚMERO]",
      "addressLocality": "[CIUDAD]",
      "addressRegion": "[ESTADO]",
      "postalCode": "[CP]",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": [LATITUD],
      "longitude": [LONGITUD]
    }
  }
  </script>
</head>

<body>
  <!-- Header Component -->
  <div id="header-placeholder"></div>

  <!-- Breadcrumb Bar -->
  <div class="breadcrumb-bar">
    <div class="container">
      <nav class="breadcrumb" aria-label="Navegación">
        <div class="breadcrumb-item">
          <a href="/" class="breadcrumb-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Inicio</span>
          </a>
        </div>
        <span class="breadcrumb-separator">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>
        <div class="breadcrumb-item">
          <a href="/categorias/" class="breadcrumb-link">
            <span>Categorías</span>
          </a>
        </div>
        <span class="breadcrumb-separator">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>
        <div class="breadcrumb-item">
          <a href="/categorias/[CATEGORIA]/" class="breadcrumb-link">
            <span>[Nombre Categoría]</span>
          </a>
        </div>
        <span class="breadcrumb-separator">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>
        <div class="breadcrumb-item">
          <span class="breadcrumb-current">[NOMBRE EMPRESA]</span>
        </div>
      </nav>
    </div>
  </div>

  <!-- Company Hero - DOS COLUMNAS -->
  <section class="company-hero">
    <div class="company-hero-background">
      <div class="company-hero-gradient"></div>
      <div class="company-hero-pattern"></div>
      <div class="company-hero-glow"></div>
    </div>
    <div class="container">
      <div class="company-hero-grid">
        <!-- Columna Izquierda - Info de Empresa -->
        <div class="company-hero-left">
          <div class="company-hero-header">
            <div class="company-hero-logo">
              <span class="company-logo-text">[INICIALES]</span>
            </div>
            <div class="company-hero-info">
              <div class="company-hero-badges">
                <span class="badge badge-verified">Verificada</span>
                <span class="badge badge-premium">Premium</span>
                <!-- Más badges según corresponda -->
              </div>
              <h1 class="company-hero-title">[NOMBRE EMPRESA]</h1>
              <p class="company-hero-tagline">[TAGLINE]</p>
            </div>
          </div>
          <div class="company-hero-meta">
            <div class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>[Ciudad, Estado]</span>
            </div>
            <div class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Contactar</span>
            </div>
            <div class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>[HORARIO]</span>
            </div>
          </div>
          <div class="company-hero-actions">
            <a href="[URL SITIO WEB]" target="_blank" rel="noopener noreferrer" class="btn btn-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Visitar Sitio Web
            </a>
            <a href="https://wa.me/[WHATSAPP]" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Columna Derecha - Contenido Marketing SEO -->
        <div class="company-hero-right">
          <div class="company-hero-marketing">
            <p class="marketing-paragraph"><strong>[NOMBRE EMPRESA]</strong> [PÁRRAFO 1 DE MARKETING - Incluir información sobre la empresa, su trayectoria, certificaciones, diferenciadores competitivos. Usar negritas para palabras clave SEO importantes como nombre de empresa, certificaciones, ubicación.]</p>
            <p class="marketing-paragraph">[PÁRRAFO 2 DE MARKETING - Describir servicios, tipos de clientes que atienden, alcance geográfico, cumplimiento de normas. Incluir palabras clave en negritas: servicios, ubicación, normativas (NOM, NFPA, ISO).]</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Company Main Content -->
  <section class="company-main">
    <div class="container">
      <div class="company-layout">
        <!-- Main Content -->
        <div class="company-content-main">

          <!-- Sección: Acerca de -->
          <div class="company-section">
            <h2 class="company-section-title">Acerca de [NOMBRE EMPRESA]</h2>
            <div class="company-about">
              <p>[Párrafo 1 - Historia y trayectoria de la empresa]</p>
              <p>[Párrafo 2 - Misión y valores]</p>
              <p>[Párrafo 3 - Experiencia y clientes atendidos]</p>
            </div>
          </div>

          <!-- Sección: Productos y Servicios -->
          <div class="company-section">
            <h2 class="company-section-title">Productos y Servicios</h2>
            <div class="services-grid-detail">
              <!-- Repetir este bloque por cada servicio (4-8 servicios) -->
              <div class="service-card-detail">
                <div class="service-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <!-- Icono SVG apropiado -->
                  </svg>
                </div>
                <h3 class="service-card-title">[Nombre del Servicio]</h3>
                <p class="service-card-desc">[Descripción breve del servicio - 2-3 líneas]</p>
              </div>
            </div>
          </div>

          <!-- Sección: Certificaciones -->
          <div class="company-section">
            <h2 class="company-section-title">Certificaciones y Acreditaciones</h2>
            <div class="certifications-grid">
              <!-- Repetir por cada certificación -->
              <div class="certification-card">
                <div class="certification-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <!-- Icono SVG -->
                  </svg>
                </div>
                <h4 class="certification-title">[Nombre Certificación]</h4>
                <p class="certification-desc">[Descripción breve de la certificación]</p>
              </div>
            </div>
          </div>

          <!-- Sección: Información de Contacto -->
          <div class="company-section">
            <h2 class="company-section-title">Información de Contacto</h2>
            <div class="contact-info-grid">
              <div class="contact-info-card">
                <div class="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="contact-info-content">
                  <h4>Dirección</h4>
                  <p>[Calle y número]<br>[Colonia, Delegación/Municipio]<br>[Ciudad, CP]</p>
                </div>
              </div>
              <div class="contact-info-card">
                <div class="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="contact-info-content">
                  <h4>Correo Electrónico</h4>
                  <p><a href="mailto:[EMAIL]">[EMAIL]</a></p>
                </div>
              </div>
              <div class="contact-info-card">
                <div class="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div class="contact-info-content">
                  <h4>Sitio Web</h4>
                  <p><a href="[URL]" target="_blank" rel="noopener noreferrer">[dominio.com]</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <aside class="company-sidebar">

          <!-- Card: Contacto Rápido -->
          <div class="sidebar-card sidebar-card-primary">
            <h3 class="sidebar-card-title">Contacta a [NOMBRE EMPRESA]</h3>
            <p class="sidebar-card-desc">Solicita una cotización o más información sobre sus productos y servicios.</p>
            <div class="sidebar-card-actions">
              <a href="mailto:[EMAIL]" class="btn btn-white btn-block">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Enviar Correo
              </a>
              <a href="[URL SITIO WEB]" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-block">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                Visitar Sitio Web
              </a>
            </div>
          </div>

          <!-- Card: Categorías Relacionadas -->
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Categorías Relacionadas</h3>
            <ul class="sidebar-list">
              <li>
                <a href="/categorias/[CATEGORIA]/[SUBCATEGORIA]/">
                  <span class="sidebar-list-text">[Subcategoría 1]</span>
                  <span class="sidebar-list-count">[###]</span>
                </a>
              </li>
              <!-- Repetir 4-5 subcategorías -->
            </ul>
          </div>

          <!-- Card: Empresas Similares -->
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Empresas Similares</h3>
            <div class="sidebar-companies">
              <a href="/empresa/[SLUG]/" class="sidebar-company">
                <div class="sidebar-company-logo">[XX]</div>
                <div class="sidebar-company-info">
                  <span class="sidebar-company-name">[Nombre Empresa]</span>
                  <span class="sidebar-company-location">[Ciudad]</span>
                </div>
              </a>
              <!-- Repetir 3-4 empresas -->
            </div>
          </div>

          <!-- Card: Artículos de Interés -->
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Artículos de Interés</h3>
            <div class="sidebar-articles">
              <a href="/blog/[SLUG-ARTICULO]/" class="sidebar-article">
                <span class="sidebar-article-category">[Categoría]</span>
                <h4 class="sidebar-article-title">[Título del artículo]</h4>
              </a>
              <!-- Repetir 3-4 artículos -->
            </div>
          </div>

          <!-- Card: Etiquetas -->
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Etiquetas</h3>
            <div class="sidebar-tags">
              <a href="/buscar/?tag=[TAG]" class="sidebar-tag">[Tag 1]</a>
              <a href="/buscar/?tag=[TAG]" class="sidebar-tag">[Tag 2]</a>
              <!-- Repetir 6-8 tags -->
            </div>
          </div>

        </aside>
      </div>
    </div>
  </section>

  <!-- Footer Component -->
  <div id="footer-placeholder"></div>

  <!-- Scripts -->
  <script src="/js/components.js"></script>
</body>

</html>
```

---

## 6. GUÍA DE REDACCIÓN SEO

### Principios de Redacción

1. **Palabras clave en negritas**: Usar `<strong>` para destacar términos importantes
2. **Densidad de keywords**: 2-3% del contenido total
3. **Contenido único**: No copiar texto de otras fuentes
4. **Enfoque local**: Incluir siempre ciudad y estado
5. **Términos de industria**: Usar vocabulario técnico relevante

### Estructura de Párrafos de Marketing (Hero)

#### Párrafo 1: Presentación y Credenciales
- Nombre de la empresa en negritas
- Tipo de empresa/industria
- Certificaciones o acreditaciones
- Diferenciadores competitivos
- Años de experiencia (si aplica)

**Ejemplo:**
> **Proyecto Red** es tu aliado estratégico en **protección contra incendios en México**. Como distribuidores autorizados de **Elkhart Brass**, una de las marcas más prestigiosas a nivel mundial en equipos de combate de incendios, garantizamos productos de calidad superior respaldados por décadas de innovación y excelencia en seguridad industrial.

#### Párrafo 2: Servicios y Alcance
- Ubicación geográfica
- Tipos de clientes
- Lista de servicios principales
- Cumplimiento normativo
- Alcance geográfico

**Ejemplo:**
> Desde nuestra ubicación en el corazón de la **Ciudad de México**, atendemos a empresas, industrias, corporativos, hospitales, centros comerciales y dependencias gubernamentales en toda la República Mexicana. Ofrecemos soluciones integrales que incluyen **extintores certificados**, **sistemas de detección y supresión de incendios**, **equipo profesional para bomberos**, **señalización de seguridad** conforme a la normativa NOM, y equipos de **primeros auxilios** para cumplir con los más altos estándares de protección civil y seguridad laboral.

### Descripción de Card (150-200 palabras)

**Estructura recomendada:**
1. Nombre de empresa + descripción principal
2. Certificaciones o diferenciadores
3. Servicios principales
4. Tipos de clientes
5. Ubicación/alcance

**Ejemplo:**
> **Proyecto Red** es distribuidor autorizado de **Elkhart Brass**, marca líder mundial en equipos de combate contra incendios. Ofrecemos soluciones integrales en **extintores certificados**, señalización de seguridad conforme a NOM, equipo profesional para bomberos y brigadas, gabinetes, mangueras contra incendio y sistemas de protección. Atendemos empresas, industrias, hospitales y gobierno en toda la **Ciudad de México** y República Mexicana.

---

## 7. CHECKLIST DE PUBLICACIÓN

Antes de publicar una nueva empresa, verificar los siguientes puntos:

### Información Básica
- [ ] Nombre de empresa correcto
- [ ] Slug URL en formato correcto (minúsculas, guiones)
- [ ] Iniciales para logo placeholder (2 letras)
- [ ] Tagline atractivo y relevante

### Contacto
- [ ] Email válido y probado
- [ ] Teléfono con formato correcto
- [ ] WhatsApp con código de país (521...)
- [ ] Sitio web funcional
- [ ] Dirección completa y correcta

### SEO
- [ ] Title tag optimizado (máx. 60 caracteres)
- [ ] Meta description (150-160 caracteres)
- [ ] Keywords relevantes
- [ ] Schema.org completo
- [ ] Open Graph tags

### Contenido
- [ ] Descripción de card (150-200 palabras)
- [ ] Párrafos de marketing con SEO
- [ ] Sección "Acerca de" (3 párrafos)
- [ ] Servicios con descripciones
- [ ] Certificaciones documentadas

### Estructura
- [ ] Card agregada en la categoría correcta
- [ ] Carpeta de empresa creada
- [ ] Breadcrumb correcto
- [ ] Enlaces internos funcionando
- [ ] Sidebar con contenido relevante

### Visual
- [ ] Badges correctos aplicados
- [ ] Servicios chips actualizados
- [ ] Información de contacto visible
- [ ] Botones de WhatsApp funcionando

---

## 8. TEMPLATES DE CÓDIGO

### SVG Icons Disponibles

Los iconos SVG utilizados en las cards y perfiles están estandarizados. A continuación los más comunes:

#### Icono de Ubicación
```html
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
  <circle cx="12" cy="10" r="3"></circle>
</svg>
```

#### Icono de Email
```html
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
  <polyline points="22,6 12,13 2,6"></polyline>
</svg>
```

#### Icono de Sitio Web
```html
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="12" cy="12" r="10"></circle>
  <line x1="2" y1="12" x2="22" y2="12"></line>
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
```

#### Icono de Teléfono
```html
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
```

#### Icono de WhatsApp (completo)
```html
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
</svg>
```

---

## NOTAS FINALES

### Mantenimiento

- Revisar periódicamente que los enlaces externos funcionen
- Actualizar información de contacto cuando la empresa notifique cambios
- Agregar nuevas certificaciones cuando la empresa las obtenga

### Soporte

Para dudas sobre este proceso, contactar al equipo de desarrollo de EUREK.MX.

---

**Documento creado por el equipo de desarrollo de EUREK.MX**
**Última actualización: Diciembre 2024**
