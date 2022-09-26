<template>
    <t-tooltip class="placement bottom center" :content="content" placement="bottom" show-arrow>
        <div class="flex flex-row" @click="login">
            <div class="cursor-pointer" style="margin-right: 10px;">
                <t-avatar size="26px" :image="image" />
            </div>
            <div class="cursor-pointer w-14 truncate text-gray-700">
                <span style="font-size: 12px;font-weight: 400;">{{ userName }}</span>
            </div>
        </div>
    </t-tooltip>
    <!-- 登录窗口弹窗 -->
    <div>
        <t-dialog v-model:visible="visibleBody" attach="body" :confirmBtn="confirmBtn" :cancelBtn="cancelBtn"
            :closeOnOverlayClick="closeOnOverlayClick" placement="center" :on-confirm="() => (visibleBody = false)">
            <template #body>
                <div class="ml-20 w-80">
                    <t-tabs :value="value" theme="normal" @change="handlerChange">
                        <t-tab-panel value="first">
                            <template #label>
                                <svg t="1661483426887" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="19841" width="24" height="24">
                                    <path
                                        d="M697.575 837.487c34.157 0 63.432-31.721 63.432-68.311V171.452c0-39.034-29.278-68.311-63.432-68.311H263.304c-34.156 0-63.431 29.276-63.431 68.311v595.281c0 39.036 29.274 68.316 63.431 70.755h434.271zM275.501 217.803c0-19.516 17.078-36.594 36.595-36.594H648.77c19.531 0 36.593 17.079 36.593 36.594v329.361c0 19.516-17.062 36.595-36.593 36.595v2.438H312.097c-19.516 0-36.595-17.075-36.595-36.595V217.803z"
                                        fill="#1296db" p-id="19842"></path>
                                    <path
                                        d="M756.356 910.965c34.154 0 63.43-31.723 63.43-68.308v-597.73c0-39.035-29.276-68.311-63.43-68.311H322.085c-34.157 0-63.431 29.275-63.431 68.311v595.282c0 39.035 29.276 68.315 63.431 70.756h434.271zM334.282 291.28c0-19.516 17.078-36.594 36.594-36.594h336.671c19.532 0 36.596 17.078 36.596 36.594v329.361c0 19.518-17.063 36.596-36.596 36.596v2.439H370.876c-19.516 0-36.594-17.079-36.594-36.596v-331.8z"
                                        fill="#1296db" p-id="19843"></path>
                                    <path
                                        d="M600.592 799.113c0-34.154-26.835-60.99-60.989-60.99-34.158 0-60.994 26.838-60.994 60.99 0 34.157 26.836 60.988 60.994 60.988 34.154 0.002 60.989-26.83 60.989-60.988zM600.592 372.177c14.637 0 24.399-9.759 24.399-24.396s-9.763-24.402-24.399-24.402H478.608c-14.636 0-24.396 9.765-24.396 24.402s9.76 24.396 24.396 24.396h121.984z"
                                        fill="#1296db" p-id="19844"></path>
                                </svg>
                                <span class="ml-2"> Phone </span>
                            </template>
                            <div>
                                <PhoneLogin v-show="phoneLoginShow" @userLogin="getUserLogin" />
                                <PhoneRegister v-show="phoneRegisterShow" />
                                <div class="mt-5 flex flex-center">
                                    <div class="cursor-pointer w-16 ml-4 text-xs text-gray-500"
                                        @click="toPhoneRegister">注册账号
                                    </div>
                                    <div class="cursor-pointer w-24 text-xs text-gray-500" @click="toPhoneLogin">账号密码登录
                                    </div>
                                    <div class="cursor-pointer w-16 text-xs text-gray-500">找回密码</div>
                                </div>
                            </div>
                        </t-tab-panel>
                        <t-tab-panel value="second">
                            <template #label>
                                <svg t="1661483372819" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="16002" width="20" height="20">
                                    <path
                                        d="M68.399765 590.615655c-37.073602 90.765025-43.465533 176.418105-14.062849 191.757941 20.45478 11.505876 53.692423-14.061849 84.374094-60.084355 11.504876 51.135451 42.186547 95.87897 84.373094 132.952572-44.743519 16.619821-74.146204 44.743519-74.146204 75.42519 0 51.135451 79.259149 93.321998 176.418105 93.321997 88.208052 0 161.07627-33.237643 175.138119-77.982162h20.45478C535.009753 990.751357 607.87897 1023.989 696.087023 1023.989c98.436943 0 176.418105-40.908561 176.418104-93.321997 0-30.68167-29.402684-58.806368-74.146203-75.42519 42.186547-37.073602 72.868217-81.817121 84.374094-132.952572 30.68067 46.022506 62.640327 71.589231 84.373093 60.084355 30.68167-15.339835 24.289739-102.270901-14.061849-191.757941-29.403684-70.311245-69.033258-122.725682-99.714929-134.230558 0-3.835959 1.278986-8.949904 1.278987-14.062849 0-26.845712-7.669918-52.413437-20.454781-72.868217v-5.112945c0-12.783863-2.555973-24.289739-7.669917-34.516629C818.813704 145.736434 701.200968 0 510.722014 0 320.24206 0 202.630323 145.736434 194.959406 329.824457c-5.112945 10.22689-7.669918 21.732767-7.669918 34.516629v5.112945c-12.783863 20.45478-20.45478 46.022506-20.45478 72.869217v14.061849c-28.123698 11.504876-69.032258 62.640327-98.434943 134.230558z"
                                        fill="#1296db" p-id="16003"></path>
                                </svg>
                                <span class="ml-2 w-10"> QQ </span>
                            </template>
                            <div>
                                <QQQuickLogin v-show="qqQuickLoginShow" />
                                <QQAccountPassLogin v-show="qqAccountPassLoginShow" />
                                <div class="mt-5 flex flex-center">
                                    <div class="cursor-pointer w-16 ml-4 text-xs text-gray-500" @click="toQQQuickLogin">
                                        快捷登录
                                    </div>
                                    <div class="cursor-pointer w-24 text-xs text-gray-500"
                                        @click="toQQAccountPassLogin">账号密码登录
                                    </div>
                                </div>
                            </div>
                        </t-tab-panel>
                        <t-tab-panel value="third">
                            <template #label>
                                <svg t="1664177569543" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2223" width="20" height="20"><path d="M773.9392 301.8752m-200.0384 0a200.0384 200.0384 0 1 0 400.0768 0 200.0384 200.0384 0 1 0-400.0768 0Z" fill="#5CF4A1" p-id="2224"></path><path d="M924.4672 706.2528a24.32 24.32 0 0 1-24.2688 24.2688h-145.7664a24.3712 24.3712 0 0 0-24.2688 24.32 24.2688 24.2688 0 0 0 24.2688 24.2688h48.5888a24.32 24.32 0 0 1 24.2688 24.32 24.32 24.32 0 0 1-24.2688 24.2688h-64.512A388.7616 388.7616 0 0 1 122.88 390.4512h-48.5888a24.32 24.32 0 0 1 0-48.5888h97.28a24.2688 24.2688 0 0 0 6.8096-47.5648l0.768-0.9728H122.88a24.32 24.32 0 1 1 0-48.5888h101.632a388.7616 388.7616 0 0 1 619.52 437.248h56.32a24.32 24.32 0 0 1 24.1152 24.2688z" fill="#58E000" p-id="2225"></path><path d="M565.8112 478.8736a3.84 3.84 0 0 0-4.5568 4.608c3.1744 14.7456 7.8848 40.96 9.984 60.0576 3.6352 32.2048-28.5696 62.3104-53.6064 70.7584-39.424 13.568-84.8896-18.688-95.1296-56.32-11.776-43.9808 12.6464-97.5872 53.2992-115.0464 4.5056-2.0992 9.0112-3.8912 13.568-5.9904 9.3184-4.2496 4.8128-11.1616 3.2768-17.5104-4.1984-17.4592-6.6048-34.9184 2.4064-51.2 13.568-24.4224 48.7936-43.6736 76.1856-31.9488a276.48 276.48 0 0 1 34.6624 16.5888 25.1904 25.1904 0 0 1 10.5472 28.2624c-5.7344 15.36-20.7872 18.9952-36.7616 9.6768a196.1984 196.1984 0 0 0-17.4592-9.9328 16.2304 16.2304 0 0 0-23.808 15.36 150.3744 150.3744 0 0 0 1.9456 18.0224 18.4832 18.4832 0 0 0 13.568 14.8992 200.3456 200.3456 0 0 1 29.3888 8.9088c38.8096 17.152 66.56 45.1584 79.5136 87.04 24.064 77.6704-21.0944 155.0848-87.9616 184.6272a182.016 182.016 0 0 1-116.8384 13.2096 185.6 185.6 0 0 1-126.464-104.8064c-18.0736-40.96-22.8864-82.7904-8.7552-127.0784 18.9952-59.2384 56.9344-99.6352 114.7392-121.9072a23.4496 23.4496 0 0 1 28.0064 9.728 21.1456 21.1456 0 0 1-6.0416 29.5424 259.8912 259.8912 0 0 1-25.2928 13.568c-31.8976 16.2304-51.7632 42.752-64.4096 75.8784-24.7296 64.4096 9.3184 139.1104 65.6384 168.3456 51.7632 27.0848 122.5728 16.2304 160.8192-28.3136A106.2912 106.2912 0 0 0 619.52 542.72c-5.12-25.6-34.5088-59.2896-53.7088-63.8464z m-53.4016 5.9904a6.144 6.144 0 0 0-7.9872-4.5056c-33.28 11.4688-47.5136 47.2576-31.9488 76.4416a28.0064 28.0064 0 0 0 30.1056 13.824c14.1824-4.1984 24.1152-14.4384 22.016-27.6992-2.9696-19.5072-7.936-38.8096-12.1856-58.0608z" fill="#FFFFFF" p-id="2226"></path></svg>
                                <span class="ml-2 w-10"> 网易云 </span>
                            </template>
                            <div>
                                <NeteaseCloud />
                            </div>
                        </t-tab-panel>
                    </t-tabs>
                </div>
            </template>
        </t-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router/index'
import { userStore } from '@/store/modules/user'

import PhoneLogin from '@/pages/user/phone/login/index.vue'
import PhoneRegister from '@/pages/user/phone/register/index.vue'
import QQQuickLogin from '@/pages/user/qq/login/quick/index.vue'
import QQAccountPassLogin from '@/pages/user/qq/login/accountPass/index.vue'
import NeteaseCloud from '@/pages/user/netease-cloud/login/index.vue'

const userState = userStore()

const cancelBtn = ref(null);
const confirmBtn = ref(null);
const closeOnOverlayClick = ref(false);

const phoneLoginShow = ref(true)
const phoneRegisterShow = ref(false)
const qqQuickLoginShow = ref(true)
const qqAccountPassLoginShow = ref(false)

const value = ref('first');
const content = ref('点击登录');

const image = ref('https://tdesign.gtimg.com/site/avatar.jpg');
// const image = ref('https://lpzwg.oss-cn-shenzhen.aliyuncs.com/zwg-images/meizhuang/54044c14fcaac1be43dc8deb2a40a8e40bce.jpg');
const userName = ref('点击登录')

const setInterval1 = setInterval(() => {
    if (userState.getIsLogin) {
        userName.value = userState.getUserInfo.username
        image.value = userState.getUserInfo.avatar
        content.value = '个人主页'
        // 清除定时器
        clearInterval(setInterval1)
    }
}, 1000)

const visibleBody = ref(false);

// 电话号码登录成功返回的状态
const getUserLogin = (boo: boolean) => {
    visibleBody.value = !boo
}

const toPhoneRegister = () => {
    phoneLoginShow.value = false;
    phoneRegisterShow.value = true;
}
const toPhoneLogin = () => {
    phoneRegisterShow.value = false;
    phoneLoginShow.value = true;
}

const toQQQuickLogin = () => {
    qqAccountPassLoginShow.value = false;
    qqQuickLoginShow.value = true;
}

const toQQAccountPassLogin = () => {
    qqQuickLoginShow.value = false;
    qqAccountPassLoginShow.value = true;
}

const handlerChange = (newValue: string) => {
    value.value = newValue;
};

const login = () => {
    // 判断用户是否已经登录
    if (userState.getIsLogin) {
        // 已登录
        router.push('/user-main')
    } else {
        // 未登录
        visibleBody.value = true;
    }
}

</script>

<style scoped>
</style>