const app = {
    namespaced: true,
    state: () => ({
        drawer: true
    }),
    mutations: {
        TOGGLE_DRAWER(state) {
            state.drawer = !state.drawer;
        },
        REMOVE_DRAWER(state) {
            // state.drawer = !state.drawer;
            if (state.drawer) {
                state.drawer = false;
            }
        }
    },
    actions: {
        toggleDrawer({ commit }) {
            console.log("toggle");
            commit("TOGGLE_DRAWER");
        },
        removeDrawer({ commit }) {
            commit("REMOVE_DRAWER");
        }
    },
    getters: {
        getDrawer(state) {
            return state.drawer;
        }
    }
};

export default app;
