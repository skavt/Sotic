import httpService from "@/core/services/httpService";

export default {
  namespaced: true,
  state: {
    data: [],
    postsPerPage: 5,
  },
  actions: {
    async getData({commit}, params) {
      const {
        success,
        body
      } = await httpService.get(`https://www.lionsrugby.com/wp-json/sotic-app-feeds/posts/?post_type=post,video`, {params})
      if (success) {
        commit('setData', {data: body.data, postsPerPage: params.posts_per_page});
      }
    },
  },
  mutations: {
    setData(state, {data, postsPerPage}) {
      state.data = [...data];
      state.postsPerPage = postsPerPage;
    },
  },
}