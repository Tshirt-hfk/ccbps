import internetFraudData from "@/data/internetFraudData.js";
import illegalFundData from "@/data/illegalFundData.js";

export default {
    internetFraud: {    // 网络诈骗
        categories: internetFraudData.categories,
        radio1: "近24小时", // 筛选选项
        radio2: "全部",
        radio3: "5千元以下",
        searchValue: "", // 搜索框数据
        currentPage: 1,
        pagesize: 10, // 每页条目数
        applications: internetFraudData.data, // 所有数据
        tableData: [], // 目前列表数据
        displayData: []
    },
    illegalFund: {  // 非法集资数据
        categories: illegalFundData.categories,
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
    internetOptions: { // 网络诈骗设置数据
        internetCate: internetFraudData.categories,
        modelDescription: '微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖',
        radio1: '近24小时',  // 筛选选项
        radio2: '全部',
        radio3: '5千元以下',
        //  规则配置
        ruleSearchValue: '',    // 规则配置搜索框数据
        ruleCurrentPage: 1,    // 规则配置当前页
        rulePagesize: 10,      // 规则配置每页条目数
        ruleApplications: [{   // 规则配置所有数据
            id: 'ID43321432',
            name: '微信',
            regular: '//*[@id="cnblogs_post_body"]/p[39]/',
            weight: '50000.00'
        }], 
        ruleTableData: [],   // 规则配置目前列表数据
        ruleDisplayData: [], // 规则配置当前页显示数据
        // 模型
        modelSearchValue: '',    // 模型搜索框数据
        modelCurrentPage: 1,    // 模型当前页
        modelPagesize: 10,      // 模型每页条目数
        modelApplications: [{  // 模型所有数据
            id: 'ID43321432',
            name: '微信',
            dataset: 'dataset-2020-05-06.zip',
            trainingTime: '2020-05-22 19:45:32'
        }],   
        modelTableData: [],   // 模型目前列表数据
        modelDisplayData: [],  // 模型当前页显示数据
        releaseValue: false,     // 模型是否发布
        ruleValue: false,  // 模型规则是否启用
    },
    illegalOptions: { // 非法集资设置数据
        illegalCate: illegalFundData.categories,
        modelDescription: '微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖',
        radio1: '近24小时',  // 筛选选项
        radio2: '全部',
        radio3: '5千元以下',
        //  规则配置
        ruleSearchValue: '',    // 规则配置搜索框数据
        ruleCurrentPage: 1,    // 规则配置当前页
        rulePagesize: 10,      // 规则配置每页条目数
        ruleApplications: [{   // 规则配置所有数据
            id: 'ID43321432',
            name: '微信',
            regular: '//*[@id="cnblogs_post_body"]/p[39]/',
            weight: '50000.00'
        }], 
        ruleTableData: [],   // 规则配置目前列表数据
        ruleDisplayData: [],  // 规则配置当前页显示数据
        // 模型
        modelSearchValue: '',    // 模型搜索框数据
        modelCurrentPage: 1,    // 模型当前页
        modelPagesize: 10,      // 模型每页条目数
        modelApplications: [{   // 模型所有数据
            id: 'ID43321432',
            name: '微信',
            dataset: 'dataset-2020-05-06.zip',
            trainingTime: '2020-05-22 19:45:32'
        }],   
        modelTableData: [],   // 模型目前列表数据
        modelDisplayData: [], // 模型当前页显示数据
        releaseValue: false,     // 模型是否发布
        ruleValue: false,  // 模型规则是否启用
    }
}