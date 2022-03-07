<script setup>
</script>

<template>
  <div class="row">
    <div class="row">
      <div class="col-2">&nbsp;</div>
      <div class="col-8 container" style="">
        <br />
        <Overview v-show="current_level == 'overview'" ref="overviewref"></Overview>
        <Consent v-show="current_level == 'consent'" ref="consentref"></Consent>
        <Screening v-show="current_level == 'hearing_screening'" ref="screeningref"></Screening>
        <Task v-show="current_level == 'task'" ref="taskref"></Task>
        <PostSurvey v-show="current_level == 'post_survey'" ref="postsurveyref"></PostSurvey>

        <!--Important. The last page with submit button should be v-if and not v-show-->
        <!--This needs to be dynamically rendered every time the form is updated-->
        <Thanks v-if="current_level == 'thanks'" ref="thanksref"></Thanks>
        <br />
      </div>
      <div class="col-2">&nbsp;</div> 
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-2">&nbsp;</div>
      <div class="col-8 container bottom-section">
        <div class="row">
          <div class="col-4">
            <button
              @click="proceed_back_level(current_level)"
              style="width: 100%"
            >
              <b>&lt;&lt; Back</b>
            </button>
          </div>
          <div class="col-4">&nbsp;</div>
          <div class="col-4">
            <button
              @click="proceed_next_level(current_level)"
              style="width: 100%"
            >
              <b>Next Section &gt;&gt;</b>
            </button>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-4">
            <b>Current Section</b>: {{ current_level_name }}
          </div>
          <div class="col-4">&nbsp;</div>
          <div class="col-4"><b>Next Section</b>: {{ next_level_name }}</div>
        </div>
      </div>
      <div class="col-2">&nbsp;</div>
    </div>
    <br />
  </div>
</template>

<style>
body {
  font-family: "Open Sans";
  background: whitesmoke;
}
.container {
  background: white;
  text-align: justify;
  color: #2c3e50;
  border: solid lightgray 1px;
}

.bottom-section {
  padding: 1%;
  text-align: center;
}
</style>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      levels: [
        "overview",
        "consent",
        "hearing_screening",
        "task",
        "post_survey",
        "thanks",
      ],
      levels_names: [
        "Overview",
        "Consent",
        "Hearing Screening",
        "Listening Test",
        "Post Test Survey",
        "Thank you",
      ],
      current_level: "overview",
    };
  },
  created(){
    let uri = window.location.search.substring(1); 
    let params = new URLSearchParams(uri);
    this.updateForm('assignmentId',params.get('assignmentId'));
    this.updateForm('hitId',params.get('hitId'));
    this.updateForm('turkSubmitTo',params.get('turkSubmitTo'));
    this.updateForm('workerId',params.get('workerId'));
  },
  computed: {
    current_level_name() {
      return this.levels_names[this.levels.indexOf(this.current_level)];
    },
    next_level_name() {
      let next_level_id = this.levels.indexOf(this.current_level) + 1;
      if (next_level_id >= this.levels.length) return "-";
      return this.levels_names[next_level_id];
    },
  },
  methods: {
    ...mapActions(["updateFormData"]),
    updateForm(nm, val) {
      var obj = {};
      obj[nm] = val;
      this.updateFormData(obj);
    },
    proceed_next_level(level_) {
      if (level_ == "task") {
        const is_valid = this.$refs.taskref.validateForm();
        if (!is_valid) return; // Dont proceed if form is not valid
      }

      let level_id = this.levels.indexOf(level_) + 1;
      if (level_id >= this.levels.length) return;
      this.current_level = this.levels[level_id];
    },
    proceed_back_level(level_) {
      let level_id = this.levels.indexOf(level_) - 1;
      if (level_id < 0) return;
      this.current_level = this.levels[level_id];
    },
  },
};
</script>


