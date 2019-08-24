<template>
    <div class="relative">
      <button class="right-0 absolute bg-white p-1 shadow text-red-500 rounded font-bold z-20" v-on:click="remove(id)">Remove</button>
      <div v-if="type === 'form'">
        <section class="min-h-screen flex items-center bg-gray-500 bg-cover bg-center" v-bind:style="{ backgroundImage: `url(${cover})` }">
          <div class="w-11/12 mx-auto max-w-6xl flex flex-col md:flex-row justify-center py-20 relative z-20">
            <div class="w-full md:w-6/12 mr-10 text-center md:text-left mb-2 md:mb-0">
              <h3 class="text-xl font-bold font-title subtitle">{{ subtitle }}</h3>
              <h2 class="text-3xl md:text-5xl font-bold leading-tight py-2 font-title title">{{ title }}</h2>
              <p class="text-lg description">{{ description }}</p>
            </div>

            <div class="w-full md:w-4/12">
              <div class="bg-white p-5 rounded-lg">
                <h3 class="font-bold font-title text-gray-600">Solicita tu cotización</h3>
                <form class="py-2">
                  <div class="pb-2">
                    <label class="font-bold block pb-1">Nombre</label>
                    <input type="text" placeholder="Nombre" class="w-full border p-2 text-base rounded focus:outline-none">
                  </div>
                  <div class="pb-2">
                    <label class="font-bold block pb-1">Email</label>
                    <input type="text" placeholder="Email" class="w-full border p-2 text-base rounded focus:outline-none">
                  </div>
                  <div class="pb-2">
                    <label class="font-bold block pb-1">Dirección</label>
                    <input type="text" placeholder="Dirección" class="w-full border p-2 text-base rounded focus:outline-none">
                  </div>
                  <button class="button font-bold text-white text-center px-4 py-3 rounded-full w-full">Solicitar Cotización</button>
                  <div class="text-center pt-2">
                    <span class="font-bold text-gray-500">Obtén un 50% menos</span>
                  </div>
                </form>
              </div>
            </div>

          </div>
          <div class="inset-0 absolute z-10" v-bind:style="{ background: coverGradient }"></div>
        </section>
      </div>

      <div v-if="type === 'split'">
        <section class="min-h-auto md:h-screen flex flex-col md:flex-row items-center bg-gray-500">
          <div class="h-full w-full md:w-1/2 flex items-center justify-center py-24 md:py-0">
            <div class="w-10/12">
              <h3 class="text-xl font-bold font-title subtitle">{{ subtitle }}</h3>
              <h2 class="text-3xl md:text-5xl font-bold leading-tight py-2 font-title title">{{ title }}</h2>
              <button class="button font-bold text-white text-center px-6 py-3 rounded-full">Solicitar Cotización</button>
            </div>
          </div>
          <div class="h-64 md:h-full w-full md:w-1/2 overflow-hidden relative bg-cover bg-center " v-bind:style="{ backgroundImage: `url(${cover})` }">
            <div class="inset-0 absolute z-10" v-bind:style="{ background: coverGradient }"></div>
          </div>
        </section>
      </div>

      <div v-if="type === 'cover'">
        <section class="min-h-screen flex items-center justify-center bg-cover bg-center" v-bind:style="{ backgroundImage: `url(${cover})` }">
          <div class="w-11/12 md:w-1/2 text-center relative z-20">
              <h3 class="text-2xl font-bold font-title subtitle">{{ subtitle }}</h3>
              <h2 class="text-5xl md:text-5xl font-bold leading-tight py-2 font-title title">{{ title }}</h2>
              <button class="button font-bold text-white text-xl text-center px-6 py-3 rounded-full">Solicitar Cotización</button>
          </div>
          <div class="inset-0 absolute z-10" v-bind:style="{ background: coverGradient }"></div>
        </section>
      </div>

    </div>
</template>

<script>
  export default {
    name: 'Hero',
    data: function () {
      return {
        title: "Diseño profesional para redes sociales ilimitado.",
        subtitle: "Destaca entre la competencia",
        description: "Este verano obtén la instalación de tu clima en monterrey a un precio exageradamente barato. No te dejes engañar por la competencía nosotros somos los mejores instalando climas.",
        cover: "https://images.unsplash.com/photo-1562184760-a11b3cf7c169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      }
    },
    props: [
      'type',
      'bgColor_A',
      'bgColor_B',
      'id'
    ],
    computed: {
      coverGradient(){
        return `linear-gradient(0deg, ${ this.bgColor_B } 0%, ${ this.bgColor_A } 100%)`
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
  .title { color: var(--hero-title-color); }
  .subtitle { color: var(--hero-text-color); }
  .description { color: var(--hero-text-color); }

  .button {
    color: var(--button-text-color);
    background: var(--button-background-color);
  }
</style>