<template>
  <main class="flex items-center h-screen">
    <Sidebar class="w-2/12 z-30" />
    <div class="w-10/12 relative">
      <Hero type="form" />
    </div>
  </main>
</template>

<script>
  import Sidebar from '~/components/Sidebar.vue'

  import Hero from '~/components/Hero.vue'
  import Nav from '~/components/Nav.vue'

  export default {
    components: {
      Sidebar,
      Nav,
      Hero
    }
  }
</script>