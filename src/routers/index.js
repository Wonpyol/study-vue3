import {createWebHistory, createRouter} from 'vue-router'
import NewsView from "@/views/NewsView.vue"
import AskView from "@/views/AskView.vue"
import JobsView from "@/views/JobsView.vue"
import UserView from "@/views/UserView.vue";
import itemView from "@/views/ItemView.vue";
import createListView from "@/views/CreateListView";


const routes = [
    {
      path: '/',
      redirect: '/news'
    },

    {
        name: 'news',
        path: '/news',
        component: createListView('NewsView')
    },
    {
        name: 'ask',
        path: '/ask',
        component: createListView('AskView')
    },
    {
        name: 'jobs',
        path: '/jobs',
        component: createListView('JobsView')
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