<template>
  <div>
    <h3 class="subheading grey--text ma-4">Teams</h3>
    <v-container class="px-4 py-0 fill-height" fluid>
      <v-row class="mb-3 pa-4">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar color="teal" size="48">
                <span class="white--text">{{ person.avatar }}</span>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Teams",
  data() {
    return {
      team: [
        { name: "The Net ninja", role: "Web Developer", avatar: "TN" },
        { name: "Ryu", role: "Graphic Designer", avatar: "RY" },
        { name: "Chun Li", role: "Web Developer", avatar: "CL" },
        { name: "Gouken", role: "Social Media Maverick", avatar: "GK" },
        { name: "Yoshi", role: "Sales guru", avatar: "YS" },
      ],
    };
  },
};
</script>
