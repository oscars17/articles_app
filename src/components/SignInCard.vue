<template>
    <div class="sign-card">
        <div class="sign-card__body">
            <div class="sign-card__row">
                <div class="sign-card__row-line">
                    <label class="separate-label">
                        Email
                    </label>
                </div>
                <div class="sign-card__row-line">
                    <input type="email"
                           class="sign-input"
                           v-model="email"
                           @keydown.enter="validateUser"
                           :style="[!valid ? {'background': '#FF6683'} : '']">
                </div>
            </div>
            <div class="sign-card__row">
                <div class="sign-card__row-line">
                    <label class="separate-label">
                        Password
                    </label>
                </div>
                <div class="sign-card__row-line">
                    <input type="password"
                           class="sign-input"
                           v-model="password"
                           @keydown.enter="validateUser"
                           :style="[!valid ? {'background': '#FF6683'} : '']">
                </div>
            </div>
        </div>
        <div class="sign-card__footer">
            <button class="black-button"
                    :class="{'disabled-button': !valid}"
                    @click="validateUser"
            >
                Sign in
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignInCard",
        data() {
            return {
                email: '',
                password: '',
                valid: true,
            }
        },
        watch: {
            email() {
                return this.valid = true;
            },
            password() {
                return this.valid = true;
            }
        },
        methods: {
            validateUser() {
                const userList = JSON.parse(localStorage.getItem('user_list'));
                const user = userList.filter(x=> x.email === this.email && x.password === this.password)[0];
                if (user) {
                    localStorage.setItem('auth_data', JSON.stringify(user));
                    this.$store.commit('setLoggedStatus', true);
                    return this.$router.push({name: 'article-list'});
                }
                else {
                    this.valid = false;
                    this.$emit('show-sign-in-error', true);
                }
            }
        }
    }
</script>
