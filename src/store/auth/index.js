import { onLogin, apolloClient, onLogout } from '@/vue-apollo'
import { LOGIN_USER } from '@/graphql/mutations'
import {LOGGED_IN_USER} from '@/graphql/user/query'
import { getDefaultValues } from '@apollo/client/utilities'
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
      
        await apolloClient.mutate({ mutation: LOGIN_USER, variables: { ...authDetails } })
        .then((data) => {
            // Result
            if(data){
                console.log(data);
                const token = JSON.stringify(data.data.createSession.token)
                commit('SET_TOKEN', token)
                onLogin(apolloClient, token)
                .then(()=>{
                    dispatch('setUser')
                })
            }
        })
        .catch((error) => {
            dispatch('alert/error', error.message);
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
        console.log("enter here");
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