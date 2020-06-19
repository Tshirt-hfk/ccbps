export default {
    // 全域搜索
    normData: {  // 今日总量 较昨日 本周总量 较上周
        data: ['356', '92%', '1735', '19%']
    },
    myMap: {  // 全域搜索中地图数据
        title: ["网络诈骗", "非法集资"],
        geoCoordMap: { // 地点位置经纬坐标
            北京: [116.41667, 39.91667],
            上海: [121.43333, 34.5],
            广州: [113.23333, 23.16667],
            杭州: [120.2, 30.26667],
            重庆: [106.45, 29.56667],
            青岛: [120.33333, 36.06667],
            厦门: [118.1, 24.46667],
            福州: [119.3, 26.08333],
            兰州: [103.73333, 36.03333],
            长沙: [113.0, 28.21667],
            南京: [118.78333, 32.05],
        },
        rawData: [  // 地点网络诈骗和非法集资数量
            ["北京", 80, 200],
            ["上海", 40, 100],
            ["广州", 130, 70],
            ["杭州", 120, 40],
            ["重庆", 100, 60],
            ["青岛", 100, 50],
            ["厦门", 10, 200],
            ["福州", 100, 10],
            ["兰州", 30, 105],
            ["长沙", 100, 25],
            ["南京", 25, 200],
        ]
    },
    myLine: {  // 全域扫描中近一周趋势折线图数据 网络诈骗  非法集资
        data: [[820, 932, 901, 934, 1290, 1330, 1320], [520, 955, 931, 434, 890, 1440, 1320]]
    },
    myBar: { // 全域扫描中高发区域排行柱状图数据 地点  网络诈骗  非法集资
        data: [["北京", "上海", "广州", "杭州", "重庆", "青岛", "合肥"], [360, 322, 280, 244, 190, 182, 200], [280, 282, 240, 234, 220, 160, 123]]
    },
    myRanking: { // 全域扫描中诈骗模式统计
        data: [{       // 诈骗模式排名
            image: '/static/images/number1.png',
            name: '微信中奖',
            value: '26'
        }, {
            image: '/static/images/number2.png',
            name: '彩票中奖',
            value: '24'
        }, {
            image: '/static/images/number3.png',
            name: '谎报车祸',
            value: '13'
        }, {
            image: '/static/images/number4.png',
            name: '银行卡冻结',
            value: '6'
        }, {
            image: '/static/images/number5.png',
            name: '论文发表',
            value: '4'
        }]
    },
    mySource: { // 全域扫描中来源占比
        data: [
            ["微博", "微信", "论坛", "新闻", "其他"],  // 类型
            [ // 各类型数值
                { value: 335, name: "微博" },
                { value: 310, name: "微信" },
                { value: 234, name: "论坛" },
                { value: 135, name: "新闻" },
                { value: 1548, name: "其他" }
            ]
        ]
    },
    myRanking1: { // 全域扫描中非法集资统计
        data: [{       // 非法集资排名
            image: '/static/images/number1.png',
            name: '微信中奖',
            value: '26'
        }, {
            image: '/static/images/number2.png',
            name: '彩票中奖',
            value: '24'
        }, {
            image: '/static/images/number3.png',
            name: '谎报车祸',
            value: '13'
        }, {
            image: '/static/images/number4.png',
            name: '银行卡冻结',
            value: '6'
        }, {
            image: '/static/images/number5.png',
            name: '论文发表',
            value: '4'
        }]
    },
    mySource1: { // 全域扫描中非法集资来源占比
        data: [
            ["微博", "微信", "论坛", "新闻", "其他"],  // 类型
            [ // 各类型数值
                { value: 335, name: "微博" },
                { value: 310, name: "微信" },
                { value: 234, name: "论坛" },
                { value: 135, name: "新闻" },
                { value: 1548, name: "其他" }
            ]
        ]
    },
}