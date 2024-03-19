<script setup lang='ts'>
import type { FormInstance } from 'element-plus';
import { ref } from 'vue';
import { isPassword, isUsername } from '@/utils/validate'
import { useAuthStore } from '@/stores/auth'
import { useRoute, useRouter } from 'vue-router'
import { Message } from '@element-plus/icons-vue';
const store = useAuthStore()
const router = useRouter()
const route = useRoute()
const loginForm = ref({
    username: '',
    password: ''
})

//表单校验
const rules = ref({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' },
    {
        validator: (rule: any, value: string, callback: Function) => {
            if (!isUsername(value)) {
                callback(new Error('输入的格式不正确，请重新输入'))
            } else {
                callback()
            }
        },
        trigger: 'blur'
    }
    ],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' },
    {
        validator: (rule: any, value: string, callback: Function) => {
            if (!isPassword(value)) {
                callback(new Error('输入的格式不正确，请重新输入！'))
            } else {
                callback()
            }
        }
    }
    ]
})
const form = ref<FormInstance | null>()

const submit = () => {
    form.value?.validate(async (valid) => {
        if (valid) {
            const res = await store.login(loginForm.value)
            console.log("resssss=====>", res);
            if (res.data.access_token) {
                router.replace({ path: (route.query.redirect as string) || '/' })
            } else {
                Message.error('登录失败')
            }

        }
    }
    )
}
const remember = ref<boolean>(false)

</script>
<template>
    <div class="login-container">
        <div class="login-wrap">
            <img alt="logo" class="logo" src="@/assets/logo.jpeg" />
            <div class="title">账号登录</div>
            <el-form ref="form" :model="loginForm" :rules="rules" class="login-form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" clearable placeholder="请输入账号/手机号"
                        prefix-icon="ele-User"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" placeholder="请输入密码" prefix-icon="ele-Unlock"
                        show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="login-other">
                        <el-checkbox v-model="remember">
                            <span>记住密码</span>
                        </el-checkbox>
                    </div>
                    <el-button class="login-button" type="primary" @click="submit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.login-container {
    width: 100%;
    height: 100%;
    background: url('@/assets/login-bj.png') no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;

    .login-wrap {
        width: 410px;
        height: 460px;
        background-color: #fff;
        margin: auto;
        margin-right: 130px;
        padding: 30px;
        box-shadow: #74747462 0 2px 15px;
        border-radius: 10px;

        .logo {
            width: 230px;
            max-height: 40px;
            margin: auto;
            display: flex;
        }

        .title {
            font-size: 20px;
            height: 70px;
            line-height: 70px;
            font-weight: 500;
            text-align: left;
            color: #0d1234;
            letter-spacing: 2px;
        }

        .login-form {
            .el-form-item {
                margin-bottom: 27px;
            }

            .login-other {
                span {
                    font-size: 13px;
                    font-weight: 500;
                    color: #999;
                }
            }

            .login-button {
                width: 100%;
                height: 40px;
                letter-spacing: 3px;
                font-weight: 500;
                margin-top: 5px;
            }
        }
    }
}
</style>