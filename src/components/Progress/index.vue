<template>
  <div class="container-progress">
    <div class="loading-bar">
      <div class="percentage" :style="{'width' : percentage === 100 ? 99 + '%' : percentage + '%'}">
        <span v-if="percentage > 0">{{ percent }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      default: 0
    }
  },

  computed: {
    percent() {
      return this.percentage.toFixed();
    }
  },
}
</script>

<style lang="scss">
.container-progress {
  color: #555;
}

.loading-bar {
  position: relative;
  width: 250px;
  height: 25px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba($color: #000, $alpha: .4),
  0 -1px 1px #fff, 0 1px 0 #fff;

  .percentage {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 15px;
    background-color: #a5df41;
    background-size: 30px 30px;
    background-image: linear-gradient(135deg, rgba($color: #fff, $alpha: .15) 25%, transparent 25%,
        transparent 50%, rgba($color: #fff, $alpha: .15) 50%,
        rgba($color: #fff, $alpha: .15) 75%, transparent 75%,
        transparent);
    //animation: animate-stripes 3s linear infinite;
  }
}

//@keyframes animate-stripes {
//  0% { background-position: 0 0; }
//  100% { background-position: 60px 0; }
//}

</style>
