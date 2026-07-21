<script setup>
import { impactMetrics } from '../data/portfolio.js'
</script>

<template>
  <section id="sobre-mi" class="about">
    <div class="container">
      <h2 class="section-title">Sobre mí</h2>

      <div class="about-grid">
        <div class="about-text">
          <p class="lead">
            Soy un desarrollador full stack en Madrid que une producto, código y datos.
            Mi base es MEVN, mi ventaja es haber trabajado más de una década en marketing,
            y mi nueva capa es la ciencia de datos, los agentes IA y la automatización
            aplicadas a productos reales.
          </p>

          <p>
            Construyo aplicaciones con Vue, Node, Express y MongoDB, cuidando tanto la arquitectura
            como la experiencia de usuario. No me quedo en “que funcione”: pienso en métricas,
            conversión, comunicación y en cómo una decisión técnica afecta al negocio.
          </p>

          <p>
            Me gradué del bootcamp de Data Science & Machine Learning de 4Geeks Academy y llevo
            esa mirada full stack hacia pipelines, modelos predictivos, agentes IA con RAG y MCP,
            y automatización de procesos con n8n y Make.
          </p>

          <div class="about-badges">
            <span class="tag tag-accent">Madrid, España</span>
            <span class="tag tag-green">Disponible para trabajar</span>
            <span class="tag tag-default">Full stack + data mindset</span>
          </div>
        </div>

        <div class="about-stats">
          <div v-for="metric in impactMetrics" :key="metric.label" class="stat-card card">
            <div class="stat-number">{{ metric.value }}</div>
            <div class="stat-label">{{ metric.label }}</div>
          </div>
        </div>
      </div>

      <div class="positioning-card">
        <div>
          <span class="positioning-kicker">Perfil diferencial</span>
          <h3>Marketing + ingeniería + IA aplicada</h3>
        </div>
        <p>
          Es una mezcla poco común: entiendo el producto antes de escribir código, desarrollo el
          sistema completo y sumo la capa de datos e IA para medir, predecir y automatizar.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 390px;
  gap: 3rem;
  align-items: start;
}

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

.about-text .lead {
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  line-height: 1.45;
  color: var(--text-primary);
  font-weight: 650;
}

.about-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}

.stat-card {
  min-height: 9.2rem;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
}

.stat-card::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 3px;
  background: var(--accent-gradient);
  opacity: 0.85;
}

.stat-number {
  font-size: clamp(1.8rem, 4vw, 2.7rem);
  font-weight: 900;
  color: var(--text-primary);
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 600;
  line-height: 1.35;
}

.positioning-card {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 0.72fr 1fr;
  gap: 2rem;
  padding: 1.5rem;
  border: 1px solid rgba(45, 212, 191, 0.2);
  border-radius: 0.85rem;
  background:
    linear-gradient(135deg, rgba(45, 212, 191, 0.1), transparent 45%),
    rgba(255, 255, 255, 0.035);
}

.positioning-kicker {
  display: block;
  color: var(--accent-3);
  font-size: 0.74rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.45rem;
}

.positioning-card h3 {
  font-size: 1.25rem;
  line-height: 1.25;
}

.positioning-card p {
  color: var(--text-secondary);
  line-height: 1.75;
}

@media (max-width: 900px) {
  .about-grid,
  .positioning-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .about-stats {
    grid-template-columns: 1fr;
  }
}
</style>
