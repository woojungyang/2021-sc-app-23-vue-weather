<template>
  <div :style="style">{{ temp }}</div>
</template>

<script>
import { withComputed } from './mixins/mixinComputed.js'
export default {
  name: 'City',
  props: ['temp', 'styled'],
  mixins: [withComputed]
}
</script>

<style lang="scss" scoped>

</style>
