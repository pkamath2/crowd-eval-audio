import { createStore } from 'vuex'

export default createStore({
    state: {
        formData: {
            'sample': 0
        },
        config: {}
    },
    mutations: {
        FORM_UPDATED(state, data) {
            state.formData = data
        },
        CONFIG_UPDATED(state, data) {
            state.config = data
        }
    },
    actions: {
        updateFormData(ctx, data) {
            Object.assign(ctx.state.formData, data);
            ctx.commit('FORM_UPDATED', ctx.state.formData);
        },
        updateConfig(ctx, data){
            Object.assign(ctx.state.config, data);
            ctx.commit('CONFIG_UPDATED', ctx.state.config);
        }
    },
    getters: {
        formData: function(state) {
            return state.formData
        },
        config: function(state) {
            return state.config
        }
    }
})