<template>
  <div class="modal is-active">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <div class="control modal-card-title">
          <input class="input is-static" type="text" v-model="currentItem.title">
        </div>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <div class="modal-card-body">
        <div class="content">
          <form v-on:submit.prevent="edit = false">
            <input class="input is-static" type="text" v-model="currentItem.description">
          </form>
          <br>
          <time>{{ currentItem.date }}</time>
        </div>
      </div>
      <footer class="modal-card-foot columns is-centerd">
        <button class="button is-success" @click="saveItem()">Save</button>
        <button class="button" @click="closeModal">Cancel</button>
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
  private currentItem = { ...this.item };

  @Emit('close')
  private closeModal() {}
  @Emit('change-item')
  private changeItem(item: TodoItem) {}

  private saveItem() {
    this.changeItem(this.currentItem);
    this.closeModal();
  }
}
</script>