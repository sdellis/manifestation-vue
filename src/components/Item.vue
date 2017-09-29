<template type="text/x-template" id="item-template">
  <li>
    <div
      :class="{bold: isFolder}"
      @click="toggle(model)">
      {{model.name}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <item
        @click="toggle(model)"
        class="item"
        v-for="model in model.children"
        :key="model.id"
        :model="model">
      </item>
    </ul>
  </li>
</template>

<script>
// import Vue from 'vue'
// define the item component
export default {
  name: 'item',
  template: '#item-template',
  props: {
    model: Object,
  },
  data: function () {
    return {
      open: false,
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    },
  },
  methods: {
    toggle: function (argument) {
      if (this.isFolder) {
        this.open = !this.open
      }
      console.log('item:')
      console.log(argument)
      this.$emit('itemSelected', argument)
    },
  },
}
</script>
