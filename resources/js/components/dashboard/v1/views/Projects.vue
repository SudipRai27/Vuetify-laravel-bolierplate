<template>
  <div class="projects">
    <h3 class="subeading grey--text ma-4">Projects</h3>
    <v-container class="px-4 py-0 fill-height" fluid> </v-container>
    <v-col cols="12">
      <Popup />
      <v-expansion-panels class="mt-2">
        <v-expansion-panel v-for="project in myProjects" :key="project.name">
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">due by {{ project.due }}</div>
            <div>
              {{ project.content }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </div>
</template>
<script>
import Popup from "./../ui/Popup";
export default {
  name: "Projects",

  components: {
    Popup,
  },

  data() {
    return {
      projects: [
        {
          title: "Design a website",
          person: "Sudip Rai",
          due: "1st Jan 2019",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo possimus voluptatem porro asperiores? Molestiae aut obcaecati earum ex praesentium?",
          status: "ongoing",
        },
        {
          title: "Code the home page",
          person: "Jackson rai",
          due: "23rd Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo possimus voluptatem porro asperiores? Molestiae aut obcaecati earum ex praesentium?",
        },
        {
          title: "Create Database",
          person: "Dev rai",
          due: "20 Dec 2020",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo possimus voluptatem porro asperiores? Molestiae aut obcaecati earum ex praesentium?",
        },
        {
          title: "Test out the code",
          person: "Prajack j",
          due: "1st Feb 2019",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo possimus voluptatem porro asperiores? Molestiae aut obcaecati earum ex praesentium?",
        },
        {
          title: "Move to staging server",
          person: "Sudip Rai",
          due: "1st Feb 2019",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo possimus voluptatem porro asperiores? Molestiae aut obcaecati earum ex praesentium?",
        },
      ],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => project.person === "Sudip Rai");
    },
  },
};
</script>
