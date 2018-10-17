<template>
  <div class="column is-3">
    <div class="card">
      <div class="card-content">
        <div class="content">
          いい感じの追加アイコンを表示したい
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
</style>
