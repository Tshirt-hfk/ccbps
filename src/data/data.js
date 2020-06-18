export default {
    // 全域搜索
    normData: {  // 今日总量 较昨日 本周总量 较上周
        data: [['今日总量', '较昨日', '本周总量', '较上周'], ['356', '92%', '1735', '19%']]
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
            海外: [130.41667, 36.91667]
        },
        rawData: [  // 地点网络诈骗和非法集资数量
            ["北京", 5, 200],
            ["上海", 10, 100],
            ["广州", 100, 50],
            ["杭州", 1000, 20],
            ["重庆", 100, 20],
            ["青岛", 100, 20],
            ["厦门", 10, 200],
            ["福州", 100, 10],
            ["兰州", 10, 105],
            ["长沙", 100, 25],
            ["南京", 10, 200],
            ["海外", 10, 50]
        ]
    },
    myLine: {  // 全域扫描中近一周趋势折线图数据 网络诈骗  非法集资
        data: [[820, 932, 901, 934, 1290, 1330, 1320], [520, 955, 931, 434, 890, 1440, 1320]]
    },
    myBar: { // 全域扫描中高发区域排行柱状图数据 地点  网络诈骗  非法集资
        data: [["大庆", "武汉", "北京", "合肥", "苏州", "菏泽", "长沙"], [10, 52, 200, 334, 390, 330, 220], [10, 52, 200, 334, 390, 330, 220]]
    },
    myRanking: { // 全域扫描中诈骗模式统计
        data: [{       // 诈骗模式排名
            image: '/static/images/number1.png',
            name: '微信中奖',
            num: '26'
        }, {
            image: '/static/images/number2.png',
            name: '彩票中奖',
            num: '24'
        }, {
            image: '/static/images/number3.png',
            name: '谎报车祸',
            num: '13'
        }, {
            image: '/static/images/number4.png',
            name: '银行卡冻结',
            num: '6'
        }, {
            image: '/static/images/number5.png',
            name: '论文发表',
            num: '4'
        }]
    },
    mySource: { // 全域扫描中来源占比
        data: [
            ["微博", "微信", "论坛", "短信", "其他"],  // 类型
            [ // 各类型数值
                { value: 335, name: "微博" },
                { value: 310, name: "微信" },
                { value: 234, name: "论坛" },
                { value: 135, name: "短信" },
                { value: 1548, name: "其他" }
            ]
        ]
    },
    myWord: { // 全域扫描中热词
        data: [
            { name: "KFC", value: 10927 },
            { name: "桂鱼", value: 8902 },
            { name: "外婆家", value: 5902 },
            { name: "汉堡", value: 2902 },
            { name: "1921", value: 3902 }
        ]
    },
    illegalFund: {  // 非法集资数据
        data: [{
            id: 1,
            label: '网络诈骗分类体系',
            children: [{
                id: 2,
                label: '微信中奖',
                children: [{
                    id: 3,
                    label: '三级 1-1-1'
                }, {
                    id: 4,
                    label: '三级 1-1-2'
                }]
            }, {
                id: 5,
                label: '彩票中奖',
                children: [{
                    id: 6,
                    label: '三级 1-2-1'
                }, {
                    id: 7,
                    label: '三级 1-2-2'
                }]
            }, {
                id: 8,
                label: '二级 2-2'
            }, {
                id: 9,
                label: '二级 2-3'
            }]
        }],
        radio1: '近24小时',  // 筛选选项
        radio2: '全部',
        radio3: '5千元以下',
        searchValue: '',    // 搜索框数据
        currentPage: 1,
        pagesize: 10,      // 每页条目数
        applications: [],   // 所有数据
        tableData: [],   // 目前列表数据
        displayData: [{   // 当前页显示数据
            id: 'ID43321432',
            name: 'xxx诈骗事件',
            field: '微信中奖',
            source: '微信',
            date: '2020-05-22 19:45:32',
            money: '50000.00'
        }],
    },
    gatheringCenter: {  // 采集中心设置
        data: [{
            id: 1,
            label: '网络诈骗分类体系',
            children: [{
                id: 2,
                label: '微信中奖',
                children: [{
                    id: 3,
                    label: '三级 1-1-1'
                }, {
                    id: 4,
                    label: '三级 1-1-2'
                }]
            }, {
                id: 5,
                label: '彩票中奖',
                children: [{
                    id: 6,
                    label: '三级 1-2-1'
                }, {
                    id: 7,
                    label: '三级 1-2-2'
                }]
            }, {
                id: 8,
                label: '二级 2-2'
            }, {
                id: 9,
                label: '二级 2-3'
            }]
        }],
        radio1: '近24小时',  // 筛选选项
        radio2: '全部',
        searchValue: '',    // 搜索框数据
        currentPage: 1,
        pagesize: 10,      // 每页条目数
        applications: [],   // 所有数据
        tableData: [],   // 目前列表数据
        displayData: [{   // 当前页显示数据
            id: 'ID43321432',
            source: '虎扑',
            address: 'http://baidu.com',
            xpath: '//*[@id="cnblogs_post_body"]/p[39]/img',
            weight: '50000.00'
        }],
    },
    systemOptions: { // 系统设置数据
        data: [{ 
            id: 1,
            label: '模型列表',
            children: [{
                id: 2,
                label: '微信中奖',
                children: [{
                    id: 3,
                    label: '三级 1-1-1'
                }, {
                    id: 4,
                    label: '三级 1-1-2'
                }]
            }, {
                id: 5,
                label: '彩票中奖',
                children: [{
                    id: 6,
                    label: '三级 1-2-1'
                }, {
                    id: 7,
                    label: '三级 1-2-2'
                }]
            }, {
                id: 8,
                label: '二级 2-2'
            }, {
                id: 9,
                label: '二级 2-3'
            }]
        }],
        modelDescription: '微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖',
        tabActiveName: 'first',   // 标签页选项卡
        radio1: '近24小时',  // 筛选选项
        radio2: '全部',
        radio3: '5千元以下',
        //  规则配置
        ruleSearchValue: '',    // 规则配置搜索框数据
        ruleCurrentPage: 1,    // 规则配置当前页
        rulePagesize: 10,      // 规则配置每页条目数
        ruleApplications: [],   // 规则配置所有数据
        ruleTableData: [],   // 规则配置目前列表数据
        ruleDisplayData: [{   // 规则配置当前页显示数据
            id: 'ID43321432',
            name: '微信',
            regular: '//*[@id="cnblogs_post_body"]/p[39]/',
            weight: '50000.00'
        }],
        // 模型
        modelSearchValue: '',    // 模型搜索框数据
        modelCurrentPage: 1,    // 模型当前页
        modelPagesize: 10,      // 模型每页条目数
        modelApplications: [],   // 模型所有数据
        modelTableData: [],   // 模型目前列表数据
        modelDisplayData: [{   // 模型当前页显示数据
            id: 'ID43321432',
            name: '微信',
            dataset: 'dataset-2020-05-06.zip',
            trainingTime: '2020-05-22 19:45:32'
        }],
        releaseValue: false,     // 模型是否发布
        ruleValue: false,  // 模型规则是否启用
    }
}