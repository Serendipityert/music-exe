<template>
    <div class="mt-8 flex flex-col">
        <div class="mb-4 text-sm font-bold">手机号注册</div>
        <div>
            <t-form ref="form" :data="formData" :rules="rules" @submit="userRegister" :colon="true" :label-width="0">
                <t-form-item name="username">
                    <t-input v-model="formData.username" clearable placeholder="昵称">
                        <template #prefix-icon>
                            <svg t="1662031572474" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2383" width="14" height="14">
                                <path
                                    d="M928.382896 791.521828c-16.965943-46.689367-41.579822-89.948478-73.155583-128.575208-51.760002-63.320477-120.315971-111.082951-196.762552-137.862498 12.559856-8.716946 24.437758-18.60837 35.477038-29.648675 48.352273-48.351249 74.981299-112.635269 74.981299-181.013069 0-68.3778-26.629026-132.662844-74.981299-181.013069-48.351249-48.349201-112.634245-74.976179-181.00795-74.976179-68.3778 0-132.662844 26.626978-181.012045 74.976179s-74.976179 112.634245-74.976179 181.013069c0 68.3778 26.626978 132.662844 74.976179 181.012045 10.997298 10.997298 22.827073 20.858004 35.334708 29.549351-76.436342 26.701727-144.996406 74.372044-196.810678 137.613676-31.667918 38.653353-56.356545 81.956494-73.376758 128.70525-17.616156 48.38504-26.548133 99.258295-26.548133 151.205681 0 12.852708 10.419786 23.272495 23.272495 23.272495s23.271471-10.419786 23.271471-23.272495c0-184.927657 130.697871-347.138828 311.032057-386.437274 26.902422 9.421428 55.490277 14.340518 84.837909 14.340518 29.29541 0 57.834115-4.902706 84.696603-14.293416 180.095604 39.415177 310.672648 201.692905 310.672648 386.391196 0 12.852708 10.419786 23.272495 23.272495 23.272495s23.272495-10.419786 23.272495-23.272495C954.847064 890.641889 945.942734 839.842359 928.382896 791.521828zM303.487542 314.423402c0-115.489037 93.95727-209.446307 209.445283-209.446307 115.488014 0 209.445283 93.95727 209.445283 209.446307 0 115.489037-93.95727 209.445283-209.445283 209.445283C397.444811 523.868686 303.487542 429.91244 303.487542 314.423402z"
                                    p-id="2384" fill="#8a8a8a"></path>
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
                <t-form-item name="rePassword">
                    <t-input v-model="formData.rePassword" type="password" clearable placeholder="确认密码">
                        <template #prefix-icon>
                            <lock-on-icon />
                        </template>
                    </t-input>
                </t-form-item>
                <t-form-item name="phone">
                    <t-input v-model="formData.phone" clearable placeholder="手机号">
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
                <t-form-item name="verify_code">
                    <div class="flex flex-col">
                        <div class="flex flex-row">
                            <t-input v-model="formData.verify_code" style="width: 150px;" type="text" clearable
                                placeholder="验证码">
                                <template #prefix-icon>
                                    <svg t="1661489054801" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="33066" width="12" height="12">
                                        <path
                                            d="M512.777696 102.354843l23.330884 18.564359 0.501739 0.401392 0.451565 0.351217a518.648047 518.648047 0 0 0 315.19271 107.372238h7.425743c5.017394 0 10.43618 0 15.704444-0.301043v380.318486a268.982508 268.982508 0 0 1-172.397667 234.211966l-2.207654 0.802783-2.15748 1.003479-186.295849 84.643441-185.091676-84.141702-2.157479-0.953305-2.15748-0.852957A269.484247 269.484247 0 0 1 150.521829 609.563232V229.144397h22.327404a518.497526 518.497526 0 0 0 316.09584-107.924151l0.401392-0.301044 0.401391-0.351217 23.28071-18.514185m0-91.918664a35.12176 35.12176 0 0 0-22.126709 7.927483l-50.173943 40.139155a437.015042 437.015042 0 0 1-267.878681 91.467098h-6.020873a444.541134 444.541134 0 0 1-55.99412-3.56235h-3.863394a37.329413 37.329413 0 0 0-23.782449 9.031309 35.523152 35.523152 0 0 0-11.740702 26.391494v430.341908A348.608555 348.608555 0 0 0 294.671566 918.183154l203.85673 92.671273a41.945416 41.945416 0 0 0 14.700966 2.960263h0.551913a28.147582 28.147582 0 0 0 13.597138-3.512176l203.756382-92.671273a348.207164 348.207164 0 0 0 223.374394-306.462443V181.027586a35.422804 35.422804 0 0 0-35.12176-35.422804h-4.465481a433.251997 433.251997 0 0 1-55.893772 3.612524h-6.924004a437.466608 437.466608 0 0 1-267.126072-90.965358l-50.173943-39.888285a35.523152 35.523152 0 0 0-22.126709-7.927483z"
                                            fill="#999999" p-id="33067"></path>
                                        <path
                                            d="M451.264442 672.330834a51.930031 51.930031 0 0 1-37.02837-15.052182l-111.637023-112.841198a40.139154 40.139154 0 0 1 0-56.395512 39.386545 39.386545 0 0 1 55.943947 0l92.721446 93.474056L667.31344 363.56039a39.386545 39.386545 0 0 1 55.943946 0 40.139154 40.139154 0 0 1 0 56.445686L488.242638 657.278652a51.879857 51.879857 0 0 1-36.978196 15.052182z"
                                            fill="#999999" p-id="33068"></path>
                                    </svg>
                                </template>
                            </t-input>
                            <t-button theme="primary" @click="sendSms" :disabled="smsBtnDis" :loading="smsBtnLoad">
                                {{ sms }}
                            </t-button>
                        </div>
                        <div class="h-2 text-xs text-gray-600 mt-1" v-show="isReSend">收不到验证码？点击
                            <t-link theme="danger" size="small" @click="reSendSms"> 重新发送 </t-link>
                        </div>
                    </div>
                </t-form-item>
                <t-form-item style="padding-top: 8px">
                    <t-button theme="primary" type="submit" block>
                        注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册
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
import { sendPhoneVerifyCode, verifyPhoneCode, userPhoneCreate } from '@/api/user/index'
import { Md5 } from "ts-md5";

const INITIAL_DATA = {
    username: '',
    password: '',
    rePassword: '',
    phone: '',
    verify_code: '',
};

const formData = ref({ ...INITIAL_DATA });
const sms = ref('发送验证码');
const seconds = ref(30)
const smsBtnDis = ref(false)
const smsBtnLoad = ref(false)
const isReSend = ref(false)

// 校验两次密码是否一致
const rePassword = (val: string) =>
    new Promise((resolve) => {
        const timer = setTimeout(() => {
            resolve(formData.value.password === val);
            clearTimeout(timer);
        });
    });

// 校验密码
const passwordValidator = (val: string | any[]) => {
    if (val.length > 0 && val.length <= 4) {
        return { result: false, message: '太简单了！再开动一下你的小脑筋吧！', type: 'error' };
    }
    if (val.length > 4 && val.length < 6) {
        return { result: false, message: '还差一点点，就是一个完美的密码了！', type: 'warning' };
    }
    return { result: true, message: '太强了，你确定自己记得住吗！', type: 'success' };
};

// 注册表单检验规则
const rules = {
    username: [
        { required: true, message: '昵称必填', type: 'error' },
        {
            pattern: /[^~!#$%^&*()_\+=<>?:"{}|~！#￥%……&*（）={}|《》？：“”【】、；''‘’，。、\s+]/,
            message: '不允许输入特殊字符',
            trigger: 'blur'
        },
        {
            pattern: /^[^\s]+[\s]*.*$/,
            message: '不允许输入空格',
            trigger: 'blur'
        },
        {
            min: 3,
            message: '至少需要三个字',
            type: 'error',
            trigger: 'blur',
        },
    ],
    verify_code: [
        { required: true, message: '验证码必填', type: 'error' },
        {
            pattern: /^[0-9]{6}$/,
            message: '验证码为6位纯数字',
            trigger: 'blur'
        },
    ],
    phone: [
        { required: true, message: '电活号码必填', type: 'error' },
        {
            pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
            message: '电话号码格式不正确',
            trigger: 'blur'
        },
    ],
    password: [
        { required: true, message: '密码必填', type: 'error' },
        { validator: passwordValidator },
        {
            pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]))[a-zA-Z0-9]{6,15}$/,
            message: '为数字、小写、大写字母，禁止空格和特殊符号',
            trigger: 'blur'
        },
    ],
    rePassword: [
        // 自定义校验规则
        { required: true, message: '确认密码必填', type: 'error' },
        { validator: rePassword, message: '两次密码不一致' },
    ],
};

// 重置表单
const onRestForm = () => {
    formData.value.username = ''
    formData.value.password = ''
    formData.value.rePassword = ''
    formData.value.phone = ''
    formData.value.verify_code = ''
}

// 重新发送验证码
const reSendSms = async () => {
    sendSms()
}

// 发送验证码
const sendSms = async () => {
    // 校验电话号码是否已填写
    if (formData.value.phone == "") {
        MessagePlugin.error('请先填写电话号码')
        return
    }

    isReSend.value = true
    smsBtnDis.value = true
    smsBtnLoad.value = true

    await sendPhoneVerifyCode({ "phone": formData.value.phone })
        .then((res: any) => {
            const smsSeconds = setInterval(() => {
                seconds.value -= 1
                sms.value = seconds.value.toString()
                if (seconds.value === 0 || res.code === 1) {
                    clearInterval(smsSeconds)
                    isReSend.value = false
                    smsBtnDis.value = false
                    smsBtnLoad.value = false
                    sms.value = '重新发送'
                    seconds.value = 30
                }
            }, 1000)

            MessagePlugin.success(res.msg)
        })
        .catch((err) => {
            MessagePlugin.error(err)
            isReSend.value = false
            smsBtnDis.value = false
            smsBtnLoad.value = false
            sms.value = '重新发送'
            seconds.value = 30
        });
}

// 注册按钮
const userRegister = ({ validateResult, firstError }) => {
    if (validateResult === true) {
        // 将密码转换为MD5码
        formData.value.password = Md5.hashStr(formData.value.password)
        // 校验短信验证码
        verifyPhoneCode({ "code": formData.value.verify_code }).then((res: any) => {
            if (res.code === 1) {
                // 验证码校验通过
                userPhoneCreate(formData.value).then((res: any) => {
                    if (res.code === 1) {
                        // 清空表单信息
                        onRestForm()
                        MessagePlugin.success(res.msg)
                    }
                }).catch((err: any) => {
                    console.log(err)
                })
            } else {
                MessagePlugin.error(res.msg)
            }
        }).catch((err: any) => {
            console.error(err);
        })
    } else {
        console.log('Validate Errors: ', firstError, validateResult);
        MessagePlugin.warning(firstError);
    }
};
</script>

<style scoped>
</style>