<template>
  <div v-show="show()" class="toolbar absolute z-50 p-2  m-2 rounded text-right shadow">
    <button class="bg-white px-2 py-1 shadow text-red-500 rounded font-bold hover:bg-red-500 hover:text-white" v-on:click="remove(id)">Remove</button>
  </div>
</template>

<script>
  import Actions from '~/plugins/actions.js'
  export default {
    name: 'Toolbar',
    props: [
      'id',
    ],
    mixins: [Actions],
    methods: {
      show(){
        return this.$route.path === "/builder"
      }
    }
  }
</script>

<style scoped>
  .toolbar {
    background: rgba(255,255,255,0.5);
    backdrop-filter: blur(10px);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>