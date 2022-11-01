<template>
    <div class="main shadow-2xl h-full">
        <div class="flex flex-col">
            <div class="font-medium text-xl mt-1 text-gray-600">消息</div>
            <div class="mt-2">
                <t-tabs :default-value="1">
                    <t-tab-panel :value="1" label="私信">
                        <div class="">
                            <div class="flex flex-row mt-3 mb-2 hover:bg-gray-100 cursor-pointer" v-if="msgList"
                                v-for="(item, index) in msgList" :key="index" @click="intoPrivateMsg(item)">
                                <div class="w-10 h-10 mt-1.5">
                                    <img :src="item.fromUser.avatarUrl" alt="" style="width: 100%; height: 100%;"
                                        class="rounded-full">
                                </div>
                                <div class="flex flex-col ml-3 w-44 border-b">
                                    <div class="text-xs text-blue-400 mb-1 mt-1.5 flex flex-row justify-between">
                                        <div>{{ item.fromUser.nickname }}</div>
                                        <div class="text-xs">{{ formatDate(item.lastMsgTime) }}</div>
                                    </div>
                                    <div class="mb-3 text-xs truncate">{{ JSON.parse(item.lastMsg).msg }}</div>
                                </div>
                            </div>
                            <div v-if="intoUserMsg">
                                <t-drawer v-model:visible="visible" close-btn closeOnEscKeydown>
                                    <div class="flex flex-col">
                                        <div v-if="privateMsgList">
                                            <div class="text-xs" v-for="(item, index) in privateMsgList">
                                                <div class="flex justify-start"
                                                    v-if="intoUserMsg.fromUser.userId === item.fromUser.userId">
                                                    <div class="w-8 h-8">
                                                        <img :src="item.fromUser.avatarUrl" alt="" class="rounded-full"
                                                            style="width: 100%; height: 100%;">
                                                    </div>
                                                    <div class="mb-4 ml-2 rounded-lg bg-gray-50 p-3">
                                                        {{ JSON.parse(item.msg).msg }}</div>
                                                </div>
                                                <div v-else class="flex justify-end">
                                                    <div class="mb-4 w-auto bg-gray-50 rounded-lg p-3">
                                                        {{ JSON.parse(item.msg).msg }}
                                                    </div>
                                                    <div class="w-8 h-8 ml-2">
                                                        <img :src="item.fromUser.avatarUrl" alt="" class="rounded-full">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <template #header>
                                        <div class="flex flex-row text-center">
                                            <div class="cursor-pointer">
                                                <ChevronLeftIcon @click="visible = false" />
                                            </div>
                                            <div class="text-center m-auto text-sm mt-1 font-bold">
                                                {{ intoUserMsg.fromUser.nickname }}</div>
                                        </div>
                                    </template>
                                    <template #footer>
                                        <div class="flex flex-col">
                                            <div class="flex justify-start">
                                                <t-textarea v-model="msgs" name="msgs" :autosize="true" />
                                            </div>
                                            <div class="mt-4 flex justify-end">
                                                <t-button theme="success" @click="sendMsgToUser(intoUserMsg)">发送
                                                </t-button>
                                            </div>
                                        </div>
                                    </template>
                                </t-drawer>
                            </div>
                        </div>
                    </t-tab-panel>
                    <t-tab-panel :value="2" label="评论">
                        <p style="margin: 20px">评论</p>
                    </t-tab-panel>
                    <t-tab-panel :value="3" label="@我">
                        <p style="margin: 20px">@我</p>
                    </t-tab-panel>
                    <t-tab-panel :value="4" label="通知">
                        <p style="margin: 20px">通知</p>
                    </t-tab-panel>
                </t-tabs>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { formatDate } from '@/util/date'
import { ChevronLeftIcon } from 'tdesign-icons-vue-next'
import { getPrivateMsgDetail } from '@/api/user/index'
import { sendMsg } from '@/api/user/index'
import { userStore } from '@/store/modules/user'
import { storeToRefs } from 'pinia'

const userState = userStore()
const { cookie } = storeToRefs<any>(userState)

const visible = ref<boolean>(false)
const msgs = ref<any>()

const props = defineProps({
    msgList: {
        type: Array,
        default: () => [],
        required: true
    } as any,
})

const intoUserMsg = ref<any>()
const privateMsgList = ref<any>()


const intoPrivateMsg = (item: any) => {
    intoUserMsg.value = item
    getPrivateMsgDetail(item.fromUser.userId, cookie.value).then((res: any) => {
        if (res.code === 200) {
            privateMsgList.value = res.msgs.reverse()
        }
    })
    visible.value = true
}

const sendMsgToUser = (user: any) => {
    sendMsg(user.fromUser.userId, cookie.value, msgs.value).then((res: any) => {
        if (res.code === 200) {
            res.newMsgs.map((msg: any) => {
                privateMsgList.value.push(msg)
            })
            msgs.value = ""
        }
    })
}
</script>

<style scoped>
.main {
    width: 300px;
    padding: 20px;
}
</style>