export const state = () => ({
  blocks: []
})

export const mutations = {
  add (state, {type, option, id}) {
    state.blocks.push({
      'type' : type,
      'option' : option,
      'id': id
    })
  },
  remove (state, { block }) {
    state.blocks.splice(state.blocks.indexOf(block), 1);
  }
}