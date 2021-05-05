<template>
  <div class="conteiner">
    <v-row no-gutters class="imageText">
      <v-col cols="12">
        <h2></h2>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <div>
          <div class="image">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              veniam e
            </h3>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .conteiner {
    background-color: white;
    padding: 15px 0px;
  }

  .image {
    width: 100%;
    min-height: 300px;
    background-image: url("../images/1.png");
    background-size: cover;
    display: flex;
    align-items: center;
  }
  .image h3 {
    padding: 10px 10px;
    margin: 0px auto;
    margin-bottom: 80px;
  }
}
</style>
