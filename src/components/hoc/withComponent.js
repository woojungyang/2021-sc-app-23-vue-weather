import axios from 'axios'
import Vue from 'vue'

export default (name) => (component) => (url) => {
  return Vue.component('name', {
    data () {
      return {
        lists: []
      }
    },
    async created () {
      const { data } = await axios.get(url)
      this.lists = data
    },
    render (createEl) {
      return createEl(component, {
        props: {
          lists: this.lists
        }
      })
    }
  })
}
