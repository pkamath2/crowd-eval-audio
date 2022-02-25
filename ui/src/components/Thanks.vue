<template>
  <div class="row animatedsound-container">
    <div class="heading">Thank you</div>
    <div>&nbsp;</div>
    <div class="row">Please do not forget to submit this HIT!.</div>

    <div class="row">&nbsp;</div>
    <div class="row">
      <div><button class='submitbutton'>Submit HIT</button></div>
    </div>
  </div>
</template>

<script  type="module">
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters(["formData"]),
  },
  methods: {
    ...mapActions(["updateFormData"]),
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

.notebox {
  border: solid black 1px;
  width: 90%;
  padding: 5px;
}

.submitbutton{
  background-color: orange;
}
</style>
