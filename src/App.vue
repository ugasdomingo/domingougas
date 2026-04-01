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
main {
  padding-top: var(--nav-height);
}
</style>
