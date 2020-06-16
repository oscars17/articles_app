<template>
    <div class="sign-up-view">
        <sign-up-card>

        </sign-up-card>
        <div class="sign-up-view__footer">
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