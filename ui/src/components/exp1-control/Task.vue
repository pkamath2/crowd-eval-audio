<template>
  <div class="row animatedsound-container">
    <div id="errorModal" class="modal">
      <div class="modal-content">
        <p>
          Please listen to all sound clips
          <span style="font-weight: bold">fully</span> and answer the questions
          before going to the next screen.
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

    <div class="heading">3. Audio Smoothness Evaluation Task</div>
    <div>&nbsp;</div>

    <div class="row">
      <div class="col-12">
        This page outlines 2 audio clips. Please listen to the 2 clips before
        answering the questions. Both clips start at one sound (e.g., sound of
        fire crackling or an engine running) and slowly transitions towards the
        end to another sound (e.g., sound made by a large crowd or sound made by
        water filling a container).
      </div>
      <div>&nbsp;</div>
      <div class="col-12">
        Although both clips may sound quite different from each other, you will
        need to select the clip which sounds more 'smooth' in quality while
        transitioning from start to its end.
      </div>
      <div>&nbsp;</div>

      <p style="padding-left: 10px; font-size: small">
        <i>(Please allow few seconds for the audio clips to load.)</i>
      </p>
    </div>

    <div class="row">
      <div class="col-4">
        <div class="row"><span style="text-align: left">Clip 1:</span></div>
        <div class="row">
          <span
            ><audio
              controls
              controlsList="nodownload noplaybackrate"
              @ended="listenedCheck('first_sound_listened_test')"
              @play="
                playCheck($event);
                updateClickAnalytics('task_first_sound');
              "
            >
              <source :src="first_sound_url" type="audio/wav" /></audio
          ></span>
        </div>
      </div>
      <div class="col-4">
        <div class="row"><span style="text-align: left">Clip 2:</span></div>
        <div class="row">
          <span
            ><audio
              controls
              controlsList="nodownload noplaybackrate"
              @ended="listenedCheck('second_sound_listened_test')"
              @play="
                playCheck($event);
                updateClickAnalytics('task_second_sound');
              "
            >
              <source :src="second_sound_url" type="audio/wav" /></audio
          ></span>
        </div>
      </div>
    </div>

    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>

    <div class="row">
      <p style="padding-left: 10px">
        Which of the sounds above makes a smoother transition between its two
        endpoints?
      </p>
    </div>

    <div class="row">&nbsp;</div>

    <div class="row">
      <div class="col-1 p-0" style="text-align: center">
        <input
          type="radio"
          name="smooth_better_clip"
          id="smooth_first_clip_better"
          value="smooth_first_clip_better"
          @change="
            updateForm('smooth_better_clip', 'smooth_first_clip_better');
            updateClickAnalytics('task_option_changed');
          "
        />
      </div>
      <div class="col-6 p-0" style="text-align: left">
        <label for="smooth_first_clip_better"
          >Clip 1 is more smoother than clip 2</label
        >
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-1 p-0" style="text-align: center">
        <input
          type="radio"
          name="smooth_better_clip"
          id="smooth_second_clip_better"
          value="smooth_second_clip_better"
          @change="
            updateForm('smooth_better_clip', 'smooth_second_clip_better');
            updateClickAnalytics('task_option_changed');
          "
        />
      </div>
      <div class="col-6 p-0" style="text-align: left">
        <label for="smooth_second_clip_better"
          >Clip 2 is more smoother than clip 1</label
        >
      </div>
    </div>
    <!-- <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-1 p-0" style="text-align: center">
        <input
          type="radio"
          name="smooth_better_clip"
          id="smooth_both_similar"
          value="smooth_both_similar"
          @change="updateForm('smooth_better_clip', 'smooth_both_similar')"
        />
      </div>
      <div class="col-6 p-0" style="text-align: left">
        <label for="both_similar"
          >Cannot compare or No noticeable difference between the two
          clips</label
        >
      </div>
    </div> -->

    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>
  </div>
</template>

<script  type="module">
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  mounted: function () {},
  computed: {
    ...mapGetters(["formData", "config"]),
    first_sound_url: function () {
      return this.config.first_sound_url;
    },
    second_sound_url: function () {
      return this.config.second_sound_url;
    },
  },
  methods: {
    ...mapActions(["updateFormData", "updateClickAnalytics"]),
    updateForm(nm, val) {
      var obj = {};
      obj[nm] = val;
      this.updateFormData(obj);
    },
    listenedCheck(nm) {
      this.updateForm(nm, true);
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
    validateForm() {
      const clip_1_listened = this.formData.first_sound_listened_test;
      const clip_2_listened = this.formData.second_sound_listened_test;

      const listened = clip_1_listened && clip_2_listened;
      const allFieldsUpdated = this.formData.smooth_better_clip != undefined;

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
