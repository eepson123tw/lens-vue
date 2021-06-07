<template>
  <div class="modal">
    <button class="cancelModal" @click="cancelModalHandler" />
    <h1>編輯產品</h1>
    <div class="input title">
      <label for="title">標題</label>
      <input id="title" v-model="item['title']" type="text" />
    </div>
    <div class="input category">
      <label for="category">編輯種類</label>
      <input id="category" v-model="item['category']" type="text" />
    </div>
    <div class="input content">
      <label for="content">編輯內文</label>
      <input id="content" v-model="item['content']" type="text" />
    </div>
    <div class="input description">
      <label for="description">編輯描述</label>
      <input id="description" v-model="item['description']" type="text" />
    </div>
    <div class="input isenabled">
      <label for="isenabled">是否啟用</label>
      <input id="isenabled" v-model="item.is_enabled" type="checkbox" />
      <p v-if="item.is_enabled === true">
        是
      </p>
      <p v-else>
        否
      </p>
    </div>
    <div class="input price">
      <label for="price">售價</label>
      <input id="price" v-model.number="item['price']" type="number" />
    </div>
    <div class="input origin_price">
      <label for="origin_price">原價</label>
      <input
        id="origin_price"
        v-model.number="item['origin_price']"
        type="number"
      />
    </div>
    <div class="input num">
      <label for="num">數量</label>
      <input
        id="num"
        v-model.number="item['num']"
        type="range"
        min="0"
        max="10"
      />
      <p>{{ item["num"] }}</p>
    </div>
    <div class="input imageUrl">
      <img v-if="file === ''" :src="item.imageUrl" alt="" />
      <img v-else :src="file" alt="" />
      <input id="" type="file" name="" @change="handleFiles" />
    </div>
    <button class="sendSubmit" @click="confirmEdit(item.id)">
      確認編輯
    </button>
  </div>
</template>

<script>
import { apiEditProduct } from "@/api/index";
export default {
  props: {
    curretItem: {
      require: true,
      type: Object
    },
    modalShow: {
      type: Boolean
    }
  },
  data() {
    return {
      item: this.curretItem,
      showModal: false,
      file: ""
    };
  },
  methods: {
    cancelModalHandler() {
      this.$emit("close-modal", !this.modalShow);
    },
    handleFiles(element) {
      const file = element.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        this.file = e.target.result;
      };
    },
    confirmEdit(val) {
      this.item.is_enabled === true
        ? (this.item.is_enabled = 1)
        : (this.item.is_enabled = 0);
      const currentData = this.item;
      const putData = {
        data: {
          ...currentData
        }
      };
      apiEditProduct(val, putData)
        .then(res => {
          console.log(res);
          this.cancelModalHandler();
        })
        .catch(err => {
          console.dir(err);
        });
    }
  }
};
</script>

<style scoped>
.modal {
  width: 80%;
  height: 60%;
  padding: 20px;
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
img {
  display: block;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
.cancelModal {
  position: relative;
  top: 0;
  right: -600px;
}
</style>
