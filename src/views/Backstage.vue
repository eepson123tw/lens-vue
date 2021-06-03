<template>
  <div class="login_container">
    <div class="login_title">
      <h1>即刻登入</h1>
    </div>
    <div class="login_input">
      <label for="account">帳號:</label>
      <input
        id="account"
        type="email"
        autofocus
        placeholder="XXX@gmail.com"
        v-model="user.username"
      />
    </div>
    <div class="login_input">
      <label for="password">密碼:</label>
      <input id="password" type="text" v-model="user.password" />
    </div>
    <div class="login_btn">
      <button class="login_btnlogin " @click="loginHandler">登入</button>
      <button class="login_btnCancel ">取消</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    loginHandler () {
      const baseurl = 'https://vue3-course-api.hexschool.io/'
      // const admin = 'eepson123tw'
      console.log(this)
      axios
        .post(`${baseurl}admin/signin`, this.user)
        .then(res => {
          console.log(res)
          if (res.data.success === 'false') {
            alert(res.data.message)
            return
          }
          const { token, expired } = res.data
          document.cookie = `token=${token}; expires=${new Date(expired)}`
          this.$router.replace('/BackstagePage')
        })
        .catch(err => {
          console.dir(err)
        })
    }
  }
}
</script>

<style scoped>
.login_container {
  padding: 10px;
  max-width: 60vh;
  margin: 100px auto;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.493);
  display: flex;
  flex-direction: column;
  transition: all 1s;
}

.login_title {
  text-align: center;
  margin-bottom: 10px;
}
.login_input {
  text-align: center;
  margin-bottom: 20px;
}
label {
  font-size: 2vh;
}
input {
  padding: 3px;
  font-size: 2vh;
  border-radius: 5px;
  border: none;
  outline: 1px solid rosybrown;
}
.login_btn {
  margin: 20px 0px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.login_btn > button {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.login_btnlogin {
  margin-right: 10px;
  transition: all 0.3s ease-in-out;
}
.login_btnlogin:hover {
  background-color: rgb(88, 177, 236);
  color: white;
}
.login_btnCancel {
  margin-right: 150px;
  transition: all 0.3s ease-in-out;
}

.login_btnCancel:hover {
  background-color: rgb(247, 0, 0);
  color: white;
}
.login_container:hover {
  background-color: rgba(54, 53, 53, 0.8);
}
.login_container:hover label {
  color: whitesmoke;
}

.login_container:hover .login_title {
  color: whitesmoke;
}
</style>
