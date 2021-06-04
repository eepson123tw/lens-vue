<template>
  <div class="modal">
    <h1>{{ curretItem.content }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    curretItem: {
      require: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.modal {
  width: 70vh;
  height: 50vh;
  padding: 10px;
  background: cadetblue;
  border-radius: 10px;
  box-shadow: 1px 5px 5px seashell;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>
