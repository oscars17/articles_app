<template>
    <div class="sign-card">
        <div class="sign-card__body">
            <div class="sign-card__row">
                <div class="sign-card__row-line">
                    <label class="separate-label">
                        Full name
                    </label>
                </div>
                <div class="sign-card__row-line">
                    <input type="text"
                           class="sign-input fs-14"
                           v-model="name"
                           :style="[nameErrors.length ? {'background': '#FF6683'} : '']"
                    >
                </div>
                <div class="sign-card__row-line">
                    <span class="sign-card__error fs-10">
                        {{this.nameErrors.join(' ')}}
                    </span>
                </div>
            </div>
            <div class="sign-card__row">
                <div class="sign-card__row-line">
                    <label class="separate-label">
                        Email
                    </label>
                </div>
                <div class="sign-card__row-line">
                    <input type="email"
                           class="sign-input fs-14"
                           v-model="email"
                           :style="[emailErrors.length ? {'background': '#FF6683'} : '']"
                    >
                </div>
                <div class="sign-card__row-line">
                    <span class="sign-card__error fs-10">
                        {{this.emailErrors.join(' ')}}
                    </span>
                </div>
            </div>
            <div class="sign-card__row">
                <div class="sign-card__row-line">
                    <label class="separate-label">
                        Password
                    </label>
                    <tooltip></tooltip>
                </div>
                <div class="sign-card__row-line">
                    <input :type="showPassword1 ? 'text' : 'password'"
                           class="sign-input fs-14"
                           v-model="password1"
                           :style="[password1Errors.length ? {'background': '#FF6683'} : '']"
                        >
                    <div class="sign-card__eye" @click="showPassword1 = !showPassword1">
                            <svg width="20"
                                 height="16"
                                 viewBox="0 0 20 16"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 v-if="showPassword1"
                            >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1399 3.41668C12.4399 3.41668 14.3065 5.28335 14.3065 7.58335C14.3065 8.00835 14.2232 8.41668 14.1065 8.80001L16.6565 11.35C17.8149 10.325 18.7315 9.04168 19.3065 7.57501C17.8649 3.92501 14.3065 1.33335 10.1399 1.33335C9.08152 1.33335 8.06486 1.50001 7.10652 1.80835L8.91486 3.61668C9.30652 3.50001 9.71486 3.41668 10.1399 3.41668ZM2.39818 0.633337C2.07318 0.958337 2.07318 1.48334 2.39818 1.80834L4.03984 3.45C2.68984 4.525 1.61484 5.94167 0.973175 7.58334C2.41484 11.2417 5.97318 13.8333 10.1398 13.8333C11.4065 13.8333 12.6148 13.5833 13.7315 13.15L15.9982 15.4167C16.3232 15.7417 16.8482 15.7417 17.1732 15.4167C17.4982 15.0917 17.4982 14.5667 17.1732 14.2417L3.58151 0.633337C3.25651 0.308337 2.72318 0.308337 2.39818 0.633337ZM10.1399 11.75C7.83986 11.75 5.97319 9.88334 5.97319 7.58334C5.97319 6.94167 6.12319 6.33334 6.38152 5.8L7.68986 7.10834C7.66486 7.25834 7.63986 7.41667 7.63986 7.58334C7.63986 8.96667 8.75652 10.0833 10.1399 10.0833C10.3065 10.0833 10.4565 10.0583 10.6149 10.025L11.9232 11.3333C11.3815 11.6 10.7815 11.75 10.1399 11.75ZM12.6149 7.30835C12.4899 6.14168 11.5732 5.23335 10.4149 5.10835L12.6149 7.30835Z" fill="#181C43"/>
                            </svg>
                            <svg width="20"
                                 height="13"
                                 viewBox="0 0 20 13"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 v-else
                            >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1398 0.333334C5.97316 0.333334 2.41483 2.925 0.973164 6.58333C2.41483 10.2417 5.97316 12.8333 10.1398 12.8333C14.3065 12.8333 17.8648 10.2417 19.3065 6.58333C17.8648 2.925 14.3065 0.333334 10.1398 0.333334ZM10.1398 10.75C7.83983 10.75 5.97316 8.88333 5.97316 6.58333C5.97316 4.28333 7.83983 2.41667 10.1398 2.41667C12.4398 2.41667 14.3065 4.28333 14.3065 6.58333C14.3065 8.88333 12.4398 10.75 10.1398 10.75ZM10.1398 4.08333C8.7565 4.08333 7.63983 5.2 7.63983 6.58333C7.63983 7.96667 8.7565 9.08333 10.1398 9.08333C11.5232 9.08333 12.6398 7.96667 12.6398 6.58333C12.6398 5.2 11.5232 4.08333 10.1398 4.08333Z" fill="#181C43"/>
                            </svg>
                        </div>
                </div>
                <div class="sign-card__row-line">
                    <span class="sign-card__error fs-10">
                        {{this.password1Errors.join(' ')}}
                    </span>
                </div>
            </div>
            <div class="sign-card__row">
                <div class="sign-card__row-line">
                    <label class="separate-label">
                        Repeat password
                    </label>
                </div>
                <div class="sign-card__row-line">
                    <input :type="showPassword2 ? 'text' : 'password'"
                               class="sign-input fs-14"
                               v-model="password2"
                               :style="[password2Errors.length ? {'background': '#FF6683'} : '']"
                        >
                    <div class="sign-card__eye" @click="showPassword2 = !showPassword2">
                            <svg width="20"
                                 height="16"
                                 viewBox="0 0 20 16"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 v-if="showPassword2"
                            >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1399 3.41668C12.4399 3.41668 14.3065 5.28335 14.3065 7.58335C14.3065 8.00835 14.2232 8.41668 14.1065 8.80001L16.6565 11.35C17.8149 10.325 18.7315 9.04168 19.3065 7.57501C17.8649 3.92501 14.3065 1.33335 10.1399 1.33335C9.08152 1.33335 8.06486 1.50001 7.10652 1.80835L8.91486 3.61668C9.30652 3.50001 9.71486 3.41668 10.1399 3.41668ZM2.39818 0.633337C2.07318 0.958337 2.07318 1.48334 2.39818 1.80834L4.03984 3.45C2.68984 4.525 1.61484 5.94167 0.973175 7.58334C2.41484 11.2417 5.97318 13.8333 10.1398 13.8333C11.4065 13.8333 12.6148 13.5833 13.7315 13.15L15.9982 15.4167C16.3232 15.7417 16.8482 15.7417 17.1732 15.4167C17.4982 15.0917 17.4982 14.5667 17.1732 14.2417L3.58151 0.633337C3.25651 0.308337 2.72318 0.308337 2.39818 0.633337ZM10.1399 11.75C7.83986 11.75 5.97319 9.88334 5.97319 7.58334C5.97319 6.94167 6.12319 6.33334 6.38152 5.8L7.68986 7.10834C7.66486 7.25834 7.63986 7.41667 7.63986 7.58334C7.63986 8.96667 8.75652 10.0833 10.1399 10.0833C10.3065 10.0833 10.4565 10.0583 10.6149 10.025L11.9232 11.3333C11.3815 11.6 10.7815 11.75 10.1399 11.75ZM12.6149 7.30835C12.4899 6.14168 11.5732 5.23335 10.4149 5.10835L12.6149 7.30835Z" fill="#181C43"/>
                            </svg>
                            <svg width="20"
                                 height="13"
                                 viewBox="0 0 20 13"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 v-else
                            >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1398 0.333334C5.97316 0.333334 2.41483 2.925 0.973164 6.58333C2.41483 10.2417 5.97316 12.8333 10.1398 12.8333C14.3065 12.8333 17.8648 10.2417 19.3065 6.58333C17.8648 2.925 14.3065 0.333334 10.1398 0.333334ZM10.1398 10.75C7.83983 10.75 5.97316 8.88333 5.97316 6.58333C5.97316 4.28333 7.83983 2.41667 10.1398 2.41667C12.4398 2.41667 14.3065 4.28333 14.3065 6.58333C14.3065 8.88333 12.4398 10.75 10.1398 10.75ZM10.1398 4.08333C8.7565 4.08333 7.63983 5.2 7.63983 6.58333C7.63983 7.96667 8.7565 9.08333 10.1398 9.08333C11.5232 9.08333 12.6398 7.96667 12.6398 6.58333C12.6398 5.2 11.5232 4.08333 10.1398 4.08333Z" fill="#181C43"/>
                            </svg>
                        </div>
                </div>
                <div class="sign-card__row-line">
                    <span class="sign-card__error fs-10">
                        {{this.password2Errors.join(' ')}}
                    </span>
                </div>
            </div>
        </div>
        <div class="sign-card__footer">
            <button class="black-button"
                    :class="{'disabled-button': !valid }"
                    @click="validateFields"
            >
                Sign up
            </button>
        </div>
    </div>
</template>

<script>
    import Tooltip from "@/components/Tooltip";

    export default {
        name: "SignUpCard",
        components: {
            'tooltip': Tooltip,
        },
        data() {
            return {
                name: '',
                email: '',
                password1: '',
                password2: '',
                showPassword1: false,
                showPassword2: false,
                nameErrors: [],
                emailErrors: [],
                password1Errors: [],
                password2Errors: [],
                regexpValidators: {
                    email: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9]' +
                        '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?' +
                        '(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
                    password: '^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[a-z]).{8,}$',
                },
            }
        },
        computed: {
            valid() {
                return (this.nameErrors.length === 0 &&
                    this.emailErrors.length === 0 &&
                    this.password1Errors.length === 0 &&
                    this.password2Errors.length === 0
                )
            }
        },
        watch: {
            name() {
                this.nameErrors = [];
            },
            email() {
                this.emailErrors = [];
            },
            password1() {
                this.password1Errors = [];
            },
            password2() {
                this.password2Errors = [];
            }
        },
        methods: {
            validateFields() {
                this.nameErrors = [];
                this.emailErrors = [];
                this.password1Errors = [];
                this.password2Errors = [];
                let userListStorage = JSON.parse(localStorage.getItem('user_list'));
                const takenEmailList = userListStorage.map(x => x.email);
                if (this.name.length < 1) {
                    this.nameErrors.push('Your name must contain at least one symbol');
                }
                else if (this.name.length > 25) {
                    this.nameErrors.push('Your name must contain less than 25 symbols');
                }
                const emailValidation = this.email.match(this.regexpValidators.email, this.email);
                if (!emailValidation) {
                    this.emailErrors.push('Enter valid email');
                }
                else {
                    if (takenEmailList.filter(x => x === this.email).length) {
                        this.emailErrors.push('This email is already taken');
                    }
                }
                const passwordValidation = this.password1.match(this.regexpValidators.password, this.password1);
                if (!passwordValidation) {
                    this.password1Errors.push('Enter a valid password');

                }
                else {
                    if (this.password1 !== this.password1) {
                        this.password2Errors.push('Passwords dont match');
                    }
                }
                if (this.valid) {
                    const payload = {
                        name: this.name,
                        password: this.password1,
                        email: this.email
                    }
                    userListStorage.push(payload);
                    localStorage.setItem('auth_data', JSON.stringify(payload));
                    localStorage.setItem('user_list', JSON.stringify(userListStorage));
                    this.$router.push({name: 'sign-in'});
                }
            },
        },
    }
</script>
