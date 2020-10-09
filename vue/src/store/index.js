import Vue from "vue";
import Vuex from "vuex";

import state from "./user/state";
import mutations from "./user/mutations";
import actions from "./user/actions";

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions,
});

// export default new Vuex.Store({
//     state: {
//         currentIndex: 0,
//     },
//     mutations: {
//         setCurrentIndex(state, index) {
//             state.currentIndex = index;
//         },
//     },
// });
