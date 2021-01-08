<template>
  <div id="app">

    <div class="container">
      <MainApp v-if="loaded"/>
      <Splash v-else @success="onSuccess" @error="onFailed"/>
    </div>

  </div>
</template>
<script>

import MainApp from "@/views/MainApp";
import Splash from "@/views/splash";
import Auth from "@/utils/auth";

export default {
  name: "App",
  components: {
    MainApp,
    Splash
  },
  data() {
    return {
      loaded: false,
      token: null
    };
  },

  mounted() {
    this.token = Auth.getToken()
    if (Auth.getToken()) {
      this.loaded = true
    }
  },
  methods: {
    onSuccess() {
      this.loaded = true
    },

    onFailed() {
      this.loaded = false
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
}

.container {
  background-image: url("./assets/images/background.png");
  background-position: center;
  background-size: cover;
  border: 5px solid #fda729;
  width: 400px;
  height: 600px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
</style>
