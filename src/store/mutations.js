export default {
    setLoggedStatus(state) {
        state.isLogged = true;
    },
    setPageLoading(state, status) {
        state.pageLoading = status;
    },
    logout(state) {
        state.isLogged = false;
        localStorage.removeItem('auth_data');
    }
}
