import {
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_LOGOUT
} from "../actions/auth";
import {USER_REQUEST} from "@/store/actions/user";

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
    [AUTH_REQUEST]: ({ commit, dispatch }, details) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST);
            // Login by requesting the API
            this.axios.post(this.$apiURI + 'users/login', {
                email: details.email,
                password: details.password
            }).then(res => {
                if (res.status === 200) {
                    console.log('User was logged in!');
                    localStorage.setItem("user-token", res.token);
                    commit(AUTH_SUCCESS, res);
                    dispatch(USER_REQUEST);
                    resolve(res);
                }
            }).catch(e => {
                commit(AUTH_ERROR, e);
                localStorage.removeItem("user-token");
                reject(e);
            });
        });
    },
    [AUTH_LOGOUT]: ({ commit }) => {
        return new Promise(resolve => {
            commit(AUTH_LOGOUT);
            localStorage.removeItem("user-token");
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
        this.axios.defaults.headers.common['Authorization'] = res.token
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