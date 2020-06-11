//map-option.js
import echarts from "echarts";

export default {
    animation: false,
    // 地图背景颜色
    backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [{
        offset: 0,
        color: '#fff'
    }, {
        offset: 1,
        color: '#fff'
    }]),
    tooltip: {
        trigger: 'axis'
    },
    geo: {
        map: 'china',
        // silent: true,
        roam: false,
        zoom: 1.2, // 地图初始大小
        center: [105, 36], // 初始中心位置
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
                areaColor: '#eee'
            }
        },
        // 地区块儿颜色
        itemStyle: {
            normal: {
                areaColor: '#ffffff',
                borderColor: '#877167'
            },
            emphasis: {
                areaColor: '#21AEF8'
            }
        }
    },
    series: []
};
