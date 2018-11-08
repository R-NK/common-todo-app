<template>
  <v-card height="100%" class="flexcard">
    <v-card-title>
      <span class="headline">
        {{ item.title }}
      </span>
    </v-card-title>
    <v-card-text>
      <label class="wrap-text">{{ item.description }}</label>
      <br>
      <label>{{ convertDatetime(item.datetime) }}</label>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions>
      <a href="#" class="card-footer-item">Done</a>
      <a href="#" class="card-footer-item" v-on:click="$emit('editItem', item)">Edit</a>
      <a href="#" class="card-footer-item" v-on:click="$emit('remove')">Delete</a>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DateTime } from 'luxon';

@Component
export default class Card extends Vue {
  public edit: boolean = false;
  @Prop() private item!: string;

  private convertDatetime(datetime: string) {
    const format = DateTime.DATETIME_MED;
    const datetimeString = DateTime.fromISO(datetime).toLocaleString(format);
    return datetimeString;
  }
}
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}

.wrap-text {
  word-wrap: break-word;
}
</style>
