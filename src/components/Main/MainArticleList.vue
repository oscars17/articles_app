<template>
    <div class="article-list-wrap">
        <ul class="article-list" id="article-list">
            <li class="article-list__article-object"
                v-for="article in order ? filteredArticleList : [].concat(filteredArticleList).reverse()"
                :key="article.id">
                <div class="article-object__image">
                    <img :src="article.image" />
                </div>
                <div class="article-object__data">
                    <div class="article-object__tag">
                        {{article.tag}}
                    </div>
                    <div class="article-object__text">
                        {{article.text}}
                    </div>
                    <div class="article-object__date">
                        {{article.date}}
                    </div>
                </div>
            </li>
            <li class="article-object__end-list">
                The end of the list
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "MainArticleList",
        mounted() {
            const element = document.getElementById('article-list');
            element.addEventListener('scroll',
                () =>{this.$store.commit('setScrollPosition', element.scrollTop)});
        },
        beforeDestroy() {
            const element = document.getElementById('article-list');
            element.removeEventListener('scroll',
                () =>{this.$store.commit('setScrollPosition', element.scrollTop)});
        },
        computed: {
            ...mapState({
                searchText: state => state.articleStore.searchText,
                articleList: state => state.articleStore.articleList,
                order: state => state.articleStore.descendOrder,
            }),
            filteredArticleList() {
                const searchText = this.searchText.toLowerCase();
                return this.articleList.filter(x =>
                            x.tag.toLowerCase().search(searchText) !== -1 ||
                            x.text.toLowerCase().search(searchText) !== -1 ||
                            x.date.search(searchText) !== -1
                    );
            }
        },
    }
</script>

<style lang="sass">
    @import "../../assets/css/articles/articles"
</style>