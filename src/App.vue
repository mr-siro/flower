<template>
  <div id="app">
    <div class="container">
      <strong style="margin-bottom: 10px; margin-top: 20px">Điểm: {{ point }}</strong>
      <div class="weather">
        <div>
          <div v-if="drop" class="raindrop raindrop3"></div>
          <div v-if="drop" class="raindrop raindrop3"></div>
          <div v-if="drop" class="raindrop raindrop3"></div>
        </div>
      </div>

      <div class="flow-wrap">
        <img v-if="point < 100" src="@/assets/images/tree1.png">
        <img v-else-if="point >= 100 && point < 200" src="@/assets/images/tree2.png">
        <img v-else-if="point >= 200 && point < 300" src="@/assets/images/tree3.png">
        <img v-else src="@/assets/images/tree4.png">
      </div>
      <div class="footer-content">
        <img id="btn-cursor" alt="#" src="@/assets/icons/cursor.png">
        <img @click="onWattering" :class="wattering ? 'btn-can-active' : 'btn-can'" alt="#"
             src="@/assets/icons/can.png">
      </div>
    </div>

    <el-dialog
        center
        title="Lên cấp"
        :visible.sync="dialogVisible"
        width="30%">
      <span
          style="text-align: center; display: block">Cây của bạn đã lên lv {{ this.point === 100 ? 2 : this.point === 200 ? 3 : 4 }}</span>
      <img v-if="point < 100" src="@/assets/images/tree1.png">
      <img v-else-if="point >= 100 && point < 200" src="@/assets/images/tree2.png">
      <img v-else-if="point >= 200 && point < 300" src="@/assets/images/tree3.png">
      <img v-else src="@/assets/images/tree4.png">
      <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="dialogVisible = false">Đóng</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
// import _ from 'lodash'
// import Flower from "@/components/Flower";
export default {
  name: 'App',
  components: {
    // Flower
  },

  data() {
    return {
      wattering: false,
      point: 0,
      dialogVisible: false,
      drop: false,
      lv: 1,
      disable_click:false
    }
  },
  computed: {},

  methods: {
    onWattering() {
      this.wattering = true
      this.point += 10
      if (this.point === 100 || this.point === 200 || this.point === 300) {
        this.dialogVisible = true
      }

      setTimeout(() => {
        this.drop = true
      }, 1500)
      setTimeout(() => {
        this.drop = false
      }, 3000)
      setTimeout(() => {
        this.wattering = false
      }, 5000)
    }
  }
}
</script>

<style lang="scss">
@use "css";

#app {
  display: flex;
  justify-content: center;
}

.container {
  background-image: url("./assets/images/background.png");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid #fda729;
  width: 400px;
  border-radius: 10px;
}

.flow-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 20px;

  img {
    object-fit: cover;
    width: 300px;
    height: 300px;
  }
}

.footer-content {
  display: flex;
  margin-bottom: 1rem;

  #btn-cursor {
    width: 40px;
    position: relative;
    animation: mymove 1s infinite;
    animation-timing-function: linear;
  }

  .btn-can {
    margin-left: 60px;
    width: 40px;
    cursor: pointer;
    position: relative;
  }

  .btn-can-active {
    margin-left: 60px;
    width: 40px;
    cursor: pointer;
    position: relative;
    animation: bt_to_top 5s infinite;
  }
}

.weather {
  display: block;
  position: absolute;
  width: 200px;
  min-width: 200px;

  .raindrop {
    width: 5px;
    height: 5px;
    margin-right: 10px;
    border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
    border: 3px solid css.$raindrop;
    background: css.$raindrop;
    display: inline-block;
    @include css.rotate(-25deg);
    position: relative;
    backface-visibility: hidden;
  }
}

.raindrop3 {
  left: 80px;
  animation: raindrop 2s infinite linear, raindropFade 2s infinite linear;
}

.watering {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
}

@keyframes mymove {
  from {
    left: 0;
  }
  to {
    left: 50px;
  }
}

@keyframes raindrop {
  from {
    top: 0;
  }
  to {
    top: 175px;
  }
}

@keyframes raindropAlt {
  from {
    top: 75px;
  }
  to {
    top: 150px;
  }
}

@keyframes raindropFade {
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes bt_to_top {
  0% {
    bottom: 0
  }
  50% {
    bottom: 300px;
    transform: rotate(-100deg)
  }
  100% {
    bottom: 0;
  }
}
</style>
