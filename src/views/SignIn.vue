<template>
    <div class="sign-view">
        <sign-in-card
            @show-sign-in-error="setSignInError"
        ></sign-in-card>
        <div class="sign-view__footer">
            <div>
                Dont have an account yet?
            </div>
            <div>
                <router-link :to="{name: 'sign-up'}">
                    Sign Up
                </router-link>
            </div>
        </div>
        <sign-in-error
                v-if="!valid"
                @close-sign-in-error="setSignInError"
        >
        </sign-in-error>
    </div>
</template>

<script>
    import SignInCard from "@/components/SignInCard";
    import SignInError from "@/components/SignInError";
    import { mapState } from 'vuex'
    export default {
        name: "SignIn",
        components: {
            'sign-in-card': SignInCard,
            'sign-in-error': SignInError,
        },
        computed: {
            ...mapState({
                valid: state => state.signInStore.signInValid,
            })
        },
        methods: {
            setSignInError(status) {
                this.showSignInError = status;
            }
        }
    }
</script>

<style scoped>

</style>