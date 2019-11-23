<template>
 <v-layout
    
    justify-center
    align-center
    class="mx-10 pa-10"
  >
<v-card class="mx-10"
 width="750"
>

  <v-form v-model="valid" >
    <v-container class="mx-10">
      <v-row >
     
        <v-col
          cols="12"
          md="5"
          class="mx=10 px-10 "
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            type="number"
            label=" N° Groupe actuel"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="5"
          class="ml=10 pl-10"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            type="number"
            label="N° Groupe voulu "
            required
          ></v-text-field>
        </v-col>

       
      </v-row>
      <v-row >
       <v-col class="mx-10 pl-1 pr-3 " 
          cols="12"
          md="10"
       >  
       <v-textarea
         counter
         label="La raison de changement"
         :rules="rules"
         :value="value"
       ></v-textarea>
       </v-col>  
      </v-row >
       <div class="text-right px-10 mx-10 my-4" >
            <v-btn color="error"  dark large>Envoyer</v-btn>
         </div>
    </v-container>
  </v-form>
</v-card>
 </v-layout>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Numéro de groupe est obligatoire',
        v => v.length <= 2 || 'Le groupe doit être un seule nombre ',
        // ajout de condition sur le nombre de groupe qu'on a 


      ],
      
    }),
  }
</script>
