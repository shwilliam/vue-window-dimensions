<template>
  <div class="example">
    <VueWindowDimensions>
      <template slot-scope="{ dimensions }">
        <div v-if="dimensions">
          width: {{ dimensions.width }}
          height: {{ dimensions.height }}
        </div>
      </template>
    </VueWindowDimensions>
  </div>
</template>

<script>
import VueWindowDimensions from '../dist/vue-window-dimensions.esm.js'
export default {
  name: 'Example',
  components: {
    VueWindowDimensions
  }
}
</script>

<style scoped>
.example {
  font-family: sans-serif;
}
</style>
