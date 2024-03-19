<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';
const Breadcrumb = defineAsyncComponent(() => import('./breadcrumd.vue'))
const userDropdown = defineAsyncComponent(() => import('./userDropdown.vue'))
</script>

<template>
    <div>
        <!--右侧头部区域-->
        <el-header class="layout-header">
            <div class="layout-header-index">
                <Breadcrumb></Breadcrumb>

                <userDropdown></userDropdown>
            </div>
        </el-header>
    </div>
</template>
<style lang='scss' scoped></style>