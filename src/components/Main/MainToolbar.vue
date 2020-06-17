<template>
    <div class="main-toolbar" :class="[scrolling ? 'scrolling' : '']">
        <div class="main-toolbar__search">
            <div class="main-toolbar__search-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#ACB3DA"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3199 14.9056L17.4165 16.0023C17.8277 15.9795 18.2465 16.1252 18.5607 16.4393L21.5607 19.4393C22.1464 20.0251 22.1464 20.9749 21.5607 21.5607C20.9749 22.1464 20.0251 22.1464 19.4393 21.5607L16.4393 18.5607C16.1252 18.2465 15.9795 17.8277 16.0023 17.4165L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056ZM10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" fill="#1F263C"/>
                </svg>
            </div>
            <div class="main-toolbar__input">
                <input type="text"
                       class="filter-input"
                       placeholder="Search"
                       v-model="searchText"
                >
            </div>
            <div class="main-toolbar__reset-icon" @click="searchText=''">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19998 0.806662C8.93998 0.546662 8.51998 0.546662 8.25998 0.806662L4.99998 4.06L1.73998 0.799996C1.47998 0.539996 1.05998 0.539996 0.79998 0.799996C0.53998 1.06 0.53998 1.48 0.79998 1.74L4.05998 5L0.79998 8.26C0.53998 8.52 0.53998 8.94 0.79998 9.2C1.05998 9.46 1.47998 9.46 1.73998 9.2L4.99998 5.94L8.25998 9.2C8.51998 9.46 8.93998 9.46 9.19998 9.2C9.45998 8.94 9.45998 8.52 9.19998 8.26L5.93998 5L9.19998 1.74C9.45331 1.48666 9.45331 1.06 9.19998 0.806662Z" fill="#181C43"/>
                </svg>
            </div>
        </div>
        <div class="main-toolbar__order">
            <button v-if="descend" class="white-button" @click="toggleArticleOrder">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5.41421L17 15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15L15 5.41421L12.7071 7.70711C12.3166 8.09763 11.6834 8.09763 11.2929 7.70711C10.9024 7.31658 10.9024 6.68342 11.2929 6.29289L15.2929 2.29289C15.6834 1.90237 16.3166 1.90237 16.7071 2.29289L20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711C20.3166 8.09763 19.6834 8.09763 19.2929 7.70711L17 5.41421Z" fill="#1F263C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 18.5858L7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9L9 18.5858L11.2929 16.2929C11.6834 15.9024 12.3166 15.9024 12.7071 16.2929C13.0976 16.6834 13.0976 17.3166 12.7071 17.7071L8.70711 21.7071C8.31658 22.0976 7.68342 22.0976 7.29289 21.7071L3.29289 17.7071C2.90237 17.3166 2.90237 16.6834 3.29289 16.2929C3.68342 15.9024 4.31658 15.9024 4.70711 16.2929L7 18.5858Z" fill="#ACB3DA"/>
                </svg>
                <span>
                    new
                </span>
            </button>
            <button v-else class="white-button" @click="toggleArticleOrder">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 18.5858L7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9L9 18.5858L11.2929 16.2929C11.6834 15.9024 12.3166 15.9024 12.7071 16.2929C13.0976 16.6834 13.0976 17.3166 12.7071 17.7071L8.70711 21.7071C8.31658 22.0976 7.68342 22.0976 7.29289 21.7071L3.29289 17.7071C2.90237 17.3166 2.90237 16.6834 3.29289 16.2929C3.68342 15.9024 4.31658 15.9024 4.70711 16.2929L7 18.5858Z" fill="#1F263C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5.41421V15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15V5.41421L12.7071 7.70711C12.3166 8.09763 11.6834 8.09763 11.2929 7.70711C10.9024 7.31658 10.9024 6.68342 11.2929 6.29289L15.2929 2.29289C15.6834 1.90237 16.3166 1.90237 16.7071 2.29289L20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711C20.3166 8.09763 19.6834 8.09763 19.2929 7.70711L17 5.41421Z" fill="#ACB3DA"/>
                </svg>
                <span>
                    old
                </span>
            </button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: "MainToolbar",
        computed: {
            ...mapState({
                storeSearchText: state => state.articleStore.searchText,
                descend: state => state.articleStore.descendOrder,
                scrolling: state => state.articleStore.scrollTop,
            }),
            searchText: {
                get() {
                    return this.storeSearchText;
                },
                set(data) {
                    this.$store.commit('setSearchText', data);
                }
            }
        },
        methods: {
            ...mapMutations([
                'toggleArticleOrder',
            ])
        }
    }
</script>

<style lang="sass">
    @import '../../assets/css/articles/toolbar'
</style>
