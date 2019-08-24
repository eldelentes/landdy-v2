<template>
  <section class="section">
    <Toolbar :id="id" />
    
    <div class="py-5 flex items-center justify-center" v-if="type === 'simple'">
      <div class="text-center w-11/12 md:w-1/2">
        <div class="flex justify-center">
          <Icon v-for="index in reviews[0].stars" class="icon mx-1" icon="star" />
        </div>
        <p class="text text-2xl font-bold py-5">{{ reviews[0].review }}</p>
        <div>
          <h4 class="title font-bold font-title m-0">{{ reviews[0].name }}</h4>
          <h5 class="subtitle m-0 font-bold">{{ reviews[0].position }}</h5>
        </div>
      </div>
    </div>

    <div class="py-5" v-if="type === 'image'">
      <div class="mx-auto w-11/12 flex text-center md:text-left items-center justify-center flex-col md:flex-row">
        <div class="w-full md:w-4/12 pb-5 md:pb-0">
          <img :src="reviews[0].image" class="rounded-lg overflow">
        </div>
        <div class="w-full md:w-5/12 pl-0 md:pl-20">
          <div class="flex justify-center md:justify-start">
            <Icon v-for="index in reviews[0].stars" class="icon mx-1" icon="star" />
          </div>
          <p class="text text-2xl font-bold py-5">{{ reviews[0].review }}</p>
          <div>
            <h4 class="title font-bold font-title m-0">{{ reviews[0].name }}</h4>
            <h5 class="subtitle m-0 font-bold">{{ reviews[0].position }}</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="py-5" v-if="type === 'multiple'">
      <div class="w-11/12 md:w-1/2 mx-auto text-center pb-20">
          <h3 class="title font-bold font-title text-2xl mb-2">{{ title }}</h3>
          <p class="text text-lg leading-relaxed">{{ text }}</p>
      </div>
      <div class="w-11/12 mx-auto flex items-center justify-center flex-col md:flex-row">
        <div v-for="review in reviews" class="text-center w-11/12 md:w-1/3 mx-5">
          <div class="flex justify-center">
            <Icon v-for="index in review.stars" class="icon mx-1" icon="star" />
          </div>
          <p class="text text-xl py-5">{{ review.review }}</p>
          <div>
            <h4 class="title text-sm font-bold font-title m-0">{{ review.name }}</h4>
            <h5 class="subtitle text-sm m-0 font-bold">{{ review.position }}</h5>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
  import Icon from '~/components/Icon.vue'
  import Toolbar from '~/components/Toolbar.vue'
  
  export default {
    name: 'Reviews',
    props: [
      'id',
      'type'
    ],
    components: {
      Icon,
      Toolbar
    },
    data() {
      return {
        title: "Nuestro trabajo habla por nosotros",
        text: "Los servicios que ofrece Climas Monterrey son muy variados, contamos con una oferta de servicios de instalación de climas bastante alta.",
        reviews: {
          0: {
            review: "“El mejor servicio en instalación de climas en todo Monterrey, rápido y eficaz sin pagar una gran cantidad.",
            stars: 5,
            name: "Eduardo Higareda",
            position: "CEO Icalia Labs",
            image: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
          },
          1: {
            review: "“El mejor servicio en instalación de climas en todo Monterrey, rápido y eficaz sin pagar una gran cantidad.",
            stars: 4,
            name: "Eduardo Higareda",
            position: "CEO Icalia Labs",
            image: null,
          },
          2: {
            review: "“El mejor servicio en instalación de climas en todo Monterrey, rápido y eficaz sin pagar una gran cantidad.",
            stars: 5,
            name: "Eduardo Higareda",
            position: "CEO Icalia Labs",
            image: null,
          }
        }
      }
    }
  }
</script>

<style scoped>
  .section { background: var(--color-section-background);}
  .title { color: var(--color-section-title); }
  .subtitle { color: var(--color-section-subtitle); }
  .text { color: var(--color-section-text); }
  .icon { color: var(--color-section-title); }
</style>