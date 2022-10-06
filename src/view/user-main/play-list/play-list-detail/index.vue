<template>
    <div class="">歌单详情{{playListDetail}}</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

const router = useRoute()

// 接收路由参数值, as string 类型断言处理
const playListDetail = ref( JSON.parse( router.query.playListDetail as string ) )

console.log( playListDetail )
</script>

<style scoped>

</style>