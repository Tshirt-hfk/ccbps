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
        editFlag: false,   // 编辑框
        editIndex: 0,
        sourceForm: {
            id: '',
            source: '',
            address: '',
            xpath: '',
            weight: ''
        },
        radio1: '近24小时',  // 筛选选项
        radio2: '全部',
        // 数据源设置
        sourceSearchValue: '',    // 搜索框数据
        sourceCurrentPage: 1,
        sourcePagesize: 10,      // 每页条目数
        sourceApplications: [{   // 所有数据
            id: 'ID43321432',
            source: '虎扑',
            address: 'http://baidu.com',
            xpath: '//*[@id="cnblogs_post_body"]/p[39]/img',
            weight: '50000.00'
        }],  
        sourceTableData: [],   // 目前列表数据
        sourceDisplayData: [],  // 当前页显示数据

        // 全量数据
        allSearchValue: '',    // 搜索框数据
        allCurrentPage: 1,
        allPagesize: 10,      // 每页条目数
        allApplications: [{   // 所有数据
            id: 'ID43321432',
            title: '虎扑',
            content: 'http://baidu.com',
            time: '//*[@id="cnblogs_post_body"]/p[39]/img',
            from: '50000.00'
        }],   
        allTableData: [],   // 目前列表数据
        allDisplayData: [],  // 当前页显示数据
    },
    internetOptions: { // 网络诈骗设置数据
        internetCate: [
            {
              id: 1,
              label: "网络诈骗模型",
              children: [
                {
                  id: 2,
                  label: "仿冒身份欺诈模型",
                },
                {
                  id: 3,
                  label: "购物类欺诈模型",
                },
                {
                  id: 4,
                  label: "利诱类欺诈模型",
                },
                {
                  id: 5,
                  label: "虚构险情欺诈模型",
                },
                {
                  id: 6,
                  label: "日常生活消费类欺诈模型",
                }
              ]
            }
        ],
        models: internetFraudData.models,
        modelName: '',
        modelDescription: '',
        radio1: '近24小时',  // 筛选选项
        radio2: '全部',
        radio3: '5千元以下',
        //  规则配置
        editFlag: false,   // 编辑框
        editIndex: 0,
        ruleForm: {
            id: '',
            name: '',
            regular: '',
            weight: ''
        },
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
        illegalCate: [
            {
              id: 1,
              label: "非法集资模型",
              children: [
                {
                  id: 2,
                  label: "“高收益”投资模型",
                },
                {
                  id: 3,
                  label: "编造虚假项目模型",
                },
                {
                  id: 4,
                  label: "混淆投资理财模型",
                },
                {
                  id: 5,
                  label: "传销式非法集资模型",
                },
                {
                  id: 6,
                  label: "发行权利凭证类模型",
                }
              ]
            }
        ],
        models: illegalFundData.models,
        modelName: '',
        modelDescription: '',
        radio1: '近24小时',  // 筛选选项
        radio2: '全部',
        radio3: '5千元以下',
        //  规则配置
        editFlag: false,   // 编辑框
        editIndex: 0,
        ruleForm: {
            id: '',
            name: '',
            regular: '',
            weight: ''
        },
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