import renderable from '../mixins/renderable.js'

export default {

  mixins: [ renderable ],

  data() {
    return {
      touched: false,
      audio: null,
    }
  },

  props:  {
    name: {
      type: String,
      default: 'ball',
    },
    sound: {
      type: Boolean,
      default: true,
    },
  },

  created() {
    this.audio = new Audio(this.path + 'holiday_bells.mp3')
  },

  computed: {
    myClass() {
      const direction = Math.random() > 0.5 ? 'left' : 'right'

      return {
        'ball': true,
        [direction]: true,
        'touched': this.touched,
      }
    },
    myStyle() {
      return Object.assign(this.getStyle, {
        transformOrigin: '50% 0',
        transition: 'all .3s ease-in-out',
      })
    },
  },

  render(h) {
    const vm = this
    return h('div', {
      class: vm.myClass,
      style: vm.myStyle,
      on: {
        mouseenter() {
          if (vm.sound)
            vm.audio.play()

          vm.touched = true
          setTimeout(() => {
            vm.touched = false
          }, 1500);
        },
      },
    })
  }

}
