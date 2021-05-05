<template>
  <!-- <div class="footerContainer">
    <div class="footerUpIcon">
      <v-icon x-large color="white">
        {{ upIcon }}
      </v-icon>
    </div>
    <div>
      <h2>&copy; 2021 manisa Turkey news, ınc All rights reserved</h2>
    </div>
  </div> -->
  <v-footer dark padless class=" mt-5">
    <v-card class="flex" tile>
      <v-card-title class=" black ">
        <v-row align="center">
          <v-col cols="12" sm="12" md="6">
            <h4 class="text-center   hidden-sm-and-down">
              Get connected with us on social networks!
            </h4>
            <h4 class="text-center hidden-md-and-up">
              Get connected with us!
            </h4>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mdiChevronUp } from "@mdi/js";
export default {
  data: () => ({
    upIcon: mdiChevronUp,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>
.footerText {
  color: white;
}

/*  .footerContainer {
    height: 70px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footerUpIcon {
    margin: 0px auto;
  }*/
</style>
