import {createStore} from "vuex";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
export const store = createStore({
    state: {
        news: [],
        asks: [],
        jobs: [],
        user: {},
        item: {},
        list: []
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
        },
        fetchUserInfoData(state) {
            return state.user
        },
        fetchItemInfoData(state) {
            return state.item
        }
    },
    actions,
    mutations
})
