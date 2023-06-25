import {createWebHistory, createRouter} from 'vue-router'
import NewsView from "@/views/NewsView.vue"
import AskView from "@/views/AskView.vue"
import JobsView from "@/views/JobsView.vue"
import UserView from "@/views/UserView.vue";
import itemView from "@/views/ItemView.vue";


const routes = [
    {
      path: '/',
      redirect: '/news'
    },
    {
        name: 'news',
        path: '/news',
        component: NewsView
    },
    {
        name: 'ask',
        path: '/ask',
        component: AskView
    },
    {
        name: 'jobs',
        path: '/jobs',
        component: JobsView
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