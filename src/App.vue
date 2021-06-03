<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/Backstage">Backstage</router-link>
  </div>
  <router-view />
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
  height: 100%;
  background-image: url("~@/assets/images/bg.jpg");
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
  background-color: black;
  height: 100%;
  padding: 30px;
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    font-weight: bold;
    color: orange;
    font-size: 20px;
    padding: 10px;
    flex-basis: 50px;
    &.router-link-exact-active {
      color: orangered;
    }
  }
}
</style>
