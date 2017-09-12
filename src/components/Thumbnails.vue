<template>
  <div class="thumbnails">
    <div class="cell" v-for="thumbnail in thumbnails" :key="thumbnail.id">
      <figure className="grid-figure">
        <img :src="thumbnail.display_src" class="responsive-image">
        <figcaption>
          <p>{{thumbnail.caption[0].value}}</p>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'thumbnails',
  props: ['thumbnails'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.responsive-image {
  max-width: 100%;
}

.cell img {
  display: block;
}

.cell {
  margin: 1rem;
}

@media screen and (min-width: 600px) {
  .thumbnails {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .cell {
    width: calc(50% - 2rem);
  }
}

@media screen and (min-width: 1000px) {
  .cell {
    width: calc(33.3333% - 2rem);
  }
}
</style>
