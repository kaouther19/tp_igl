<template>
  <v-layout>
    <v-flex class="text-center">
      <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
    </v-flex>
  </v-layout>
</template>
