<template>
  <div class="main-article ml-auto mr-auto mt-2">
    <b-card class="main-article-card" v-if="mainArticle" overlay :img-src="mainArticle.image.large"
            @click="onMainArticleCLick">
      <div class="main-article-content">
        <b-card-text class="main-article-date">
          {{ mainArticle.date }}
        </b-card-text>
        <b-card-text class="main-article-title">
          <h4 class="text-uppercase">
            {{ mainArticle.title }}
          </h4>
        </b-card-text>
      </div>
      <b-card-text class="main-article-badge">
        <b-badge variant="primary">
          {{ mainArticle.type | toUpperCaseFirst }}
        </b-badge>
      </b-card-text>
    </b-card>
    <hr/>
    <div class="row small-articles">
      <small-article v-for="article in otherArticles" :key="article.id" :object="article" class="col-md-3"/>
    </div>
    <div class="row">
      <div class="col text-center">
        <b-button class="load-more-button" variant="primary" @click="onLoadMoreClick">
          Load More
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {createNamespacedHelpers} from "vuex";
  import SmallArticle from "@/modules/home/components/SmallArticle";

  const {mapState, mapActions} = createNamespacedHelpers('home');
  export default {
    name: "Home",
    components: {SmallArticle},
    computed: {
      ...mapState(['postsPerPage', 'data']),
      mainArticle() {
        return this.data ? this.data[0] : {};
      },
      otherArticles() {
        return this.data ? this.data.slice(1) : [];
      },
    },
    methods: {
      ...mapActions(['getData']),
      onLoadMoreClick() {
        this.getData({posts_per_page: this.postsPerPage + 4});
      },
      onMainArticleCLick() {
        window.open(this.mainArticle.link);
      },
    },
    mounted() {
      this.getData({posts_per_page: this.postsPerPage});
    }
  }
</script>

<style lang="scss" scoped>
  .main-article {
    width: 55%;
  }

  .main-article-content {
    position: absolute;
    bottom: 15px;
    margin-left: 4px;
  }

  .main-article-card {
    color: #FFFFFF;
    cursor: pointer;
  }

  .main-article-date {
    margin-bottom: 4px;
  }

  .main-article-title {
    > h4 {
      font-weight: bold;
    }
  }

  .main-article-badge {
    float: right;

    > .badge {
      padding: 8px 16px;
      border-radius: unset;
    }
  }

  .load-more-button {
    border-radius: unset;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 1064px) {
    .main-article {
      width: 70%
    }
  }

  @media screen and (max-width: 800px) {
    .main-article-badge {
      > .badge {
        padding: 4px 8px;
      }
    }

    .main-article {
      width: 80%
    }
  }

  @media screen and (max-width: 400px) {
    .main-article {
      width: 100%
    }

    .main-article-title {
      > h4 {
        font-size: 14px;
      }
    }

    .small-articles {
      margin-left: 2px;
      margin-right: 2px;
    }
  }
</style>