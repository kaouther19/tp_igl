<template>
  <v-layout justify-center align-center class="mx-10 pa-10">
    <v-card class="mx-10" width="750">
      <v-form v-model="valid">
        <v-container class="mx-10">
          <v-row>
            <v-col cols="12" md="5" class="mx=10 px-10">
              <v-text-field
                v-model="groupeA"
                :rules="groupeRules"
                type="number"
                label=" N° Groupe actuel"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="5" class="ml=10 pl-10">
              <v-text-field
                v-model="groupeV"
                :rules="groupeRules"
                type="number"
                label="N° Groupe voulu "
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mx-10 pl-1 pr-3" cols="12" md="10">
              <v-textarea counter v-model="raison" label="La raison de changement"></v-textarea>
            </v-col>
          </v-row>
          <div class="text-right px-10 mx-10 my-4">
            <v-btn flat color="error" dark large @click="submit">Envoyer</v-btn>
          </div>
        </v-container>
      </v-form>
    </v-card>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    valid: false,
    groupeA: "",
    groupeV: "",
    raison: "",
    groupeRules: [
      v => !!v || "Numéro de groupe est obligatoire",
      v => v.length <= 2 || "Le groupe doit être un seule nombre "
      // ajout de condition sur le nombre de groupe qu'on a
    ]
  }),
  methods: {
    async submit() {
      const form = {
        formulaire_grpA: this.groupeA,
        formulaire_grpV: this.groupeV,
        formulaire_raison: this.raison
      };
      axios
        .post("http://localhost:5000/formulaires/add", form)
        .then(reponse => console.log(reponse.data))
        .catch(function(error) {
          console.log(error);
        });
      console.log(form);
      // dans cette partie on envoie le contenue de formulaire a la base de donnee
    }
  }
};
</script>
