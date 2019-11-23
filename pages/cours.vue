<template>
   <v-layout
    
    justify-center
    align-center
  >
    <v-flex class=" ml-10 pl-10">
    <div class="ml-10 mt-10 pl-10" > 
   
  <v-simple-table  class=" ml-10 px-4 ">
    
      <thead>
        <tr>
          <th class="text-left">Module</th>
          <th class="text-left">CC</th>
          <th class="text-left">CI</th>
          <th class="text-left">CF</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in notes" :key="item.name">
          <td>{{ item.module }}</td>
          <td>{{ item.cc }}</td>
          <td>{{ item.ci }}</td>
          <td>{{ item.cf }}</td>
        </tr>
      </tbody>
    
  </v-simple-table>
    </div>
    
    </v-flex>
   </v-layout>
</template>
<script>
  export default {
    data () {
      class Note
      {
   
       constructor(module,cc,ci,cf)
       {
           this.module=module;
           this.cc=cc;
           this.ci=ci;
           this.cf=cf;
       }
    
      }
    
      
      return {
        notes:[new Note("POO",15,14,12), new Note("POO",15,14,12),
        new Note("POO",15,14,12),
        new Note("POO",15,14,12) ],
        
      }
    },
    methods: {

    }
  }
</script>
