<template>
  <div class="g-card-link">
    <div v-for="(item, k) in value" class="g-card-item" :key="k">
      <a :href="item.link" target="_blank" :title="item.title" style="font-size: 20px">{{ item.title }}</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps( {
  MyCard: Object
} )
const value = ref( props.MyCard );
</script>
<style lang="less" scoped>
button {
  background-color: #4e6ef2
}

.g-card-link {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  text-align: center;
  line-height: 38px;

  .g-card-item {
    background: blue;
    width: 113px;
    max-width: 138px;
    height: 38px;
    cursor: pointer;
    overflow: hidden;
  }

  .g-card-item:nth-of-type(2n) {
    background: rgba(44, 104, 255, .1);
  }

  .g-card-item:nth-of-type(2n+1) {
    background: rgba(56, 203, 137, .1);
  }
}
</style>