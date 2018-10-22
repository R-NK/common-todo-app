<template>
  <div class="section">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png">
      <div class="columns">
        <card v-for="(item, index) in todoItems" :key="index" :item="item" v-on:remove="todoItems.splice(index, 1)" v-on:editItem="editItem"></card>
        <card-add></card-add>
      </div>
      <modal-card v-if="isEdit" :item="currentItem" v-bind:isEdit.sync="isEdit"></modal-card>
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
    new TodoItem('todo1', 'ひとつめのtodo', new Date('1995-12-17T03:24:00')),
    new TodoItem('todo2', 'ふたつめのtodo', new Date('2105-04-09T23:24:00')),
    new TodoItem('todo3', 'みっつめのtodo', new Date('3201-08-23T01:24:00')),
  ];

  private currentItem: TodoItem = new TodoItem('', '', new Date());
  private isEdit: boolean = false;

  public editItem(item: TodoItem): void {
    console.log('edit: ' + item.title);
    this.currentItem = new TodoItem(item.title, item.description, item.date);
    this.isEdit = true;
  }
}


</script>
