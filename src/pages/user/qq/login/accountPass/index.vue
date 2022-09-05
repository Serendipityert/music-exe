<template>
    <div class="mt-8 flex flex-col">
        <div class="mb-4 text-sm font-bold">QQ号登录</div>
        <div>
            <t-form ref="form" :data="formData" :colon="true" :label-width="0" @submit="onSubmit">
                <t-form-item name="account">
                    <t-input v-model="formData.account" clearable placeholder="QQ号码">
                        <template #prefix-icon>
                            <svg t="1661487177171" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="21766" width="14" height="14">
                                <path
                                    d="M287.271 790.209v30.108c0 19.872 5.903 35.711 16.705 46.509l0.012 0.008c10.798 10.806 26.639 16.709 46.51 16.709h321.759c63.51 0 63.351-53.948 63.249-91.684l-0.004-1.65H287.271z m448.211-525.225H287.271v476.603h448.211V264.984zM304.12 158.808c-10.106 10.109-16.849 23.541-16.849 36.912v20.64h448.183c-0.378-20.569-4.594-40.674-14.563-54.802-8.415-11.916-21.066-19.6-39.17-19.6H341.03c-13.369 0.001-26.801 6.744-36.91 16.85z m-60.743 675.706V190.99c0-28.151 13.255-51.858 33.678-68.887 21.895-18.239 52.068-28.771 82.906-28.771h302.832c31.576 0 61.396 11.045 82.955 29.909 20.555 17.985 33.629 43.079 33.629 72.478v634.062c0 16.14-4.362 30.474-11.091 42.833-8.257 15.147-20.103 27.303-31.856 36.125-11.651 8.766-25.136 14.636-40.593 18.311-15.322 3.627-32.597 5.114-51.968 5.114H378.883c-18.855 0-36.203-1.39-51.846-4.813-15.755-3.439-29.804-8.96-41.917-17.196-11.45-7.765-22.695-19.481-30.596-33.8-6.781-12.269-11.147-26.498-11.147-41.841z m256.038 29.19c-10.828-4.691-19.449-15.066-19.449-29.19 0-15.692 8.271-25.156 18.814-29.229 4.019-1.554 8.373-2.31 12.71-2.317a37.497 37.497 0 0 1 12.624 2.162c10.488 3.765 18.676 12.286 18.676 24.653 0 18.473-7.699 29.304-17.692 33.995-4.037 1.878-8.448 2.748-12.851 2.699-4.356-0.049-8.767-1.017-12.832-2.773z"
                                    fill="#999999" p-id="21767"></path>
                            </svg>
                        </template>
                    </t-input>
                </t-form-item>
                <t-form-item name="password">
                    <t-input v-model="formData.password" type="password" clearable placeholder="密码">
                        <template #prefix-icon>
                            <lock-on-icon />
                        </template>
                    </t-input>
                </t-form-item>
                <t-form-item style="padding-top: 8px">
                    <t-button theme="primary" type="submit" block>
                        登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录
                    </t-button>
                </t-form-item>
            </t-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { LockOnIcon } from 'tdesign-icons-vue-next';

const INITIAL_DATA = {
    account: '',
    password: '',
};

const formData = ref({ ...INITIAL_DATA });

const onSubmit = ({ validateResult, firstError }) => {
    if (validateResult === true) {
        MessagePlugin.success('提交成功');
    } else {
        console.log('Validate Errors: ', firstError, validateResult);
        MessagePlugin.warning(firstError);
    }
};
</script>

<style scoped>
</style>