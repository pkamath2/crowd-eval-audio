import { createStore } from 'vuex'

export default createStore({
    state: {
        formData: {
            'sample': 0
        }
    },
    mutations: {
        FORM_UPDATED(state, data) {
            state.formData = data
        }
    },
    actions: {
        updateFormData(ctx, data) {
            Object.assign(ctx.state.formData, data);
            ctx.commit('FORM_UPDATED', ctx.state.formData);
        }
    },
    getters: {
        formData: function(state) {
            return state.formData
        }
    }
})