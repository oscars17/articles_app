<template>
    <div class="article-details">
        <div class="article-details__header">
            <img :src="articleData.image" />
        </div>
        <div class="article-details__sill">
            <div class="fs-10">
                {{this.articleData.date}}
            </div>
        </div>
        <div class="article-details__body">
            {{this.articleData.text}}
        </div>
        <div class="article-details__footer">
            <button @click="$router.push({name: 'article-list'})">
                back
            </button>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "MainArticleDetails",
        data() {
            return {
                articleData: {}
            }
        },
        computed: {
            ...mapState({
                articleList: state => state.articleStore.articleList,
                selectedArticle: state => state.articleStore.selectedArticle,
            }),

        },
        created() {
            const article = this.articleList.filter(x => x.id === this.$route.params.id)[0];
            return article ? this.articleData = article : this.$router.push({name: 'article-list'});
        }
    }
</script>

<style scoped>

</style>