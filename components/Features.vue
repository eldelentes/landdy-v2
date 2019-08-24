<template>
  <section class="section">
    <Toolbar :id="id" />

    <div v-if="type === 'list'" class="py-5">
      <div class="w-11/12 mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-center py-20">
        <div>
          <div class="text-center w-full md:w-8/12 mx-auto pb-12">
            <h3 class="title font-bold font-title text-2xl mb-2">{{ title }}</h3>
            <p class="text text-lg leading-relaxed">{{ text }}</p>
          </div>
          <ul class="flex justify-center flex-col md:flex-row flex-wrap">
            <li class="w-full md:w-1/4 p-4 text-center mb-5 md:mb-0" v-for="item in items">
              <div class="icon w-12 h-12 rounded-full mx-auto mb-4"></div>
              <h4 class="title font-bold font-title pb-2">{{ item.title }}</h4>
              <p class="text">{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Toolbar from '~/components/Toolbar.vue'

  export default {
    name: 'Features',
    props: [
      'type',
      'id'
    ],
    components: {
      Toolbar
    },
    data() {
      return {
        title: "Servicios",
        text: "Los servicios que ofrece Climas Monterrey son muy variados, contamos con una oferta de servicios de instalación de climas bastante alta.",
        items: {
          0: {
            icon: "cog",
            title: "Instalación básica",
            text: "Contamos con instalación básica de climas de 1, 2 y 3 toneladas."
          },
          1: {
            icon: "cog",
            title: "Instalación básica",
            text: "Contamos con instalación básica de climas de 1, 2 y 3 toneladas."
          },
          2: {
            icon: "cog",
            title: "Instalación básica",
            text: "Contamos con instalación básica de climas de 1, 2 y 3 toneladas."
          },
          3: {
            icon: "cog",
            title: "Instalación básica",
            text: "Contamos con instalación básica de climas de 1, 2 y 3 toneladas."
          }
        }
      }
    }
  }
</script>

<style scoped>
  .section { background: var(--color-section-background);}
  .title { color: var(--color-section-title); }
  .text { color: var(--color-section-text); }
  .icon { background: var(--color-brand); }
</style>