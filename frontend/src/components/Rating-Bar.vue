<template>
  <div class="ratingContainer">
    <v-row align="center" class="mr-2">
      <v-col cols="8">
        <v-rating
          v-model="rating"
          color="light-gray accent-2"
          background-color="light-grey"
          dense
          half-increments
          hover
          size="22"
        ></v-rating>
      </v-col>
      <v-col cols="4" offset="0">
        <span class="ratingPoint">({{ rating }})</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    rating: 2.4,
  }),
};
</script>

<style>
.ratingContainer {
  justify-content: end;
}
.ratingPoint {
  font-size: 12px;
}
</style>
