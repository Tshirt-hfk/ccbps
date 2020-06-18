export default {
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