import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', () => {
  const songQuestions = ref([{
    id: 1,
    name: '① 多益職涯力',
    songs: [
      {
        id: 1,
        name: '你看世足嗎？ (2010)',
        star: 3,
        question: '請問這首歌是哪一年的世界盃主題曲？',
        answer: '⑴ Shakira－Waka Waka (2010)',
        isAnswered: false
      }, {
        id: 2,
        name: '觀看次數 16 億 (2009)',
        star: 1,
        question: '聽前奏猜歌',
        answer: 'Linkin Park－In the end',
        isAnswered: false
      }, {
        id: 3,
        name: '迪士尼經典',
        star: 1,
        question: '請問這首歌是哪部動畫電影主題曲？',
        answer: '阿拉丁',
        isAnswered: false
      }, {
        id: 4,
        name: '海洋之心',
        star: 1,
        question: '聽前奏猜歌並擺出經典動作',
        answer: '',
        isAnswered: false
      }
    ]
  },
  {
    id: 6,
    name: '⑥ 治療師的體態改良全攻略',
    songs: [
      {
        id: 5,
        name: '不要再吵了',
        star: 1,
        question: '請與組員一起重現經典橋段',
        answer: '紫禁之巔',
        isAnswered: false
      },
      {
        id: 6,
        name: '隔壁是國術館',
        star: 1,
        question: '請跳出接下來歌詞中的動作',
        answer: '一個馬步向前，一記左鉤拳 右鉤拳',
        isAnswered: false
      },
      {
        id: 7,
        name: '香港樂壇「四大天王」',
        star: 3,
        question: '請跳出副歌＆比較完整得分',
        answer: '',
        isAnswered: false
      },
      {
        id: 8,
        name: '下課十分鐘',
        star: 3,
        question: '請跳出健康操',
        answer: '50000',
        isAnswered: false
      }
    ]
  },
  {
    id: 2,
    name: '② 超級數字力',
    songs: [
      {
        id: 9,
        name: '西洋夜店勁曲 (2010)',
        star: 3,
        question: '以上歌詞中出現數字的總和是多少？',
        answer: '51',
        isAnswered: false
      },
      {
        id: 10,
        name: '超級變變變 (2003)',
        star: 1,
        question: '以上歌詞中出現數字的總和是多少？',
        answer: '再見面 要你們傻了眼 無所謂正面側面都是完美弧線 再見醜小鴨再見 自卑留給昨天 女大要十八, 變 看我七十二變，18 + 72 = 90',
        isAnswered: false
      },
      {
        id: 11,
        name: '女力駕到 (2000)',
        star: 1,
        question: '請問又傻又呆的最多有幾人？',
        answer: '最多 7 人又傻又呆',
        isAnswered: false
      },
      {
        id: 12,
        name: '科技執法中 (2013)',
        star: 3,
        question: '請問剛剛一共被罰了多少錢？',
        answer: '2800',
        isAnswered: false
      }
    ]
  },
  {
    id: 7,
    name: '⑦ 陳茻國文',
    songs: [
      {
        id: 13,
        name: '《論語》(2000)',
        star: 1,
        question: `孔子的中心思想是個仁 仁的表現是？
★★★★★★ ★★★★★★ ★★★★ ★★★★★`,
        answer: `孔子的中心思想是個仁 仁的表現是？
己欲立而立人 己欲達而達人 己所不欲 他勿施於人`,
        isAnswered: false

      },
      {
        id: 14,
        name: '倪快樂嗎？ (2004)',
        star: 3,
        question: '「放肆的」重複了四句，請說出這四句歌詞',
        answer: '放肆的節奏 看你放肆的互動 看你放肆的感動 看我放肆的創作',
        isAnswered: false
      },
      {
        id: 15,
        name: '誰來我家 (2010)',
        star: 1,
        question: '請說出以上情緒形容詞',
        answer: '繼續 （貪心地 擔心著 椎心地 癡心著）做不了抉擇',
        isAnswered: false
      },
      {
        id: 16,
        name: '跟我一起數來寶 (2011)',
        star: 3,
        question: '請接唱 ★★★★★★★  ★★★★★★★  ★★★★★★  ★★★★★★★',
        answer: '有個小孩叫小杜，上街打醋又買布，買了布打了醋回頭看見鷹抓兔',
        isAnswered: false
      }
    ]
  },
  {
    id: 3,
    name: '③ 換成日文腦！',
    songs: [
      {
        id: 17,
        name: '我們的青春 (1999)',
        star: 3,
        question: '以下歌曲是翻場版本，請說出翻唱歌手、歌名及原唱',
        answer: '翻唱歌手：白冰冰、歌名：First Love、原唱：宇多田光',
        isAnswered: false
      },
      {
        id: 18,
        name: '拯救世界大冒險',
        star: 3,
        question: '請說出任意三個非人的角色',
        answer: 'butterfly 數碼寶貝',
        isAnswered: false
      },
      {
        id: 19,
        name: '要不要來首安可曲 (2007)',
        star: 1,
        question: '請接唱 ★★★★  ★★★★★★★',
        answer: '七大海洋 七彩的夢幻樂園',
        isAnswered: false
      },
      {
        id: 20,
        name: '我要當老師',
        star: 1,
        question: '講出歌手的本名',
        answer: '川島茉樹代',
        isAnswered: false
      }
    ]
  },
  {
    id: 8,
    name: '⑧ 韓國個人色彩鑑定課',
    songs: [
      {
        id: 21,
        name: '跨代大勢團 (20XX)',
        star: 3,
        question: '接下來會聽到混音歌曲，請分別說出歌手及歌名。',
        answer: '2NE1 - Fire / BTS - Fire',
        isAnswered: false
      },
      {
        id: 22,
        name: '小辣椒 (20XX)',
        star: 3,
        question: '接下來會聽到混音歌曲，請說出歌手及歌名。',
        answer: '4minutes - Hot Issue / HyunA - Red',
        isAnswered: false
      },
      {
        id: 23,
        name: '???',
        star: 3,
        question: '請問這時候的少女時代有幾個人',
        answer: '?',
        isAnswered: false
      }
    ]
  },
  {
    id: 4,
    name: '④ 重新愛上西洋藝術',
    songs: [
      {
        id: 24,
        name: '一起趣歐洲 (2003)',
        star: 1,
        question: '請接唱 ★★★★★★  ★★★★★★  ★★★★★★★★★',
        answer: '琴鍵上 透著光（彩繪的玻璃窗 裝飾著歌德式的教堂）',
        isAnswered: false
      },
      {
        id: 25,
        name: '大藝術家 (2011)',
        star: 3,
        question: '講出上述所有藝術家的名字。',
        answer: '畢卡索、村上隆、梵谷、莫內。愛他頹廢 愛他的優越他心裡的野獸 比畢卡索更狂野桃花比村上隆 畫的更氾濫鮮豔他愛妳隨和 愛妳方便 YEAH敢怒不敢言妳自我催眠 他是藝術家妳給他色盤 去拼貼背叛他不是梵谷 也不是莫內他的模特兒 卻都從來不缺少',
        isAnswered: false
      },
      {
        id: 26,
        name: '不想長大 (2005)',
        star: 1,
        question: '這首歌改編自一首古典樂，請問是哪一首？',
        answer: '莫札特－第40號交響曲 第一樂章',
        isAnswered: false
      },
      {
        id: 27,
        name: '從我那咩到你那咩一共五步 (2012)',
        star: 1,
        question: '請接唱 ★★  ★★  ★★  ★★  ★★★★★',
        answer: '祭司 神殿 征戰 弓箭 是誰的從前',
        isAnswered: false
      }
    ]
  },
  {
    id: 9,
    name: '⑨ 葉丙成的簡報表達課',
    songs: [
      {
        id: 28,
        name: '各位同學上課了 (2008)',
        star: 1,
        question: '請問第三堂課發生什麼事？',
        answer: '第三堂課黑糖點心已經空空',
        isAnswered: false
      },
      {
        id: 29,
        name: '飛輪海－出神入化',
        star: 1,
        question: '請問到底在說什麼？',
        answer: '你說 為什麼愛是恨反面？',
        isAnswered: false
      },
      {
        id: 30,
        name: '南拳媽媽-牡丹江',
        star: 1,
        question: '牡丹江彎了幾個彎，小蝦米咋了？',
        answer: '?',
        isAnswered: false
      },
      {
        id: 31,
        name: '周杰倫－愛在西元前',
        star: 1,
        question: '?',
        answer: '祭司 神殿 征戰 弓箭',
        isAnswered: false
      }
    ]
  },
  {
    id: 5,
    name: '⑤ 百萬業配王的內容創作課',
    songs: [
      {
        id: 32,
        name: '每天至少兩次 (2015)',
        star: 1,
        question: '以下歌曲是什麼產品的廣告歌？',
        answer: '黑人牙膏／好來牙膏',
        isAnswered: false
      },
      {
        id: 33,
        name: '三餐老外 (2012)',
        star: 1,
        question: '以下歌曲是什麼產品的廣告歌？',
        answer: '波蜜果菜汁',
        isAnswered: false
      },
      {
        id: 34,
        name: '我是電視兒童 (2011)',
        star: 3,
        question: '以下片段是哪一個新聞台的片頭？',
        answer: '三立新聞台',
        isAnswered: false
      },
      {
        id: 35,
        name: '到底在哪裡？ (2007)',
        star: 1,
        question: '以下歌曲是什麼產品的廣告歌？',
        answer: '可樂果',
        isAnswered: false
      }
    ]
  },
  {
    id: 10,
    name: '⑩ 白瑜占星課',
    songs: [
      {
        id: 36,
        name: '東城衛－夠愛',
        star: 1,
        question: '請依序唸出穿梭什麼？我穿梭 ★★  ★★  ★★  ★★  ★★  ★★',
        answer: '我穿梭金星 木星 水星 火星 土星',
        isAnswered: false
      },
      {
        id: 37,
        name: '阿姆斯壯',
        star: 1,
        question: '請接唱 ★★★  ★★★★★★★  ★★★',
        answer: '這星球 天天有五十億人 在錯過',
        isAnswered: false
      },
      {
        id: 38,
        name: '台灣電視劇 2001',
        star: 1,
        question: '請說出 F4 成員的名字',
        answer: '言承旭、吳建豪、朱孝天、周渝民',
        isAnswered: false
      },
      {
        id: 39,
        name: '林依晨-孤單北半球',
        star: 1,
        question: '請說出北極星的夥伴',
        answer: '飛 用光速飛到我面前 你讓我看到北極星有 ★★★ 作伴',
        isAnswered: false
      }
    ]
  }])

  function getCategoryInfo ({ categoryId }) {
    const empty = {
      id: 0,
      name: '',
      songs: []
    }
    return songQuestions.value.find(category => category.id === parseInt(categoryId)) || empty
  }

  function getSongInfo ({ categoryId, songId }) {
    const empty = {
      id: 0,
      name: '',
      star: 0,
      question: '',
      answer: '',
      isAnswered: false
    }
    return songQuestions.value
      .find(category => category.id === parseInt(categoryId)).songs
      .find(song => song.id === parseInt(songId)) || empty
  }

  return {
    songQuestions,
    getCategoryInfo,
    getSongInfo
  }
})
