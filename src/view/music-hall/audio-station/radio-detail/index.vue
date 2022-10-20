<template>
    <div class="" v-if="radioStation">{{radioStation}}</div>
    <div class="" v-if="radioStationDetail">{{radioStationDetail}}</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"

const router = useRoute()

// 接收路由参数值, as string 类型断言处理
const radioStation = ref( JSON.parse( router.query.radioStation as string ) )
const radioStationDetail = ref( JSON.parse( router.query.radioStationDetail as string ) )

</script>

<style scoped>

</style>