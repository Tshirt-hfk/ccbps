
export default {
    data: [{
      // 当前页显示数据
      id: "ID43321432",
      name: "庄某某非法吸收公众存款案",
      type: "非法集资",
      pos: "湖南省 益阳市",
      num: 3,
      source: "微信",         // 来源
      date: 1592457007735,   // 时间戳
      money: 3250000,
      origination: "\
        人员: 庄某某、李某某、臧某某\
        人员数量: 3\
        注册地: 益阳市赫山区秀峰东路红旗小区A5栋\
      ",
      orMember: "\
        序号: 1\
        姓名: 庄某某\
        金额: 325w\
      ",
      hurtedMember: "\
        序号: 1\
        姓名: 卜某、蔡某某\
        金额: 325w\
      ",
    },
    {
      // 当前页显示数据
      id: "ID43321433",
      name: "庄某某非法吸收公众存款案",
      type: "非法集资",
      pos: "湖南省 益阳市",
      num: 3,
      source: "微信",         // 来源
      date: 1592457007735,   // 时间戳
      money: 3250000,
      origination: "\
        人员: 庄某某、李某某、臧某某\
        人员数量: 3\
        注册地: 益阳市赫山区秀峰东路红旗小区A5栋\
      ",
      orMember: "\
        序号: 1\
        姓名: 庄某某\
        金额: 325w\
      ",
      hurtedMember: "\
        序号: 1\
        姓名: 卜某、蔡某某\
        金额: 325w\
      ",
    }],
    models:[{
      name: '“高收益”投资模型',
      description: '通常会承诺投资者以奖励、积分返利以及暴利引诱等形式给予高额回报。支持识别的非法集资类型：许诺投资者高额定期收益。模型结构：基于注意力机制的循环神经网络。',
      rules: [],
      instances: [],
    },{
      name: '编造虚假项目模型',
      description: '通过注册合法的公司或企业，打着响应国家产业政策、支持新农村建设等旗号，以订立合同为幌子，编造虚假项目，骗取社会公众投资。支持识别的非法集资类型：编造虚假扩大生产经营需求；编造虚假高科技开发项目；编造虚假基建类项目；编造虚假环保类项目；编造虚假新能源项目。模型结构：基于注意力机制的循环神经网络。',
      rules: [],
      instances: [],
    },{
      name: '混淆投资理财模型',
      description: '假借委托理财名义,故意混淆投资理财概念,利用电子黄金、投资基金、网络炒汇、电子商务等新名词迷惑社会公众。支持识别的非法集资类型：编造电子黄金概念；编造网络炒汇概念；编造入股加盟概念。模型结构：基于注意力机制的循环神经网络。',
      rules: [],
      instances: [],
    },{
      name: '传销式非法集资模型',
      description: '利用精神、人身强制或亲情诱骗，不断扩大受害群体。支持识别的非法集资类型：许诺多层级代理人收益；许诺拉人收益。模型结构：基于注意力机制的循环神经网络。',
      rules: [],
      instances: [],
    },{
      name: '发行权利凭证类模型',
      description: '通过发行股票、债券、彩票、投资基金证券或者其他债权凭证的方式向社会公众筹集资金。支持识别的非法集资类型：发行或变相发行股票；发行或变相发行债券；发行或变相发行彩票；发行或变相发行投资基金；发行或变相发行期货；发行或变相发行典当。模型结构：基于注意力机制的循环神经网络。',
      rules: [],
      instances: [],
    }],
  categories: [
    {
      id: 1,
      label: "非法集资分类体系",
      children: [
        {
          id: 2,
          label: "仿冒身份欺诈",
          children: [
            {
              id: 2,
              label: "“高收益”投资非法集资",
              children: [
                {
                  id: 3,
                  label: "许诺投资高额定期收益"
                }
              ]
            },
            {
              id: 4,
              label: "编造虚假项目非法集资诈",
              children: [
                {
                  id: 5,
                  label: "编造虚假扩大生产需求"
                },
                {
                  id: 6,
                  label: "编造虚假高科技开发项目"
                },
                {
                  id: 7,
                  label: "编造虚假基建类项目"
                },
                {
                  id: 8,
                  label: "编造虚假环保类项目"
                },
                {
                  id: 9,
                  label: "编造虚假新能源项目"
                }
              ]
            },
            {
              id: 10,
              label: "混淆投资理财非法集资",
              children: [
                {
                  id: 11,
                  label: "编造电子黄金概念"
                },
                {
                  id: 12,
                  label: "编造网络炒汇概念"
                },
                {
                  id: 13,
                  label: "编造入股加盟概念"
                }
              ]
            },
            {
              id: 14,
              label: "传销式非法集资",
              children: [
                {
                  id: 15,
                  label: "许诺多层级代理人收益"
                },
                {
                  id: 16,
                  label: "许诺拉人收益"
                }
              ]
            },
            {
              id: 17,
              label: "发行权利凭证类非法集资",
              children: [
                {
                  id: 18,
                  label: "发行或变相发行股票"
                },
                {
                  id: 19,
                  label: "发行或变相发行债券"
                },
                {
                  id: 20,
                  label: "发行或变相发行彩票"
                },
                {
                  id: 21,
                  label: "发行或变相发行投资基金"
                },
                {
                  id: 22,
                  label: "发行或变相发行期货"
                },
                {
                  id: 23,
                  label: "发行或变相发行典当"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
}