import {fetchAskList, fetchJobsList,
    fetchNewsList, fetchUserInfo,
    fetchItemInfo, fetchList} from "@/api";

export default {
    FETCH_NEWS({commit}) {
        return fetchNewsList()
            .then(({data}) => {
                commit('SET_NEWS', data)
                return data;
            })
            .catch(error => console.log(error));
    },
    FETCH_ASK({commit}) {
       return fetchAskList()
           .then(({data}) => commit('SET_ASK', data))
           .catch(error => console.log(error))
    },
    FETCH_JOBS({commit}) {
       return fetchJobsList()
           .then(({data}) => {
               commit('SET_JOBS', data)
               return data;
           })
           .catch(error => console.log(error))
    },
    FETCH_LIST({commit}, pageName) {
       return fetchList(pageName)
           .then(({data}) => commit('SET_LIST', data))
           .catch(error => console.log(error))
    },
    FETCH_USERINFO({commit}, userName) {
       return fetchUserInfo(userName)
           .then(({data}) => commit('SET_USERINFO', data))
           .catch(error => console.log(error))
    },
    FETCH_ITEMINFO({commit}, id) {
        return fetchItemInfo(id)
            .then(({data}) => commit('SET_ITEMINFO', data))
            .catch(error => console.log(error))
    }

}