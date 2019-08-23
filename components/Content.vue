<template>
  <section>

    <div v-if="type === 'simple-right'" class="py-5 section">
      <div class="w-11/12 mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-center py-20">
        <div class="w-full md:w-1/2">
          <div class="p-2 md:p-0 md:pr-20">
            <h3 class="title font-bold font-title text-2xl mb-2">{{ title }}</h3>
            <p class="text text-lg leading-relaxed">{{ text }}</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 text-center">
          <img :src="image" class="rounded-lg overflow">
        </div>
      </div>
    </div>

    <div v-if="type === 'simple-left'" class="py-5 section">
      <div class="w-11/12 mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-center py-20">
        <div class="w-full md:w-1/2 text-center">
          <img :src="image" class="rounded-lg overflow">
        </div>
        <div class="w-full md:w-1/2">
          <div class="p-2 md:p-0 md:pl-20">
            <h3 class="title font-bold font-title text-2xl mb-2">{{ title }}</h3>
            <p class="text text-lg leading-relaxed">{{ text }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="type === 'image'" class="py-40 bg-cover bg-center relative" v-bind:style="{ backgroundImage: `url(${image})` }">
      <div class="text-center w-11/12 md:w-1/2 mx-auto bg-center relative z-10">
        <h3 class="title font-bold font-title text-2xl mb-2">{{ title }}</h3>
        <p class="text text-lg leading-relaxed">{{ text }}</p>
      </div>
      <div class="inset-0 absolute bg-black opacity-25"></div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Content',
  props: [
    'type'
  ],
  data() {
    return {
      image: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
      title: "Somos los mejores instalando climas.",
      text: "We strive on providing high quality dental care in a relaxing, comfortable and safe environment. Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Eaque ipsa quae ab illo inventore veritatis et quasi. Et harum quidem rerum facilis est et expedita distinctio."
    }
  }
}
</script>

<style scoped>
  .section { background: var(--color-section-background);}
  .title { color: var(--color-section-title); }
  .text { color: var(--color-section-text); }
</style>