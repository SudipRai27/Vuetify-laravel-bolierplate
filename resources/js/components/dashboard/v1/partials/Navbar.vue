<template>
  <nav>
    <v-app-bar app dark color="success" elevation="0">
      <v-app-bar-nav-icon
        @click.stop="sidebarMenu = !sidebarMenu"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="grey" dark v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in dropdownItems"
            :key="index"
            router
            :to="item.route"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn @click="toggleTheme" color="primary" class="mr-2">{{
        buttonText
      }}</v-btn>
      <v-icon>mdi-account</v-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="sidebarMenu"
      app
      floating
      :permanent="sidebarMenu"
      :mini-variant.sync="mini"
      class="primary"
      dark
    >
      <v-list dense color="primary" dark>
        <v-list-item>
          <v-list-item-action>
            <v-icon @click.stop="toggleMini = !toggleMini"
              >mdi-chevron-left</v-icon
            >
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <h3 class="font-weight-thin">Vuetify Dashboard</h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-list-item class="px-2" @click="toggleMini = !toggleMini">
        <v-list-item-avatar>
          <v-icon>mdi-account-outline</v-icon>
        </v-list-item-avatar>
        <v-list-item-content class="text-truncate">
          Jane Doeski
        </v-list-item-content>
        <v-btn icon small>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider> -->
      <v-list>
        <v-list-item
          v-for="nav in navLinks"
          :key="nav.title"
          link
          :to="nav.href"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon v-bind="attrs" v-on="on">
                <v-icon color="white">{{ nav.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title color="white">{{
                  nav.title
                }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <span>{{ nav.title }}</span>
          </v-tooltip>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import navLinks from "./navLinks";
export default {
  name: "Navbar",
  data() {
    return {
      sidebarMenu: true,
      toggleMini: false,
      navLinks,
      dropdownItems: [
        {
          title: "Dashboard",
          route: "/v1/dashboard/home",
        },
        {
          title: "Projects",
          route: "/v1/dashboard/projects",
        },
        {
          title: "Teams",
          route: "/v1/dashboard/teams",
        },
        {
          title: "Companies",
          route: "/v1/dashboard/companies",
        },
        {
          title: "Home",
          route: "/",
        },
      ],
    };
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },

  computed: {
    mini: {
      get() {
        return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
      },
      set() {},
    },
    buttonText() {
      return !this.$vuetify.theme.dark ? "Go Dark" : "Go Light";
    },
  },
};
</script>
