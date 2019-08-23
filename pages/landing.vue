<template>
  <main>
    <Nav type="simple"/>
    <Hero
      type="cover"
      bgColor_A="rgba(0,0,0,0.5)"
      bgColor_B="rgba(0,0,0,0.2)"
    />
    <Reviews type="multiple" />
    <Content type="simple-left" />
    <Content type="image" />
    <Content type="simple-right" />
    <Features type="list" />
    <Pricing type="simple" />
    <Columns type="simple" />
  </main>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Nav from '~/components/Nav.vue'
import Content from '~/components/Content.vue'
import Features from '~/components/Features.vue'
import Pricing from '~/components/Pricing.vue'
import Reviews from '~/components/Reviews.vue'
import Columns from '~/components/Columns.vue'

export default {
  components: {
    Nav,
    Hero,
    Content,
    Features,
    Pricing,
    Reviews,
    Columns
  }
}
</script>