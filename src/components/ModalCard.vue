<template>
  <div class="modal" v-bind:class="{ 'is-active': isEdit }">
    <div class="modal-background" @click="changeEditState(false)"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <div class="control modal-card-title">
          <input class="input is-static" type="text" v-model="currentItem.title">
        </div>
        <button class="delete" aria-label="close" @click="changeEditState(false)"></button>
      </header>
      <div class="modal-card-body">
        <div class="content">
          <form v-on:submit.prevent="edit = false">
            <input class="input" type="text" v-model="currentItem.description">
          </form>
          <br>
          <time datetime="2016-1-1">{{ currentItem.date }}</time>
        </div>
      </div>
      <footer class="modal-card-foot columns is-centerd">
        <button class="button is-success" @click="changeEditState(false)">Save</button>
        <button class="button" @click="changeEditState(false)">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import TodoItem from '@/model/TodoItem';

@Component
export default class ModalCard extends Vue {
  @Prop() private item!: TodoItem;
  @Prop() private isEdit!: boolean;
  private currentItem = new TodoItem('', '', new Date());
  private previouseItem = new TodoItem('', '', new Date());

  private mounted(): void {
    this.currentItem = new TodoItem(this.item.title, this.item.description, this.item.date);
    this.previouseItem = this.item;
    console.log('hi');
  }

  @Emit('update:isEdit')
  private changeEditState(isEdit: boolean) {}

  private restoreItem() {

  }
}
</script>