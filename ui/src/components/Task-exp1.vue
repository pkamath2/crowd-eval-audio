<template>
  <div class="row animatedsound-container">
    <div id="errorModal" class="modal">
      <div class="modal-content">
        <p>
          Please listen to all sound clips
          <span style="font-weight: bold">fully</span> and drag/drop all the
          options or images into the requisite sections before going to the next screen.
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

    <div class="heading">Audio Smoothness Evaluation Task</div>
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
        This page outlines 2 audio clips. Both clips start at one sound (e.g.,
        sound of fire crackling or an engine running) and slowly transitions
        towards the end to another sound (e.g., sound made by a large crowd or
        sound made by water filling a container) by using two different
        algorithms.
      </div>
      <div>&nbsp;</div>
      <div class="col-12">
        Please listen to both sounds before attempting task below and use your
        mouse to <u>drag/drop the right option in the requisite section</u>.
      </div>
      <div>&nbsp;</div>
      <div class="col-12">
        <span style="background-color: hsl(170, 75%, 90%); font-weight: bold"
          >For direct/detour (green section)</span
        >: Please drag the appropriate image to the clip which
        <span style="font-weight: bold; font-style: italic"
          ><u>transitions</u></span
        >
        or
        <span style="font-weight: bold; font-style: italic"><u>morphs</u></span>
        from one end point to the other <i>directly</i> or via a
        <i>detour</i> into a third type of sound, in comparison with the other
        clip.
      </div>
      <div>&nbsp;</div>
      <div class="col-12">
        <span style="background-color: hsl(25, 75%, 90%); font-weight: bold"
          >For even/uneven (red section)</span
        >: Please drag the appropriate image to the clip which
        <span style="font-weight: bold; font-style: italic"
          ><u>transitions</u></span
        >
        or
        <span style="font-weight: bold; font-style: italic"><u>morphs</u></span>
        from one end point to the other either in <i>even step sizes</i> or in a
        <i>uneven or jumpy fashion, in comparison with the other clip</i>.
      </div>
      <div>&nbsp;</div>
      <p style="padding-left: 10px; font-size: small">
        <i>Please allow few seconds for the audio clips to load. </i>
      </p>
    </div>

    <div class="grid">
      <div class="item2 item"></div>
      <div class="item3 item center">
        <span style="font-weight: bold">Detour/Direct</span><br />
        <span style="font-size: small"
          ><i>Drag icons to best match the clip differences</i></span
        >
      </div>
      <div class="item4 item"></div>
      <div class="item5 item center">
        <span style="font-weight: bold">Even/Uneven</span><br />
        <span style="font-size: small"
          ><i>Drag icons to best match the clip differences</i></span
        >
      </div>
      <div class="item6 item grid-inner-item">
        <span style="padding-top: 10px; padding-left: 7px"
          ><span style="font-weight: bold">Clip 1</span></span
        >
        <span>&nbsp;</span>
        <span
          ><audio
            controls
            controlsList="nodownload noplaybackrate"
            @ended="listenedCheck('first_sound_listened_test')"
            @play="playCheck($event)"
            preload="auto"
          >
            <source
              src="https://animatedsound.com/neurips2021/combined_data/oreilly_grid/row_14.wav"
              type="audio/wav"
            />
          </audio>
        </span>
      </div>
      <div class="item7 item" id="clip1DetourParking"></div>
      <div class="item8 item" id="clip1DirectParking"></div>
      <div class="item9 item"></div>
      <div class="item10 item" id="clip1JumpyParking"></div>
      <div class="item11 item" id="clip1EvenParking"></div>
      <div class="item12 item"></div>
      <div class="item13 item" id="neutralDetourParking">
        <div id="detour" style="padding: 5%; padding-left: 20%">
          <img style="max-width: 85%" src="../assets/exp1/detour.png" />
        </div>
      </div>

      <div class="item14 item" id="neutralDirectParking">
        <div id="direct" style="padding: 5%; padding-left: 20%">
          <img style="max-width: 85%" src="../assets/exp1/direct.png" />
        </div>
      </div>
      <div class="item15 item"></div>
      <div class="item16 item" id="neutralJumpyParking">
        <div id="jumpy" style="padding: 5%; padding-left: 20%">
          <img style="max-width: 90%" src="../assets/exp1/uneven.png" />
        </div>
      </div>
      <div class="item17 item" id="neutralEvenParking">
        <div id="even" style="padding: 5%; padding-left: 20%">
          <img style="max-width: 90%" src="../assets/exp1/even.png" />
        </div>
      </div>
      <div class="item18 item grid-inner-item">
        <span style="padding-top: 10px; padding-left: 7px"
          ><span style="font-weight: bold">Clip 2</span></span
        >
        <span>&nbsp;</span>
        <span
          ><audio
            controls
            controlsList="nodownload noplaybackrate"
            @ended="listenedCheck('second_sound_listened_test')"
            @play="playCheck($event)"
            preload="auto"
          >
            <source
              src="https://animatedsound.com/neurips2021/combined_data/oreilly_remapped/row_14.wav"
              type="audio/wav"
            /></audio
        ></span>
      </div>
      <div class="item19 item" id="clip2DetourParking"></div>
      <div class="item20 item" id="clip2DirectParking"></div>
      <div class="item21 item"></div>
      <div class="item22 item" id="clip2JumpyParking"></div>
      <div class="item23 item" id="clip2EvenParking"></div>
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
      classes[i].style["background-color"] = `hsl(${Math.floor(240)},10%,85%)`;
      switch (i) {
        case 5:
        case 6:
        case 11:
        case 12:
        case 17:
        case 18:
          classes[i].style.background = `hsl(${Math.floor(170)},75%,90%)`;
          break;

        case 8:
        case 9:
        case 14:
        case 15:
        case 20:
        case 21:
          classes[i].style.background = `hsl(${Math.floor(25)},75%,90%)`;
          break;
      }
    }

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

    const _this = this; // Argh, I am losing my Vue! My sinceremost apologies to the purists.

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
    ...mapGetters(["formData"]),
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
  text-align: left;
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
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 100px);
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
  grid-template-columns: 20% 5% 70%;
  padding-top: 5%;
}

.grid-inner-item audio {
  width: 100%;
}
</style>
