<template>
  <div>
    <div v-for="variant in variants">
      <div class="h-48 w-64 bg-gray-500 flex items-center justify-center rounded-lg mb-2">
        <button value="1" @click="selectOption(variant.name)" class="bg-black text-white rounded p-2 font-bold">Seleccionar</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Options',
    data: function () {
      return {
        variants: {
          1: { name: 'Cover' },
          2: { name: 'Form' },
          3: { name: 'Split' }
        }
      }
    },
    methods: {
      selectOption(value){
        console.log(value)
      }
    }
  }
</script>