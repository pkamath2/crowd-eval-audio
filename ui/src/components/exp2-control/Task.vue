<template>
  <div class="row animatedsound-container">
    <div id="errorModal" class="modal">
      <div class="modal-content">
        <p>
          Please listen to all sound clips
          <span style="font-weight: bold">fully</span> and answer all the
          questions before going to the next screen.
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

    <div class="heading"> 3. Audio Perceptual Ordering Task</div>
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
              controls
              controlsList="nodownload noplaybackrate"
              @ended="listenedCheck('first_reference_listened_test')"
              @play="playCheck($event)"
            >
              <source
                :src="ref1_url"
                type="audio/wav"
              /></audio
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
              controls
              controlsList="nodownload noplaybackrate"
              @ended="listenedCheck('second_reference_listened_test')"
              @play="playCheck($event)"
            >
              <source
                :src="ref2_url"
                type="audio/wav"
              /></audio
          ></span>
        </div>
      </div>
    </div>

    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>

    <div class="row">
      <div class="col-4">
        <p style="padding-left: 40%; font-weight: bold">Samples under test</p>
      </div>
      <div class="col-4">
        <p style="padding-left: 20%; font-weight: bold">Rank in-between references</p>
      </div>
    </div>

    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-1 p-3">
        <span style="text-align: left">Audio 1:</span>
      </div>
      <div class="col-3">
        <div class="row">
          <span
            ><audio
              controls
              controlsList="nodownload noplaybackrate"
              @ended="listenedCheck('audio_listened_test_1')"
              @play="playCheck($event)"
            >
              <source
                :src="audio_1_url"
                type="audio/wav"
              /></audio
          ></span>
        </div>
      </div>
      <div class="col-1 p-1">&nbsp;</div>
      <div class="col-2">
        <div class="row p-2">
          <select
            name="audio_1_select"
            id="audio_1_select"
            style="width: 100%"
            v-model="audio_1_select"
            @change="update_field($event, 'audio_1_select')"
          >
            <option v-for="item in num_positions" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
          <!-- <input type="number" name="age" id="age"
                min="18" max="100" step="1" value="18"> -->
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-7">
        <hr/>
      </div>
    </div>
    <div class="row">
      <div class="col-1 p-3">
        <span style="text-align: left">Audio 2:</span>
      </div>
      <div class="col-3">
        <div class="row">
          <span
            ><audio
              controls
              controlsList="nodownload noplaybackrate"
              @ended="listenedCheck('audio_listened_test_2')"
              @play="playCheck($event)"
            >
              <source
                :src="audio_2_url"
                type="audio/wav"
              /></audio
          ></span>
        </div>
      </div>
      <div class="col-1 p-1">&nbsp;</div>
      <div class="col-2">
        <div class="row p-2">
          <select
            name="audio_2_select"
            id="audio_2_select"
            style="width: 100%"
            v-model="audio_2_select"
            @change="update_field($event, 'audio_2_select')"
          >
            <option v-for="item in num_positions" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-7">
        <hr/>
      </div>
    </div>
    <div class="row">
      <div class="col-1 p-3">
        <span style="text-align: left">Audio 3:</span>
      </div>
      <div class="col-3">
        <div class="row">
          <span
            ><audio
              controls
              controlsList="nodownload noplaybackrate"
              @ended="listenedCheck('audio_listened_test_3')"
              @play="playCheck($event)"
            >
              <source
                :src="audio_3_url"
                type="audio/wav"
              /></audio
          ></span>
        </div>
      </div>
      <div class="col-1 p-1">&nbsp;</div>
      <div class="col-2">
        <div class="row p-2">
          <select
            name="audio_3_select"
            id="audio_3_select"
            style="width: 100%"
            v-model="audio_3_select"
            @change="update_field($event, 'audio_3_select')"
          >
            <option v-for="item in num_positions" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-7">
        <hr/>
      </div>
    </div>
    <div class="row">
      <div class="col-1 p-3">
        <span style="text-align: left">Audio 4:</span>
      </div>
      <div class="col-3">
        <div class="row">
          <span
            ><audio
              controls
              controlsList="nodownload noplaybackrate"
              @ended="listenedCheck('audio_listened_test_4')"
              @play="playCheck($event)"
            >
              <source
                :src="audio_4_url"
                type="audio/wav"
              /></audio
          ></span>
        </div>
      </div>
      <div class="col-1 p-1">&nbsp;</div>
      <div class="col-2">
        <div class="row p-2">
          <select
            name="audio_4_select"
            id="audio_4_select"
            style="width: 100%"
            v-model="audio_4_select"
            @change="update_field($event, 'audio_4_select')"
          >
            <option v-for="item in num_positions" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-7">
        <hr/>
      </div>
    </div>
    <div class="row">
      <div class="col-1 p-3">
        <span style="text-align: left">Audio 5:</span>
      </div>
      <div class="col-3">
        <div class="row">
          <span
            ><audio
              controls
              controlsList="nodownload noplaybackrate"
              @ended="listenedCheck('audio_listened_test_5')"
              @play="playCheck($event)"
            >
              <source
                :src="audio_5_url"
                type="audio/wav"
              /></audio
          ></span>
        </div>
      </div>
      <div class="col-1 p-1">&nbsp;</div>
      <div class="col-2">
        <div class="row p-2">
          <select
            name="audio_5_select"
            id="audio_5_select"
            style="width: 100%"
            v-model="audio_5_select"
            @change="update_field($event, 'audio_5_select')"
          >
            <option v-for="item in num_positions" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>
  </div>
</template>

<script  type="module">
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      num_positions: [1, 2, 3, 4, 5],
    };
  },
  mounted: function () {},
  computed: {
    ...mapGetters(["formData", "config"]),
    ref1_url: function(){
      return this.config.ref1_url;
    },
    ref2_url: function(){
      return this.config.ref2_url;
    },
    audio_1_url: function(){
      return this.config.audio_1_url;
    },
    audio_2_url: function(){
      return this.config.audio_2_url;
    },
    audio_3_url: function(){
      return this.config.audio_3_url;
    },
    audio_4_url: function(){
      return this.config.audio_4_url;
    },
    audio_5_url: function(){
      return this.config.audio_5_url;
    }
  },
  methods: {
    ...mapActions(["updateFormData"]),
    updateForm(nm, val) {
      var obj = {};
      obj[nm] = val;
      this.updateFormData(obj);
    },
    listenedCheck(nm) {
      this.updateForm(nm, true);
    },
    update_field($event, nm) {
      var obj = {};
      obj[nm] = $event.target.value;
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
    validateForm() {
      const ref_clip_1_listened = this.formData.first_reference_listened_test;
      const ref_clip_2_listened = this.formData.second_reference_listened_test;

      const audio_listened_test_1 = this.formData.audio_listened_test_1;
      const audio_listened_test_2 = this.formData.audio_listened_test_2;
      const audio_listened_test_3 = this.formData.audio_listened_test_3;
      const audio_listened_test_4 = this.formData.audio_listened_test_4;
      const audio_listened_test_5 = this.formData.audio_listened_test_5;

      const listened =
        ref_clip_1_listened &&
        ref_clip_2_listened &&
        audio_listened_test_1 &&
        audio_listened_test_2 &&
        audio_listened_test_3 &&
        audio_listened_test_4 &&
        audio_listened_test_5;

      const allFieldsUpdated =
        ((this.formData.audio_1_select != undefined) && 
         (this.formData.audio_2_select != undefined) && 
         (this.formData.audio_3_select != undefined) && 
         (this.formData.audio_4_select != undefined) && 
         (this.formData.audio_5_select != undefined));

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