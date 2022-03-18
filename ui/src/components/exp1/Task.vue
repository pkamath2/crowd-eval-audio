<template>
  <div class="row animatedsound-container">
    <div id="errorModal" class="modal">
      <div class="modal-content">
        <p>
          Please listen to all sound clips
          <span style="font-weight: bold">fully</span> and drag/drop all the
          options or images into the requisite sections before going to the next
          screen.
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
        This page outlines 2 audio clips
        <span style="font-weight: bold">Clip 1</span> and
        <span style="font-weight: bold">Clip 2</span>. Both clips start at one
        sound (e.g., sound of fire crackling or an engine running) and slowly
        transitions towards the end to another sound (e.g., sound made by water
        filling a container).
      </div>
      <div>&nbsp;</div>
    </div>
    <div>&nbsp;</div>
    <div class="row">
      <div>
        Please follow the instructions for each step below to complete this
        task.
      </div>
    </div>

    <div>&nbsp;</div>

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
            >For direct/detour (green section)</span
          >: Please drag the appropriate image to the clip which
          <span style="font-weight: bold; font-style: italic"
            ><u>transitions</u></span
          >

          from the start of the sound to its end
          <span style="font-weight: bold; font-style: italic">directly</span> or
          via a
          <span style="font-weight: bold; font-style: italic">detour</span>
          through a third type of sound, in comparison with the other clip.
        </div>
      </div>
      <div>&nbsp;</div>
      <div class="col-12">
        <span style="background-color: hsl(25, 75%, 90%); font-weight: bold"
          >For even/uneven (red section)</span
        >: Please drag the appropriate image to the clip which
        <span style="font-weight: bold; font-style: italic"
          ><u>transitions</u></span
        >

        from the start of the sound to its end either in
        <span style="font-weight: bold; font-style: italic"
          >even step sizes</span
        >
        or in an
        <span style="font-weight: bold; font-style: italic"
          >uneven or jumpy fashion</span
        >, in comparison with the other clip.
      </div>
      <div>&nbsp;</div>
      <p style="padding-left: 10px; font-size: small">
        <i>Please allow few seconds for the audio clips to load. </i>
      </p>
    </div>

    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="grid">
          <div class="item2 item" style="width: 100%;padding-top:10%;padding-left:20%">
            <span style="font-weight: bold; font-style: italic;"
              >Drag icons to best match each clip</span
            >
          </div>
          <div class="item3_1 item" style="width: 100%;padding-top:20%;padding-left:25%">
            <span style="font-weight: bold; font-style: italic;">Detour &amp; Uneven</span><br />
          </div>
          <div class="item3_2 item" style="width: 100%;padding-top:20%;padding-left:25%">
            <span style="font-weight: bold; font-style: italic;">Direct &amp; Even</span><br />
          </div>
          <div class="item6 item grid-inner-item">
            <span style="padding: 20px"
              ><span style="font-weight: bold; font-style: italic;">Clip 1</span></span
            >
            <span
              ><audio
                controls
                controlsList="nodownload noplaybackrate"
                @ended="listenedCheck('first_sound_listened_test')"
                @play="playCheck($event)"
                preload="auto"
              >
                <source :src="first_sound_url" type="audio/wav" />
              </audio>
            </span>
          </div>
          <div class="item7 item" id="clip1DetourParking"></div>
          <div class="item8 item" id="clip1DirectParking"></div>
          <div class="item12 item"></div>
          <div class="item13 item" id="neutralDetourParking">
            <div id="detour" style="padding: 5%; padding-left: 25%">
              <img
                style="max-width: 80%"
                src="../../assets/exp1/detour_and_uneven.png"
              />
            </div>
          </div>

          <div class="item14 item" id="neutralDirectParking">
            <div id="direct" style="padding: 5%; padding-left: 25%">
              <img
                style="max-width: 80%"
                src="../../assets/exp1/direct_and_even.png"
              />
            </div>
          </div>
          <div class="item18 item grid-inner-item">
            <span style="padding: 20px"
              ><span style="font-weight: bold; font-style: italic;">Clip 2</span></span
            >
            <span
              ><audio
                controls
                controlsList="nodownload noplaybackrate"
                @ended="listenedCheck('second_sound_listened_test')"
                @play="playCheck($event)"
                preload="auto"
              >
                <source :src="second_sound_url" type="audio/wav" /></audio
            ></span>
          </div>
          <div class="item19 item" id="clip2DetourParking"></div>
          <div class="item20 item" id="clip2DirectParking"></div>
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
    let classes = document.getElementsByClassName("item");
    for (let i = 0; i < classes.length; i++) {
      classes[i].style["background-color"] = `hsl(${Math.floor(240)},10%,80%)`;
      // classes[i].style["background-color"] = 'whitesmoke';

      if ([3, 4, 5].indexOf(i) > -1) {
        classes[i].style.background = `hsl(${Math.floor(25)},75%,90%)`;
      }

      if ([9, 10, 11].indexOf(i) > -1) {
        classes[i].style.background = `hsl(${Math.floor(170)},75%,90%)`;
      }

      if ([3, 4, 6, 7, 9, 10].indexOf(i) > -1) {
        // classes[i].style.background = `hsl(${Math.floor(170)},75%,90%)`;
      }
    }

    const _this = this; // Argh, I am losing my Vue! My sinceremost apologies to the purists.

    let dragging = false;
    let dragmousey;
    let dragOther;

    const detour = document.getElementById("detour");
    const direct = document.getElementById("direct");
    const jumpy = document.getElementById("jumpy");
    const even = document.getElementById("even");

    detour.parent = document.getElementById("neutralDetourParking");
    detour.addEventListener("mousedown", function (ev) {
      dragging = detour;
      dragmousey = ev.clientY;
      ev.preventDefault();
    });

    document.addEventListener("mouseup", function (ev) {
      console.log("mouseup");
      ev.preventDefault();
      if (dragging == detour) {
        dragOther = direct;

        dragging.parent.removeChild(dragging);
        dragOther.parent.removeChild(dragOther);
        if (ev.clientY < dragmousey) {
          console.log("movin on up");
          dragging.parent = document.getElementById("clip1DetourParking");
          dragOther.parent = document.getElementById("clip2DirectParking");

          console.log(_this);
          _this.updateForm("first_clip_direct_detour", "detour");
          _this.updateForm("second_clip_direct_detour", "direct");
        }
        if (ev.clientY >= dragmousey) {
          console.log("movin on down");
          dragging.parent = document.getElementById("clip2DetourParking");
          dragOther.parent = document.getElementById("clip1DirectParking");

          _this.updateForm("first_clip_direct_detour", "direct");
          _this.updateForm("second_clip_direct_detour", "detour");
        }
        dragging.parent.appendChild(dragging);
        dragOther.parent.appendChild(dragOther);

        dragging = false;
      }
    });

    direct.parent = document.getElementById("neutralDirectParking");
    direct.addEventListener("mousedown", function (ev) {
      dragging = direct;
      dragmousey = ev.clientY;
      ev.preventDefault();
    });

    document.addEventListener("mouseup", function (ev) {
      console.log("mouseup");
      ev.preventDefault();
      if (dragging == direct) {
        dragOther = detour;

        dragging.parent.removeChild(dragging);
        dragOther.parent.removeChild(dragOther);
        if (ev.clientY < dragmousey) {
          console.log("movin on up");
          dragging.parent = document.getElementById("clip1DirectParking");
          dragOther.parent = document.getElementById("clip2DetourParking");

          _this.updateForm("first_clip_direct_detour", "direct");
          _this.updateForm("second_clip_direct_detour", "detour");
        }
        if (ev.clientY > dragmousey) {
          console.log("movin on down");
          dragging.parent = document.getElementById("clip2DirectParking");
          dragOther.parent = document.getElementById("clip1DetourParking");

          _this.updateForm("first_clip_direct_detour", "detour");
          _this.updateForm("second_clip_direct_detour", "direct");
        }
        dragging.parent.appendChild(dragging);
        dragOther.parent.appendChild(dragOther);

        dragging = false;
      }
    });

    jumpy.parent = document.getElementById("neutralJumpyParking");
    jumpy.addEventListener("mousedown", function (ev) {
      dragging = jumpy;
      dragmousey = ev.clientY;
      ev.preventDefault();
    });

    document.addEventListener("mouseup", function (ev) {
      console.log("mouseup");
      ev.preventDefault();
      if (dragging == jumpy) {
        dragOther = even;

        dragging.parent.removeChild(dragging);
        dragOther.parent.removeChild(dragOther);
        if (ev.clientY < dragmousey) {
          console.log("movin on up");
          dragging.parent = document.getElementById("clip1JumpyParking");
          dragOther.parent = document.getElementById("clip2EvenParking");

          _this.updateForm("first_clip_even_uneven", "uneven");
          _this.updateForm("second_clip_even_uneven", "even");
        }
        if (ev.clientY >= dragmousey) {
          console.log("movin on down");
          dragging.parent = document.getElementById("clip2JumpyParking");
          dragOther.parent = document.getElementById("clip1EvenParking");

          _this.updateForm("first_clip_even_uneven", "even");
          _this.updateForm("second_clip_even_uneven", "uneven");
        }
        dragging.parent.appendChild(dragging);
        dragOther.parent.appendChild(dragOther);

        dragging = false;
      }
    });

    even.parent = document.getElementById("neutralEvenParking");
    even.addEventListener("mousedown", function (ev) {
      dragging = even;
      dragmousey = ev.clientY;
      ev.preventDefault();
    });
    document.addEventListener("mouseup", function (ev) {
      console.log("mouseup");
      ev.preventDefault();
      if (dragging == even) {
        dragOther = jumpy;

        dragging.parent.removeChild(dragging);
        dragOther.parent.removeChild(dragOther);
        if (ev.clientY < dragmousey) {
          console.log("movin on up");
          dragging.parent = document.getElementById("clip1EvenParking");
          dragOther.parent = document.getElementById("clip2JumpyParking");

          _this.updateForm("first_clip_even_uneven", "even");
          _this.updateForm("second_clip_even_uneven", "uneven");
        }
        if (ev.clientY > dragmousey) {
          console.log("movin on down");
          dragging.parent = document.getElementById("clip2EvenParking");
          dragOther.parent = document.getElementById("clip1JumpyParking");

          _this.updateForm("first_clip_even_uneven", "uneven");
          _this.updateForm("second_clip_even_uneven", "even");
        }
        dragging.parent.appendChild(dragging);
        dragOther.parent.appendChild(dragOther);

        dragging = false;
      }
    });
  },
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
    ...mapActions(["updateFormData"]),
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

      const allFieldsUpdated =
        this.formData.first_clip_direct_detour &&
        this.formData.second_clip_direct_detour &&
        this.formData.first_clip_even_uneven &&
        this.formData.second_clip_even_uneven;

      if (!(listened && allFieldsUpdated)) errorModal.style.display = "block";
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

/* Lonce CSS Begins */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 120px);
  grid-gap: 3px;
  background-color: rgb(70, 70, 70);

  /*For AMT*/
  padding: 3px;
  margin-left: 2%;
  width: 90%;
}

.item {
  /* PK: Empty but looks important. Dont Delete. Needed by JS code */
}

.item1 {
  grid-column: span 7;
  grid-row: span 2;
}

.item2 {
  grid-column: span 2;
}

.item3 {
  grid-column: span 2;
}

.item5 {
  grid-column: span 2;
}

.item6 {
  grid-column: span 2;
}

.item12 {
  grid-column: span 2;
}

.item18 {
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

.grid-inner-item {
  display: grid;
  grid-template-columns: 25% 70%;
  padding-top: 5%;
}

.grid-inner-item audio {
  width: 100%;
}
</style>