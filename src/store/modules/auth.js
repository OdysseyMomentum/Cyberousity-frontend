
import {
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_LOGOUT
} from "../actions/auth";
import app from "@/main";

const state = {
    token: localStorage.getItem('user-token') || '',
    status: "",
    hasLoadedOnce: false
};

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
};

const actions = {
    [AUTH_REQUEST]: ({ commit }, details) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST);
            // Login by requesting the API
            app.axios.post(app.$apiURI + 'users/login', {
                email: details.email,
                password: details.password
            }).then(res => {
                if (res.status === 200) {
                    // Set the user token and resolve
                    app.axios.defaults.headers.common['Authorization'] = res.data.token
                    // Save in local storage and cookies
                    localStorage.setItem("user-token", res.data.token);
                    app.$cookies.set('user-token', res.data.token);
                    console.log('User was logged in!');
                    commit(AUTH_SUCCESS, res);
                    resolve(res);
                }
            }).catch(e => {
                commit(AUTH_ERROR, e);
                reject(e);
            });
        });
    },
    [AUTH_LOGOUT]: ({ commit }) => {
        return new Promise(resolve => {
            commit(AUTH_LOGOUT);
            localStorage.removeItem("user-token");
            app.$cookies.remove('user-token');
            resolve();
        });
    }
};

const mutations = {
    [AUTH_REQUEST]: state => {
        state.status = "loading";
    },
    [AUTH_SUCCESS]: (state, res) => {
        state.status = "success";
        state.token = res.token;
        state.hasLoadedOnce = true;
    },
    [AUTH_ERROR]: state => {
        state.status = "error";
        state.hasLoadedOnce = true;
    },
    [AUTH_LOGOUT]: state => {
        state.token = "";
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}