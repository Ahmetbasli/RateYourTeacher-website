<template>
  <div>
    <div v-for="commentInfo in commentsInfo" :key="commentInfo._id">
      <div class="commentContainer animated pulse ">
        <!-- <v-avatar class="commentAvatar" size="32"
          ><span class="black--text headline">{{ "J" }}</span>
        </v-avatar> -->

        <v-row class="topBorder   ">
          <v-col offset="1" cols="3">
            <h4>Quality</h4>
          </v-col>
          <v-col cols="8">
            <RatingBar />
          </v-col>
        </v-row>
        <v-row aling="center">
          <v-col offset="1" cols="3">
            <h4>Difficulty</h4>
          </v-col>
          <v-col cols="8">
            <RatingBar />
          </v-col>
        </v-row>

        <div class="commentText">
          {{ commentInfo.comment }}
        </div>
        <!--       <div class="commentLikeAndDislike">
          <v-icon
            md
            v-on:click="onLikeClicked(commentInfo._id)"
            class="commentLikeIcon"
            :color="likeClickedIds.includes(commentInfo._id) ? 'blue' : 'grey'"
          >
            {{ like }}
          </v-icon>
          <h3>0</h3>

          <v-icon
            :color="
              disLikeClickedIds.includes(commentInfo._id) ? 'blue' : 'grey'
            "
            md
            v-on:click="onDislikeClicked(commentInfo._id)"
            class="commentDislikeIcon"
          >
            {{ dislike }}
          </v-icon>

          <h3>2</h3>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mdiThumbUp } from "@mdi/js";
import { mdiThumbDown } from "@mdi/js";
import RatingBar from "./Rating-Bar";

export default {
  //commentsInfo contains an array
  //its elements are like {person:..., comment:...}
  id: "TeacherComments",
  props: {
    commentsInfo: Array,
  },
  components: {
    RatingBar,
  },
  data: () => ({
    like: mdiThumbUp,
    dislike: mdiThumbDown,
    disLikeClickedIds: [],
    likeClickedIds: [],
  }),
  methods: {
    onLikeClicked(commentInfoId) {
      if (!this.likeClickedIds.includes(commentInfoId)) {
        this.likeClickedIds.push(commentInfoId);
      } else {
        this.likeClickedIds = this.likeClickedIds.filter(
          (id) => id !== commentInfoId
        );
      }
    },
    onDislikeClicked(commentInfoId) {
      if (!this.disLikeClickedIds.includes(commentInfoId)) {
        this.disLikeClickedIds.push(commentInfoId);
      } else {
        this.disLikeClickedIds = this.disLikeClickedIds.filter(
          (id) => id !== commentInfoId
        );
      }
    },
  },
  watch: {
    commentsInfo: function() {
      var left = null;
      var right = null;
      var length = this.commentsInfo.length;
      for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
        var temporary = this.commentsInfo[left];
        this.commentsInfo[left] = this.commentsInfo[right];
        this.commentsInfo[right] = temporary;
      }
      console.log(this.commentsInfo[0]);
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .commentContainer {
    padding: 0px 30px;

    padding-top: 40px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-top: 20px;
  }
  .topBorder {
    border-top: solid 1px lightgray;
    padding-top: 30px;
  }
  .commentAvatar {
    color: Black;
    background-color: #dcdcdc;
  }
  .commentRating {
    color: gray;
    margin: 0px auto;
  }
  .commentText {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
    border-radius: 18px;
    color: black;
    text-align: center;
    word-break: break-all;
    flex: auto;
    background-color: #dcdcdc;
  }
  .commentLikeAndDislike {
    margin: 0 auto;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .commentLikeAndDislike h3 {
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin-left: -17px;
  }
  .commentDislikeIcon {
    margin-left: 10px;
  }
}
/* .comment {
   padding-top: 10px;
  height: 100px;
  width: 500px;
  margin: auto;
  border: 2px solid honeydew;
  border-radius: 12px;

  background-color: rgb(158, 192, 196);

   rgb(157, 184, 194)
} */
</style>
