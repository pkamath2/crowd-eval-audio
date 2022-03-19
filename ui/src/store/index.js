import { createStore } from 'vuex'

export default createStore({
    state: {
        formData: {},
        timeSpent: {},
        clickAnalytics: {},
        config: {}
    },
    mutations: {
        FORM_UPDATED(state, data) {
            state.formData = data
        },
        TIME_SPENT_UPDATED(state, data) {
            state.timeSpent = data
        },
        CLICK_ANALYTICS_UPDATED(state, data) {
            state.clickAnalytics = data
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
        updateTimeSpent(ctx, data) {
            const key = Object.keys(data)[0];
            let val = [];
            if(Object.keys(ctx.state.timeSpent).indexOf(key) > -1){
                val = ctx.state.timeSpent[key]
            }
            val.push(data[key])
            var obj = {};
            obj[key] = val;
            Object.assign(ctx.state.timeSpent, obj);
            ctx.commit('TIME_SPENT_UPDATED', ctx.state.timeSpent);
        },
        updateClickAnalytics(ctx, key) {
            let val = 0
            if(Object.keys(ctx.state.clickAnalytics).indexOf(key) > -1){
                val = ctx.state.clickAnalytics[key]
            }
            val = val + 1;
            var obj = {};
            obj[key] = val;
            Object.assign(ctx.state.clickAnalytics, obj);
            ctx.commit('CLICK_ANALYTICS_UPDATED', ctx.state.clickAnalytics);
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
        timeSpent: function(state) {
            return state.timeSpent
        },
        clickAnalytics: function(state) {
            return state.clickAnalytics
        },
        config: function(state) {
            return state.config
        }
    }
})