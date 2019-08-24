export default {
  methods: {
    remove(id) {
      this.$store.commit('landing/remove', id )
    }
  },
  props: [
    'id',
  ]
}