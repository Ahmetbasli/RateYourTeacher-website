<template>
  <div>
    <div
      :style="{
        backgroundColor: isAddCommentSectionOn ? 'lightgray' : 'white',
      }"
      class="addCommentButton "
      @click="toggleIsAddCommentSectionOn"
    >
      <v-icon class="commentPencilIcon">{{ pencilIcon }}</v-icon>
      <button class="addCommentButtonText">
        make your comment . . .
      </button>
    </div>
    <div v-if="isAddCommentSectionOn"></div>

    <!-- <div class="comment-modal" :style="activePopup">
      <div class="modal-content">
        <h1 class="header">make your comment</h1>
        <div class="close" @click="closeAddCommentPopup">+</div>

        <input
          class="modal-textbox"
          type="text"
          placeholder=" make a comment.."
          v-model="comment"
        />
        <button @click="addNewAnonComment" class="modal-button">
          Submit
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mdiPencil } from "@mdi/js";
import { mapActions } from "vuex";
/* import axios from "axios";
import router from "../router"; */
import { mapState } from "vuex";
export default {
  name: "TeacherAddComment",
  data() {
    return {
      comment: "",
      dialog: false,
      activePopup: {
        display: "none",
      },
      pencilIcon: mdiPencil,
    };
  },
  props: {
    id: String,
  },
  computed: {
    ...mapState(["isAddCommentSectionOn"]),
  },

  methods: {
    ...mapActions(["toggleIsAddCommentSectionOn", "fetchTeacherById"]),

    /* openAddCommentPopup() {
      router.push({ path: `/new-Comment` });
      this.activePopup.display = "flex";
    },

    closeAddCommentSection() {
      this.activePopup.display = "none";
      // to clear text for later comments
      this.comment = " ";
    },
    async addNewAnonComment() {
      const commentInfo = {
        person_id: "6043740c5dbccc0f78009b58",
        comment: this.comment,
      };
      await axios.post(`http://localhost:3000/post/${this.id}`, commentInfo);
      this.activePopup.display = "none";
      this.fetchTeacherById(this.id);
      // to clear text for later comments
      this.comment = " ";
    }, */
  },
};
</script>

<style scoped>
.addCommentButton {
  width: 250px;
  padding: 10px;
  margin: 0 auto;
  background: none;
  border-radius: 18px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.addCommentButton:hover {
  background-color: lightgray;
}

.addCommentButtonText {
  margin-left: 10px;
  outline: none;
  color: black;
}
.commentPencilIcon {
  margin-left: 10px;
}
/*  .comment-modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
   display: flex; 
  justify-content: center;
  align-items: center;
} */
/* .header {
  padding-top: 7px;
  font-size: 35px;
  grid-row: 2/ 1;
  grid-column: 1/4;
}
.modal-content {
  border-radius: 10px;
  width: 500px;
  height: 250px;
  background-color: #f4f4f4;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 60px 1fr 1fr 0.7fr;
}

.modal-textbox {
  margin: 20px 10px 10px;
  padding-left: 10px;

  background-color: #c7bcbc;
  border-radius: 20px;

  grid-row: 2/ 4;
  grid-column: 1/5;
}

.modal-textbox:focus {
  outline: 0;
}

.modal-button {
  cursor: pointer;
  border-radius: 10px;
  background-color: rgb(175, 175, 175);
  border: none;

  grid-row: 4/ 5;
  grid-column: 1/5;
  justify-content: stretch;
  align-self: stretch;
  margin: 5px 10px 10px 10px;
}
.modal-button:hover {
  background-color: rgb(177, 198, 201);
}
.close {
  color: grey;
  font-size: 40px;
  transform: rotate(45deg);
  cursor: pointer;
  grid-row: 1/ 2;
  grid-column: 4/5;
  justify-self: center;
  align-self: center;
}
.AddBtn {
  border-radius: 40px;
  border: none;
  text-align: left;
  height: 50px;
  width: 60%;
  color: #6f6a6a;
  background: rgb(158, 192, 196);
  cursor: pointer;
  margin: 30px 30px;
  position: relative;
  cursor: text;
  font-size: 18px;
  padding-left: 20px;
  outline: none;
}
.AddBtn:hover {
  background-color: rgb(177, 198, 201);
}  */
</style>
