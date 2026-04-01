<script setup>
import { bootcampInfo, bootcampCompetencies, education } from '../data/portfolio.js'
</script>

<template>
  <section id="formacion" class="learning">
    <div class="container">

      <h2 class="section-title">📚 Formación</h2>

      <!-- ── Bootcamp card (En curso) ── -->
      <div class="bootcamp-card card">
        <div class="bootcamp-header">
          <div>
            <div class="bootcamp-meta">
              <span class="live-badge">
                <span class="live-dot" aria-hidden="true"></span>
                En curso
              </span>
              <span class="bootcamp-period">{{ bootcampInfo.startDate }} — {{ bootcampInfo.endDate }}</span>
              <span class="bootcamp-duration">· {{ bootcampInfo.duration }}</span>
            </div>
            <h3 class="bootcamp-title">{{ bootcampInfo.program }}</h3>
            <a
              :href="bootcampInfo.url"
              target="_blank"
              rel="noopener noreferrer"
              class="bootcamp-school-link"
            >
              {{ bootcampInfo.school }}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
          <div class="bootcamp-icon-wrap" aria-hidden="true">🎓</div>
        </div>
      </div>

      <!-- ── Competencies ── -->
      <div class="competencies-block">
        <h3 class="block-heading">Competencias que adquiriré</h3>
        <p class="block-sub">
          Al finalizar el bootcamp dominaré las siguientes áreas de ciencia de datos e inteligencia artificial,
          combinándolas con mis habilidades actuales en desarrollo web.
        </p>

        <div class="competencies-grid">
          <div
            v-for="comp in bootcampCompetencies"
            :key="comp.title"
            class="comp-card card"
          >
            <div class="comp-icon" aria-hidden="true">{{ comp.icon }}</div>
            <h4 class="comp-title">{{ comp.title }}</h4>
            <p class="comp-desc">{{ comp.description }}</p>
          </div>
        </div>
      </div>

      <!-- ── Education history ── -->
      <div class="edu-block">
        <h3 class="block-heading">Estudios y formación previa</h3>

        <div class="edu-list">
          <div
            v-for="(edu, i) in education"
            :key="i"
            :class="['edu-item card', { 'edu-item--current': edu.status === 'current' }]"
          >
            <div class="edu-left">
              <div class="edu-type-badge" :class="edu.status === 'current' ? 'badge--current' : 'badge--done'">
                {{ edu.type }}
              </div>
              <div class="edu-period">{{ edu.period }}</div>
            </div>

            <div class="edu-body">
              <div class="edu-title-row">
                <h4 class="edu-title">{{ edu.title }}</h4>
                <a
                  v-if="edu.url"
                  :href="edu.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="edu-school-link"
                >
                  {{ edu.school }}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <span v-else class="edu-school">{{ edu.school }}</span>
              </div>
              <p class="edu-desc">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── Bootcamp card ── */
.bootcamp-card {
  padding: 1.75rem 2rem;
  margin-bottom: 3rem;
  border-color: rgba(56, 189, 248, 0.2);
  background: linear-gradient(135deg, var(--bg-card) 70%, rgba(56, 189, 248, 0.04));
}

.bootcamp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.bootcamp-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-bottom: 0.625rem;
}

.live-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #4ade80;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.25);
  padding: 0.175rem 0.6rem;
  border-radius: 9999px;
}

.live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse-dot 1.8s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.65); }
}

.bootcamp-period,
.bootcamp-duration {
  font-size: 0.8125rem;
  color: var(--text-muted);
}

.bootcamp-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.4rem;
}

.bootcamp-school-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--accent);
  transition: opacity 0.2s;
}

.bootcamp-school-link:hover {
  opacity: 0.75;
}

.bootcamp-icon-wrap {
  font-size: 2.5rem;
  flex-shrink: 0;
  opacity: 0.7;
}

/* ── Section blocks ── */
.competencies-block,
.edu-block {
  margin-bottom: 3.5rem;
}

.block-heading {
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.block-sub {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 620px;
  margin-bottom: 1.75rem;
}

/* ── Competencies grid ── */
.competencies-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.875rem;
}

.comp-card {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: border-color 0.2s, transform 0.2s;
}

.comp-card:hover {
  border-color: rgba(56, 189, 248, 0.25);
  transform: translateY(-2px);
}

.comp-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.comp-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
}

.comp-desc {
  font-size: 0.8125rem;
  color: var(--text-muted);
  line-height: 1.65;
  flex: 1;
}

/* ── Education list ── */
.edu-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.edu-item {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 1.5rem;
  padding: 1.25rem 1.5rem;
  align-items: start;
}

.edu-item--current {
  border-color: rgba(56, 189, 248, 0.2);
}

.edu-left {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding-top: 0.125rem;
}

.edu-type-badge {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.15rem 0.55rem;
  border-radius: 9999px;
  width: fit-content;
}

.badge--current {
  background: var(--accent-dim);
  color: var(--accent);
  border: 1px solid rgba(56, 189, 248, 0.25);
}

.badge--done {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-muted);
  border: 1px solid var(--border);
}

.edu-period {
  font-size: 0.78125rem;
  color: var(--text-muted);
  line-height: 1.4;
}

.edu-body {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.edu-title-row {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.edu-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.edu-school-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8125rem;
  color: var(--accent);
  flex-shrink: 0;
  transition: opacity 0.2s;
}

.edu-school-link:hover {
  opacity: 0.75;
}

.edu-school {
  font-size: 0.8125rem;
  color: var(--text-muted);
  flex-shrink: 0;
}

.edu-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.65;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .competencies-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .competencies-grid {
    grid-template-columns: 1fr;
  }

  .edu-item {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .edu-left {
    flex-direction: row;
    align-items: center;
  }

  .bootcamp-icon-wrap {
    display: none;
  }
}
</style>
