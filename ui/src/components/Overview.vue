<script setup>
</script>

<template>
  <div id="" class="overview-container">
    <div class="heading-overview">Audio Quality Evaluation</div>
    <div class="row">&nbsp;</div>
    <div class="row text-center">
      <span style="font-weight: bolder; font-size: 200%"
        >1. Overview &amp; Instructions</span
      >
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-12">Thank you for accepting this HIT!</div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-12 notebox card border-danger mb-3">
        <u><span style="font-weight: bold">Note:</span></u>
        <ul>
          <li>
            Please only attempt this HIT only if you have
            <span style="font-weight: bold">not attempted</span> a task from
            'Animated Sound' in the past 4 weeks.
          </li>
          <li>
            Please attempt this HIT only if you are on a laptop/desktop with the
            most recent
            <span style="font-weight: bold">Chrome/Firefox browsers</span>
          </li>
          <li>
            It is important that you use a pair of
            <span style="font-weight: bold">headphones/earphones</span> to
            listen to the sounds for this HIT.
          </li>
          <li>
            Please only attempt this HIT if you are in a quiet place with
            <span style="font-weight: bold">no loud noises/distractions</span>.
          </li>
        </ul>
      </div>
    </div>
    <div class="row">&nbsp;</div>

    <div class="row">
      <div class="col-12">
        In this HIT, you will need to listen to few audio samples and evaluate
        their quality. This HIT has been split into 4 sections as below.
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-12">
        <ol>
          <li>Overview and instructions (This section)</li>
          <li>Informed Consent</li>
          <li>Audio Listening Test (1 or more listening tests)</li>
          <li>Post test survey</li>
        </ol>
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-12">
        After each section, please click the
        <span style="font-weight: bold">'Next Section &gt;&gt;'</span> button.
        You can go back to the previous sections using the
        <span style="font-weight: bold">'&lt;&lt;Back'</span> button below.
      </div>
    </div>
    

    <div class="row" v-if="instruction_video_url != ''">
      <div class="row">&nbsp;</div>
      <div class="col-12">
        Please follow the instructions outlined on each section. We have also
        created an instructional video if you have any further questions -
        <a
          :href="instruction_video_url"
          target="_blank"
          @click="updateClickAnalytics('overview_instruction_video')"
          >Click Here (opens in a new browser tab)</a
        >
      </div>
      <div class="row">&nbsp;</div>
    </div>
    
  </div>
</template>
<script>
import { mapActions } from "vuex";
import uiConfig from "../config/config";

export default {
  data() {
    return {
      instruction_video_url: "",
    };
  },
  beforeMount() {
    const conf = uiConfig.uiConfig;
    this.instruction_video_url = conf.instruction_video_url;
  },
  methods: {
    ...mapActions(["updateClickAnalytics"]),
    validateForm() {
      return true;
    },
  },
};
</script>

<style scoped>
.overview-container {
  margin: 2%;
}

.heading-overview {
  font-weight: bolder;
  font-size: 250%;
  text-align: center;
}
.notebox {
  border: solid black 1px;
  width: 90%;
  padding: 5px;
  margin-left: 1%;
}
</style>
