<template>
  <v-app dark>
    <v-card>
      <v-navigation-drawer
        class="green accent-4 ml-6 mt-10 mb-10"
        height="700"
        width="256"
        dark
        fixed
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>Boulaouinat kaouther</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" :id="item.id" router exact>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-account",
          title: "Profile",
          to: "/profile",
          id: ""
        },
        {
          icon: "mdi-checkbox-marked-circle-outline",
          title: "Demande",
          to: "/suivi",
          id: "dem"
        },
        {
          icon: "mdi-library",
          title: "Notes",
          to: "/cours",
          id: "note_page"
        },
        {
          icon: "mdi-calendar-clock",
          title: "Emplois du temps",
          to: "",
          id: "empl"
        },
        {
          icon: "mdi-chart-line",
          title: "Délibiration",
          to: "",
          id: "delib"
        },
        {
          icon: "mdi-school",
          title: "Encadrement",
          to: "",
          id: "encad"
        },
        {
          icon: "mdi-settings",
          title: "Paramétre",
          to: "",
          id: "param"
        }
      ]
    };
  }
};
</script>
