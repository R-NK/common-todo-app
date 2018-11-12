<template>
  <v-app>
    <div id="app">
      
      <v-container fluid pa-5 ma-0 class="hero-banner" style="width: 100%;">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <v-layout align-center justify-center>
          <div>
            <h3 class="display-2 hero-text">よくあるやつ</h3>
            <p class="subheading hero-text text-xs-left">こういうのよくあるよね</p>
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
  color: white;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}

.hero-banner {
  background-color: #42b983;
}

.hero-text {
  color: white;
}
</style>
