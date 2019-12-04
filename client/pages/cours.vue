<template >
  <v-layout justify-center align-center>
    <v-flex class="ml-10 pl-10">
      <div class="ml-10 mt-10 pl-10">
        <v-simple-table class="ml-10 px-4">
          <thead>
            <tr>
              <th class="text-left">Module</th>
              <th class="text-left">CC</th>
              <th class="text-left">CI</th>
              <th class="text-left">CF</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in notes" :key="item.note_module ">
              <td>{{ item.note_module }}</td>
              <td>{{ item.note_cc }}</td>
              <td>{{ item.note_ci }}</td>
              <td>{{ item.note_cf }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      notes: []
    };
  },
  methods: {
    myFunctionOnLoad: function() {
      class Note {
        constructor(module, cc, ci, cf) {
          this.module = module;
          this.cc = cc;
          this.ci = ci;
          this.cf = cf;
        }
      }
      axios
        .get("http://localhost:4000/notes/")
        .then(reponse => {
          this.notes = reponse.data;
        })

        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    this.myFunctionOnLoad();
  }
};
</script>

