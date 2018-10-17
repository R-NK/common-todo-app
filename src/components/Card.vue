<template>
  <div class="column is-3">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ item.title }}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <label v-if="!edit">{{ item.description }}</label>
          <form v-on:submit.prevent="$emit('editText', item.description)">
            <input class="input" type="text" v-if="edit" v-model="item.description">
          </form>
          <br>
          <time datetime="2016-1-1">{{ item.date }}</time>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Done</a>
        <a href="#" class="card-footer-item" v-on:click="edit = true">Edit</a>
        <a href="#" class="card-footer-item" v-on:click="$emit('remove')">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  public edit: boolean = false;
  @Prop() private item!: string;
}
</script>