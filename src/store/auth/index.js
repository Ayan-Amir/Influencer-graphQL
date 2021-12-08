import { onLogin, apolloClient, onLogout } from '@/vue-apollo'
import { LOGIN_USER } from '@/graphql/user/mutations'
import {LOGGED_IN_USER} from '@/graphql/user/query'
import { getDefaultValues } from '@apollo/client/utilities'
import router from '@/router'

// import apolloClient from 'vue-apollo'
const state = {
    token: null,
    user: {},
    authStatus: false
}
const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.authStatus,
    user: state => state.user
}
const mutations = {
    SET_TOKEN (state, token) {
        state.token = token
    },
    LOGIN_USER (state, user) {
        state.authStatus = true
        state.user = { ...user }
    },
    LOGOUT_USER (state) {
        state.authStatus = false
        state.user = {}
    }
}
const actions = {
    async login ({ commit, dispatch }, authDetails) {
        const getNetworkErrors = error => error.networkError.response.json().then(e => e.errors.map(e => e.message).join(','))
        await apolloClient.mutate(
        { 
            mutation: LOGIN_USER,
            variables: { ...authDetails },
            error(e){
                console.log(e);
            }
        })
        .then((data) => {
            // Result
            if(data){
                const token = JSON.stringify(data.data.createSession.token)
                commit('SET_TOKEN', token)
                onLogin(apolloClient, token)
                .then(()=>{
                    dispatch('setUser')
                    router.push('/user');
                })
            }
        })
        .catch((e) => {
            let error = e.message
            if(e.networkError){
                if(e.networkError.result.errors){
                    error = e.networkError.result.errors[0].message;
                }
            }
            dispatch('alert/error', error);
        })
    },
    async setUser ({ commit }) {
        const { data } = await apolloClient.query({ query: LOGGED_IN_USER })
        commit('LOGIN_USER', data.me)
        // .then((data)=>{
        //     if(data){
        //         commit('LOGIN_USER', data.me)
        //     }
        // })
        // .catch((error)=>{

        // })
    },
    async logOut ({ commit, dispatch }) {
        commit('LOGOUT_USER')
        onLogout(apolloClient)
    }
}
export default{
    state,
    getters,
    mutations,
    actions
}