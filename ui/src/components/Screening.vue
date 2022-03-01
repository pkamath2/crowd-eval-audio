<template>
  <div class="row animatedsound-container">
    <div class="heading">Hearing Screening</div>
    <div>&nbsp;</div>

    <div class="row">
      Please follow the instructions on each step below. You will need to listen
      to few sounds and answer question regarding those sounds.
    </div>
    <div class="row">
      <span style="font-weight: bold; padding: 0px"
        >It is important that you use a pair of headphone to listen to the
        sounds going forward.</span
      >
    </div>

    <div class="row">&nbsp;</div>
    <div class="row">
      <div>
        1. Listen to the following audio file. While you are listening, adjust
        the volume of your headphones to be as loud and comfortable as possible
        but not painful. Once it is set, do not change the volume for the entire
        experiment.
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-4">
        <audio
          id="step1_vol_adjust_tone"
          controls
          controlsList="nodownload noplaybackrate"
        >
          <source
            src="../assets/audio-samples/hearing_test_audio/1000Hztone.wav"
            type="audio/wav"
          />
        </audio>
      </div>
      <div class="col-8">&nbsp;</div>
    </div>

    <div class="row">&nbsp;</div>
    <div>
      2. Listen to the following audio file
      <span style="font-weight: bold">fully</span>. How many tones do you hear?
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-4">
        <audio
          id="step2_tone1"
          controls
          controlsList="nodownload noplaybackrate"
          ref="tone1_player"
        >
          <source :src="tone1_url" type="audio/wav" />
        </audio>
      </div>
      <div class="col-4 p-3">
        <select
          name="tone1_count"
          id="tone1_count"
          style="width: 100%"
          v-model="tone1_count"
          @change="update_tone_count($event, 'screening_tone1_input_count')"
        >
          <option v-for="item in num_tones_options" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="col-4">&nbsp;</div>
    </div>

    <div class="row">&nbsp;</div>

    <div>
      3. Listen to the following audio file
      <span style="font-weight: bold">fully</span>. How many tones do you hear?
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-4">
        <audio
          id="step2_tone2"
          controls
          controlsList="nodownload noplaybackrate"
          ref="tone2_player"
        >
          <source :src="tone2_url" type="audio/wav" />
        </audio>
      </div>
      <div class="col-4 p-3">
        <select
          name="tone2_count"
          id="tone2_count"
          style="width: 100%"
          v-model="tone2_count"
          @change="update_tone_count($event, 'screening_tone2_input_count')"
        >
          <option v-for="item in num_tones_options" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="col-4">&nbsp;</div>
    </div>
    <div class="row">&nbsp;</div>
  </div>
</template>

<script  type="module">
import { mapActions, mapGetters } from "vuex";
import assests from "../asset-imports";

export default {
  data() {
    return {
      num_tones_options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        ">10",
      ],
      tone1_count: "0",
      tone2_count: "0",
    };
  },
  created() {},
  computed: {
    ...mapGetters(["formData"]),
    tone1_url() {
      const tone = this.select_tone();
      var obj = {};
      obj["screening_tone1_url"] = tone.url;
      this.updateFormData(obj);
      return tone.url;
    },
    tone2_url() {
      const tone = this.select_tone();
      var obj = {};
      obj["screening_tone2_url"] = tone.url;
      this.updateFormData(obj);
      return tone.url;
    },
  },
  methods: {
    ...mapActions(["updateFormData"]),
    select_tone() {
      const ind_1_lkp = ["aa", "bb", "cc", "dd", "ee", "ff", "gg"];
      const ind_2_lkp = ["aa", "bb", "cc", "dd"];
      const tone_ind_1 = Math.floor(Math.random() * (8 - 2 + 1)) + 2; // Random int between 2 and 8
      const tone_ind_2 = Math.floor(Math.random() * (3 - 0 + 1)) + 0; // Random int between 0 and 3

      let tone_url =
        assests[
          "tones" + ind_1_lkp[tone_ind_1 - 2] + "_" + ind_2_lkp[tone_ind_2]
        ];
      return { url: tone_url, num: tone_ind_1 };
    },
    update_tone_count(e, nm) {
      var obj = {};
      obj[nm] = e.target.value;
      this.updateFormData(obj);
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

.notebox {
  border: solid black 1px;
  width: 90%;
  padding: 5px;
}
</style>
