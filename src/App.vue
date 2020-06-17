<template>
    <div class="app-wrap">
        <transition name="fade" mode="out-in">
            <div class="app-wrap__header bold fs-22" :key="key">
                {{this.key}}
            </div>
        </transition>
        <div class="app-wrap__logout" v-if="isLogged" @click="logout">
        </div>
        <transition name="fade" mode="out-in">
            <router-view>
            </router-view>
        </transition>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {
                transitionMode: 'in-out'
            }
        },
        computed: {
            ...mapState({
                isLogged: state => state.isLogged,
            }),
            key() {
                return this.$route.meta.pageHeader;
            }
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
