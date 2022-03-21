<script setup>
</script>

<template>
  <div>
    <div id="overlay" :class="showSpinner">
      <div class="text-center">
        <div
          class="spinner-border text-light"
          style="width: 5rem; height: 5rem"
          role="status"
        ></div>
      </div>
    </div>
    <div v-if="isModePreview()" class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <span style="font-weight: bolder; color: red"
          >YOU ARE VIEWING THIS TASK IN PREVIEW MODE. PLEASE ACCEPT THE HIT
          BEFORE SUBMITTING YOUR RESPONSES. SUBMISSIONS MADE WITHOUT ACCEPTING
          THE TASK WILL NOT APPROVED OR REIMBURSED.</span
        >
      </div>
      <div class="col-2"></div>
    </div>

    <div v-if="workerExists == true" class="row m-5">
      <div class="col-2"></div>
      <div class="col-8 p-2 border text-white bg-dark">
        <span style=""
          >Thank you for your interest in our HIT. Our records indicate that you have already attempted a similar task
          in the recent past.
          <br />
          <br />For these experiments, we are looking for unique participants to attempt our HITs.
          <br />
          <br />Kindly return this task on AMT. We look forward to your submissions to our other HITs in the future.</span
        >
      </div>
      <div class="col-2"></div>
    </div>
    <Experiment v-if="workerExists == false"></Experiment>
    <div id="overlay-disabled" :class="isChromeOrFirefox">
      <div
        style="
          padding: 25%;
          font-size: xx-large;
          font-weight: bolder;
          color: grey;
          text-align: center;
        "
      >
        Please attempt this task only if you are on Firefox or Chrome.
      </div>
    </div>
  </div>
</template>
<style scoped>
#overlay {
  position: absolute;
  padding-top: 20%;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.3;
  visibility: visible;
  z-index: 5;
}

#overlay-disabled {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  visibility: visible;
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import uiConfig from "./config/config";

export default {
  data() {
    return {
      workerExists: false,
      workerCallComplete: false,
    };
  },
  created() {
    const conf = uiConfig.uiConfig;

    this.updateConfig(conf);

    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);

    console.log(window.location.href);

    this.updateForm("assignmentId", params.get("assignmentId"));
    this.updateForm("hitId", params.get("hitId"));
    this.updateForm("turkSubmitTo", params.get("turkSubmitTo"));
    this.updateForm("workerId", params.get("workerId"));

    if (!this.isModePreview() && !this.isViewOnly()) {
      /* 
      If worker exists, the response.data is --
        {
            "errorType": "string",
            "errorMessage": "Worker already exists",
            "trace": []
        }
      
      If worker does not exist, we save the record in the Aurora headless DB and response.data is '1'
      */
      const _this = this;
      axios
        .post(conf.save_worker_api + "?worker_id=" + params.get("workerId"))
        .then(function (response) {
          // handle success
          if (
            response.data != 1 &&
            response.data.errorMessage == "Worker already exists"
          ) {
            _this.workerExists = true;
          } else {
            _this.workerExists = false;
          }

          _this.workerCallComplete = true;
        })
        .catch(function (error) {
          _this.workerExists = false; // Maybe something is wrong with the service. Lets proceed with the task.
          console.log(error);
        });
    } else {
      this.workerExists = false; // Show everything in preview.
    }
  },
  computed: {
    ...mapGetters(["formData"]),
    showSpinner: function () {
      let visibilityClass = "visible";
      if (this.isModePreview() || this.isViewOnly()) {
        visibilityClass = "invisible";
      } else if (this.workerCallComplete) {
        visibilityClass = "invisible";
      }
      return visibilityClass;
    },
    isChromeOrFirefox: function () {
      let overlayClass = "";
      const isChromeOrFirefoxStr =
        navigator.userAgent.indexOf("Chrome") > -1 ||
        navigator.userAgent.indexOf("Firefox") > -1;
      if (!isChromeOrFirefoxStr) overlayClass = "visible";
      else overlayClass = "invisible";

      return overlayClass;
    },
  },
  methods: {
    ...mapActions(["updateFormData", "updateConfig"]),
    updateForm(nm, val) {
      var obj = {};
      obj[nm] = val;
      this.updateFormData(obj);
    },
    isModePreview() {
      // This could go into a utils class
      const isPreview =
        this.formData.assignmentId == "ASSIGNMENT_ID_NOT_AVAILABLE";
      return isPreview;
    },
    isViewOnly() {
      // This could go into a utils class
      const isViewOnly =
        window.location.href.indexOf("localhost") > -1 ||
        this.formData.assignmentId == undefined ||
        this.formData.assignmentId == null ||
        this.formData.assignmentId == "";
      return isViewOnly;
    },
  },
};
</script>


