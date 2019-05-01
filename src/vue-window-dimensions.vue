<script>
export default {
  name: 'VueWindowDimensions',
  data () {
    return {
      dimensions: null
    }
  },
  mounted () {
    if (typeof window !== 'undefined') {
      this.resize()
      window.addEventListener('resize', this.resize)
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize () {
      this.dimensions = {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  }
}
</script>

<template>
  <div class="vue-window-dimensions">
    <slot :dimensions="dimensions" />
  </div>
</template>
