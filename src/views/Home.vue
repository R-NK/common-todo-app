<template>
  <v-content>
    <v-container>
      <img alt="Vue logo" src="../assets/logo.png">
      <v-container grid-list-md fluid>
        <v-layout row wrap>
          <v-flex md3 v-for="(item, index) in todoItems" :key="item.id">
            <card :item="item" @remove="todoItems.splice(index, 1)" @editItem="editItem"></card>
          </v-flex>
          <v-flex md3>
            <card-add @addItem="addItem"></card-add>
          </v-flex>
        </v-layout>
      </v-container>
      <modal-card @change-item="changeItem" ref="dialogue"></modal-card>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue'; // @ is an alias to /src
import CardAdd from '@/components/CardAdd.vue';
import TodoItem from '@/model/TodoItem.ts';
import ModalCard from '@/components/ModalCard.vue';
import { DateTime } from 'luxon';

@Component({
  components: {
    Card,
    CardAdd,
    ModalCard,
  },
})
export default class Home extends Vue {
  public todoItems: TodoItem[] = [
    new TodoItem(1, 'todo1', 'ひとつめのtodo', '1995-12-17T03:24:00'),
    new TodoItem(2, 'todo2', 'ふたつめのtodo', '2105-04-09T23:24:00'),
    new TodoItem(3, 'todo3', 'みっつめのtodo', '3201-08-23T01:24:00'),
  ];

  public editItem(item: TodoItem): void {
    console.log(JSON.stringify(item));
    const dialogue: any = this.$refs.dialogue;
    dialogue.open(item);
  }

  public changeItem(newItem: TodoItem): void {
    // add new item
    if (!this.todoItems.some((element) =>  element.id === newItem.id)) {
      this.todoItems.push(newItem);
    }
    this.todoItems = this.todoItems.map((element) => {
      if (element.id === newItem.id) {
        return { ...newItem };
      } else {
        return element;
      }
    });
    console.log(JSON.stringify(this.todoItems));
  }

  public addItem(): void {
    const currentUTC = DateTime.local().toUTC().toISO();
    const newItem = new TodoItem(this.getNewId(this.todoItems), '', '', currentUTC);
    const dialogue: any = this.$refs.dialogue;
    dialogue.open(newItem);
  }

   private getNewId(items: TodoItem[]): number {
    const ids = items.map((element) => element.id);
    return Math.max(...ids) + 1;
  }
}
</script>
