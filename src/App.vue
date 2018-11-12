<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <v-container fill-height ma-0 fluid pa-5 class="hero-banner">
        <v-layout align-center justify-center>
          <div>
            <h3 class="display-2 hero-text">よくあるやつ</h3>
            <label class="subheading hero-text">こういうのよくあるよね</label>
          </div>
        </v-layout>
      </v-container>
      <router-view/>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default Vue.extend({
  metaInfo() {
    return {
      title: 'よくあるTODOアプリ',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    };
  },
});
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.hero-banner {
  background-color: #42b983;
}

.hero-text {
  color: white;
}
</style>
