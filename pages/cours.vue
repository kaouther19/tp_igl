<template>
  
    <v-flex class=" ml-10">
      <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1 ml-10 "
  ></v-data-table>
    </v-flex>
  
</template>
<script>
export default {
    data () {
      return {
        headers: [
          {
            text: 'Titre',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Date début', value: 'dateDebut' },
          { text: 'Date fin', value: 'dateFin' },
          { text: 'Description', value: 'description' },
         
        ],
        desserts: [
          {
            name: 'cours 01',
            dateDebut: '16 - 11 - 2019',
            dateFin: '22 - 11 - 2019',
            description: "C'est le premier cours ",
          },
         {
            name: 'cours 02',
            dateDebut: '24 - 11 - 2019',
            dateFin: '24 - 11 - 2019',
            description: "C'est le premier cours ",
          },
          {
            name: 'cours 03',
            dateDebut: '28 - 11 - 2019',
            dateFin: '28 - 11 - 2019',
            description: "C'est le premier cours ",
          },
         
          {
            name: 'cours 04',
            dateDebut: '16 - 11 - 2019',
            dateFin: '22 - 11 - 2019',
            description: "C'est le premier cours ",
          },
          {
            name: 'cours 05',
            dateDebut: '16 - 11 - 2019',
            dateFin: '22 - 11 - 2019',
            description: "C'est le premier cours ",
          },
          {
            name: 'cours 06',
            dateDebut: '16 - 11 - 2019',
            dateFin: '22 - 11 - 2019',
            description: "C'est le premier cours ",
          },
         {
            name: 'cours 07',
            dateDebut: '16 - 11 - 2019',
            dateFin: '22 - 11 - 2019',
            description: "C'est le premier cours ",
          },
         {
            name: 'cours 08',
            dateDebut: '16 - 11 - 2019',
            dateFin: '22 - 11 - 2019',
            description: "C'est le premier cours ",
          },
         {
            name: 'cours 09',
            dateDebut: '16 - 11 - 2019',
            dateFin: '22 - 11 - 2019',
            description: "C'est le premier cours ",
          },
          {
            name: 'cours 10',
            dateDebut: '16 - 11 - 2019',
            dateFin: '22 - 11 - 2019',
            description: "C'est le premier cours ",
          },
        ],
      }
    },
  }
</script>