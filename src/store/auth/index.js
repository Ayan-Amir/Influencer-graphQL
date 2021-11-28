import { onLogout, apolloClient } from '@/vue-apollo'
import { LOGIN_USER } from '@/graphql/mutations'
import { getDefaultValues } from '@apollo/client/utilities'
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
    async login({commit, state}, payloads){
        console.log(apolloClient);
        try{
            const {data} = await apolloClient.mutate(
                {
                    mutations: LOGIN_USER,
                    variables: payloads
                }
            )
            console.log(data);
        }
        catch(e){
            console.log(e);
        }
        console.log("enter here");
    }
}
export default{
    state,
    getters,
    mutations,
    actions
}