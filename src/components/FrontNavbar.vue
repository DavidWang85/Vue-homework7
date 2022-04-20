<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">卡斯伯餐飲店</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/articles">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">登入後台</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/checkout/:orderId">結帳</router-link>
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-primary">
        結帳
        <span class="badge rounded-pill bg-warning text-dark">
          {{ cartData.carts.length }}
        </span>
      </button>
    </div>
  </nav>
</template>

<script>
import emitter from '@/methods/eventBus'; // 匯入emitter

export default {
  data() {
    return {
      cartData: {
        carts: [],
      },
    };
  },
  methods: {
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          console.log('cart:', res);
          this.cartData = res.data.data;
        });
    },
  },
  mounted() {
    this.getCart();
    // 使用.on來做接收，當他被觸發時會重新取得購物車品項
    emitter.on('get-cart', () => {
      this.getCart();
    });
  },
};
</script>
