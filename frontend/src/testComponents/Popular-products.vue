<template>
  <v-container>
    <v-row>
      <v-col sm="10" offset-sm="1 " lg="8" offset-md="2">
        <h2>
          Popular Products
          <v-btn to="store" color="primary" small text>View All</v-btn>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1 " lg="8" offset-md="2">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="product in products"
            :key="product.name"
          >
            <Cards :product="product" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import products from "./datas";
import Cards from "./Cards";
export default {
  data: () => {
    return {
      products,
    };
  },
  components: {
    Cards,
  },
};
</script>

<style></style>
