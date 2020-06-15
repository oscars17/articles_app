<template>
    <div class="app-wrap">
        <div class="app-wrap__header bold fs-22">
            {{this.$route.meta.pageHeader}}
        </div>
        <router-view>
        </router-view>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="sass">
    @import "assets/css/main"
    @import "assets/css/fonts"
    @import "assets/css/button"
    @import "assets/css/application/application"
    @import "assets/css/input"
</style>
