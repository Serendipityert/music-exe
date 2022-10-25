<template>
    <div class="" v-if="ranking">{{ ranking }}</div>
    <div class="" v-if="rankingDetail">{{ rankingDetail }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"

const router = useRoute()

// 接收路由参数值, as string 类型断言处理
const ranking = ref(JSON.parse(router.query.ranking as string))
const rankingDetail = ref(JSON.parse(router.query.rankingDetail as string))

</script>

<style scoped>

</style>