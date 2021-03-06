import internetFraudData from "@/data/internetFraudData.js";
import illegalFundData from "@/data/illegalFundData.js";

export default {
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
        ruleApplications: [],  // 规则配置所有数据
        ruleTableData: [],   // 规则配置目前列表数据
        ruleDisplayData: [], // 规则配置当前页显示数据
        // 模型
        modelSearchValue: '',    // 模型搜索框数据
        modelCurrentPage: 1,    // 模型当前页
        modelPagesize: 10,      // 模型每页条目数
        modelApplications: [],   // 模型所有数据
        modelTableData: [],   // 模型目前列表数据
        modelDisplayData: [],  // 模型当前页显示数据
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
        ruleApplications: [],  // 规则配置所有数据
        ruleTableData: [],   // 规则配置目前列表数据
        ruleDisplayData: [],  // 规则配置当前页显示数据
        // 模型
        modelSearchValue: '',    // 模型搜索框数据
        modelCurrentPage: 1,    // 模型当前页
        modelPagesize: 10,      // 模型每页条目数
        modelApplications: [],  // 模型所有数据
        modelTableData: [],   // 模型目前列表数据
        modelDisplayData: [], // 模型当前页显示数据
    }
}