<template>
  <div class="page-metadata">
    <div class="field">
      <label class="label">Label</label>
      <div class="control">
        <input class="input" type="text" placeholder="Label this page">
      </div>
    </div>

    <div class="field">
      <label class="label">Page Type</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Single Page (Default)</option>
            <option>Non-Paged</option>
            <option>Facing Pages</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          Set image as Thumbnail <a href="#">(?)</a>
        </label>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          Set image as Start Page <a href="#">(?)</a>
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary">Submit</button>
      </div>
      <div class="control">
        <button class="button">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageMetadataForm',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
