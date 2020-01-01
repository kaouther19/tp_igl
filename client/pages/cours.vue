<template >
  <v-container class="my-5">
    <v-layout row>
      <v-flex class="ml-10 pl-10">
        <div class="ml-10 mt-10 pl-10">
          <div class="ml-10 mt-10 pl-10">
            <v-simple-table fixed-header height="430px" class="ml-10 px-4">
              <thead>
                <tr>
                  <th class="text-left">Module</th>
                  <th class="text-left">CC</th>
                  <th class="text-left">CI</th>
                  <th class="text-left">CF</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in notes" :key="item.note_module" :id="item.note_module">
                  <td>{{ item.note_module }}</td>
                  <td>{{ item.note_cc }}</td>
                  <td>{{ item.note_ci }}</td>
                  <td>{{ item.note_cf }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
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
    /**
     * Cette fonction recupere la liste des notes des modules d'un etudiant
     * la fonction s'execute au chargement de la page
     */
    affichageOnLoad: function() {
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
    this.affichageOnLoad();
  }
};
</script>

