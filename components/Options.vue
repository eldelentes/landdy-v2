<template>
  <div>
    <div v-for="option in options">
      <div class="w-48  py-5 bg-gray-500 flex items-center justify-center rounded-lg mb-2 flex-col">
        <h3 class="font-bold text-white uppercase pb-2">{{ option.name }}</h3>
        <button value="1" @click="addBlock(option.type ,option.name)" class="bg-black text-white rounded p-2 font-bold">Seleccionar</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Options',
    props: [
      'componentId'
    ],
    data: function () {
      return {
        id: 1,
      }
    },
    computed: {
      options () {
        let i = this.componentId;
        return this.$store.state.components.list[i].types
      }
    },
    methods: {
      addBlock: function(type , option, id) {
        this.id++
        this.$store.commit('landing/add', {type , option, id: this.id} )
      }
    }
  }
</script>