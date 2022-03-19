<template>
  <div class="row animatedsound-container">
    <div class="heading">5. Thank you</div>
    <div>&nbsp;</div>
    <div class="row">Please do not forget to submit this HIT!.</div>

    <div class="row">&nbsp;</div>
    <div class="row">
      <div>
        <form
          id="listeningEvalForm"
          @submit="submit"
          :action="turkSubmissionURL"
          method="POST"
        >
          <input
            type="hidden"
            v-for="key in Object.keys(formData)"
            :key="key"
            :name="key"
            :id="key"
            :value="formData[key]"
          />
          <input
            type="hidden"
            v-for="key in Object.keys(timeSpent)"
            :key="key"
            :name="'timespent_' + key"
            :id="'timespent_' + key"
            :value="timeSpent[key]"
          />
          <input
            type="hidden"
            v-for="key in Object.keys(clickAnalytics)"
            :key="key"
            :name="'click_analytics_' + key"
            :id="'click_analytics_' + key"
            :value="clickAnalytics[key]"
          />
          <button type="submit" class="submitbutton">Submit HIT</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script  type="module">
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters(["formData", "timeSpent", "clickAnalytics"]),
    turkSubmissionURL() {
      return this.formData.turkSubmitTo + "/mturk/externalSubmit";
    },
  },
  methods: {
    validateForm() {
      return true;
    },
  },
};
</script>

<style scoped>
/* fix too small font-size in both Chrome & Firefox */
* {
  font: inherit;
}

audio {
  width: 100%;
}

.animatedsound-container {
  margin-left: 1%;
}

.heading {
  width: 100%;
  text-align: left;
  font-weight: bold;
  font-size: 250%;
}

.submitbutton {
  background-color: orange;
}
</style>
