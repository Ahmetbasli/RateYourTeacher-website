<template>
  <!-- animasyon için class verdim sonra vazgeçtim -->
  <div :class="isAddCommentSectionOn ? 'animated fadeIn' : ' '">
    <v-expand-transition>
      <v-card
        v-show="isAddCommentSectionOn"
        class="mainCard mx-4 mb-0 mt-16"
        elevation="15"
      >
        <!-- ratings are here -->
        <v-row class="ratingQuality">
          <v-col cols="5">
            <h3 class="ml-4">
              Anlatım kalitesi
            </h3>
          </v-col>
          <v-col class="mb-2 pr-0 pl-8" cols="5" offset="0">
            <mdb-rating
              far
              icon="meh-blank"
              :activeFar="true"
              :options="faceOptions"
            />
          </v-col>
          <v-col class="mb-1" cols="2"> </v-col>
        </v-row>
        <v-row class="ratingDifficulty">
          <v-col cols="5">
            <h3 class="ml-4">
              Dersin zorluğu
            </h3>
          </v-col>
          <v-col class="mb-2 pr-0 pl-8" cols="5">
            <mdb-rating
              far
              icon="meh-blank"
              :activeFar="true"
              :options="faceOptions"
            />
          </v-col>
          <v-col class="mb-1" cols="2"> </v-col>
        </v-row>
        <!-- end of ratings -->
        <!-- comment text field -->
        <v-row class="commentTextContainer ma-3 px-5">
          <v-textarea
            v-model="comment"
            name="input-2-1"
            label=""
            hint=""
            dense
            roundeds
            no-resize
            auto-grow
            color="gray"
          ></v-textarea>
        </v-row>
        <div class="policy mt-5  ml-10 mr-5 ">
          <input
            class="form-check-input mb-5 "
            type="checkbox"
            id="flexCheckChecked"
          />
          <h5>
            Rate My Professors Site Guidelines, Terms of Use and
            <a href="">Privacy Policy.</a>

            {{ isAddCommentSectionOn }}
          </h5>
        </div>
        <v-row class="buttonContainer mt-5 mx-5 mb-5">
          <v-btn block class="primary" @click="addNewAnonComment">
            Shutlaa
          </v-btn>
        </v-row>
        <v-row class="mb-3"> </v-row>
      </v-card>
    </v-expand-transition>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import { mdbRating } from "mdbvue";
export default {
  name: "CommentSection",
  //
  data: () => {
    return {
      comment: "",
      faceOptions: [
        {
          feedback: "Çok kötü",
          icon: "sad-cry",
          iconActiveClass: "red-text",
        },
        {
          feedback: "kötü",
          icon: "frown",
          iconActiveClass: "pink-text",
        },
        {
          feedback: "OK",
          icon: "meh",
          iconActiveClass: "yellow-text",
        },
        {
          feedback: "iyi",
          icon: "smile",
          iconActiveClass: "light-green-text",
        },
        {
          feedback: "Harika",
          icon: "laugh-beam",
          iconActiveClass: "green-text",
        },
      ],
    };
  },
  props: {
    id: String,
  },
  components: { mdbRating },
  computed: {
    ...mapState(["isAddCommentSectionOn"]),
  },
  methods: {
    ...mapActions(["toggleIsAddCommentSectionOn", "fetchTeacherById"]),
    async addNewAnonComment() {
      const commentInfo = {
        person_id: "6043740c5dbccc0f78009b58",
        comment: this.comment,
      };

      await axios.post(`http://localhost:3000/post/${this.id}`, commentInfo);
      this.fetchTeacherById(this.id);
      // to clear text for later comments
      this.comment = " ";
    },
  },
};
</script>

<style scoped>
.mainCard {
  border-radius: 12px !important;
}
.ratingQuality {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ratingDifficulty {
  display: flex;
  justify-content: center;
  align-items: center;
}
h3 {
  color: black;
  font-size: 15px;
}
h4 {
  padding: 0px;
  font-size: 12px;
  color: gray;
}
.commentTextContainer {
  border-radius: 10px;
  background-color: lightgray;
  padding: 10px;
}

.policy {
  display: flex;
  align-items: center;
}
.policy h5 {
  font-size: 10px;
  flex: 1;
}
.policyCheckBox {
  flex: 0.2;
}
</style>
