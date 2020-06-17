<template>
    <div class="app-wrap">
        <div class="app-wrap__header bold fs-22">
            {{this.$route.meta.pageHeader}}
        </div>
        <div class="app-wrap__logout" v-if="isLogged" @click="logout">

        </div>
        <router-view>
        </router-view>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState({
                isLogged: state => state.isLogged,
            }),
        },
        methods: {
            logout() {
                this.$store.commit('logout');
                this.$router.push({name: 'enter-screen'});
            }
        }
    }
</script>

<style lang="sass">
    @import "assets/css/main"
    @import "assets/css/fonts"
    @import "assets/css/button"
    @import "assets/css/application/application"
    @import "assets/css/input"
    @import "assets/css/animations"
</style>
