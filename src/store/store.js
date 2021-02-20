import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import * as getters from './getters'; // * yaparak dosyanın içindekilerinin hepsini alabiliriz. as yaparak isim veriyoruz. obje olarak geliyor.
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : { 
        value : 10
    },
    getters,
    mutations,
    actions,
    modules: { 
        //store içindeki modules klasöründe oluşturulan storeları en üstte tanımladıktan sonra bu şekilde import edebiliriz.
        counter
    }
    // getters : {
    //     getValue(state) {
    //         return state.value;
    //     }
    // },
    // mutations: { 
    //     setValue(state , payload){
    //         state.value = payload;
    //     }
    // },
    // actions: {
    //     setValueData({commit}, payload) {
    //         commit("setValue" , payload);
    //     }
    // },
});