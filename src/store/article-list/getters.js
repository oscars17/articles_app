export default {
    selectedArticle: state => state.articleList.filter(x => x.id === state.selectedArticle.id)[0]
}
