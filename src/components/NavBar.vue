<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header :class="['navbar', { 'navbar--scrolled': scrolled }]">
    <div class="container nav-inner">

      <!-- ── Logo ─────────────────────────────────────────
           Replace the .logo-placeholder div with an <img>
           tag pointing to your logo file when it's ready.
           Example:
             <img src="/logo.svg" alt="Domingo Ugas" class="logo-img" />
      ─────────────────────────────────────────────────── -->
      <a href="#inicio" class="logo" aria-label="Ir al inicio">
        <div class="logo-placeholder" aria-hidden="true">DU</div>
      </a>

      <!-- ── Navigation links ── -->
      <nav class="nav-links" aria-label="Navegación principal">
        <a href="#sobre-mi"   class="nav-link">Sobre mí</a>
        <a href="#habilidades" class="nav-link">Habilidades</a>
        <a href="#proyectos"  class="nav-link">Proyectos</a>
        <a href="#formacion"  class="nav-link">Formación</a>
      </nav>

      <!-- ── GitHub CTA ── -->
      <a
        href="https://github.com/ugasdomingo"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary github-btn"
        aria-label="Perfil de GitHub de Domingo Ugas"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        GitHub
      </a>

    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  border-bottom: 1px solid transparent;
  transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
}

.navbar--scrolled {
  background: rgba(9, 9, 11, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom-color: var(--border);
}

.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* ── Logo ── */
.logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

/*
  Logo placeholder — two-letter monogram with gradient background.
  When you have a real logo, remove this block and add:

    .logo-img { height: 2rem; width: auto; }
*/
.logo-placeholder {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  background: var(--accent-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 800;
  color: #07090a;
  letter-spacing: -0.02em;
  transition: transform 0.2s, opacity 0.2s;
  user-select: none;
}

.logo:hover .logo-placeholder {
  transform: scale(1.06);
  opacity: 0.9;
}

/* ── Nav links ── */
.nav-links {
  display: flex;
  gap: 0.125rem;
  flex: 1;
}

.nav-link {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  color: var(--text-muted);
  border-radius: 0.375rem;
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
}

/* ── GitHub button ── */
.github-btn {
  flex-shrink: 0;
  font-size: 0.8125rem;
  padding: 0.4rem 0.875rem;
}

/* ── Mobile: hide nav links ── */
@media (max-width: 600px) {
  .nav-links {
    display: none;
  }

  .nav-inner {
    justify-content: space-between;
  }
}
</style>
