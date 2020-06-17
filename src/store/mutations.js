export default {
    setLoggedStatus(state) {
        state.isLogged = true;
    },
    setPageLoading(state, status) {
        state.pageLoading = status;
    }
}