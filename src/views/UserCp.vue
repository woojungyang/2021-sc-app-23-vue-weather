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
        <tr v-for="v in lists" :key="v.id">
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

export default {
  props: ['lists']
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
