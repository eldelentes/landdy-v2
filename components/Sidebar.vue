<template>
  <div class="h-full flex-1 relative">
    <div class="bg-gray-900 p-2 h-full">
      <h3 class="font-bold uppercase text-xs pb-2 text-white">Bloques Disponibles</h3>
      
      <button @click="getOptions()" class="w-full bg-gray-800 text-center p-3 rounded cursor-pointer mb-3">
        <h4 class="font-bold text-white">Encabezados</h4>
      </button>

      <button @click="getOptions()" class="w-full bg-gray-800 text-center p-3 rounded cursor-pointer mb-3">
        <h4 class="font-bold text-white">Encabezados</h4>
      </button>
    </div>
    
    <div class="absolute options p-2 overflow-y-scroll" v-bind:class="{ active: isActive }">
      <Options />
    </div>
  </div>
</template>

<script>
  import Options from '~/components/Options.vue'

  export default {
    name: 'Sidebar',
    components: {
      Options
    },
    data() {
      return {
        isActive: false,
      }
    },
    methods: {
      getOptions() {
        this.isActive = true
      }
    }
  }
</script>

<style scoped>
  .options {
    top: 0;
    bottom: 0;
    right: 0;
    transform: translateX(100%);
    opacity: 0;
  }

  .options.active {
    transform: translateX(100%);
    opacity: 1;
  }
</style>