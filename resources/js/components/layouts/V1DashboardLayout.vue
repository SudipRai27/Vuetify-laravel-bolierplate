<template>
  <v-app class="poppins-font">
    <Navbar />
    <v-main class="grey lighten-3">
      <!-- <transition name="fade"> -->
      <slot />
      <!-- </transition> -->
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import Navbar from "./../dashboard/v1/partials/Navbar";
import Footer from "./../dashboard/v1/partials/Footer";
export default {
  name: "V1DashboardLayout",

  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
