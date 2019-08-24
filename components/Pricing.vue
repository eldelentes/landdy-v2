<template>
  <section class="section">
    <Toolbar :id="id" />

    <div v-if="type === 'simple'" class="py-5">
      <div class="w-11/12 mx-auto">
        <div class="text-center pb-5">
          <h4 class="subtitle font-title font-bold text-xl">{{ subtitle }}</h4>
          <h3 class="title font-title font-bold text-2xl"> {{ title}} </h3>
        </div>
        <div class="flex justify-center items-start flex-col md:flex-row">

          <div class="pricing rounded-lg border-2 inline-block m-0 mb-2 md:mb-0 md:m-2 w-full md:w-1/3" v-for="item in items">
            <div class="text-center py-5 border-b-2 pricing">
              <h5 class="font-bold font-title text">{{ item.name }}</h5>
              <span class="title block pb-2 text-4xl font-bold">$500 mxn</span>
              <h5 class="text pb-4 text-lg">50% más barato que la competencia.</h5>
              <button class="button font-bold text-white text-center px-4 py-3 rounded-full">Solicitar Cotización</button>
            </div>
            <div>
              <ul>
                <li class="p-5 flex" v-for="item in item.list">
                  <Icon icon="check" class="icon pt-1 mr-2" />
                  <div>
                    <h3 class="font-bold title">{{ item.title }}</h3>
                    <p class="text">{{ item.text }}</p>
                  </div>
                </li>
              </ul>
            </div>
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
    name: 'Pricing',
    components: {
      Icon,
      Toolbar,
    },
    props: [
      'type',
      'id'
    ],
    data() {
      return {
        subtitle: 'Precio',
        title: 'Aprovecha nuestra promoción por temporada',
        items: {
          0: {
            name: 'Premium',
            value: '$500mxn',
            description: '50% más barato que la competencia.',
            button: 'Solicitar Cotización',
            buttonUrl: '#',
            list: {
              0: {
                title: 'Instalación básica',
                text: 'Contamos con instalación básica de climas de 1, 2 y 3 toneladas.'
              },
              1: {
                title: 'Instalación básica',
                text: 'Contamos con instalación básica de climas de 1, 2 y 3 toneladas.'
              },
              2: {
                title: 'Instalación básica',
                text: 'Contamos con instalación básica de climas de 1, 2 y 3 toneladas.'
              }
            }
          },
          1: {
            name: 'PRO',
            value: '$500mxn',
            description: '50% más barato que la competencia.',
            button: 'Solicitar Cotización',
            buttonUrl: '#',
            list: {
              0: {
                title: 'Instalación básica',
                text: 'Contamos con instalación básica de climas de 1, 2 y 3 toneladas.'
              },
              1: {
                title: 'Instalación básica',
                text: 'Contamos con instalación básica de climas de 1, 2 y 3 toneladas.'
              }
            }
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

  .button {
    color: var(--button-text-color);
    background: var(--button-background-color);
  }

  .icon { color: var(--color-section-title); }

  .pricing {
    background: var(--pricing-bg);
    border-color: var(--pricing-border);
  }
</style>