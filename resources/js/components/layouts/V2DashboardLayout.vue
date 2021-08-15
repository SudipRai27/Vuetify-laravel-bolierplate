<template>
  <v-app class="grey lighten-4">
    <nav>
      <v-app-bar app class="primary">
        <v-app-bar-nav-icon @click="toggleDrawer" color="white" />
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" app class="success" dark>
        <v-list-item color="white" class="white--text">
          <v-list-item-content>
            <v-list-item-title class="white--text">
              Application
            </v-list-item-title>
            <v-list-item-subtitle class="white--text">
              subtext
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content class="white--text">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <slot />
      </v-main>
    </nav>
  </v-app>
</template>
<script>
export default {
  name: "V2DashboardLayout",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      right: null,
    };
  },

  methods: {
    toggleDrawer() {
      return (this.drawer = !this.drawer);
    },
  },
};
</script>

