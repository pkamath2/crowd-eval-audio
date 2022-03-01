<script setup>
</script>

<template>
  <div id="" class="overview-container">
    <div class="heading-overview">Audio Quality Evaluation</div>
    <div class="row">&nbsp;</div>
    <div class="row text-center">
      <span style="font-weight: bolder; font-size: 150%">Overview</span>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-12">Thank you for accepting this HIT!</div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-12 notebox">
        <u>Note:</u>
        <ul>
          <li>
            Please attempt this HIT only if you are on a laptop/desktop with the
            most recent
            <span style="font-weight: bold">Chrome/Firefox browsers</span>
          </li>
          <li>
            It is important that you use a pair of headphones/earphones to listen to the
            sounds for this experiment.
          </li>
          <li>
            Please only attempt this task if you are in a quiet place with <span style="font-weight: bold">no loud noises/distractions</span>.
          </li>
        </ul>
      </div>
    </div>
    <div class="row">&nbsp;</div>

    <div class="row">
      <div class="col-12">
        In this task, you will need to listen to few audio samples and evaluate
        their quality. This HIT has been split into 4-5 sections as below.
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-12">
        <ol>
          <li>Overview and instructions (This section)</li>
          <li>Informed Consent</li>
          <li>Hearing Screening</li>
          <li>Audio Listening Test</li>
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
    <div class="row">&nbsp;</div>

    <div class="row">
      <div class="col-12">
        Please follow the instructions outlined on each section. We have also
        created an instructional video if you have any further questions -
        <a href="https://youtube.com" target="_blank"
          >ToDo - Create New Video - Click Here (opens in a new tab)</a
        >
      </div>
    </div>
    <div class="row">&nbsp;</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
};
</script>

<style scoped>
.overview-container {
  margin: 2%;
}

.heading-overview {
  font-weight: bolder;
  font-size: 200%;
  text-align: center;
}
.notebox {
  border: solid black 1px;
  width: 90%;
  padding: 5px;
  margin-left: 1%;
}
</style>
