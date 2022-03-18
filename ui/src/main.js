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

const Task = defineAsyncComponent(() => import("./components/" + conf.experiment_name + "/Task.vue"))

app.component('Experiment', Experiment)
    .component('Overview', Overview)
    .component('Consent', Consent)
    .component('Screening', Screening)
    .component('Task', Task)
    .component('PostSurvey', PostSurvey)
    .component('Thanks', Thanks)

let Priming = {};
if (conf.priming_available) {
    Priming = defineAsyncComponent(() => import("./components/" + conf.experiment_name + "/Priming.vue"));
} else {
    Priming = defineAsyncComponent(() => import("./components/BaseComponent.vue")); // Defaulting all components to BaseComponent
}
app.component('Priming', Priming)

app.mount('#app')