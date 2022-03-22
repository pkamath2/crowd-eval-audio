<template>
  <div class="row animatedsound-container-priming">
    <div id="errorModalPriming" class="modal-priming">
      <div class="modal-content-priming">
        <p>
          Please listen to all sound clips
          <span style="font-weight: bold">fully</span> and drag/drop all the
          options or images into the requisite sections before going to the next
          screen.
        </p>
        <span><button @click="closeModal">ok!</button></span>
      </div>
    </div>

    <div id="listenFirstModalPriming" class="modal-priming">
      <div class="modal-content-priming">
        <p>
          In our experience, listening to both the sound clips
          <span style="font-weight: bold">fully</span> before attempting to
          drag/drop the icons helps evaluate the sounds better.
        </p>
        <span><button @click="closeModal">ok!</button></span>
      </div>
    </div>

    <div id="oneAudioOnlyModalPriming" class="modal-priming">
      <div class="modal-content-priming">
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

    <div class="heading">3.1 Audio Smoothness Evaluation Task</div>
    <div>&nbsp;</div>

    <div class="row">
      <div>
        Please follow the instructions for each step below to complete this
        task.
      </div>
    </div>
    <div>&nbsp;</div>

    <div class="row">
      <div class="col-12">
        This page outlines 2 audio clips,
        <span style="font-weight: bold">Clip 1</span> and
        <span style="font-weight: bold">Clip 2</span>. Both clips start at one
        sound (e.g., sound of fire crackling or an engine running) and slowly
        transitions towards the end to another sound (e.g., sound made by water
        filling a container).
      </div>
      <div>&nbsp;</div>
    </div>

    <div class="row step-content">
      <div>
        1.&nbsp;&nbsp;&nbsp;Please listen to both
        <span style="font-weight: bold">Clip 1</span> and
        <span style="font-weight: bold">Clip 2</span> in the grid below before
        attempting task. Make a note of how the sound starts, how it ends and
        its transitions in between.
      </div>
      <div>&nbsp;</div>
      <div>
        2.&nbsp;&nbsp;&nbsp;Please use your mouse to drag/drop the right option
        or icon in the requisite section.
      </div>
      <div>&nbsp;</div>
      <div class="row">
        <div class="col-12">
          <span style="background-color: hsl(170, 75%, 90%); font-weight: bold"
            >Detour or Uneven (green section)</span
          >: Please drag the 'Detour or Uneven' image to the clip which
          <span style="font-weight: bold; font-style: italic"
            ><u>transitions</u></span
          >

          from the start of the sound to its end via a
          <span style="font-weight: bold; font-style: italic">detour</span>
          through a third type of sound or in
          <span style="font-weight: bold; font-style: italic">uneven</span>
          steps, in comparison with the other clip.
        </div>
      </div>
      <div>&nbsp;</div>
      <div class="col-12">
        <span style="background-color: hsl(25, 75%, 90%); font-weight: bold"
          >Direct &amp; Even (red section)</span
        >: Please drag the 'Direct &amp; Even' image to the clip which
        <span style="font-weight: bold; font-style: italic"
          ><u>transitions</u></span
        >

        from the start of the sound to its end
        <span style="font-weight: bold; font-style: italic">directly</span>
        and in
        <span style="font-weight: bold; font-style: italic">even</span>
        steps, in comparison with the other clip.
      </div>
      <div>&nbsp;</div>
      <p style="padding-left: 10px; font-size: small">
        <i>Please allow few seconds for the audio clips to load. </i>
      </p>
    </div>

    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="grid-priming">
          <div
            class="itempriming2 itempriming"
            style="width: 100%; padding-top: 10%; padding-left: 20%"
          >
            <span style="font-weight: bold; color: white"
              >Drag icons to best match each clip</span
            >
          </div>
          <div
            class="itempriming3_1 itempriming"
            style="width: 100%; padding-top: 20%; padding-left: 25%"
          >
            <span style="font-weight: bold; color: white">Detour or Uneven</span
            ><br />
          </div>
          <div
            class="itempriming3_2 itempriming"
            style="width: 100%; padding-top: 20%; padding-left: 25%"
          >
            <span style="font-weight: bold; color: white"
              >Direct &amp; Even</span
            ><br />
          </div>
          <div class="itempriming6 itempriming grid-inner-item-priming">
            <span style="padding-left: 35%; padding-top: 15%"
              ><span style="font-weight: bold">Clip 1</span></span
            >
            <span
              ><audio
                controls
                controlsList="nodownload noplaybackrate"
                @ended="
                  listenedCheckPriming('first_sound_listened_test_priming')
                "
                @play="
                  playCheckPriming($event);
                  updateClickAnalytics('priming_first_sound');
                "
                preload="auto"
              >
                <source :src="first_sound_url" type="audio/wav" />
              </audio>
            </span>
          </div>
          <div
            class="itempriming7 itempriming"
            id="clip1PrimingDetourUnevenParking"
          ></div>
          <div
            class="itempriming8 itempriming"
            id="clip1PrimingDirectEvenParking"
          ></div>
          <div class="itempriming12 itempriming"></div>
          <div
            class="itempriming13 itempriming"
            id="neutralPrimingDetourUnevenParking"
          >
            <div
              id="detourUnevenPriming"
              style="padding: 2%; padding-left: 25%"
            >
              <img
                id="detourUnevenPrimingImg"
                style="max-height: 110px"
                src="../../assets/exp1/detour_and_uneven.png"
              />
            </div>
          </div>

          <div
            class="itempriming14 itempriming"
            id="neutralPrimingDirectEvenParking"
          >
            <div id="directEvenPriming" style="padding: 2%; padding-left: 25%">
              <img
                id="directEvenPrimingImg"
                style="max-height: 110px"
                src="../../assets/exp1/direct_and_even.png"
              />
            </div>
          </div>
          <div class="itempriming18 itempriming grid-inner-item-priming">
            <span style="padding-left: 35%; padding-top: 15%"
              ><span style="font-weight: bold">Clip 2</span></span
            >
            <span
              ><audio
                controls
                controlsList="nodownload noplaybackrate"
                @ended="
                  listenedCheckPriming('second_sound_listened_test_priming')
                "
                @play="
                  playCheckPriming($event);
                  updateClickAnalytics('priming_second_sound');
                "
                preload="auto"
              >
                <source :src="second_sound_url" type="audio/wav" /></audio
            ></span>
          </div>
          <div
            class="itempriming19 itempriming"
            id="clip2PrimingDetourUnevenParking"
          ></div>
          <div
            class="itempriming20 itempriming"
            id="clip2PrimingDirectEvenParking"
          ></div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script  type="module">
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  mounted: function () {
    let classes = document.getElementsByClassName("itempriming");
    for (let i = 0; i < classes.length; i++) {
      classes[i].style["background-color"] = `hsl(${Math.floor(240)},10%,80%)`;

      if ([0, 1, 2].indexOf(i) > -1) {
        classes[i].style.background = `hsl(${Math.floor(61)},6%,30%)`;
      }

      if ([4, 10].indexOf(i) > -1) {
        classes[i].style.background = `hsl(${Math.floor(170)},75%,90%)`;
      }

      if ([5, 11].indexOf(i) > -1) {
        classes[i].style.background = `hsl(${Math.floor(25)},75%,90%)`;
      }
    }

    const _thispriming = this; // Argh, I am losing my Vue! My sinceremost apologies to the purists.

    let draggingpriming = false;
    let dragmouseypriming;
    let dragOtherpriming;

    const detourUnevenPriming = document.getElementById("detourUnevenPriming");
    const directEvenPriming = document.getElementById("directEvenPriming");

    detourUnevenPriming.parent = document.getElementById(
      "neutralPrimingDetourUnevenParking"
    );
    detourUnevenPriming.addEventListener("mousedown", function (ev) {
      draggingpriming = detourUnevenPriming;
      dragmouseypriming = ev.clientY;
      ev.preventDefault();
    });

    document.addEventListener("mouseup", function (ev) {
      ev.preventDefault();
      if (draggingpriming == detourUnevenPriming) {
        if(!(_thispriming.actionablePrimingTargets().includes(ev.target.id))) {
          return; // Mouseup not on the icons.
        }
        if (_thispriming.dragDropCheckPriming()) {
          dragOtherpriming = directEvenPriming;

          draggingpriming.parent.removeChild(draggingpriming);
          dragOtherpriming.parent.removeChild(dragOtherpriming);
          if (ev.clientY < dragmouseypriming) {
            draggingpriming.parent = document.getElementById(
              "clip1PrimingDetourUnevenParking"
            );
            dragOtherpriming.parent = document.getElementById(
              "clip2PrimingDirectEvenParking"
            );

            _thispriming.updateFormPriming(
              "first_clip_direct_detour_priming",
              "detour_uneven"
            );
            _thispriming.updateFormPriming(
              "second_clip_direct_detour_priming",
              "direct_even"
            );

            _thispriming.updateClickAnalytics("priming_icon_moved");
          }
          if (ev.clientY > dragmouseypriming) {
            draggingpriming.parent = document.getElementById(
              "clip2PrimingDetourUnevenParking"
            );
            dragOtherpriming.parent = document.getElementById(
              "clip1PrimingDirectEvenParking"
            );

            _thispriming.updateFormPriming(
              "first_clip_direct_detour_priming",
              "direct_even"
            );
            _thispriming.updateFormPriming(
              "second_clip_direct_detour_priming",
              "detour_uneven"
            );

            _thispriming.updateClickAnalytics("priming_icon_moved");
          }
          draggingpriming.parent.appendChild(draggingpriming);
          dragOtherpriming.parent.appendChild(dragOtherpriming);

          draggingpriming = false;
        }
      }
    });

    directEvenPriming.parent = document.getElementById(
      "neutralPrimingDirectEvenParking"
    );
    directEvenPriming.addEventListener("mousedown", function (ev) {
      draggingpriming = directEvenPriming;
      dragmouseypriming = ev.clientY;
      ev.preventDefault();
    });

    document.addEventListener("mouseup", function (ev) {
      ev.preventDefault();
      if (draggingpriming == directEvenPriming) {
        if(!(_thispriming.actionablePrimingTargets().includes(ev.target.id))) {
          return; // Mouseup not on the icons.
        }
        if (_thispriming.dragDropCheckPriming()) {
          dragOtherpriming = detourUnevenPriming;

          draggingpriming.parent.removeChild(draggingpriming);
          dragOtherpriming.parent.removeChild(dragOtherpriming);
          if (ev.clientY < dragmouseypriming) {
            draggingpriming.parent = document.getElementById(
              "clip1PrimingDirectEvenParking"
            );
            dragOtherpriming.parent = document.getElementById(
              "clip2PrimingDetourUnevenParking"
            );

            _thispriming.updateFormPriming(
              "first_clip_direct_detour_priming",
              "direct_even"
            );
            _thispriming.updateFormPriming(
              "second_clip_direct_detour_priming",
              "detour_uneven"
            );

            _thispriming.updateClickAnalytics("priming_icon_moved");
          }
          if (ev.clientY > dragmouseypriming) {
            draggingpriming.parent = document.getElementById(
              "clip2PrimingDirectEvenParking"
            );
            dragOtherpriming.parent = document.getElementById(
              "clip1PrimingDetourUnevenParking"
            );

            _thispriming.updateFormPriming(
              "first_clip_direct_detour_priming",
              "detour_uneven"
            );
            _thispriming.updateFormPriming(
              "second_clip_direct_detour_priming",
              "direct_even"
            );

            _thispriming.updateClickAnalytics("priming_icon_moved");
          }
          draggingpriming.parent.appendChild(draggingpriming);
          dragOtherpriming.parent.appendChild(dragOtherpriming);

          draggingpriming = false;
        }
      }
    });
  },
  computed: {
    ...mapGetters(["formData", "config"]),
    first_sound_url: function () {
      return this.config.first_priming_sound_url;
    },
    second_sound_url: function () {
      return this.config.second_priming_sound_url;
    },
  },
  methods: {
    ...mapActions(["updateFormData", "updateClickAnalytics"]),
    updateFormPriming(nm, val) {
      var obj = {};
      obj[nm] = val;
      this.updateFormData(obj);
    },
    listenedCheckPriming(nm) {
      this.updateFormPriming(nm, true);
    },
    playCheckPriming(e) {
      var allAudios = document.getElementsByTagName("audio");
      for (var i = 0; i < allAudios.length; i++) {
        if (allAudios[i].paused == false && allAudios[i] != e.target) {
          e.target.pause();
          oneAudioOnlyModalPriming.style.display = "block";
        }
      }
    },
    dragDropCheckPriming() {
      const clip_1_listened = this.formData.first_sound_listened_test_priming;
      const clip_2_listened = this.formData.second_sound_listened_test_priming;

      const listened = clip_1_listened && clip_2_listened;

      if (!listened) {
        listenFirstModalPriming.style.display = "block";
        return false;
      }
      return true;
    },
    closeModal() {
      if (oneAudioOnlyModalPriming)
        oneAudioOnlyModalPriming.style.display = "none";
      if (errorModalPriming) errorModalPriming.style.display = "none";
      if (listenFirstModalPriming)
        listenFirstModalPriming.style.display = "none";
    },
    validateForm() {
      const clip_1_listened = this.formData.first_sound_listened_test_priming;
      const clip_2_listened = this.formData.second_sound_listened_test_priming;

      const listened = clip_1_listened && clip_2_listened;

      const allFieldsUpdated =
        this.formData.first_clip_direct_detour_priming &&
        this.formData.second_clip_direct_detour_priming;

      if (!(listened && allFieldsUpdated))
        errorModalPriming.style.display = "block";
      return listened && allFieldsUpdated;
    },
    actionablePrimingTargets() {
      return ['directEvenPrimingImg',
      'detourUnevenPrimingImg',
      'neutralPrimingDirectEvenParking',
      'neutralPrimingDetourUnevenParking',
      'clip1PrimingDirectEvenParking',
      'clip1PrimingDetourUnevenParking',
      'clip2PrimingDirectEvenParking',
      'clip2PrimingDetourUnevenParking'];
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

.animatedsound-container-priming {
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
  padding-left: 10px;
}

.clips-section span {
  padding-top: 20px;
}

.step-content {
  padding-left: 3%;
  padding-right: 5%;
}

/* The Modal (background) */
.modal-priming {
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
.modal-content-priming {
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

/* Lonce CSS Begins */
.grid-priming {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 120px);
  grid-gap: 3px;
  background-color: rgb(70 70 70);

  /*For AMT*/
  padding: 3px;
  margin-left: 2%;
  width: 90%;
}

.itempriming {
  /* PK: Empty but looks important. Dont Delete. Needed by JS code */
}

.itempriming1 {
  grid-column: span 7;
  grid-row: span 2;
}

.itempriming2 {
  grid-column: span 2;
}

.itempriming3 {
  grid-column: span 2;
}

.itempriming5 {
  grid-column: span 2;
}

.itempriming6 {
  grid-column: span 2;
}

.itempriming12 {
  grid-column: span 2;
}

.itempriming18 {
  grid-column: span 2;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  width: 50%;
}

/* Lonce CSS Ends */

.grid-inner-item-priming {
  display: grid;
  grid-template-columns: 20% 75% 5%;
  padding-top: 5%;
}

.grid-inner-item-priming audio {
  width: 100%;
}
</style>
