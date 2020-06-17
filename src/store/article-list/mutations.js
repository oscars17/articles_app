export default {
    setArticleList(state, payload) {
        state.articleList = payload;
    },
    setSearchText(state, payload) {
        state.searchText = payload;
    },
    setScrollPosition(state, payload) {
        state.scrollTop = payload;
    },
    toggleArticleOrder(state) {
        state.descendOrder = !state.descendOrder;
    }
}
