<template>
  <div class="splash-wrapper">
    <div v-if="loading" class="progress-container">
      <div class="progress progress-striped">
        <div class="progress-bar"></div>
      </div>
    </div>
    <div style="display: contents" v-else>
      <div class="login">
        <div class="form">
          <label>
            <input @blur="valid_email" v-model="loginForm.email" type="text" placeholder="enter email"/>
          </label>
          <div class="callback">
            <p>{{ rules.email }}</p>
          </div>

          <label>
            <input @blur="valid_password" v-model="loginForm.password" type="password" placeholder="enter password"/>
          </label>
          <div class="callback">
            <p>{{ rules.password }}</p>
          </div>
        </div>
        <a @click="onStart" href="javascript:void(0);">Start</a>
      </div>
      <button @click="dialogVisible = true" class="register">Register</button>
    </div>
    <Modal @close="dialogVisible = false" @confirm="dialogVisible = false" title-close="Register"
           :modal-visible="dialogVisible"></Modal>
  </div>
</template>

<script>
import axios from 'axios'
import emailRegex from '@/utils/regex'

export default {
  data() {
    return {
      loginForm: {
        password: '',
        email: ''
      },
      loading: false,
      dialogVisible: false,
      rules: {
        email: '',
        password: ''
      },
      valid_status: {
        email: false,
        password: false
      }
    }
  },

  methods: {
    onStart() {
      if (this.valid_status.email && this.valid_status.password) {
        this.loading = true
        axios.post('https://vnsapi.herokuapp.com/signin', this.loginForm).then((res) => {
          console.log(res.data)
          this.$message({
            message: 'Success',
            type: 'success'
          });
          this.$emit('success')
          this.loading = false
        })
            .catch(error => {
              this.$emit('error')
              this.loading = false
            })
      } else {
        this.$message({
          message: 'Please enter field!',
          type: 'error'
        });
      }
    },

    valid_email() {
      if ((this.loginForm.email.length < 3 && this.loginForm.email.length > 0) || this.loginForm.email.length > 150) {
        this.valid_status.email = false;
        this.rules.email = 'email 3 to 150 character'
      } else if (!this.loginForm.email.length) {
        this.valid_status.email = false;
        this.rules.email = 'required!'
      } else if (this.loginForm.email && !emailRegex.test(this.loginForm.email.toLowerCase())) {
        this.valid_status.email = false;
        this.rules.email = 'Please input correct email address!'
      } else {
        this.valid_status.email = true;
        this.rules.email = ''
      }
    },

    valid_password() {
      if ((this.loginForm.password.length < 6 && this.loginForm.password.length > 0) || this.loginForm.password.length > 18) {
        this.valid_status.password = false;
        this.rules.password = 'password 6 to 18 character'
      } else if (!this.loginForm.password.length) {
        this.valid_status.password = false;
        this.rules.password = 'required!'
      } else {
        this.valid_status.password = true;
        this.rules.password = ''
      }
    }
  },
};
</script>

<style lang="scss">
.splash-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  .progress-container {
    width: 200px;
    text-align: center;

    .progress {
      padding: 6px;
      background: rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
      0 1px rgba(255, 255, 255, 0.08);
    }
  }

  .progress-bar {
    height: 18px;
    background-color: #ee303c;
    border-radius: 4px;
    transition: 0.4s linear;
    transition-property: width, background-color;
  }

  .progress-striped .progress-bar {
    background-color: #fcbc51;
    width: 100%;
    background-image: linear-gradient(
            45deg,
            rgb(252, 163, 17) 25%,
            transparent 25%,
            transparent 50%,
            rgb(252, 163, 17) 50%,
            rgb(252, 163, 17) 75%,
            transparent 75%,
            transparent
    );
    animation: progressAnimationStrike 5s;
  }

  @keyframes progressAnimationStrike {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
}

.login {
  display: flex;
  flex-direction: column;

  a {
    position: relative;
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    background-color: rgba(219, 87, 5, 1);
    font-family: "Yanone Kaffeesatz";
    font-weight: 700;
    font-size: 3em;
    display: block;
    //padding: 4px;
    bottom: 10px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: 0px 9px 0px rgba(219, 31, 5, 1),
    0px 9px 25px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 9px 0px rgba(219, 31, 5, 1),
    0px 9px 25px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 9px 0px rgba(219, 31, 5, 1), 0px 9px 25px rgba(0, 0, 0, 0.7);
    margin: 100px auto;
    width: 160px;
    text-align: center;

    -webkit-transition: all 0.1s ease;
    -moz-transition: all 0.1s ease;
    -ms-transition: all 0.1s ease;
    -o-transition: all 0.1s ease;
    transition: all 0.1s ease;
  }

  a:active {
    -webkit-box-shadow: 0px 3px 0px rgba(219, 31, 5, 1),
    0px 3px 6px rgba(0, 0, 0, 0.9);
    -moz-box-shadow: 0px 3px 0px rgba(219, 31, 5, 1),
    0px 3px 6px rgba(0, 0, 0, 0.9);
    box-shadow: 0px 3px 0px rgba(219, 31, 5, 1), 0px 3px 6px rgba(0, 0, 0, 0.9);
    position: relative;
    top: 6px;
  }

  input {
    font-size: 16px;
    font-weight: 800;
    font-family: "Yanone Kaffeesatz";
    width: 250px;
    height: 30px;
    background-color: #fca311b5;
    color: #fff;
    padding: 10px;
    border-radius: 0.5em;
    border: none;
    outline: none;
    box-shadow: 0 2px 3px #ccc;
    border-bottom: 0.25em solid #0f5177;
  }
}

.callback {
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;

  p {
    color: #F45063;
    font-size: 12px;
  }
}

.register {
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: 2px solid;
  border-radius: 10px;
  display: block;
}

.register:hover {
  background-color: #3e8e41
}

.register:active {
  background-color: #3e8e41;
  transform: translateY(4px);
}

</style>
