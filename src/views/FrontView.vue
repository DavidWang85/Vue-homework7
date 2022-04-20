<template>
  <FrontNavbar></FrontNavbar>
  <router-view></router-view>
</template>

<script>
// 匯入FrontNavbar.vue的內容
import FrontNavbar from '@/components/FrontNavbar.vue';

export default {
  components: {
    FrontNavbar,
  },
};
</script>
