<template>
  <ul id="demo">
    <item
      class="item"
      :model="toc">
    </item>
  </ul>
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'tree',
  components: { Item },
  props: ['toc'],
}
</script>

<style>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
