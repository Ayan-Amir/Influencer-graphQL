import { onLogout, apolloClient } from '@/vue-apollo'
import { LOGIN_USER } from '@/graphql/mutations'
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

}
const actions = {
    // async login({commit, state}, payloads){
    //     console.log(LOGIN_USER);
    //     try{
    //         // const {data} = await apolloClient.mutate(
    //         //     {
    //         //         mutations: LOGIN_USER,
    //         //         variables: payloads
    //         //     }
    //         // )
    //         const data = await apolloClient.mutate({ mutation: LOGIN_USER, variables: { ...payloads } })
    //         console.log(data);
    //     }
    //     catch(e){
    //         console.log(e);
    //     }
    //     console.log("enter here");
    // }
    async login ({ commit, dispatch }, authDetails) {
        console.log(LOGIN_USER);
        try {
          const { data } = await apolloClient.mutate({ mutation: LOGIN_USER, variables: authDetails })
        //   const token = JSON.stringify(data.login.token)
        //   commit('SET_TOKEN', token)
        //   localStorage.setItem('apollo-token', token)
        //   dispatch('setUser')
        } catch (e) {
          console.log(e)
        }
      },
}
export default{
    state,
    getters,
    mutations,
    actions
}