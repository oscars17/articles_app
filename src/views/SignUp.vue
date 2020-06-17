<template>
    <div class="sign-view">
        <sign-up-card>

        </sign-up-card>
        <div class="sign-view__footer">
            <div>
                Already have an account?
            </div>
            <div>
                <router-link :to="{name: 'sign-in'}">
                    Sign In
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import SignUpCard from "@/components/SignUpCard";

    export default {
        components: {
            'sign-up-card': SignUpCard,
        }
    }
</script>

<style lang="sass">
    @import "../assets/css/sign-styles/sign-styles.sass"
</style>