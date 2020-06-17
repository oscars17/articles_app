<template>
    <div class="article-list-view">
        <main-toolbar></main-toolbar>
        <main-article-list v-if="!loading"></main-article-list>
        <heart-loading v-else></heart-loading>
        <main-article-details v-if="selectedArticle"></main-article-details>
    </div>
</template>

<script>
    import MainToolbar from "@/components/Main/MainToolbar";
    import MainArticleList from "@/components/Main/MainArticleList";
    import MainArticleDetails from "@/components/Main/MainArticleDetails";
    import HeartLoading from "@/components/Loading/HeartLoading";
    import { mapState, mapMutations } from 'vuex';
    import axios from 'axios';

    export default {
        name: "Main",
        components: {
            'main-toolbar': MainToolbar,
            'main-article-list': MainArticleList,
            'main-article-details': MainArticleDetails,
            'heart-loading': HeartLoading,
        },
        data() {
            return {
                loading: true,
            }
        },
        computed: {
            ...mapState({
                apiUrl: state => state.apiUrl,
                selectedArticle: state => state.articleStore.selectedArticle,
            }),
        },
        async created() {
            await this.fetchData();
            return this.loading = false;
        },
        methods: {
            ...mapMutations(['setArticleList']),
            async fetchData() {
                await axios.get(this.apiUrl + '/articles/')
                    .then(x => this.setArticleList(x.data))
                    .catch(() => this.handleFetchDataErrors());
            },
            async handleFetchDataErrors() {
                await new Promise(r => setTimeout(r, 10000));
                return this.fetchData();
            }
        }
    }
</script>

<style scoped>
</style>
