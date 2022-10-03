<template>
    <div class="">{{userLevelInfo}}</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
const router = useRoute()

// 接收路由参数值, as string 类型断言处理
const userLevelInfo = ref( JSON.parse( router.query.userLevelInfo as string ) )
console.log( userLevelInfo )


</script>

<style scoped>

</style>