import renderable from '../mixins/renderable.js'

export default {

  mixins: [ renderable ],

  props:  {
    name: {
      type: String,
      default: 'branch',
    },
  },

  render(h) {
    return h('div', {
      style: this.getStyle
    })
  }

}
