<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Learning from './components/Learning.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app">

    <!-- Zonas de iluminación fijas — estilo midu.dev -->
    <div class="page-bg" aria-hidden="true"></div>

    <NavBar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Learning />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app {
  position: relative;
}

main {
  padding-top: var(--nav-height);
  position: relative;
  z-index: 1;
}

:deep(header) { z-index: 100; }

/*
  Zonas de iluminación fijas — estilo midu.dev.
  Sin patrón de fondo, solo blobs de luz radial en distintas posiciones
  que permanecen fijos mientras el usuario scrollea.

  Zona 1 (::before) — top-left  → sky-blue  (color principal del portfolio)
  Zona 2 (::after)  — top-right → indigo     (color secundario)
  Zona 3 (bg propio) — three blobs via multiple backgrounds:
    · bottom-left  faint sky-blue
    · center-right faint indigo
    · top-center   very faint sky-blue (profundidad al hero)
*/
.page-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(ellipse 55% 45% at 5%  15%, rgba(56,  189, 248, 0.13) 0%, transparent 65%),
    radial-gradient(ellipse 40% 35% at 95% 20%, rgba(129, 140, 248, 0.11) 0%, transparent 60%),
    radial-gradient(ellipse 35% 30% at 15% 85%, rgba(56,  189, 248, 0.07) 0%, transparent 55%),
    radial-gradient(ellipse 45% 30% at 85% 75%, rgba(129, 140, 248, 0.07) 0%, transparent 55%),
    radial-gradient(ellipse 60% 25% at 50% -5%, rgba(56,  189, 248, 0.06) 0%, transparent 70%);
}
</style>
