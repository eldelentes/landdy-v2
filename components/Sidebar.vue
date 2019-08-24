<template>
  <div class="flex-1 z-50 sticky h-screen top-0">
    <div class="bg-gray-900 p-2 h-full">
      <h3 class="font-bold uppercase text-xs pb-2 text-white">Bloques Disponibles</h3>
      

      <button @click="getOptions(option.id)" class="w-full bg-gray-800 text-center p-3 rounded cursor-pointer mb-3" v-for="option in options">
        <h4 class="font-bold text-white">{{ option.name }}</h4>
      </button>
    </div>
    
    <div ref="options" @blur="hidePopup" tabindex="-1"class="absolute options z-50 p-2 overflow-y-scroll" v-bind:class="{ active: isActive }">
      <Options :componentId="componentId" />
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
        componentId: 1
      }
    },
    computed: {
      options () {
        return this.$store.state.components.list
      }
    },
    methods: {
      getOptions(id) {
        this.isActive = true;
        this.componentId = id
        this.$refs.options.focus();
      },
      hidePopup () {
			  this.isActive = false;
        this.$el.blur();
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
    outline: 0;
  }

  .options.active {
    transform: translateX(100%);
    opacity: 1;
  }
</style>