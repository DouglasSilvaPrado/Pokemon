<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";


</script>

<style>
.selector-for-some-widget {
  box-sizing: content-box;
}
</style>