<!--
    The sliders on this page were developed based on this superb CodePen by Ana Tudor - https://codepen.io/thebabydino/pen/NWWerZG 
-->
<template>
  <div class="row animatedsound-container">
    <div id="errorModal" class="modal">
      <div class="modal-content">
        <p>
          Please listen to <span style="font-weight: bolder">all</span> sound
          clips and both the
          <span style="font-weight: bolder">arrangements fully</span> and
          adjust/move/re-position
          <span style="font-weight: bolder">all the sliders</span> for each
          audio clip accordingly before going to the next screen.
        </p>
        <span><button @click="closeModal">ok!</button></span>
      </div>
    </div>

    <div id="oneAudioOnlyModal" class="modal">
      <div class="modal-content">
        <p>Please listen very closely to <b>one audio clip</b> at a time.</p>
        <span><button @click="closeModal">ok!</button></span>
      </div>
    </div>

    <div class="heading row">Audio Perceptual Ordering Task</div>
    <div>&nbsp;</div>

    <div class="row">
      Please follow the instructions for each step below to complete this task.
    </div>
    <div>&nbsp;</div>

    <div id="all-inputs" class="invisible" style="max-height: 10px">
      <!-- <div id="all-inputs"> -->
      <div id="ref-1-surrounding" class="dotted-border">
        <div
          style="
            --colorbg: grey;
            padding: 5px;
            border: solid black 1px;
            background-color: var(--colorbg);
          "
        >
          <audio
            id="ref_1_audio"
            controls
            controlsList="nodownload noplaybackrate"
            @ended="
              listenedCheck('ref_1_listened');
              removeSpotlight($event, 'ref-1-surrounding');
            "
            @play="
              playCheck($event);
              addSpotlight('ref-1-surrounding', 'ref_1_value');
            "
            @pause="removeSpotlight($event, 'ref-1-surrounding', 'ref_1_value')"
          >
            <source
              src="../assets/audio-samples/waterfill/ZOOM0050_waterfilling_22secs_0.wav"
              type="audio/wav"
            />
          </audio>
        </div>
      </div>
      <div>&nbsp;</div>
      <div id="clip-1-surrounding" class="dotted-border">
        <div
          style="
            --colorbg: #cd2026;
            padding: 5px;
            border: solid black 1px;
            background-color: var(--colorbg);
          "
        >
          <audio
            id="clip_1_audio"
            controls
            controlsList="nodownload noplaybackrate"
            @ended="
              listenedCheck('clip_1_listened');
              removeSpotlight($event, 'clip-1-surrounding', 'clip_1_value');
            "
            @play="
              playCheck($event);
              addSpotlight('clip-1-surrounding', 'clip_1_value');
            "
            @pause="
              removeSpotlight($event, 'clip-1-surrounding', 'clip_1_value')
            "
          >
            <source
              src="../assets/audio-samples/waterfill/ZOOM0050_waterfilling_22secs_8.wav"
              type="audio/wav"
            />
          </audio>
        </div>
      </div>

      <div>&nbsp;</div>
      <div id="clip-2-surrounding" class="dotted-border">
        <div
          style="
            --colorbg: #4aa564;
            padding: 5px;
            border: solid black 1px;
            background-color: var(--colorbg);
          "
        >
          <audio
            id="clip_2_audio"
            controls
            controlsList="nodownload noplaybackrate"
            @ended="
              listenedCheck('clip_2_listened');
              removeSpotlight($event, 'clip-2-surrounding', 'clip_2_value');
            "
            @play="
              playCheck($event);
              addSpotlight('clip-2-surrounding', 'clip_2_value');
            "
            @pause="
              removeSpotlight($event, 'clip-2-surrounding', 'clip_2_value')
            "
          >
            <source
              src="../assets/audio-samples/waterfill/ZOOM0050_waterfilling_22secs_6.wav"
              type="audio/wav"
            />
          </audio>
        </div>
      </div>

      <div>&nbsp;</div>
      <div id="clip-3-surrounding" class="dotted-border">
        <div
          style="
            --colorbg: #f9c642;
            padding: 5px;
            border: solid black 1px;
            background-color: var(--colorbg);
          "
        >
          <audio
            id="clip_3_audio"
            controls
            controlsList="nodownload noplaybackrate"
            @ended="
              listenedCheck('clip_3_listened');
              removeSpotlight($event, 'clip-3-surrounding', 'clip_3_value');
            "
            @play="
              playCheck($event);
              addSpotlight('clip-3-surrounding', 'clip_3_value');
            "
            @pause="
              removeSpotlight($event, 'clip-3-surrounding', 'clip_3_value')
            "
          >
            <source
              src="../assets/audio-samples/waterfill/ZOOM0050_waterfilling_22secs_2.wav"
              type="audio/wav"
            />
          </audio>
        </div>
      </div>

      <div>&nbsp;</div>
      <div id="clip-4-surrounding" class="dotted-border">
        <div
          style="
            --colorbg: #0071bc;
            padding: 5px;
            border: solid black 1px;
            background-color: var(--colorbg);
          "
        >
          <audio
            id="clip_4_audio"
            controls
            controlsList="nodownload noplaybackrate"
            @ended="
              listenedCheck('clip_4_listened');
              removeSpotlight($event, 'clip-4-surrounding', 'clip_4_value');
            "
            @play="
              playCheck($event);
              addSpotlight('clip-4-surrounding', 'clip_4_value');
            "
            @pause="
              removeSpotlight($event, 'clip-4-surrounding', 'clip_4_value')
            "
          >
            <source
              src="../assets/audio-samples/waterfill/ZOOM0050_waterfilling_22secs_4.wav"
              type="audio/wav"
            />
          </audio>
        </div>
      </div>

      <div>&nbsp;</div>
      <div id="clip-5-surrounding" class="dotted-border">
        <div
          style="
            --colorbg: darkorange;
            padding: 5px;
            border: solid black 1px;
            background-color: var(--colorbg);
          "
        >
          <audio
            id="clip_5_audio"
            controls
            controlsList="nodownload noplaybackrate"
            @ended="
              listenedCheck('clip_5_listened');
              removeSpotlight($event, 'clip-5-surrounding', 'clip_5_value');
            "
            @play="
              playCheck($event);
              addSpotlight('clip-5-surrounding', 'clip_5_value');
            "
            @pause="
              removeSpotlight($event, 'clip-5-surrounding', 'clip_5_value')
            "
          >
            <source
              src="../assets/audio-samples/waterfill/ZOOM0050_waterfilling_22secs_7.wav"
              type="audio/wav"
            />
          </audio>
        </div>
      </div>

      <div>&nbsp;</div>

      <div id="ref-2-surrounding" class="dotted-border">
        <div
          style="
            --colorbg: grey;
            padding: 5px;
            border: solid black 1px;
            background-color: var(--colorbg);
          "
        >
          <audio
            id="ref_2_audio"
            controls
            controlsList="nodownload noplaybackrate"
            @ended="
              listenedCheck('ref_2_listened');
              removeSpotlight($event, 'ref-2-surrounding');
            "
            @play="
              playCheck($event);
              addSpotlight('ref-2-surrounding', 'ref_2_value');
            "
            @pause="removeSpotlight($event, 'ref-2-surrounding', 'ref_2_value')"
          >
            <source
              src="../assets/audio-samples/waterfill/ZOOM0050_waterfilling_22secs_10.wav"
              type="audio/wav"
            />
          </audio>
        </div>
      </div>
    </div>

    <div class="step-content row">
      <div>1.</div>
      <div>&nbsp;</div>
      <div>
        Hover over each of the colored thumbs below to listen to the audio
        samples.<br />
        The thumbs in
        <span style="background-color: #3b3a39; color: white; padding: 2px;">black</span> are
        your reference audio samples.<br />
        Please arrange/position the remaining thumbs in
        <span style="background-color: #cd2026; color: black; padding: 2px;">red</span>,
        <span style="background-color: #4aa564; color: black; padding: 2px;">green</span>,
        <span style="background-color: #f9c642; color: black; padding: 2px;">yellow</span>,
        <span style="background-color: #0071bc; color: black; padding: 2px;">blue</span>,
        <span style="background-color: darkorange; color: black; padding: 2px;">orange</span> in between the two references in a certain perceptual order.
      </div>
    </div>

    <div id="samples-container">
      <div>&nbsp;</div>

      <div class="wrap" role="group">
        <input
          id="ref_1_value"
          name="ref_1_value"
          type="range"
          min="0"
          value="0"
          max="100"
          disabled="true"
          style="--thumbcolor: #3b3a39; --thumbborder: transparent"
          @mouseover="mouseoverPlay('ref_1_audio')"
          @mouseout="mouseoutPause('ref_1_audio')"
        />

        <input
          id="clip_1_value"
          name="clip_1_value"
          type="range"
          min="0"
          value="45"
          max="100"
          style="--thumbcolor: #cd2026; --thumbborder: transparent"
          @change="sliderChanged('clip_1_slider_changed', $event)"
          @mouseover="mouseoverPlay('clip_1_audio')"
          @mouseout="mouseoutPause('clip_1_audio')"
        />
        <input
          id="clip_2_value"
          name="clip_2_value"
          type="range"
          min="0"
          value="47"
          max="100"
          style="--thumbcolor: #4aa564; --thumbborder: transparent"
          @change="sliderChanged('clip_2_slider_changed', $event)"
          @mouseover="mouseoverPlay('clip_2_audio')"
          @mouseout="mouseoutPause('clip_2_audio')"
        />
        <input
          id="clip_3_value"
          name="clip_3_value"
          type="range"
          min="0"
          value="49"
          max="100"
          style="--thumbcolor: #f9c642; --thumbborder: transparent"
          @change="sliderChanged('clip_3_slider_changed', $event)"
          @mouseover="mouseoverPlay('clip_3_audio')"
          @mouseout="mouseoutPause('clip_3_audio')"
        />
        <input
          id="clip_4_value"
          name="clip_4_value"
          type="range"
          min="0"
          value="51"
          max="100"
          style="--thumbcolor: #0071bc; --thumbborder: transparent"
          @change="sliderChanged('clip_4_slider_changed', $event)"
          @mouseover="mouseoverPlay('clip_4_audio')"
          @mouseout="mouseoutPause('clip_4_audio')"
        />
        <input
          id="clip_5_value"
          name="clip_5_value"
          type="range"
          min="0"
          value="53"
          max="100"
          style="--thumbcolor: darkorange; --thumbborder: transparent"
          @change="sliderChanged('clip_5_slider_changed', $event)"
          @mouseover="mouseoverPlay('clip_5_audio')"
          @mouseout="mouseoutPause('clip_5_audio')"
        />
        <input
          id="ref_2_value"
          name="ref_2_value"
          type="range"
          min="0"
          value="100"
          max="100"
          disabled="true"
          style="--thumbcolor: #3b3a39; --thumbborder: transparent"
          @mouseover="mouseoverPlay('ref_2_audio')"
          @mouseout="mouseoutPause('ref_2_audio')"
        />
      </div>
    </div>

     <div class="step-content row">
      <div>2.</div>
      <div>&nbsp;</div>
      <div>
        <span style="font-weight: bold">Adjust Ordering Step</span>: Please
        click the button below to listen to your arrangement. <br />Does the
        arrangement sound to be in some order/seqeuence? If not, please redo
        from Step 1.
      </div>
    </div>
    <div>&nbsp;</div>
    <div class="step-content row">
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>
        <button id="arrangementBtn_ordering" @click="listenArrangement($event, 'ordering_arrangement_listened')">
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
          @change="update_checkbox($event)"
          disabled
        />
        <label for="ordering_checkbox">
          &nbsp;I have listened to the arrangement and verified that it is in the correct order of sequence.</label
        ><br />
      </div>
    </div>

    <div>&nbsp;</div>
    <div>&nbsp;</div>

    <div class="step-content row">
      <div>3.</div>
      <div>&nbsp;</div>
      <div>
        <span style="font-weight: bold">Adjust Distance Step</span>: Please
        click the button below to listen to your arrangement again. <br />Does
        the arrangement sound such that each clip is at a correct
        distance/spacing from each other? If not, please redo from Step 1.
      </div>
    </div>
    <div>&nbsp;</div>
    <div class="step-content row">
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>
        <button id="arrangementBtn_distance" @click="listenArrangement($event, 'distance_arrangement_listened')">
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
          @change="update_checkbox($event)"
          disabled
        />
        <label for="distance_checkbox">
          &nbsp;I have listened to the arrangement and verified that the
          distance/spacing of the samples is correct.</label
        ><br />
      </div>
    </div>

    <div>&nbsp;</div>
    <div>&nbsp;</div>

    <div class="step-content row">
      <div>4.</div>
      <div>&nbsp;</div>
      <div>
        Please listen to <span style="font-weight: bolder">all</span> sound
        clips and the
        <span style="font-weight: bolder">arrangement fully</span> and
        adjust/move/re-position
        <span style="font-weight: bolder">all the sliders</span> for each audio
        clip accordingly before clicking on 'Next' below.
      </div>
    </div>
  </div>
</template>

<script  type="module">
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      num_thumbs: 7,
      sound_index: 0,
      sounds_in_sequence: [],
      current_playing_arrangement: "",
      disable_mouse_over_and_out: false
    };
  },
  computed: {
    ...mapGetters(["formData"]),
  },
  methods: {
    ...mapActions(["updateFormData"]),
    sliderChanged(nm, e) {
      var obj = {};
      obj[nm] = true;
      obj[e.target.name] = e.target.value;
      this.updateFormData(obj);
    },
    listenedCheck(nm) {
      var obj = {};
      obj[nm] = true;
      this.updateFormData(obj);
    },
    update_checkbox(e) {
      var obj = {};
      obj[e.target.name] = e.target.checked;
      this.updateFormData(obj);
    },
    dblclicked(audio_id) {
      document.getElementById(audio_id).play();
    },
    mouseoverPlay(audio_id) {
      if(!this.disable_mouse_over_and_out)
        document.getElementById(audio_id).play();
    },
    mouseoutPause(audio_id) {
      if(!this.disable_mouse_over_and_out)
        document.getElementById(audio_id).pause();
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
    addSpotlight(contId, thumbId) {
      if (thumbId !== undefined)
        document
          .getElementById(thumbId)
          .style.setProperty("--thumbborder", "black");
      document.getElementById(contId).style.border = "dashed black 2px";
    },
    removeSpotlight(e, contId, thumbId) {
      e.target.currentTime = 0;
      if (thumbId !== undefined)
        document
          .getElementById(thumbId)
          .style.setProperty("--thumbborder", "transparent");
      document.getElementById(contId).style.border = "none";
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
        this.disable_mouse_over_and_out = false;
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
      
      this.disable_mouse_over_and_out = true; // When arrangement is playing - nobody disturb it.

      arrangementBtn_distance.disabled = true;
      arrangementBtn_ordering.disabled = true;
      this.sounds_in_sequence = [];
      this.sound_index = 0;
      let arrangement = {
        ref_1: -1,
        clip_1: parseInt(document.getElementById("clip_1_value").value),
        clip_2: parseInt(document.getElementById("clip_2_value").value),
        clip_3: parseInt(document.getElementById("clip_3_value").value),
        clip_4: parseInt(document.getElementById("clip_4_value").value),
        clip_5: parseInt(document.getElementById("clip_5_value").value),
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
    validateForm() {
      const ref_1_listened = this.formData.ref_1_listened;
      const ref_2_listened = this.formData.ref_2_listened;
      const clip_1_listened = this.formData.clip_1_listened;
      const clip_2_listened = this.formData.clip_2_listened;
      const clip_3_listened = this.formData.clip_3_listened;
      const clip_4_listened = this.formData.clip_4_listened;
      const clip_5_listened = this.formData.clip_5_listened;
      const full_arrangement_listened =
        this.formData.ordering_arrangement_listened &&
        this.formData.distance_arrangement_listened;

      const listened =
        ref_1_listened &&
        ref_2_listened &&
        clip_1_listened &&
        clip_2_listened &&
        clip_3_listened &&
        clip_4_listened &&
        clip_5_listened &&
        full_arrangement_listened;

      const clip_1_slider_changed = this.formData.clip_1_slider_changed;
      const clip_2_slider_changed = this.formData.clip_2_slider_changed;
      const clip_3_slider_changed = this.formData.clip_3_slider_changed;
      const clip_4_slider_changed = this.formData.clip_4_slider_changed;
      const clip_5_slider_changed = this.formData.clip_5_slider_changed;

      const sliderChangedTest =
        clip_1_slider_changed &&
        clip_2_slider_changed &&
        clip_3_slider_changed &&
        clip_4_slider_changed &&
        clip_5_slider_changed;

      if (!(listened && sliderChangedTest)) errorModal.style.display = "block";
      return listened && sliderChangedTest;
    },
  },
  mounted() {},
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

.step-content {
  display: grid;
  grid-template-columns: 2% 1% 95%;
  margin-left: 1%;
}

#all-refs {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  width: 100%;
  padding-top: 1%;
  padding-left: 5%;
}

#all-inputs {
  display: grid;
  grid-template-columns: repeat(auto-fill, 13% 1%);
  width: 100%;
}

#samples-container {
  display: grid;
  grid-template-columns: 2% 80%;
  width: 100%;
  padding-left: 3%;
}

.wrap {
  display: grid;
  grid-template: repeat(2, -webkit-max-content) 4em/1fr 1fr;
  grid-template: repeat(2, max-content) 4em/1fr 1fr;
  overflow: hidden;
  position: relative;
  margin: 1.2em auto;
  width: 100%;
  background-color: rgb(196, 196, 196);
}

input[type="range"] {
  grid-column: 1 / span v-bind(num_thumbs);
  grid-row: 3;
  z-index: 1;
  top: 0;
  left: 0;
  margin: 0;
  background: none;
  /* get rid of white Chrome background */
  --col: #000;
  pointer-events: none;
}

input[type="range"]::-webkit-slider-runnable-track,
input[type="range"]::-webkit-slider-thumb,
input[type="range"] {
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  padding-bottom: 5em;
  width: 100%;
  height: 100%;
  background: none;
}

input[type="range"]::-moz-range-track {
  padding-bottom: 5em;
  width: 100%;
  height: 100%;
  background: none;
}

input[type="range"]::-webkit-slider-thumb {
  border: none;
  /* get rid of Firefox thumb border */
  width: 2.3em;
  height: 5em;
  border-radius: 0;
  /* get rid of Firefox corner rounding */
  background: linear-gradient(90deg, #fff 2px, transparent 0) calc(1.2em - 1px),
    radial-gradient(circle, var(--thumbcolor) calc(1em - 1px), transparent 1em),
    radial-gradient(
      circle,
      transparent 0.7em,
      var(--thumbborder) 0.7em 1.1em,
      transparent 1.2em
    );
  pointer-events: auto;
}

input[type="range"]::-moz-range-thumb {
  border: none;
  /* get rid of Firefox thumb border */
  width: 2.3em;
  height: 5em;
  border-radius: 0;
  /* get rid of Firefox corner rounding */
  background: linear-gradient(90deg, #fff 2px, transparent 0) calc(1.2em - 1px),
    radial-gradient(circle, var(--thumbcolor) calc(1em - 1px), transparent 1em),
    radial-gradient(
      circle,
      transparent 0.7em,
      var(--thumbborder) 0.7em 1.1em,
      transparent 1.2em
    );
  pointer-events: auto;
}

.range-active {
  border: solid black 1px;
}

input[type="range"]:focus {
  z-index: 2;
  outline: dotted 1px currentcolor;
}

/* The Modal (background) */
.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
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
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

#overlay-disabled {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.3);
}

.dotted-border {
  padding: 5px;
  border: dashed solid white 2px;
}
</style>
