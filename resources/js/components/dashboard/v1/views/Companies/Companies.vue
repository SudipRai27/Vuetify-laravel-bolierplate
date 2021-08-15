<template>
  <div class="projects">
    <h3 class="subeading grey--text ma-4">Companies</h3>
    <v-container class="px-4 py-0 fill-height" fluid> </v-container>
    <v-col cols="12">
      <Add />
      <v-card class="mt-2">
        <v-card-title>
          Nutrition
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="itemsWithSno"
          :search="search"
          :loading="loading"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editCompany(item.id)"
              >mdi-pencil</v-icon
            >
            <v-icon small @click="deleteCompany(item.id)">mdi-delete</v-icon>
          </template></v-data-table
        >
      </v-card>
    </v-col>
    <v-dialog
      v-model="editDialog"
      transition="dialog-top-transition"
      max-width="600"
    >
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="primary" dark elevation="0">Edit Company</v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12">Hello world!</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <v-dialog
      v-model="deleteDialog"
      transition="dialog-top-transition"
      max-width="600"
    >
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="primary" dark elevation="0"
            >Delete Company</v-toolbar
          >
          <v-card-text>
            <div class="text-h2 pa-12">Hello world!</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>
<script>
import Add from "./Dialog/Add";
export default {
  components: {
    Add,
  },
  data() {
    return {
      search: "",
      editDialog: false,
      deleteDialog: false,
      headers: [
        {
          text: "Serial #",
          value: "sno",
          sortable: false,
        },
        { text: "Name", value: "name" },
        { text: "Image", value: "image" },
        { text: "Location", value: "location" },
        { text: "Status", value: "status" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      companies: [],
      loading: true,
    };
  },
  computed: {
    itemsWithSno() {
      return this.companies.map((d, index) => ({ ...d, sno: index + 1 }));
    },
  },
  async created() {
    try {
      const response = await axios.get("/api/companies");
      this.companies = response.data.data;
      this.loading = !this.loading;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    editCompany(id) {
      this.editDialog = !this.editDialog;
    },
    deleteCompany(id) {
      this.deleteDialog = !this.deleteDialog;
    },
  },
};
</script>
