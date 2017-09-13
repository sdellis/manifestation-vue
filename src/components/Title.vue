<template>
  <div class="title">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'title',
  props: ['title'],
}
</script>

<style scoped>
.title h1 {
  color: #40b883;
}
</style>
