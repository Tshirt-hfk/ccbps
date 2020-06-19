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
        applications: illegalFundData.data,   // 所有数据
        tableData: [],   // 目前列表数据
        displayData: [], // // 当前页显示数据
    },
    gatheringCenter: {  // 采集中心设置
        radio1: '近24小时',  // 筛选选项
        radio2: '全部',
        // 数据源设置
        sourceEditFlag: false,   // 编辑框
        sourceEditIndex: 0,
        sourceForm: {
            id: '',
            source: '',
            address: '',
            xpath: '',
            weight: ''
        },
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
        allEditFlag: false,   // 编辑框
        allEditIndex: 0,
        dataForm: {
            id: '',
            title: '',
            content: '',
            time: '',
            from: ''
        },
        allSearchValue: '',    // 搜索框数据
        allCurrentPage: 1,
        allPagesize: 10,      // 每页条目数
        allApplications: [{   // 所有数据
            id: 'ID43321432',
            title: '淮南男子伪造公司证照诈骗 106万钢管与扣件被骗',
            content: '日前，淮南大通派出所经艰苦侦查破获一起案值达百万余元的特大合同诈骗案件，抓获犯罪嫌疑人一名。今年6月，大通派出所辖区居民任某来所报案称，其被定远县居民樊某以签订合同的方式诈骗价值达106万元的钢管和扣件。接报案后，鉴于报案价值特别巨大又签订有合同，该所立即组织民警对案情进行分析研究，迅速制定了案件初查方案，确定专人专办。办案民警夏继耘等人克服该案签订合同地在淮南、货物交接地在定远、大量工作需在定远开展的实际困难，经多次往返定远、淮南两地开展多方调查取证终于查明，樊某使用伪造的公司营业执照和税务登记证，于2014年1月与任某签订了租赁价值106万元的钢管55762米和扣件54065个的合同，任某于当月分六次将钢管和扣件全部运至定远交付樊某，其后樊某即以各种借口不履行合同，直至杳无音信。民警又查明樊某因同类案件于2015年被田家庵警方立案侦查。大通派出所将初查情况向大通公安分局相关负责人汇报后，将该案立为合同诈骗案件开展侦查，随后办案民警经多次前往定远对樊某实施抓捕，但都未能找到樊某。案件侦查期间，夏继耘对樊某持续展开工作，终于掌握了其准确行踪。11月6日下午，民警柏礼、夏继耘等人赶赴田家庵区洞山地区将樊某抓获。经连夜突审，樊某如实供述了以签订合同为掩护诈骗任某钢管5万余米和扣件5万余个的犯罪事实。目前，41岁的犯罪嫌疑人樊某已被刑事拘留，该案正在进一步办理中。',
            time: '2016/11/23',
            from: '金蜘蛛紧固件网（中国）—业界信息'
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