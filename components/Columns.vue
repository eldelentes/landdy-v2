<template>
  <section class="section">
    <button class="right-0 absolute bg-white p-1 shadow text-red-500 rounded font-bold" v-on:click="remove(id)">Remove</button>

    <div v-if="type === 'simple'" class="py-5">
      <div class="w-11/12 md:w-1/2 mx-auto text-center pb-5">
        <h4 class="subtitle font-title font-bold text-xl">{{ subtitle }}</h4>
        <h3 class="title font-title font-bold text-2xl"> {{ title}} </h3>
      </div>
      <div class="w-11/12 mx-auto flex justify-center flex-wrap">
        <div v-for="column in columns" class="p-5 w-full md:w-1/4">
          <img :src="column.image" class="rounded-lg overflow pb-5">
          <h3 class="font-bold font-title text-lg pb-5">{{ column.title }}</h3>
          <p class="text">{{ column.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Columns',
    props: [
      'type',
      'id'
    ],
    data(){
      return {
        title: "Servicios a la medida",
        subtitle: "Servicios",
        columns: {
          0: {
            image: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
            title: "Instalación de clima básica",
            text: "Use the power of Webflow CMS to add dynamic content. The whole structure is configured and ready to go. Learn more about Webflow CMS."
          },
          1: {
            image: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
            title: "Instalación de clima básica",
            text: "Use the power of Webflow CMS to add dynamic content. The whole structure is configured and ready to go. Learn more about Webflow CMS."
          },
          2: {
            image: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
            title: "Instalación de clima básica",
            text: "Use the power of Webflow CMS to add dynamic content. The whole structure is configured and ready to go. Learn more about Webflow CMS."
          },
          3: {
            image: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
            title: "Instalación de clima básica",
            text: "Use the power of Webflow CMS to add dynamic content. The whole structure is configured and ready to go. Learn more about Webflow CMS."
          }
        }
      }
    },
    methods: {
      remove(id) {
        this.$emit('remove', id)      
      }
    }
  }
</script>

<style scoped>
  .section { background: var(--color-section-background);}
  .title { color: var(--color-section-title); }
  .subtitle { color: var(--color-section-subtitle); }
  .text { color: var(--color-section-text); }
</style>