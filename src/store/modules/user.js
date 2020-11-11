import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from "../actions/user";
import { AUTH_LOGOUT } from "../actions/auth";
import app from "@/main";

const state = { status: "", profile: {}};

const getters = {
    getProfile: state => state.profile,
    isProfileLoaded: state => !!state.profile.name
};

const actions = {
    // Pass the configuration for the request
    [USER_REQUEST]: ({ commit, dispatch }, config) => {
        return new Promise((resolve, reject) => {
            commit(USER_REQUEST);
            app.axios.defaults.headers.common['Authorization'] = 'Bearer ' +  app.$cookies.get('user-token');
            app.axios.request(config)
                .then(res => {
                    commit(USER_SUCCESS, res);
                    resolve(res);
                })
                .catch(e => {
                    commit(USER_ERROR);
                    dispatch(AUTH_LOGOUT);
                    reject(new Error('Bad access:' + e));
                });
        })
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