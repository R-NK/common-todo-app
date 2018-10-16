<template>
  <div class="section">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png">
      <div class="columns">
        <card></card>
        <card></card>
        <card-add></card-add>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue'; // @ is an alias to /src
import CardAdd from '@/components/CardAdd.vue';

@Component({
  components: {
    Card,
    CardAdd,
  },
})
export default class Home extends Vue {}
</script>
