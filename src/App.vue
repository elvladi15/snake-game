<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Sidebar</v-list-item-title>
          <v-list-item-subtitle>Choose an option</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark class="indigo">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>SNAKE GAME</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Game />
    </v-main>
  </v-app>
</template>

<script>
import Game from "./components/Game.vue";
export default {
  name: "App",
  components: {
    Game,
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Play", icon: null },
      { title: "List users' scores", icon: null },
    ],
  }),
};
</script>
