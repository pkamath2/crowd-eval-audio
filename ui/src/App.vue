<script setup>
</script>

<template>
  <div>
    <div v-if="isModePreview()" class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <span style="font-weight: bolder; color: red"
          >YOU ARE VIEWING THIS TASK IN PREVIEW MODE. PLEASE ACCEPT THE HIT BEFORE SUBMITTING YOUR
          RESPONSES. SUBMISSIONS MADE WITHOUT ACCEPTING THE TASK WILL NOT APPROVED OR REIMBURSED.</span
        >
      </div>
      <div class="col-2"></div>
    </div>
    <Experiment></Experiment>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["formData"]),
  },
  methods: {
    isModePreview() {
      return this.formData.assignmentId == "ASSIGNMENT_ID_NOT_AVAILABLE";
    },
  },
};
</script>


