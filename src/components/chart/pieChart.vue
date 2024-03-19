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
        data: any[]
    }>(), {
    width: '100%',
    height: '380px',
    data: () => []
})

    //定义图标的配置项
    const option = {
        backgroundColor: props.bgColor,
        title: {
            text: props.title,
            subtext: props.subtext,
            left: 'left'
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: '单位:元',
                type: 'pie',
                radius: '60%',
                data: props.data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    
    const {chartRef} = useCharts({
        props,
        option
    })
</script>
<template>
    <div>
        <el-card shadow="hover">
            <div ref="chartRef" :style="{ width: props.width, height: props.height }"></div>
        </el-card>
    </div>
</template>
<style lang='scss' scoped></style>