<template>
  <v-app>
    <!--Header-->
    <Header />

    <!--Header-->

    <div>
      <Search :teachers="teachers" />
    </div>
    <div>
      <Explain />
    </div>
    <Explain />
    <Explain />
    <Footer />
  </v-app>
</template>

<script>
import Search from "@/components/Search.vue";

import { mapActions, mapState } from "vuex";
import Header from "../components/Header.vue";
import Explain from "@/components/Explain.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Search,
    Header,
    Explain,
    Footer,
  },
  computed: {
    ...mapState(["teachers"]),
  },
  methods: {
    ...mapActions(["fetchTeachers"]),
  },
  created() {
    this.fetchTeachers();
  },
};
</script>

<style scoped></style>
