<template>
  <div class="row animatedsound-container">
    <div class="heading">Thank you</div>
    <div>&nbsp;</div>
    <div class="row">Please do not forget to submit this HIT!.</div>

    <div class="row">&nbsp;</div>
    <div class="row">
      <div>
        <form id="listeningEvalForm" @submit="submit" :action="turkSubmissionURL" method="POST">
          <input type="hidden" v-for="key in Object.keys(formData)" :key="key" :name="key" :id="key" :value="formData[key]" />
          <button type="submit" class="submitbutton">Submit HIT</button>
        </form>
        
      </div>
    </div>
  </div>
</template>

<script  type="module">
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  created() {
    Object.keys(this.formData).forEach((key) => {
      console.log(key + " -- " + this.formData[key]);
    });
  },
  computed: {
    ...mapGetters(["formData"]),
    turkSubmissionURL(){
      return this.formData.turkSubmitTo+'/mturk/externalSubmit';
    }
  },
  methods: {
    ...mapActions(["updateFormData"])
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
