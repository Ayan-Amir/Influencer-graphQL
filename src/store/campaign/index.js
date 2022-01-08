const state = {
    filters: {},
    estimates: {}
};
const mutations = {
    SET_FILTERS(state, filter) {
        state.filter = filter;
    },
    SET_ESTIMATES(state, estimates) {
        state.estimates = estimates;
    }
};
const getters = {
    filters: (state) => state.filters,
    estimates: (state) => state.estimates,
};
const actions = {
    
};

export const campaign = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
    
};
  