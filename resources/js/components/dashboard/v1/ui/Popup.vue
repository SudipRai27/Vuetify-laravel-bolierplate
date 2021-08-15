<template>
  <div>
    <v-dialog
      transition="dialog-top-transition"
      max-width="600"
      v-model="dialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" depressed v-bind="attrs" v-on="on">
          <v-icon left>mdi-plus-circle</v-icon>
          Add Project
        </v-btn>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="primary" dark elevation="0">Add Project</v-toolbar>
          <v-card-text>
            <v-form class="mt-5" @submit.prevent="submitForm" ref="form">
              <v-text-field
                label="First name"
                v-model="title"
                prepend-icon="mdi-folder"
                :rules="inputRules"
              ></v-text-field>
              <v-textarea
                label="Information"
                v-model="content"
                prepend-icon="mdi-pencil"
                :rules="inputRules"
              ></v-textarea>
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Picker without buttons"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
              <v-btn
                class="success mt-3 ml-8"
                depressed
                type="submit"
                :loading="loading"
                >Submit</v-btn
              >
            </v-form>
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
export default {
  data() {
    return {
      title: "",
      content: "",
      date: null,
      menu1: "",
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialog: false,
    };
  },

  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        console.log("submitted");
        this.dialog = false;
      }
      console.log("not submitted");
    },
  },

  computed: {},
};
</script>
