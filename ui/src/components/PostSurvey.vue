<template>
  <div class="row animatedsound-container">
    <div class="heading"> 4. Post Listening Test Survey</div>
    <div>&nbsp;</div>
    <div class="row">Please share some more details with us.</div>

    <div class="row">&nbsp;</div>
    <div class="row">
      <div>
        1. What type of headphones did you listen with when
        performing this listening test? (e.g.: Noise cancellation headphones, earbuds etc. Please feel free to add the brand of your headphones as well.)
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-5">
        <input
          type="text"
          name="postsurvey_speaker_headphones"
          id="postsurvey_speaker_headphones"
          size="50"
          @change="update_field($event, 'postsurvey_speaker_headphones')"
        />
      </div>
      <div class="col-7"></div>
    </div>

    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div>
        2. In the last 2 months, approximately how many HITs related to audio
        (quality evaluation, transcription, annotation etc.,) have you attempted
        on Mechanical Turk?
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-5">
        <select
          name="postsurvey_past_audiotests"
          id="postsurvey_past_audiotests"
          style="width: 100%"
          v-model="postsurvey_past_audiotests"
          @change="update_field($event, 'postsurvey_past_audiotests')"
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value=">10">&gt;10</option>
        </select>
      </div>
      <div class="col-7"></div>
    </div>

    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div>
        3. How would you describe your surrounding environment where you are
        attempting this HIT? (e.g.: Home, Library, Office environment etc.)
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-5">
        <input
          type="text"
          name="postsurvey_environment"
          id="postsurvey_environment"
          size="50"
          @change="update_field($event, 'postsurvey_environment')"
        />
      </div>
      <div class="col-7"></div>
    </div>

    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div>
        4. How easy or complex was this listening test? Please give us feedback
        on what was confusing with this HIT including problems you faced reading
        the instructions, listening to the samples etc.
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-5">
        <textarea
          id="postsurvey_confusing"
          name="postsurvey_confusing"
          cols="90"
          rows="4"
          maxlength="300"
          tabindex="9"
          @change="update_field($event, 'postsurvey_confusing')"
        ></textarea>
      </div>
      <div class="col-7"></div>
    </div>

    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div>5. Any additional comments?</div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-5">
        <textarea
          id="postsurvey_additional_comments"
          name="postsurvey_additional_comments"
          cols="90"
          rows="4"
          maxlength="300"
          tabindex="9"
          @change="update_field($event, 'postsurvey_additional_comments')"
        ></textarea>
      </div>
      <div class="col-7"></div>
    </div>
  </div>
</template>

<script  type="module">
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      postsurvey_continent: "",
      postsurvey_speaker_headphones: "",
      postsurvey_past_audiotests: "",
      postsurvey_environment: "",
    };
  },
  created() {},
  computed: {
    ...mapGetters(["formData"]),
  },
  methods: {
    ...mapActions(["updateFormData"]),
    update_field($event, nm) {
      var obj = {};
      obj[nm] = $event.target.value;
      this.updateFormData(obj);
    },
    validateForm(){
      return true;
    }
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
  text-align: center;
  font-weight: bold;
  font-size: 250%;
}

.notebox {
  border: solid black 1px;
  width: 90%;
  padding: 5px;
}
</style>
