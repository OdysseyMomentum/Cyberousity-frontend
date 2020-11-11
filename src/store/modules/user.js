import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from "../actions/user";
import { AUTH_LOGOUT } from "../actions/auth";
import app from "@/main";

const state = { status: "", profile: {} };

const getters = {
    getProfile: state => state.profile,
    isProfileLoaded: state => !!state.profile.name
};

const actions = {
    // Pass a requester function in the payload
    [USER_REQUEST]: ({ commit, dispatch }, config) => {
        commit(USER_REQUEST);
        app.axios.defaults.headers.common['Authorization'] = 'Bearer ' +  app.$cookies.get('user-token');
        app.axios.request(config)
        .then(res => {
            commit(USER_SUCCESS, res);
            return res;
        })
        .catch(() => {
            commit(USER_ERROR);
            // Unauthorised access
            dispatch(AUTH_LOGOUT);
        });
    }
};

const mutations = {
    [USER_REQUEST]: state => {
        state.status = "loading";
    },
    [USER_SUCCESS]: (state, res) => {
        state.status = "success";
        console.log(res);
        // Vue.set(state, "profile", res);
    },
    [USER_ERROR]: state => {
        state.status = "error";
    },
    [AUTH_LOGOUT]: state => {
        state.profile = {};
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};