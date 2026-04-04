<script setup>
import { personalInfo } from '../data/portfolio.js'
</script>

<template>
  <section id="inicio" class="hero">
    <div class="container hero-content">

      <p class="greeting">
        <span class="greeting-wave">👋</span> Hola, soy
      </p>

      <h1 class="hero-name">
        {{ personalInfo.name.split(' ')[0] }}<br />
        <span class="gradient-text">{{ personalInfo.name.split(' ')[1] }}</span>
      </h1>

      <p class="hero-role">
        <strong>AI FullStack Developer</strong>
        <span class="role-dot" aria-hidden="true">·</span>
        MEVN Stack
        <span class="role-dot" aria-hidden="true">·</span>
        Data Science &amp; ML
      </p>

      <p class="hero-description">
        Resido en
        <span class="location">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          {{ personalInfo.location }}
        </span>
        · Construyo aplicaciones web con Vue.js, Node.js, Express y MongoDB.
        Actualmente en formación intensiva en Data Science y Machine Learning con Python.
      </p>

      <!-- CTA buttons -->
      <div class="hero-cta">
        <a href="#proyectos" class="btn btn-primary">
          Ver proyectos
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <a
          :href="personalInfo.github"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          GitHub
        </a>

        <a
          :href="personalInfo.twitter"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
          aria-label="Twitter / X de Domingo Ugas"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Twitter
        </a>

        <a
          :href="personalInfo.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
          aria-label="LinkedIn de Domingo Ugas"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* ── Content ── */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 680px;
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.greeting {
  font-size: 1.125rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.greeting-wave {
  display: inline-block;
  animation: wave 2.5s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0%, 60%, 100% { transform: rotate(0deg); }
  10%           { transform: rotate(18deg); }
  20%           { transform: rotate(-8deg); }
  30%           { transform: rotate(18deg); }
  40%           { transform: rotate(-4deg); }
  50%           { transform: rotate(10deg); }
}

.hero-name {
  font-size: clamp(3.5rem, 11vw, 5.75rem);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.04em;
  margin-bottom: 1.75rem;
}

.hero-role {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.hero-role strong {
  color: var(--text-primary);
  font-weight: 600;
}

.role-dot {
  margin: 0 0.45rem;
  color: var(--text-muted);
}

.hero-description {
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 520px;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.location {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  color: var(--text-secondary);
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* ── Mobile ── */
@media (max-width: 640px) {
  .hero {
    align-items: flex-start;
    padding-top: 1rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .hero-cta .btn {
    justify-content: center;
  }
}
</style>
