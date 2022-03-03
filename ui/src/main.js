import { createApp } from 'vue'
import { defineAsyncComponent } from 'vue'

import App from './App.vue'
import store from './store'
import uiConfig from './config/config'

const conf = uiConfig.uiConfig
const app = createApp(App)
app.use(store)

import Overview from "./components/Overview.vue";
import Consent from "./components/Consent.vue";
import Screening from "./components/Screening.vue";
import PostSurvey from "./components/PostSurvey.vue";
import Thanks from "./components/Thanks.vue";
import Experiment from "./components/Experiment.vue";

const Task = defineAsyncComponent(() => import("./components/Task-"+conf.experiment_name+".vue"))

app.component('Experiment', Experiment)
    .component('Overview', Overview)
    .component('Consent', Consent)
    .component('Screening', Screening)
    .component('Task', Task)
    .component('PostSurvey', PostSurvey)
    .component('Thanks', Thanks)

app.mount('#app')