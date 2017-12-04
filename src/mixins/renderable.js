export default {
  props:  {
    data: {
      type: Object,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },

  computed: {
    file() {
      return this.path + this.name + this.data.id + '.png'
    },

    getStyle() {
      return {
        position: 'absolute',
        top: (0 || this.data.top) + 'px',
        left: this.data.left + 'px',
        width: this.data.width + 'px',
        height: this.data.height + 'px',
        background: `url(${this.file}) no-repeat`,
      }
    }
  },

}
