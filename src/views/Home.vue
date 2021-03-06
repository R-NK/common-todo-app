<template>
  <v-content>
    <v-container>
      <img alt="Vue logo" src="../assets/logo.png">
      <v-container grid-list-md fluid>
        <v-layout row wrap>
          <v-flex md3 v-for="(item, index) in todoItems" :key="item.id">
            <card :item="item" @remove="removeItem(index)" @editItem="editItem"></card>
          </v-flex>
          <v-flex md3>
            <card-add @addItem="addItem"></card-add>
          </v-flex>
        </v-layout>
      </v-container>
      <modal-card @change-item="saveItem" ref="dialogue"></modal-card>
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
  public todoItems: TodoItem[] = [];

  public mounted() {
    const todoItems = this.getTodoItems();
    if (todoItems != null) {
      this.todoItems = todoItems;
    } else {
      console.log('something went wrong...');
    }
  }

  public getTodoItems(): TodoItem[] {
    const todoData = localStorage.getItem('todoItems');
    const todoItems: TodoItem[] = [];
    if (todoData != null) {
      const todoJson = JSON.parse(todoData) as TodoItem[];
      for (const item of todoJson) {
        todoItems.push({id: item.id, title: item.title, description: item.description, datetime: item.datetime});
      }
    }
    return todoItems;
  }

  public editItem(item: TodoItem): void {
    console.log(JSON.stringify(item));
    const dialogue: any = this.$refs.dialogue;
    dialogue.open(item);
  }

  public saveItem(newItem: TodoItem): void {
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
    localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
    console.log(JSON.stringify(this.todoItems));
  }

  public addItem(): void {
    const currentUTC = DateTime.local().toUTC().toISO();
    const newItem = {id: this.getNewId(this.todoItems), title: '', description: '', datetime: currentUTC};
    const dialogue: any = this.$refs.dialogue;
    dialogue.open(newItem);
  }

  public removeItem(index: number): void {
    this.todoItems.splice(index, 1);
    localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
  }

  private getNewId(items: TodoItem[]): number {
    if (items.length === 0) {
      return 0;
    }
    const ids = items.map((element) => element.id);
    return Math.max(...ids) + 1;
  }
}
</script>

<style scoped>
  .hero-image {
    color: #41b883;

    /* Position and center the image to scale nicely on all screens */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
}
</style>
