<script setup lang='ts'>
import { useCharts } from '@/hooks/useCharts';
//接收父组件传递的参数
let props = withDefaults(
    defineProps<{
        title: string
        subtext?: string
        theme?: string
        bgColor?: string
        width?: string
        height?: string
        data: any[],
    }>(), {
    width: '100%',
    height: '380px',
    data: () => []
})

const option = {
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }
    ]
};
// const { chartRef } = useCharts({
//     props, option
// })
</script>
<template>

    <el-card shadow="hover">
        <div ref="chartRef">近30天销售趋势1</div>
    </el-card>

</template>
<style lang='scss' scoped></style>