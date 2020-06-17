<template>
    <div class="article-list-view" v-if="!loading">
        <main-toolbar></main-toolbar>
        <main-article-list></main-article-list>
        <router-view name="article-details"></router-view>
    </div>
    <heart-loading v-else></heart-loading>
</template>

<script>
    import MainToolbar from "@/components/Main/MainToolbar";
    import MainArticleList from "@/components/Main/MainArticleList";
    import HeartLoading from "@/components/Loading/HeartLoading";
    import { mapState, mapMutations } from 'vuex';
    import axios from 'axios';

    export default {
        name: "Main",
        components: {
            'main-toolbar': MainToolbar,
            'main-article-list': MainArticleList,
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
