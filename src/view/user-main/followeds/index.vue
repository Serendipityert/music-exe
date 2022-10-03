<template>
    <div class="">{{userFollowedsList}}</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
const router = useRoute()

// 接收路由参数值, as string 类型断言处理
const userFollowedsList = ref( JSON.parse( router.query.userFollowedsList as string ) )
console.log( userFollowedsList )


</script>

<style scoped>

</style>