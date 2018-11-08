<template>
  <v-dialog v-model="isEdit" max-width="600px" content-class="overflow-visible">
    <v-card>
      <v-card-title primary-title>
        <h3 class="headline">Edit Task</h3>
      </v-card-title>
      <v-card-title>
        <v-text-field label="Task Name" v-model="currentItem.title"></v-text-field>
      </v-card-title>
      <v-card-text>
        <div>
          <v-form v-on:submit.prevent="edit = false">
            <v-text-field label="Description" v-model="currentItem.description"></v-text-field>
          </v-form>
          <br>
          <datetime type="datetime" v-model="currentItem.datetime" class="theme-color"></datetime>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat color="#41b883" @click="isEdit = false">Cancel</v-btn>
        <v-btn flat color="#41b883" @click="saveItem()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import TodoItem from '@/model/TodoItem';
import Datetime from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';

Vue.use(Datetime);

@Component
export default class ModalCard extends Vue {
  @Prop() private item!: TodoItem;
  private isEdit = false;
  private currentItem = { ...this.item };

  public open(item: TodoItem) {
    this.currentItem = { ...item };
    this.isEdit = true;
  }

  @Emit('change-item')
  private changeItem(item: TodoItem) {}

  private saveItem() {
    this.changeItem(this.currentItem);
    this.isEdit = false;
  }
}
</script>

<style>
  .v-dialog {
    overflow-y: visible;
  }

  .theme-color .vdatetime-popup__header,
  .theme-color .vdatetime-calendar__month__day--selected > span > span,
  .theme-color .vdatetime-calendar__month__day--selected:hover > span > span {
    background: #41b883;
  }

  .theme-color .vdatetime-year-picker__item--selected,
  .theme-color .vdatetime-time-picker__item--selected,
  .theme-color .vdatetime-popup__actions__button {
    color: #41b883;
  }
</style>
