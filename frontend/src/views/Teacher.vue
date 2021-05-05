<template>
  <v-app>
    <div class="Teacher__Page">
      <div>
        <Header />
        <TeacherInfo :teacher="teacher" />

        <TeacherAddCommentButton />
        <TeacherAddCommentSection :id="id" />
        <TeacherComments :commentsInfo="teacher.commenters" />
        <Footer />
      </div>
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src

import TeacherInfo from "@/components/Teacher-Info.vue";
import TeacherComments from "@/components/Teacher-Comments.vue";
import TeacherAddCommentButton from "@/components/Teacher-Add-Comment-Button.vue";
import TeacherAddCommentSection from "@/components/Teacher-Add-Comment-Section.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import { mapState, mapActions } from "vuex";

export default {
  name: "Teacher",
  props: {
    id: String,
  },
  components: {
    TeacherInfo,
    TeacherComments,
    TeacherAddCommentButton,
    TeacherAddCommentSection,
    Header,
    Footer,
  },
  computed: {
    ...mapState(["teacher"]),
  },
  methods: {
    ...mapActions(["fetchTeacherById"]),
  },
  created() {
    this.fetchTeacherById(this.id);
  },
};
</script>

<style>
@media only screen and (max-width: 768px) {
  * {
    margin: 0;
    padding: 0;
  }
  .Teacher__Page {
    display: flex;
    justify-content: center;
    background-color: white;
  }
}
</style>
