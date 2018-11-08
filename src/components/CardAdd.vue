<template>
  <v-card height="100%">
    <div class="card-content" @click="$emit('addItem')">
      <v-icon x-large color="#41b883">add</v-icon>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
