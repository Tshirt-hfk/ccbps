
export default {
    data: [{
        // 当前页显示数据
        id: "ID43321432",
        name: "xxx诈骗事件",
        type: "微信中奖",
        pos: "河北省 承德市",
        num: 3,
        source: "微信",         // 来源
        date: 1592457007735,   // 时间戳
        money: 5000
    },
    {
        // 当前页显示数据
        id: "ID43321433",
        name: "xxx诈骗事件",
        type: "微博中奖",
        pos: "河北省 承德市",
        num: 3,
        source: "微博",         // 来源
        date: 1592457007735,   // 时间戳
        money: 50000
    },
    ],
    categories: [
        {
          id: 1,
          label: "非法集资分类体系",
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
      ],
}