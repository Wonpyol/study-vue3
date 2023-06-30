import {createWebHistory, createRouter} from 'vue-router'
import NewsView from "@/views/NewsView.vue";
import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
import UserView from "@/views/UserView.vue";
import itemView from "@/views/ItemView.vue";
import createListView from "@/views/CreateListView";
import EventBus from "@/utils/bus";
import {store} from "@/store/index.js";


const routes = [
    {
      path: '/',
      redirect: '/news'
    },

    {
        name: 'news',
        path: '/news',
        component: NewsView,
        // component: createListView('NewsView')
        //라우터 네비게이션 (데이터를 모두 읽어서 표출)
        beforeEnter: (to, from, next) => {
            EventBus.$emit('start:spinner')
            store.dispatch('FETCH_LIST', to.name)
                .then(() => next())
                .catch(error => console.error(error));
        }
    },
    {
        name: 'ask',
        path: '/ask',
        component: AskView,
        // component: createListView('AskView')
        beforeEnter: (to, from, next) => {
            EventBus.$emit('start:spinner')
            store.dispatch('FETCH_LIST', to.name)
                .then(() => next())
                .catch(error => console.error(error));
        }
    },
    {
        name: 'jobs',
        path: '/jobs',
        // component: createListView('JobsView')
        component: JobsView,
        beforeEnter: (to, from, next) => {
            EventBus.$emit('start:spinner')
            store.dispatch('FETCH_LIST', to.name)
                .then(() => next())
                .catch(error => console.error(error));
        }
    },
    {
        name: 'user',
        path: '/user/:id',
        component: UserView
    },
    {
        name: 'item',
        path: '/item/:id',
        component: itemView
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})