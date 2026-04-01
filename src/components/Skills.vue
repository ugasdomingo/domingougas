<script setup>
import { skills } from '../data/portfolio.js'
</script>

<template>
  <section id="habilidades" class="skills">
    <div class="container">

      <h2 class="section-title">🛠️ Habilidades</h2>

      <div class="skills-grid">
        <div
          v-for="group in skills"
          :key="group.label"
          :class="['skill-group card', { 'skill-group--learning': group.accent }]"
        >
          <div class="group-header">
            <span class="group-icon" aria-hidden="true">{{ group.icon }}</span>
            <h3 class="group-label">{{ group.label }}</h3>
            <span v-if="group.accent" class="learning-badge">En curso</span>
          </div>

          <div class="tags-row">
            <span
              v-for="skill in group.items"
              :key="skill"
              :class="['tag', group.accent ? 'tag-accent' : 'tag-default']"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

/* ── Skill group card ── */
.skill-group {
  padding: 1.5rem;
}

.skill-group--learning {
  border-color: rgba(56, 189, 248, 0.2);
  background: linear-gradient(135deg, var(--bg-card) 80%, rgba(56, 189, 248, 0.04));
}

.group-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.group-icon {
  font-size: 1rem;
  line-height: 1;
}

.group-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  flex: 1;
}

.learning-badge {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 9999px;
  background: var(--accent-dim);
  color: var(--accent);
  border: 1px solid rgba(56, 189, 248, 0.25);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* ── Tags ── */
.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

/* ── Mobile ── */
@media (max-width: 640px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
