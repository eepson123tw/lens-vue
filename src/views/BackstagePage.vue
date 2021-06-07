<template>
  <div class="product_container">
    <p>
      目前有 <span id="productCount">{{ data.length }}</span> 項產品
    </p>
    <template v-if="data">
      <table class="table">
        <thead>
          <tr>
            <th>產品名稱</th>
            <th>
              原價
            </th>
            <th>
              售價
            </th>
            <th>
              是否啟用
            </th>
            <th>
              刪除
            </th>
            <th>
              編輯
            </th>
          </tr>
        </thead>
        <tbody id="productList">
          <tr
            v-for="item in data"
            :key="item"
          >
            <td class="product_title">
              {{ item.content }}
            </td>
            <td class="product_defaultWidth">
              {{ item.origin_price }}
            </td>
            <td class="product_defaultWidth">
              {{ item.price }}
            </td>
            <td class="product_defaultWidth">
              <span v-if="item.is_enabled === 1">OK</span>
              <span v-else>NO</span>
            </td>
            <td>
              <button
                class="product_cancelCurrentBtn"
                type="button"
                data-action="remove"
                @click="deleteItemHandler(item.id)"
              >
                刪除
              </button>
            </td>
            <td>
              <button
                class="product_cancelCurrentBtn"
                type="button"
                @click="modelHandler(item)"
              >
                編輯
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    <transition name="fade">
      <Modal
        v-if="modalShow"
        :show="modalShow"
        :curret-item="propsItem"
        @close-modal="modelHandler"
      />
    </transition>
  </div>
</template>

<script>
import { apiGetProducts } from '@/api/index'
import Modal from '@/components/Modal.vue'
import axios from 'axios'

export default {
  components: {
    Modal
  },
  data () {
    return {
      data: [],
      baseurl: 'https://vue3-course-api.hexschool.io/',
      admin: 'eepson123tw',
      modalShow: false,
      propsItem: {}
    }
  },
  computed: {
    dataList () {
      return this.data
    }
  },
  mounted () {
    this.getRemoteData()
  },
  methods: {
    getRemoteData () {
      apiGetProducts().then(res => {
        this.data = res.data.products
      })
    },
    deleteItemHandler (id) {
      axios
        .delete(`${this.baseurl}api/${this.admin}/admin/product/${id}`)
        .then(res => {
          this.getRemoteData()
        })
    },
    modelHandler (item) {
      this.modalShow = !this.modalShow
      this.propsItem = item
    }
  }
}
</script>

<style scoped>
.product_container {
  padding: 10px;
  max-width: 80%;
  margin: 100px auto;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.493);
}
.table {
  margin: 0 auto;
  background-color: white;
}
th {
  padding: 10px 0px;
}
td {
  padding: 10px 0px;
  text-align: center;
}
.product_title {
  width: 50%;
}
.product_defaultWidth {
  width: 10%;
}
.product_btnWidth {
  width: 10%;
}

.product_cancelCurrentBtn {
  display: block;
  margin: 0 auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
