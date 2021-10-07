<template>
  <header class="header-wrapper">
    <h1 class="logo">
      <BIconCompass class="icon" />
      날씨앱
      <small>v 0.1</small>
    </h1>
    <Nav />
  </header>
</template>

<script>
import { BIconCompass } from 'bootstrap-vue'
import Nav from './Nav.vue'
export default {
  name: 'Header',
  components: {
    BIconCompass,
    Nav
  },
  data () {
    return {
      items: [
        { text: 'Daily', href: '/' },
        { text: '5Days', href: '/5days' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper{
  @include flex($h:space-between);
  background-color: $dark-color;
  color:$light-color;
  font-size:1.5em;
  .logo{
    padding:.5em;
  }
  .icon {
    font-size: .75em;
  }
}

</style>
