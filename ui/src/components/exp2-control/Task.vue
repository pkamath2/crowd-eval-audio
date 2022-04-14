<template>
  <div class="row animatedsound-container">
    <div id="errorModal" class="modal">
      <div class="modal-content">
        <p>
          Please listen to all sound clips
          <span style="font-weight: bold">fully</span>, ensure you have updated
          all the required inputs and answered all the questions before going to
          the next screen.
        </p>
        <span><button @click="closeModal">ok!</button></span>
      </div>
    </div>

    <div id="oneAudioOnlyModal" class="modal">
      <div class="modal-content">
        <p>
          Please listen very closely to
          <span style="font-weight: bold; font-style: italic"
            >one audio clip</span
          >
          at a time.
        </p>
        <span><button @click="closeModal">ok!</button></span>
      </div>
    </div>

    <div class="heading">3.{{test_index}} Audio Perceptual Ordering Task</div>
    <div>&nbsp;</div>

    <div class="row">
      <div class="col-12">
        This page outlines 2 reference audio samples and few other audio samples
        under test. The 2 reference audio samples are clips from the end points
        of a larger audio sample, listen to each of the 5 audio under test and
        assign them a rank in-between audio reference 1 and 2.
      </div>
      <div>&nbsp;</div>

      <p style="padding-left: 10px; font-size: small">
        <i>(Please allow few seconds for the audio clips to load.)</i>
      </p>
    </div>

    <div class="step-content row">
      <div>1.</div>
      <div>&nbsp;</div>
      <div>Please listen to the two reference clips below</div>
    </div>

    <div class="row ps-5">
      <div class="col-12">&nbsp;</div>
    </div>

    <div class="step-content row">
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>
        <div class="row">
          <div class="col-4">
            <div class="row">
              <span style="text-align: left; font-weight: bold"
                >Reference audio 1:</span
              >
            </div>
            <div class="row">
              <span
                ><audio
                  id="ref_1_audio"
                  controls
                  controlsList="nodownload noplaybackrate"
                  @ended="listenedCheck('first_reference_listened_test')"
                  @play="
                    playCheck($event);
                    updateAudioClickAnalytics('task_ref_1_sound');
                  "
                >
                  <source :src="ref1_url" type="audio/wav" /></audio
              ></span>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <span style="text-align: left; font-weight: bold"
                >Reference audio 2:</span
              >
            </div>
            <div class="row">
              <span
                ><audio
                  id="ref_2_audio"
                  controls
                  controlsList="nodownload noplaybackrate"
                  @ended="listenedCheck('second_reference_listened_test')"
                  @play="
                    playCheck($event);
                    updateAudioClickAnalytics('task_ref_2_sound');
                  "
                >
                  <source :src="ref2_url" type="audio/wav" /></audio
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>

    <div class="step-content row">
      <div>2.</div>
      <div>&nbsp;</div>
      <div>
        Listen to each audio sample below and rank/position each sample
        in-between the two references above. Consider reference 1 as having
        rank/position 0 and reference 2 as having rank/position 100.<br />
        Assign each audio sample a rank/position in-between 0 and 100.
      </div>
    </div>

    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-4">
        <p style="padding-left: 40%; font-weight: bold">Samples under test</p>
      </div>
      <div class="col-4 text-center">
        <p style="padding-left: 10%; font-weight: bold">
          Relative position in-between references
        </p>
      </div>
    </div>

    <div class="row">&nbsp;</div>

    <div
      v-for="position in num_positions"
      :key="position"
      :value="position"
      class="step-content row"
    >
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>
        <div class="row">
          <div class="col-1 pt-3">
            <span style="text-align: left">Audio {{ position }}:</span>
          </div>
          <div class="col-3">
            <div class="row">
              <span
                ><audio
                  :id="'clip_' + position + '_audio'"
                  controls
                  controlsList="nodownload noplaybackrate"
                  @ended="listenedCheck('audio_listened_test_' + position)"
                  @play="
                    playCheck($event);
                    updateAudioClickAnalytics(
                      'task_audio_' + position + '_sound'
                    );
                  "
                >
                  <source :src="audio_url(position)" type="audio/wav" /></audio
              ></span>
            </div>
          </div>
          <div class="col-1 p-1">&nbsp;</div>
          <div class="col-5">
            <div class="row">
              <div class="col-4">
                <input
                  type="number"
                  :name="'audio_' + position + '_select'"
                  :id="'audio_' + position + '_select'"
                  @change="
                    numberRangeCheck($event);
                    update_field($event);
                  "
                  @focusout="
                    updateClickAnalytics(
                      'task_audio_' + position + '_rank',
                      $event
                    )
                  "
                  v-model="formData[id+'_audio_' + position + '_select']"
                  min="0"
                  max="100"
                  step="1"
                  style="width: 100%"
                />
              </div>
              <div class="col-8">
                <span
                  :id="'span_' + position + '_error'"
                  class="badge bg-danger text-wrap"
                  style="visibility: hidden; font-size: small"
                >
                  Error: Enter values in-between 0 and 100.
                </span>
              </div>
            </div>
            <!-- <div class="row p-2">
              <select
                :name="'audio_' + position + '_select'"
                :id="'audio_' + position + '_select'"
                style="width: 100%"
                @change="update_field($event)"
              >
                <option v-for="i in 100" :key="i" :value="i">{{i}}</option>
              </select>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <hr />
      </div>
    </div>

    <div class="step-content row">
      <div>3.</div>
      <div>&nbsp;</div>
      <div>
        <span style="font-weight: bold">Adjust Ordering Step</span>: Please
        click the button below to listen to your arrangement. <br />Does the
        arrangement sound to be in a particular order/seqeuence? If not, please
        redo from Step 1.
      </div>
    </div>
    <div>&nbsp;</div>
    <div class="step-content row">
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>
        <button
          id="arrangementBtn_ordering"
          @click="
            listenArrangement($event, 'ordering_arrangement_listened');
            updateClickAnalytics('task_ordering_arrangement_button');
          "
        >
          Click Here To Listen to the Arrangement To Verify Ordering
        </button>
      </div>
    </div>
    <div>&nbsp;</div>
    <div class="step-content">
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>
        <input
          type="checkbox"
          id="ordering_checkbox"
          name="ordering_checkbox"
          value="ordered"
          @change="update_field($event)"
          v-model="formData[id+'_ordering_checkbox']"
          disabled
        />
        <label for="ordering_checkbox">
          &nbsp;I have listened to the arrangement and verified that it is in
          the correct order of sequence.</label
        ><br />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <hr />
      </div>
    </div>

    <div class="step-content row">
      <div>4.</div>
      <div>&nbsp;</div>
      <div>
        <span style="font-weight: bold">Adjust Relative Position Step</span>:
        Please click the button below to listen to your arrangement again.
        <br />Does the arrangement sound such that each clip is at a correct
        distance/spacing relative to each other? If not, please redo from Step
        1.
      </div>
    </div>

    <div>&nbsp;</div>
    <div class="step-content row">
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>
        <button
          id="arrangementBtn_distance"
          @click="
            listenArrangement($event, 'distance_arrangement_listened');
            updateClickAnalytics('task_distance_arrangement_button');
          "
        >
          Click Here To Listen to the Arrangement To Verify Distance/Spacing
        </button>
      </div>
    </div>
    <div>&nbsp;</div>
    <div class="step-content">
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>
        <input
          type="checkbox"
          id="distance_checkbox"
          name="distance_checkbox"
          value="distance"
          @change="update_field($event)"
          v-model="formData[id+'_distance_checkbox']"
          disabled
        />
        <label for="distance_checkbox">
          &nbsp;I have listened to the arrangement and verified that the
          distance/spacing of the samples is correct.</label
        ><br />
      </div>
    </div>

    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>
  </div>
</template>

<script  type="module">
import { mapActions, mapGetters } from "vuex";

export default {
  props: ['id', 'audio_samples'],
  data() {
    return {
      num_positions: [1, 2, 3, 4, 5],
      audio_1_select: 0,
      audio_2_select: 0,
      audio_3_select: 0,
      audio_4_select: 0,
      audio_5_select: 0,
      sound_index: 0,
      sounds_in_sequence: [],
      current_playing_arrangement: "",
    };
  },
  created: function () {
    if(!Object.keys(this.formData).some((key) => key.startsWith(this.id))){ 
      //Init clip positions if user has not moved them yet.
      var obj = {};
      obj['audio_1_select'] = '0';
      obj['audio_2_select'] = '0';
      obj['audio_3_select'] = '0';
      obj['audio_4_select'] = '0';
      obj['audio_5_select'] = '0';
      this.updateFormData(obj);
    }
  },
  computed: {
    ...mapGetters(["formData", "config"]),
    test_index: function () {
      return this.id.split('_')[1];
    },
    ref1_url: function () {
      return this.audio_samples.ref1_url;
    },
    ref2_url: function () {
      return this.audio_samples.ref2_url;
    },
  },
  methods: {
    ...mapActions(["updateFormData", "updateClickAnalytics"]),
    getFormDataValue(nm) {
      return this.formData[this.id+'_'+nm]
    },
    audio_url(loc) {
      const nm = "audio_" + loc + "_url";
      return this.audio_samples[nm];
    },
    updateForm(nm, val) {
      var obj = {};
      obj[nm] = val;
      this.updateFormData(obj);
    },
    listenedCheck(nm) {
      this.updateForm(nm, true);
    },
    updateAudioClickAnalytics(nm) {
      if (this.current_playing_arrangement == "") {
        //Update audio analytics only if arrangement is not playing
        this.updateClickAnalytics(nm);
      }
    },
    numberRangeCheck($event) {
      const pos = $event.target.name.split("_")[1];
      if ($event.target.value < 0 || $event.target.value > 100) {
        document.getElementById("span_" + pos + "_error").style.visibility =
          "visible";
      } else {
        document.getElementById("span_" + pos + "_error").style.visibility =
          "hidden";
      }
    },
    update_field($event, nm) {
      var obj = {};
      obj[$event.target.name] = $event.target.value;
      if ($event.target.type == "checkbox") {
        obj[$event.target.name] = $event.target.checked;
      }
      this.updateFormData(obj);
    },
    playCheck(e) {
      var allAudios = document.getElementsByTagName("audio");
      for (var i = 0; i < allAudios.length; i++) {
        if (allAudios[i].paused == false && allAudios[i] != e.target) {
          e.target.pause();
          oneAudioOnlyModal.style.display = "block";
        }
      }
    },
    closeModal() {
      if (oneAudioOnlyModal) oneAudioOnlyModal.style.display = "none";
      if (errorModal) errorModal.style.display = "none";
    },
    playSequence() {
      if (this.sound_index == this.sounds_in_sequence.length) {
        arrangementBtn_distance.removeAttribute("disabled");
        arrangementBtn_ordering.removeAttribute("disabled");
        if (this.current_playing_arrangement.includes("ordering"))
          ordering_checkbox.removeAttribute("disabled");
        if (this.current_playing_arrangement.includes("distance"))
          distance_checkbox.removeAttribute("disabled");
        this.current_playing_arrangement = ""; //Reset flag
        return;
      }
      this.sounds_in_sequence[this.sound_index].addEventListener(
        "ended",
        this.playSequence
      );
      if (this.sound_index != 0)
        this.sounds_in_sequence[this.sound_index - 1].removeEventListener(
          "ended",
          this.playSequence
        );
      this.sounds_in_sequence[this.sound_index].play();
      this.sound_index++;
    },
    listenArrangement(e, nm) {
      arrangementBtn_distance.disabled = true;
      arrangementBtn_ordering.disabled = true;
      this.sounds_in_sequence = [];
      this.sound_index = 0;
      let arrangement = {
        ref_1: -1,
        clip_1: parseInt(document.getElementById("audio_1_select").value),
        clip_2: parseInt(document.getElementById("audio_2_select").value),
        clip_3: parseInt(document.getElementById("audio_3_select").value),
        clip_4: parseInt(document.getElementById("audio_4_select").value),
        clip_5: parseInt(document.getElementById("audio_5_select").value),
        ref_2: 10000,
      };

      arrangement = Object.entries(arrangement)
        .sort(([, a], [, b]) => a - b)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

      let ind = 0;
      for (const key in arrangement) {
        this.sounds_in_sequence[ind] = document.getElementById(key + "_audio");
        ind++;
      }

      this.current_playing_arrangement = nm;

      this.listenedCheck(nm);
      this.playSequence();
    },
    validateNumberField(f) {
      return f != undefined && f != "" && parseInt(f) > 0 && parseInt(f) <= 100;
    },
    validateForm() {
      const ref_clip_1_listened = this.getFormDataValue('first_reference_listened_test');
      const ref_clip_2_listened = this.getFormDataValue('second_reference_listened_test');

      const audio_listened_test_1 = this.getFormDataValue('audio_listened_test_1');
      const audio_listened_test_2 = this.getFormDataValue('audio_listened_test_2');
      const audio_listened_test_3 = this.getFormDataValue('audio_listened_test_3');
      const audio_listened_test_4 = this.getFormDataValue('audio_listened_test_4');
      const audio_listened_test_5 = this.getFormDataValue('audio_listened_test_5');

      const listened =
        ref_clip_1_listened &&
        ref_clip_2_listened &&
        audio_listened_test_1 &&
        audio_listened_test_2 &&
        audio_listened_test_3 &&
        audio_listened_test_4 &&
        audio_listened_test_5;

      const allFieldsUpdated =
        this.validateNumberField(this.getFormDataValue('audio_1_select')) &&
        this.validateNumberField(this.getFormDataValue('audio_2_select')) &&
        this.validateNumberField(this.getFormDataValue('audio_3_select')) &&
        this.validateNumberField(this.getFormDataValue('audio_4_select')) &&
        this.validateNumberField(this.getFormDataValue('audio_5_select')) &&
        this.getFormDataValue('distance_checkbox') != undefined &&
        this.getFormDataValue('distance_checkbox') != false &&
        this.getFormDataValue('ordering_checkbox') != undefined &&
        this.getFormDataValue('ordering_checkbox') != false;

      if (!(listened && allFieldsUpdated)) {
        errorModal.style.display = "block";
      }

      return listened && allFieldsUpdated;
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
  text-align: center;
  font-weight: bold;
  font-size: 250%;
}

.notebox {
  border: solid black 1px;
  width: 90%;
  padding: 5px;
}

.step-content {
  display: grid;
  grid-template-columns: 2% 1% 95%;
  margin-left: 1%;
}

.clipbox-noborder {
  margin-left: 10px;
  padding: 10px;
  width: 70%;
}

.clipbox-border {
  margin-left: 2%;
  border: solid black 1px;
  padding: 2px;
  width: 70%;
}

.pad-top {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 2%;
  width: 70%;
}

.margin-top {
  margin-top: 20px;
}

h3 {
  margin-top: 0;
}

.clips-section {
  display: grid;
  grid-template-columns: 5% 30% 40%;
  padding-left: 5%;
}

.clips-section span {
  padding-top: 20px;
}

/* The Modal (background) */
.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 10;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 33%;
  /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close,
.oneAudioOnlyClose {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus,
.oneAudioOnlyClose:hover,
.oneAudioOnlyClose:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.grid-inner-item {
  display: grid;
  grid-template-columns: 20% 5% 70%;
  padding-top: 5%;
}

.grid-inner-item audio {
  width: 100%;
}
</style>
