<template>
    <div class="">{{userFollowsList}}</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
const router = useRoute()

// 接收路由参数值, as string 类型断言处理
const userFollowsList = ref( JSON.parse( router.query.userFollowsList as string ) )
console.log( userFollowsList )
</script>

<style scoped>

</style>