<template>
  <div class="headerContainer">
    <v-row no-gutters cols="12">
      <v-col class="logo" cols="8">
        <router-link to="/">
          <img class="logoImg " src="../images/5.png" />
        </router-link>
      </v-col>
      <v-col class="Icon" cols="3">
        <v-row justify="end" class="">
          <v-btn @click="instaClicked()" icon>
            <v-icon large color="black ">
              mdi-instagram
            </v-icon>
          </v-btn>

          <v-btn class="ml-5" icon>
            <v-icon no-gutters large color="black ">
              mdi-twitter
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
/* import router from "../router"; */
import axios from "axios";
export default {
  data: () => ({
    response: {},
    info: null,
  }),
  methods: {
    async instaClicked() {
      this.info = await axios.get(
        "http://www.geoplugin.net/json.gp?jsoncallback=?"
      );
      var ret = this.info.data.replace("%3F(", " ");
      ret = ret.slice(0, -1);
      console.log(JSON.parse(ret));
    },
  },
};
</script>

<style scoped>
.logoImg {
  margin-left: 20px;
  height: 50px;
}
.Icon {
  justify-content: space-between;
  align-self: center;
}

.headerContainer {
  position: sticky;
  top: 0;
  opacity: 0.9;
  background-image: url("../images/4.jpg");
  background-size: cover;
  height: 60px;
  background-color: grey;
  z-index: 300;
  display: flex;
}
.logo {
  display: flex;
  align-items: center;
}
.imoji {
  font-size: 40px;
  margin-bottom: 0px;
  margin-left: 20px;
}

.logoImg {
  margin-left: 20px;
  height: 50px;
}
.instaIcon {
  justify-content: center;
  align-self: center;
}
.twitterIcon {
  align-self: center;
}
.headerContainer {
  position: sticky;
  top: 0;
  opacity: 0.9;
  background-image: url("../images/4.jpg");
  background-size: cover;
  height: 60px;
  background-color: grey;
  z-index: 300;
  display: flex;
}
.logo {
  display: flex;
  align-items: center;
}
.imoji {
  font-size: 40px;
  margin-bottom: 0px;
  margin-left: 20px;
}
</style>
