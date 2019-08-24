<template>
  <div>
    <div v-for="option in options">
      <div class="h-48 w-64 bg-gray-500 flex items-center justify-center rounded-lg mb-2">
        <h3>{{ option.name }}</h3>
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
    created() {
      // console.log(this.componentId);
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