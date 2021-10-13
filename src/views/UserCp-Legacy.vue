<template>
  <div class="users-wrapper">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>전화번호</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in users" :key="v.id">
          <td>{{v.id}}</td>
          <td>{{v.name}}</td>
          <td>{{v.phone}}</td>
          <td>{{v.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Users',
  data () {
    return {
      users: []
    }
  },
  async created () {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const { data } = axios.get(url)
    this.users = data
  }

}
</script>

<style lang="scss">
.users-wrapper {
  width:90%;
  max-width: 720px;
  margin:2em auto;
  .table{
    height: 80vh;
    overflow-y: auto;
  }
}

</style>
