<template>
  <b-card :img-src="object.image.medium" class="mb-3">
    <b-card-text class="d-flex justify-content-between">
      <span>
        {{ object.date }}
      </span>
      <span class="article-type">
        {{ object.type | toUpperCaseFirst }}
      </span>
    </b-card-text>
    <b-card-title class="text-uppercase">
      <span data-toggle="tooltip" data-placement="bottom" :title="object.title">
        {{ object.title }}
      </span>
    </b-card-title>
    <b-button class="read-more-button" :href="object.link" target="_blank" variant="link">
      Read More >
    </b-button>
  </b-card>
</template>

<script>
  export default {
    name: "SmallArticle",
    props: {
      object: {
        type: Object,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>
  .card {
    border: unset;
  }

  .card-body {
    padding: 4px 0 0 0;
  }

  .card-img {
    height: 100px;
    object-fit: cover;
  }

  .card-title {
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .article-type {
    color: #6c757d;
  }

  .read-more-button {
    float: right;
    text-decoration: none;
  }

  @media screen and (max-width: 767px) {
    .card-img {
      height: unset;
      object-fit: unset;
    }
  }
</style>