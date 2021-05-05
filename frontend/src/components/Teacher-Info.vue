<template>
  <div>
    <h1 class="container" v-if="teacher.name">
      <h2 class="teacherName">{{ teacher.name }}</h2>
      <h2 class="insideTeacherInfo">
        <p class="academic">
          Academic in
          <span> {{ teacher.facultyName }} </span>
          faculty at
          <span> {{ teacher.universityName }} </span>
          University
        </p>
      </h2>
    </h1>
  </div>
</template>

<script>
export default {
  name: "TeacherInfo",
  props: {
    teacher: Object,
    teachers: Array,
  },
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  * {
    margin: 0;
    padding: 0;
  }
  .containerss {
    padding: 30px;
    display: flex;
    flex-direction: column;
  }
  .teacherName {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 56px;
    line-height: 1.07143;
    font-weight: 600;
    letter-spacing: -0.005em;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
  }

  .academic {
    font-weight: 200;
  }
  .academic span {
    font-weight: 600;
  }
  .insideTeacherInfo {
    font-size: 20px;
  }
}
@media only screen and (min-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .teacherName {
    padding-top: 10px;

    font-size: 50px;
    font-family: Georgia, sans-serif;
    color: black;
  }
  .academic {
    font-weight: 200;
  }
  .academic span {
    font-weight: 600;
  }
  .insideTeacherInfo {
    color: black;
    font-size: 20px;
  }
}
</style>
