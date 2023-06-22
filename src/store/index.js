import {createStore} from "vuex";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
export const store = createStore({
    state: {
        news: [],
        asks: [],
        jobs: []
    },
    getters: { //computed 같은속성
        fetchAskData(state) {
            return state.asks
        },
        fetchJobsData(state) {
            return state.jobs
        },
        fetchNewsData(state) {
            return state.news
        }
    },
    actions,
    mutations
})
