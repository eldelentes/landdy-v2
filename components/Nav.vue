<template>
  <nav>

    <div v-if="type === 'location'">

      <div class="fixed w-full z-20">
        <div class="w-11/12 mx-auto py-4 flex justify-between items-center">

          <div>
            <h2 class="font-bold font-title text-xl logo">Climas Regios</h2>
          </div>

          <div class="flex justify-between">

            <div class="pl-4 items-center hidden md:flex">
              <Icon class="icon" icon="location"/>
              <div class="pl-4 leading-tight">
                <a class="link font-bold block" href="#">Juan I. Ramón #806, <br> Monterrey, N,L</a>
              </div>
            </div>

            <div class="pl-4 items-center hidden md:flex">
              <Icon class="icon" icon="phone"/>
              <div class="pl-4 leading-tight">
                <a class="link font-bold block" href="#">811 652 0878</a>
                <a class="link font-bold block" href="#">climasregios@gmail.com</a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>

    <div v-if="type === 'simple'">
      <div class="fixed w-full z-20">
        <div class="w-11/12 mx-auto py-2 flex justify-between items-center">

          <div>
            <h2 class="font-bold font-title text-xl logo">Climas Regios</h2>
          </div>

          <div class="flex justify-between">

            <div class="pl-4 items-center hidden md:flex">
              <a class="font-bold link" href="#">Instagram</a>
            </div>

            <div class="pl-4 items-center">
              <button class="button font-bold text-white text-center px-4 py-3 rounded-full w-full">Solicitar Cotización</button>
            </div>

          </div>

        </div>
      </div>

    </div>
  </nav>
</template>

<script>
  import Icon from '~/components/Icon.vue'

  export default {
    name: 'Nav',
    components: {
      Icon
    },
    props: [
      'type',
      'hasLogo'
    ]
  }
</script>

<style scoped>
  .logo { color: var(--nav-logo-color); }
  .link { color: var(--nav-link-color); }
  .icon { color: var(--nav-icon-color); }

  .button {
    color: var(--button-text-color);
    background: var(--button-background-color);
  }

</style>