<template>
  <div class="mt-6 flex flex-col">
    <div class="flex flex-row justify-start">
      <div class="mr-4">
        <t-button theme="primary" shape="round" >
          <template #icon>
            <CaretRightIcon size="20px" />
          </template>
          播放全部
        </t-button>
      </div>
      <div class="mr-4">
        <t-button theme="default" shape="round">
          <template #icon>
            <DownloadIcon size="20px" />
          </template>
          下载
        </t-button>
      </div>
      <div>
        <t-button theme="default" shape="round">
          <template #icon>
            <OrderDescendingIcon size="20px" />
          </template>
          批量操作
        </t-button>
      </div>
    </div>
    <div>
      <MusicList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  OrderDescendingIcon,
  DownloadIcon,
  CaretRightIcon,
} from "tdesign-icons-vue-next";
import MusicList from '@/components/music/index.vue'

// // 全部播放
// const playWhole = () => {
//   musicList.value = song_list.value;
//   currMusic.value = song_list.value[0];
//   isPlay.value = false;
// };
</script>

<style scoped>

</style>
