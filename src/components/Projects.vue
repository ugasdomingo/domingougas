<script setup>
import { ref, computed, onMounted } from 'vue'
import { projects, recentSites } from '../data/portfolio.js'

// Force-check already-cached images after mount
onMounted(() => {
  document.querySelectorAll('.site-img').forEach(img => {
    if (img.complete && img.naturalWidth > 0) img.classList.add('loaded')
  })
})

const filters = [
  { key: 'all',         label: 'Todos' },
  { key: 'fullstack',   label: 'FullStack' },
  { key: 'client',      label: 'Clientes' },
  { key: 'datascience', label: 'Data Science' },
]

const activeFilter = ref('all')

const filtered = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)
</script>

<template>
  <section id="proyectos" class="projects">
    <div class="container">

      <h2 class="section-title">🚀 Proyectos</h2>

      <!-- ── Galería de proyectos recientes terminados ── -->
      <div class="recent-block">
        <h3 class="recent-heading">Proyectos recientes terminados</h3>
        <div class="recent-grid">
          <a
            v-for="site in recentSites"
            :key="site.url"
            :href="site.url"
            target="_blank"
            rel="noopener noreferrer"
            class="site-card"
            :aria-label="`Visitar ${site.name}`"
          >
            <div class="site-img-wrap">
              <div class="site-skeleton" aria-hidden="true"></div>
              <img
                :src="site.screenshot"
                :alt="`Hero de ${site.name}`"
                class="site-img"
                loading="lazy"
                @load="(e) => e.target.classList.add('loaded')"
              />
              <div class="site-overlay">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                <span>Visitar sitio</span>
              </div>
            </div>
            <div class="site-info">
              <span class="site-name">{{ site.name }}</span>
              <span class="site-desc">{{ site.description }}</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Filter tabs -->
      <div class="filter-tabs" role="tablist" aria-label="Filtrar proyectos">
        <button
          v-for="f in filters"
          :key="f.key"
          :class="['filter-btn', { active: activeFilter === f.key }]"
          role="tab"
          :aria-selected="activeFilter === f.key"
          @click="activeFilter = f.key"
        >
          {{ f.label }}
        </button>
      </div>

      <!-- Grid -->
      <div class="projects-grid">
        <article
          v-for="project in filtered"
          :key="project.id"
          :class="['project-card card', { 'project-card--featured': project.featured }]"
        >

          <div class="card-header">
            <h3 class="project-name">{{ project.name }}</h3>
            <div class="card-links">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="icon-link"
                :aria-label="`Código de ${project.name} en GitHub`"
                title="Ver en GitHub"
              >
                <!-- GitHub -->
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="icon-link"
                :aria-label="`Ver demo de ${project.name}`"
                title="Ver demo"
              >
                <!-- External link -->
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          <p class="project-desc">{{ project.description }}</p>

          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag tag-default">
              {{ tag }}
            </span>
          </div>

          <!-- Starred badge -->
          <div v-if="project.featured" class="featured-pill" aria-label="Proyecto destacado">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Destacado
          </div>

        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── Filter tabs ── */
.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.filter-btn {
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
  font-family: inherit;
  line-height: 1.5;
}

.filter-btn:hover {
  color: var(--text-secondary);
  border-color: var(--border-hover);
}

.filter-btn.active {
  background: var(--accent);
  color: #07090a;
  border-color: var(--accent);
  font-weight: 600;
}

/* ── Grid ── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

/* ── Card ── */
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 1.5rem;
}

.project-card:hover {
  box-shadow: 0 0 0 1px rgba(56, 189, 248, 0.08), 0 8px 32px rgba(0, 0, 0, 0.4);
}

.project-card--featured {
  border-color: rgba(56, 189, 248, 0.18);
}

/* ── Card header ── */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
}

.project-name {
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.card-links {
  display: flex;
  gap: 0.25rem;
  flex-shrink: 0;
}

.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  color: var(--text-muted);
  transition: color 0.2s, background 0.2s;
}

.icon-link:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
}

/* ── Description ── */
.project-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.7;
  flex: 1;
}

/* ── Tags ── */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: auto;
}

/* ── Featured pill ── */
.featured-pill {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: var(--accent-dim);
  color: var(--accent);
  border: 1px solid rgba(56, 189, 248, 0.25);
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.175rem 0.55rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

/* Push title away from badge when featured */
.project-card--featured .card-header {
  padding-right: 5.5rem;
}

/* ── Mobile ── */
@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* ═══════════════════════════════════════════
   Galería — Proyectos recientes terminados
═══════════════════════════════════════════ */
.recent-block {
  margin-bottom: 3.5rem;
}

.recent-heading {
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.recent-heading::before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 1.1em;
  border-radius: 9999px;
  background: var(--accent-gradient);
  flex-shrink: 0;
}

/* 3 columnas iguales */
.recent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

/* ── Cada tarjeta ── */
.site-card {
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg-card);
  text-decoration: none;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}

.site-card:hover {
  border-color: rgba(56, 189, 248, 0.35);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(56, 189, 248, 0.1);
}

/* ── Imagen con overlay ── */
.site-img-wrap {
  position: relative;
  width: 100%;
  /* 16:9 aspect ratio */
  padding-top: 56.25%;
  overflow: hidden;
  background: var(--bg-secondary);
}

/* Skeleton mientras carga */
.site-skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    var(--bg-secondary) 25%,
    rgba(56, 189, 248, 0.06) 50%,
    var(--bg-secondary) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.6s infinite;
}

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.site-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.4s ease, filter 0.3s;
}

.site-img.loaded {
  opacity: 1;
}

.site-card:hover .site-img {
  transform: scale(1.04);
  filter: brightness(0.6);
}

/* Overlay que aparece al hover */
.site-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  opacity: 0;
  transition: opacity 0.25s;
  pointer-events: none;
}

.site-card:hover .site-overlay {
  opacity: 1;
}

/* ── Footer de la tarjeta ── */
.site-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.875rem 1rem;
}

.site-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.site-desc {
  font-size: 0.78125rem;
  color: var(--text-muted);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .recent-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .recent-grid {
    grid-template-columns: 1fr;
  }
}
</style>
