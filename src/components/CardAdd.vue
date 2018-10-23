<template>
  <div class="column is-3">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <font-awesome-icon icon="plus" class="fa-4x"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CardAdd extends Vue {
}
</script>

<style scoped>
.card {
    height: 100%;
}
.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #41b883;
}
</style>
