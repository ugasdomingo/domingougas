<template>
  <section id="sobre-mi" class="about">
    <div class="container">

      <h2 class="section-title">🧑‍💻 Sobre mí</h2>

      <div class="about-grid">

        <!-- Text -->
        <div class="about-text">
          <p>
            Soy un <strong>AI FullStack Developer</strong> basado en Madrid, España.
            Me especializo en el stack <strong>MEVN</strong> (MongoDB, Express, Vue.js, Node.js)
            con TypeScript y construyo aplicaciones web desde 2021.
          </p>
          <p>
            Antes de la programación acumulé <strong>más de 10 años de experiencia en marketing</strong>,
            incluyendo la dirección de mi propia <strong>agencia de marketing</strong> antes de la pandemia.
            Esa visión de negocio me diferencia: no solo codifico, entiendo el producto, al usuario y
            el impacto real de cada decisión técnica.
          </p>
          <p>
            Actualmente amplío mis capacidades con un bootcamp intensivo de
            <strong>Data Science y Machine Learning</strong> en 4Geeks Academy,
            con el objetivo de combinar mis habilidades web con inteligencia artificial
            para construir productos más inteligentes y data-driven.
          </p>

          <div class="about-badges">
            <span class="tag tag-accent">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Madrid, España
            </span>
            <span class="tag tag-green">
              Disponible para trabajar
            </span>
          </div>
        </div>

        <!-- Stats -->
        <div class="about-stats">
          <div class="stat-card card">
            <div class="stat-number">4<span class="stat-plus">+</span></div>
            <div class="stat-label">Años en desarrollo web</div>
          </div>
          <div class="stat-card card">
            <div class="stat-number">10<span class="stat-plus">+</span></div>
            <div class="stat-label">Años en marketing</div>
          </div>
          <div class="stat-card card">
            <div class="stat-number gradient-text">MEVN</div>
            <div class="stat-label">Stack principal</div>
          </div>
          <div class="stat-card card">
            <div class="stat-number">DS</div>
            <div class="stat-label">Bootcamp en curso</div>
          </div>
        </div>

      </div>

      <!-- Marketing background callout -->
      <div class="marketing-callout card">
        <div class="callout-icon" aria-hidden="true">📣</div>
        <div class="callout-body">
          <h3 class="callout-title">Perfil único: Marketing + Tecnología</h3>
          <p class="callout-text">
            Lideré una agencia de marketing antes de la pandemia y fui marketer profesional durante más de una década.
            Hoy ese conocimiento me permite desarrollar productos digitales con visión estratégica:
            entiendo métricas, funnel de conversión, experiencia de usuario y cómo la tecnología sirve al negocio.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 3rem;
  align-items: start;
  margin-bottom: 2rem;
}

/* ── Text block ── */
.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.about-text p {
  color: var(--text-secondary);
  line-height: 1.85;
  font-size: 1rem;
}

.about-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

.about-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.about-badges .tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

/* ── Stats grid ── */
.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.25rem 0.75rem;
  gap: 0.35rem;
}

.stat-number {
  font-size: 1.875rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;
}

.stat-plus {
  font-size: 1.25rem;
  color: var(--accent);
}

.stat-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
}

/* ── Marketing callout ── */
.marketing-callout {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem;
  align-items: flex-start;
  border-color: rgba(129, 140, 248, 0.2);
  background: linear-gradient(135deg, var(--bg-card) 75%, rgba(129, 140, 248, 0.05));
}

.callout-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 0.1rem;
}

.callout-body {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.callout-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.callout-text {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.75;
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-stats {
    width: 100%;
  }

  .marketing-callout {
    flex-direction: column;
    gap: 0.875rem;
  }
}
</style>
