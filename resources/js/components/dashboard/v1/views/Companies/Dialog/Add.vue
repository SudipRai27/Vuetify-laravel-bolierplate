<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on">Add Company</v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark elevation="0">Add Company</v-toolbar>
        <v-card-text>
          <v-form @submit.prevent="submitForm">
            <v-row class="mt-5">
              <v-col cols="12">
                <v-text-field
                  v-model="name"
                  label="Company Name"
                  outlined
                ></v-text-field>
                <span v-if="$v.name.required">Name is required</span>
                <v-text-field
                  v-model="location"
                  label="Location"
                  prepend-inner-icon="mdi-map-marker"
                  outlined
                ></v-text-field>
                <span v-if="$v.location.required">Location is required</span>
                <span v-if="$v.location.minLength" class="text-danger"
                  >Location must be alpha</span
                >
                <v-file-input label="Image" accept="image/*" outlined>
                  dense ></v-file-input
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn class="success" depressed type="submit">Submit</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Add",
  data() {
    return {
      name: "",
      location: "",
      image: "",
      submitStatus: null,
    };
  },
  validations() {
    return {
      name: {
        required,
        minLength: minLength(3),
      },
      location: {
        required,
        minLength: minLength(4),
      },
    };
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>
