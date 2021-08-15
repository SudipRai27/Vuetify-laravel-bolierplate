<template>
  <div>
    <h3 class="subheading grey--text ma-4">Dashboard</h3>
    <!-- fluid allows for whole space if not specified it positions element in the middle -->

    <v-container class="px-4 py-0 fill-height" fluid>
      <v-row class="mb-3 pa-4">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="gray"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By Project Name</span>
            </v-btn>
          </template>
          <span>Sort project by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="gray"
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By Person Name</span>
            </v-btn>
          </template>
          <span>Sort project by project name</span>
        </v-tooltip>
      </v-row>
      <v-card
        class="pa-3"
        style="width: 100%"
        flat
        v-for="project in projects"
        :key="project.title"
      >
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" sm="12" md="6">
            <div class="cation grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="cation grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="cation grey--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="cation grey--text">Status</div>
            <div>
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Dashboard1",
  data() {
    return {
      snackbar: true,
      projects: [
        {
          title: "Design a website",
          person: "Sudip rai",
          due: "1st Jan 2019",
          status: "ongoing",
        },
        {
          title: "Code the home page",
          person: "Jackson rai",
          due: "23rd Jan 2019",
          status: "complete",
        },
        {
          title: "Create Database",
          person: "Dev rai",
          due: "20 Dec 2020",
          status: "ongoing",
        },
        {
          title: "Test out the code",
          person: "Prajack j",
          due: "1st Feb 2019",
          status: "overdue",
        },
      ],
    };
  },

  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>
<style lang="scss" scoped>
.project {
  &.complete {
    border-left: 4px solid #3cd1c2;
  }
  &.ongoing {
    border-left: 4px solid orange;
  }
  &.overdue {
    border-left: 4px solid tomato;
  }
}

.v-chip {
  &.complete {
    background: #3cd1c2;
  }
  &.ongoing {
    background: orange;
  }
  &.overdue {
    background: tomato;
  }
}
</style>

