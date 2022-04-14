<script setup>
</script>

<template>
  <div class="row">
    <div class="row">
      <div class="col-1">&nbsp;</div>
      <div class="col-10 container" style="">
        <br />
        <Overview v-show="current_level == 'overview'" ref="overview_ref"></Overview>
        <Consent v-show="current_level == 'consent'" ref="consent_ref"></Consent>
        <!-- Screening is now moved to a qualifier on AMT -->
        <!-- <Screening v-show="current_level == 'hearing_screening'" ref="hearing_screening_ref"></Screening> -->
        <Priming v-show="current_level == 'priming'" ref="priming_ref"></Priming>
        <div v-for="i in num_tasks" :key="'task_'+i" :value="'task_'+i">
          <Task :id="'task_'+i"  :key="'task_'+i" v-if="showLevel('task_'+i)" :ref="'task_'+i+'_ref'" :audio_samples="audio_samples['task_'+i]"></Task>
        </div>
        <PostSurvey v-show="current_level == 'post_survey'" ref="post_survey_ref"></PostSurvey>
        <!--Important. The last page with submit button should be v-if and not v-show. This needs to be dynamically rendered every time the form is updated-->
        <Thanks v-if="current_level == 'thanks'" ref="thanks_ref"></Thanks>
        <br />
      </div>
      <div class="col-1">&nbsp;</div> 
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-1">&nbsp;</div>
      <div class="col-10 container bottom-section">
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
      <div class="col-1">&nbsp;</div>
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
import { mapActions, mapGetters } from "vuex";
import uiConfig from "../config/config";

export default {
  data() {
    return {
      levels: [],
      levels_names: [],
      current_level: "",
      current_level_starttime: "",
      num_tasks: 0,
      task_list: [],
      audio_samples: [],
    };
  },
  beforeMount(){
    const conf = this.config;

    this.task_list = Object.keys(conf.task_config.audio_samples)
    //Shuffle tasks
    if(conf.task_config.order_random){
      this.task_list = this.task_list.sort(() => Math.random() - 0.5)
    }
    console.log(this.task_list)
    conf.ui_levels.forEach((lvl,ind) => {
      if(lvl == 'task'){
        this.num_tasks = conf.task_config.num_tasks;
        this.task_list.forEach((item, taskind) => {
          this.levels.push(item);
          this.levels_names.push(conf.ui_levels_names[ind]+' '+(taskind+1));
        });
      }else{
        this.levels.push(lvl);
        this.levels_names.push(conf.ui_levels_names[ind]);
      }
    });
    this.current_level = this.levels[0];
    this.current_level_starttime = new Date();
    this.updateCurrentLevel(this.current_level)
    this.audio_samples = this.config.task_config.audio_samples;
  },
  created(){
    this.is_priming_available = uiConfig.uiConfig.priming_available;
    
  },
  computed: {
    ...mapGetters(["config"]),
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
    ...mapActions(["updateCurrentLevel", "updateFormData", "updateTimeSpent"]),
    showLevel(lvl) {
      return this.current_level == lvl;
    },
    updateForm(nm, val) {
      var obj = {};
      obj[nm] = val;
      this.updateFormData(obj);
    },
    updateLevelTimeSpent(nm, val) {
      var obj = {};
      obj[nm] = val/1000;//convert to seconds from millisec
      this.updateTimeSpent(obj)
    },
    proceed_next_level(level_) {
      let ref = "";
      if(this.$refs[level_+'_ref'].constructor == Array)
        ref = this.$refs[level_+'_ref'][0]
      else{
        ref = this.$refs[level_+'_ref']
      }
      const is_valid = ref.validateForm();
      if (!is_valid) return;// Dont proceed if form is not valid

      this.updateLevelTimeSpent(this.current_level, (new Date() - this.current_level_starttime))

      let level_id = this.levels.indexOf(level_) + 1;
      if (level_id >= this.levels.length) return;
      this.current_level = this.levels[level_id];
      this.current_level_starttime = new Date();
      this.updateCurrentLevel(this.current_level)
      
      window.scrollTo(0,0);
    },
    proceed_back_level(level_) {console.log('back'+level_)
      let level_id = this.levels.indexOf(level_) - 1;
      if (level_id < 0) return;

      this.updateLevelTimeSpent(this.current_level, (new Date() - this.current_level_starttime))

      this.current_level = this.levels[level_id];
      this.current_level_starttime = new Date();
      this.updateCurrentLevel(this.current_level)

      window.scrollTo(0,0);
    },
  },
};
</script>


