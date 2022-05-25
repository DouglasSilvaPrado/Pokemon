<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script lang="ts">
import { defineComponent} from "vue";
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";

export default defineComponent({
    name: "App",
    components: { Navbar, Footer }
});
</script>