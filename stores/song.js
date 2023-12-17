import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', () => {
  const songQuestions = ref([{
    id: 1,
    name: '① 多益職涯力',
    cover: 'english.webp',
    songs: [
      {
        id: 1,
        name: '你看世足嗎？(2010)',
        star: 3,
        type: '',
        question: '請問這首歌是哪一年的世界盃主題曲？',
        answer: '2010 Shakira－Waka Waka',
        isShowQuestionFirst: true,
        isAnswered: false
      }, {
        id: 2,
        name: '觀看次數 16 億 (2009)',
        star: 1,
        type: '',
        question: '請搶答歌名',
        answer: 'Linkin Park－In the end',
        isShowQuestionFirst: true,
        isAnswered: false
      }, {
        id: 3,
        name: '魔法樂園出品 (2008)',
        star: 1,
        type: '',
        question: '請問這首歌是哪部動畫電影主題曲？',
        answer: '阿拉丁',
        isShowQuestionFirst: true,
        isAnswered: false
      }, {
        id: 4,
        name: '觀看次數 14 億(2009)',
        star: 1,
        type: '',
        question: '請搶答歌手與歌名',
        answer: 'Rick Astley - Never Gonna Give You Up',
        isShowQuestionFirst: true,
        isAnswered: false
      }
    ]
  },
  {
    id: 6,
    name: '⑥ 治療師的體態改良全攻略',
    cover: 'body.webp',
    songs: [
      {
        id: 20,
        name: '下課十分鐘 (20??)',
        star: 5,
        type: '',
        question: '請完整跳出健康操',
        answer: '',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 21,
        name: '金鐘罩鐵布衫 (2001)',
        star: 3,
        type: '動作題',
        question: '請接唱並比出歌詞中的動作\n幹什麼 幹什麼 日行千里繫沙袋\n飛簷走壁莫奇怪 去去就來\n★★★★★★ ★★★★★ ★★★',
        answer: '幹什麼 幹什麼 氣沉丹田手心開\n幹什麼 幹什麼 日行千里繫沙袋\n飛簷走壁莫奇怪 去去就來\n一個馬步向前　一記左鉤拳　右鉤拳',
        isShowQuestionFirst: true,
        isAnswered: false
      }
    ]
  },
  {
    id: 2,
    name: '② 超級數字力',
    cover: 'mj.webp',
    songs: [
      {
        id: 5,
        name: '西洋夜店勁曲 (2010)',
        star: 3,
        type: '計算題',
        question: '請問以上歌詞中出現數字的總和是多少？',
        answer: '51',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 6,
        name: ' 超級變變變 (2003)',
        star: 1,
        type: '計算題',
        question: '請問以上歌詞中出現數字的總和是多少？',
        answer: '90',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 7,
        name: ' 女力駕到 (2000)',
        star: 5,
        type: '計算＋邏輯題',
        question: ' 請問最多幾人又傻又呆？',
        answer: '十個男人 七個傻 八個呆 九個壞 還有一個人人愛\n所以最多 7 人又傻又呆',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 8,
        name: ' 科技執法中 (2013)',
        star: 3,
        type: '計算題',
        question: '請問剛才一共被罰多少錢?',
        answer: '1 代 1 代 1代 1代 駕照沒帶 300 塊 大牌不潔加 300\n1 代 1 代 1代 1代 超速被罰 1600 紅燈右轉加 600\n一共被罰 2800 元',
        isShowQuestionFirst: false,
        isAnswered: false
      }
    ]
  },
  {
    id: 7,
    name: '⑦ 陳茻國文',
    cover: 'chinese.webp',
    songs: [
      {
        id: 22,
        name: '《論語》(2000)',
        star: 3,
        type: '接歌題',
        question: '孔子的中心思想是個仁 仁的表現是？\n★★★★★★ ★★★★★★ ★★★★ ★★★★★',
        answer: '孔子的中心思想是個仁 仁的表現是？\n己欲立而立人 己欲達而達人 己所不欲 他勿施於人',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 23,
        name: '歷史風土民情 (2013)',
        star: 1,
        type: '',
        question: '請回答節目名稱與歌名',
        answer: '大陸尋奇 / 江山萬里心',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 24,
        name: '跟我一起數來寶 (2011)',
        star: 1,
        type: '接歌題',
        question: '多少年我們苦練英文發音和文法\n這幾年換他們捲著舌頭學 平上去入的變化\n★★★★★★★',
        answer: '多少年我們苦練英文發音和文法\n這幾年換他們捲著舌頭學 平上去入的變化\n平平仄仄平平仄',
        isShowQuestionFirst: false,
        isAnswered: false
      }
    ]
  },
  {
    id: 3,
    name: '③ 換成日文腦！',
    cover: 'japanese.webp',
    songs: [
      {
        id: 9,
        name: '我們的青春 (1999)',
        star: 3,
        type: '',
        question: '以下歌曲是翻場版本，請說出歌名、原唱、翻唱歌手',
        answer: 'First Love、宇多田光、白冰冰',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 10,
        name: ' 拯救世界大冒險 (2004)',
        star: 3,
        type: '',
        question: '請列出這部動畫裡的三個非人角色',
        answer: '主持人專業判斷',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 11,
        name: ' 日常小品 (1990)',
        star: 1,
        type: '',
        question: '請回答作品名稱',
        answer: ' 10000',
        isShowQuestionFirst: true,
        isAnswered: false
      }, {
        id: 12,
        name: '我要當老師 (2000)',
        star: 1,
        type: '',
        question: '講出歌手的本名及藝名',
        answer: '川島茉樹代 / Makiyo',
        isShowQuestionFirst: true,
        isAnswered: false
      }
    ]
  },
  {
    id: 8,
    name: '⑧ 韓國個人色彩鑑定課',
    cover: 'color.webp',
    songs: [
      {
        id: 25,
        name: '跨代大勢團 (20XX)',
        star: 5,
        type: '',
        question: '接下來會聽到混音歌曲，請分別說出歌手及歌名。',
        answer: '2NE1 - Fire / BTS - Fire',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 26,
        name: '小辣椒 (20XX)',
        star: 3,
        type: '先題目',
        question: '接下來會聽到混音歌曲，請說出歌手及歌名。',
        answer: '4minutes - Hot Issue / HyunA - Red',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 27,
        name: '熱播韓劇 1',
        star: 1,
        type: '',
        question: '請問這是哪一部韓劇的主題曲？',
        answer: '來自星星的你 / My destiny',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 28,
        name: '熱播韓劇 2',
        star: 1,
        type: '',
        question: '請問這是哪一部韓劇的主題曲？',
        answer: '花樣男子 宮野蠻王妃',
        isShowQuestionFirst: true,
        isAnswered: false
      }
    ]
  },
  {
    id: 4,
    name: '④ 重新愛上西洋藝術',
    cover: 'art.webp',
    songs: [
      {
        id: 13,
        name: '一起趣歐洲 (2003)',
        star: 1,
        type: '接唱題',
        question: ' 那群白鴿 背對著夕陽\n★★★★★★★★★',
        answer: '那群白鴿 背對著夕陽\n那畫面太美我不敢看',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 14,
        name: '大藝術家 (2011)',
        star: 5,
        type: '歌詞內容題',
        question: '請講出上述所有藝術家的名字',
        answer: '他心裡的野獸 比畢卡索更狂野 桃花比村上隆 畫的更氾濫鮮豔\n他愛妳隨和 愛妳方便 YEAH 敢怒不敢言\n妳自我催眠 他是藝術家 妳給他色盤 去拼貼背叛\n他不是梵谷 也不是莫內 他的模特兒 卻都從來不缺少\n畢卡索、村上隆、梵谷、莫內',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 15,
        name: ' KTV情歌對唱 (2013)',
        star: 1,
        type: '接唱題',
        question: '愛要精心來雕刻 ★★★★★★★',
        answer: '愛要精心來雕刻 我是米開朗基羅',
        isShowQuestionFirst: false,
        isAnswered: false
      }
    ]
  },
  {
    id: 9,
    name: '⑨ 葉丙成的簡報表達課',
    cover: 'present.webp',
    songs: [
      {
        id: 29,
        name: '各位同學上課了 (2008)',
        star: 3,
        type: '注意課堂內容題',
        question: '請問第三堂課發生什麼事？',
        answer: '第三堂課黑糖點心已經空空',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 30,
        name: '畫一隻雞 (2012)',
        star: 1,
        type: '接唱題',
        question: '是什麼 讓我遇見這樣的你\n是什麼 讓我不再懷疑自己\n是什麼 讓我不再害怕失去\n★★★★★★★ ★★★★★★★',
        answer: '是什麼 讓我遇見這樣的你\n是什麼 讓我不再懷疑自己\n是什麼 讓我不再害怕失去\n在這茫茫人海裡 我不要變得透明',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 31,
        name: '牙牙學語 (2016)',
        star: 1,
        type: '接唱題',
        question: '我不喜歡你和別人發生的 是最曖昧最不明的隱藏\n面對面看著彼此假裝正常 是最可怕最噁心的事啊\n★★★★★★  ★★★★★\n★★★★★  ★★★★★\n★★★★★  ★★★  ★\n★★★★★★  ★★★★★\n★★★★★  ★★★★★\n★★★  ★★★★',
        answer: '我不喜歡你和別人發生的 是最曖昧最不明的隱藏\n面對面看著彼此假裝正常 是最可怕最噁心的事啊\n欸嗚欸嗚欸欸　嗚嗚嗚喔喔\n咦耶咦耶欸　嗚嗚嗚喔喔\n咦耶咦耶欸　嗚喔喔　喔\n欸嗚欸嗚欸欸　嗚嗚嗚喔喔\n咦耶咦耶欸　嗚嗚嗚喔喔\n咦耶嘿　嗚喔喔喔',
        isShowQuestionFirst: false,
        isAnswered: false
      }
    ]
  },
  {
    id: 5,
    name: '⑤ 百萬業配王的內容創作課',
    cover: 'ads.webp',
    songs: [
      {
        id: 16,
        name: '每天至少兩次 (2015)',
        star: 1,
        type: '',
        question: '以下歌曲是什麼產品的廣告歌？',
        answer: '黑人牙膏／好來牙膏',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 17,
        name: '三餐老外 (2012)',
        star: 1,
        type: '',
        question: '以下歌曲是什麼產品的廣告歌？',
        answer: '波蜜果菜汁',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 18,
        name: '我是電視兒童 (2011)',
        star: 3,
        type: '',
        question: '以下片段是哪一個新聞台的片頭？',
        answer: '三立新聞台',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 19,
        name: '到底在哪裡？ (2007)',
        star: 1,
        type: '',
        question: '以下歌曲是什麼產品的廣告歌？',
        answer: '可樂果',
        isShowQuestionFirst: true,
        isAnswered: false
      }
    ]
  },
  {
    id: 10,
    name: '⑩ 白瑜占星課',
    cover: 'star.webp',
    songs: [
      {
        id: 32,
        name: '時空異能冒險 (2009)',
        star: 1,
        type: '接唱題',
        question: '依序唸出剛剛唱出的行星名\n我穿梭 ★★ ★★ ★★ ★★ ★★ ★★',
        answer: '我穿梭金星 木星 水星 火星 土星',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 33,
        name: '緣分的宇宙 (2013)',
        star: 1,
        type: '接唱題',
        question: '你才是 綁架我的兇手\n機車後座的我 吹著風 逃離了平庸\n★★★ ★★★★★★★ ★★★',
        answer: '你才是 綁架我的兇手\n機車後座的我 吹著風 逃離了平庸\n這星球 天天有五十億人 在錯過',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 34,
        name: '麻雀變鳳凰 (2001)',
        star: 3,
        type: '先題目',
        question: '請說出原唱所有成員的名字',
        answer: '言承旭、吳建豪、朱孝天、周渝民',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 35,
        name: '偶像劇主題曲(2012)',
        star: 1,
        type: '歌詞內容題',
        question: '請說出北極星的夥伴',
        answer: '十字星',
        isShowQuestionFirst: false,
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
      type: '',
      question: '',
      answer: '',
      isShowQuestionFirst: false,
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
