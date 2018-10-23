<template>
  <div class="section">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png">
      <div class="columns">
        <card v-for="(item, index) in todoItems" :key="item.id" :item="item" @remove="todoItems.splice(index, 1)" @editItem="editItem"></card>
        <card-add></card-add>
      </div>
      <modal-card v-if="isEdit" :item="currentItem" @change-item="changeItem" @close="isEdit = false"></modal-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue'; // @ is an alias to /src
import CardAdd from '@/components/CardAdd.vue';
import TodoItem from '@/model/TodoItem.ts';
import ModalCard from '@/components/ModalCard.vue';

@Component({
  components: {
    Card,
    CardAdd,
    ModalCard,
  },
})
export default class Home extends Vue {
  public todoItems: TodoItem[] = [
    new TodoItem(1, 'todo1', 'ひとつめのtodo', new Date('1995-12-17T03:24:00')),
    new TodoItem(2, 'todo2', 'ふたつめのtodo', new Date('2105-04-09T23:24:00')),
    new TodoItem(3, 'todo3', 'みっつめのtodo', new Date('3201-08-23T01:24:00')),
  ];

  private currentItem: TodoItem = new TodoItem(0, '', '', new Date());
  private isEdit: boolean = false;

  public editItem(item: TodoItem): void {
    console.log(JSON.stringify(item));
    // copy same fields as item
    this.currentItem = { ...item };
    this.isEdit = true;
  }

  public changeItem(newItem: TodoItem): void {
    this.todoItems = this.todoItems.map((element, index) => {
      if (element.id === newItem.id) {
        return { ...newItem };
      } else {
        return element;
      }
    });
    console.log(JSON.stringify(this.todoItems));
  }

   private getNewId(items: TodoItem[]): number {
    const ids = items.map((element) => element.id);
    return Math.max(...ids) + 1;
  }
}


</script>
