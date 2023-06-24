import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/routers/index.js";
import {store} from "@/store/index.js";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add some free styles */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'



/* add icons to the library */
library.add(faUserSecret, faTwitter)

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)
app.use(faUserSecret)
app.use(library)

app.mount("#app")
