<template>
  <div class="login_container">
    <div class="login_title">
      <h1>即刻登入</h1>
    </div>
    <div class="login_input">
      <label for="account">帳號:</label>
      <Form>
        <Field
          v-slot="{ field }"
          v-model="user.username"
          name="email"
          :rules="validateEmail"
        >
          <input
            v-bind="field"
            id="account"
            placeholder="XXX@gmail.com"
          >
        </Field>
        <ErrorMessage
          as="span"
          name="email"
        />
      </Form>
    </div>
    <div class="login_input">
      <label for="password">密碼:</label>
      <input
        id="password"
        v-model="user.password"
        type="text"
      >
    </div>
    <div class="login_btn">
      <button
        class="login_btnlogin "
        @click="loginHandler"
      >
        登入
      </button>
      <button class="login_btnCancel ">
        取消
      </button>
    </div>
  </div>
</template>

<script>
import { apiPostLoginUser } from '@/api/index'

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
      apiPostLoginUser(this.user)
        .then(res => {
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
    },
    validateEmail (value) {
      // if the field is empty
      if (!value) {
        return 'This field is required'
      }
      // if the field is not a valid email
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'This field must be a valid email'
      }
      // All is good
      return true
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
