<template>
  <main class="flex min-h-screen">
    <Sidebar class="w-2/12 z-50 relative" />
    <div class="w-10/12 relative z-20">
      <Landing />
    </div>
  </main>
</template>

<script>
  import Sidebar from '~/components/Sidebar.vue'
  import Landing from '~/components/Landing.vue'

  export default {
    components: {
      Sidebar,
      Landing
    }
  }
</script>