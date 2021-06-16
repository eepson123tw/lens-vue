<template>
  <div id="nav">
    <router-link to="/">
      Frontstage
    </router-link>
    <router-link to="/Backstage">
      Backstage
    </router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body {
  width: 100%;
  // height: 100%;
  background-image: url("~@/assets/images/bg2.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: rgb(199, 240, 240);
  height: 100vh;
  padding: 30px;
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  filter: opacity(0.7);

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
    font-size: 20px;
    padding: 10px;
    flex-basis: 50px;
    &.router-link-exact-active {
      color: orangered;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  color: wheat;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
  color: aqua;
}
</style>
