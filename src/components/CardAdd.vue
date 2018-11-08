<template>
  <v-card height="100%">
    <div class="card-content">
      いい感じの追加アイコン
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CardAdd extends Vue {
}
</script>

<style scoped>
.card-content {
  height: 100%;
  color: #41b883;
}
</style>
