const state = {
    counter: 0
}

const getters = {
    getDoubleCounter(state) {
        return state.counter * 2;
    },
    stringCounter(state) {
        return state.counter + '.kez tıklandı.';
    },
}

const mutations = {
    updateCounter(state, val) {
        state.counter += val;
    },
    incCounter(state, val) {
        state.counter++;
    },
    decreCounter(state, val) {
        state.counter--;
    },
}

const actions = {
    increment({ commit }) {
        commit("incCounter");
    },
    decrement({ commit }) {
        commit("decreCounter");
    },
    incAsync({ commit }, payload) { //payload => Component içerisinden gelen bir parametreye göre işlem yapabiliyoruz. (counter.vue içinde örnek)
        setTimeout(() => {
            commit("incCounter")
        }, payload.time);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}