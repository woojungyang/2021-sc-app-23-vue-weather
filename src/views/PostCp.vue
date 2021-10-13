<template>
  <div class="posts-wrapper">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>내용</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in lists" :key="v.id">
          <td>{{v.id}}</td>
          <td>{{v.title}}</td>
          <td>{{v.body}}</td>
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
.posts-wrapper {
  width:90%;
  max-width: 720px;
  margin:2em auto;
  .table{
    height: 80vh;
    overflow-y: auto;
  }
}

</style>
