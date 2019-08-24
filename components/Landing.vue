<template>
    <div class="relative z-50">
        <component @remove="remove" v-for="block in blocks" v-bind:is="block.type" :id="block.id" :key="block.id" :type="block.option"></component>
    </div>
</template>

<script>
    import Hero from '~/components/Hero.vue'
    import Nav from '~/components/Nav.vue'
    import Content from '~/components/Content.vue'
    import Features from '~/components/Features.vue'
    import Pricing from '~/components/Pricing.vue'
    import Reviews from '~/components/Reviews.vue'
    import Columns from '~/components/Columns.vue'
    import { mapMutations } from 'vuex'

  export default {
    name: 'Landing',
    components: {
        Nav,
        Hero,
        Content,
        Features,
        Pricing,
        Reviews,
        Columns
    },
    computed: {
        blocks () {
            return this.$store.state.landing.blocks
        }
    },
    methods: {
        remove(id) {
         this.$store.commit('landing/remove', id)
        }  
    }
  }
</script>