<template>
  <div :style="backgroundStyle()" ref="holiday">
    <div v-for="section in sections"
      :style="sectionStyle(section)"
    >
      <ball v-for="ball in balls"
        :key="ball.id"
        :data="ball"
        :path="path"
        :sound="sound"
      ></ball>

      <branch v-for="branch in branches"
        :key="branch.id"
        :data="branch"
        :path="path"
      ></branch>

    </div>
  </div>

  </div>
</template>

<script>
import Ball from './Ball.js'
import Branch from './Branch.js'

export default {

  components: {
    ball: Ball,
    branch: Branch,
  },

  data() {
    return {
      sectionCount: 1,
    }
  },

  props: {
    path: {
      type: String,
      default: '/images/holiday/',
    },
    sound: {
      type: Boolean,
      default: true,
    },
    height: {
      type: Number,
      default: 115,
    },
    sectionWidth: {
      type: Number,
      default: 373,
    },
    balls: {
      type: Array,
      default: () => [
        { id: 1, top: 0,   left: 3,   width: 59, height: 83 },
        { id: 2, top: -19, left: 51,  width: 55, height: 70 },
        { id: 3, top: 9,   left: 88,  width: 49, height: 67 },
        { id: 4, top: 0,   left: 133, width: 57, height: 102 },
        { id: 5, top: 0,   left: 166, width: 49, height: 57 },
        { id: 6, top: 6,   left: 200, width: 54, height: 70 },
        { id: 7, top: 0,   left: 240, width: 56, height: 67 },
        { id: 8, top: 0,   left: 283, width: 54, height: 53 },
        { id: 9, top: 10,  left: 321, width: 49, height: 66 },
      ],
    },
    branches: {
      type: Array,
      default: () => [
        { id: 1, left: 0,   width: 25, height: 71 },
        { id: 2, left: 25,  width: 61, height: 27 },
        { id: 3, left: 176, width: 29, height: 31 },
        { id: 4, left: 205, width: 50, height: 51 },
        { id: 5, left: 289, width: 78, height: 28 },
        { id: 6, left: 367, width: 6,  height: 69 },
      ],
    },
  },

  mounted() {
    this.sectionCount = this.getSectionCount()
  },

  computed: {
    sections() {
      var sections = []
      for (var i = 0; i < this.sectionCount; i++)
        sections.push( { left: (i * this.backgroundWidth) + 'px' } )
      return sections
    },
  },

  methods: {
    getSectionCount() {
      const el = this.$refs['holiday']
      const width = el.offsetWidth
      return Math.ceil(width / this.sectionWidth)
    },
    backgroundStyle() {
      const file = this.path + 'background.png'

      return {
        position: 'relative',
        display: 'flex',
        overflow: 'hidden',
        minHeight: this.height + 'px',
        background: `url(${file}) repeat-x 0 0`,
      }
    },
    sectionStyle(section) {
      return {
        position: 'relative',
        left: section.left,
        minWidth: this.sectionWidth + 'px',
        height: this.height + 'px',
      }
    },
  },

}
</script>


<style>

  @keyframes touch-left {
    1% { transform: rotate(0deg); }
    20% { transform: rotate(9deg); }
    40% { transform: rotate(-6deg); }
    60% { transform: rotate(3deg); }
    80% { transform: rotate(-1.5deg); }
    99% { transform: rotate(0deg); }
  }
  @keyframes touch-right {
    1% { transform: rotate(0deg); }
    20% { transform: rotate(-9deg); }
    40% { transform: rotate(6deg); }
    60% { transform: rotate(-3deg); }
    80% { transform: rotate(1.5deg); }
    99% { transform: rotate(0deg); }
  }
  .ball.touched.left {
    animation: touch-left 1.5s;
  }
  .ball.touched.right {
    animation: touch-right 1.5s;
  }

</style>
