import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', () => {
  const songQuestions = ref([{
    id: 1,
    name: '① 料理萬用公式課',
    cover: 'english.webp',
    songs: [
      {
        id: 1,
        name: '夜貓族都不吃(2012)',
        star: 1,
        type: '歌詞內容題',
        question: '請問 MC HotDog 選擇要吃什麼？',
        answer: '熱狗加蛋堡',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 2,
        name: '就是 Judy (2018)',
        star: 2,
        type: '歌詞內容題',
        question: '82 年的拉菲搭配了什麼食物',
        answer: '生牛肉配上松露',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 3,
        name: '誰不認識我雙刀火雞(2010)',
        star: 3,
        type: '',
        question: '請問食神電影中，裡加了洋蔥讓評審哭的料理是什麼？',
        answer: '黯然銷魂飯',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 4,
        name: '又甜又辣(2023)',
        star: 5,
        type: '動作題',
        question: '請完整跳出舞步',
        answer: '',
        isShowQuestionFirst: false,
        isAnswered: false
      }
    ]
  },
  {
    id: 2,
    name: '② 自主健身百科',
    cover: 'mj.webp',
    songs: [
      {
        id: 1,
        name: '有多久了沒有流汗(2012)',
        star: 1,
        type: '',
        question: '請問歌詞裡的呼吸節奏？',
        answer: '一起去跑步 請不要說不\n我們的節奏 是「吸兩口再吐」',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 2,
        name: '這是你的導遊ADA(2013)',
        star: 3,
        type: '',
        question: '請問跟著老師動吃動後，明天乳酸堆積在哪裡？',
        answer: '胸肌腹肌三角肌\n二頭三頭四頭肌',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 3,
        name: '膝蓋耐力測試(2024)',
        star: 5,
        type: '動作題',
        question: '完成十六蹲者可得分',
        answer: '',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 4,
        name: '教練我想打球(1994)',
        star: 5,
        type: '',
        question: '請講出三位主角球隊成員',
        answer: '',
        isShowQuestionFirst: true,
        isAnswered: false
      }
    ]
  },
  {
    id: 3,
    name: '③ 打通日語任督二脈',
    cover: 'japanese.webp',
    songs: [
      {
        id: 1,
        name: '轉生龍鳳胎(2023)',
        star: 1,
        type: '內容題',
        question: '請問主角的偶像團體名？',
        answer: 'B 小町',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 2,
        name: '會贏哦(2023)',
        star: 4,
        type: '內容題',
        question: '請搶答歌手、歌名(拼出來)、動畫名、篇章名',
        answer: 'King Gnu - SPECIALZ\n咒術廻戦\n渋谷事変',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 3,
        name: '獻出心臟(2013)',
        star: 3,
        type: '內容題',
        question: '劇情中有九大 XX 之力，請搶答 3 種 XX 之力的類型',
        answer: '始祖巨人、進擊的巨人、超大型巨人\n盔甲巨人、女巨人、野獸巨人、車力巨人\n顎巨人、戰槌巨人',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 4,
        name: '世界上最不幸的美少女',
        star: 4,
        type: '內容題',
        question: '請說出主角們需要集合力量時的咒語\n答對一位得一萬分',
        answer: '霹靂卡霹靂拉拉，輕鬆開朗\n拍拍砰呸，溫柔優美\n帕美魯克拉魯克，樂音高亢\n噗嚕嚕噗嚕，清新爽朗\n佩魯坦佩登，舒爽明亮\n皮皮多噗力多，活潑舒暢\n噗囉林 噗哇林 微笑打開',
        isShowQuestionFirst: true,
        isAnswered: false
      }
    ]
  },
  {
    id: 4,
    name: '④ 動物英雄聯盟大進擊',
    cover: 'art.webp',
    songs: [
      {
        id: 1,
        name: '趴踢歐奈(2016)',
        star: 1,
        type: '接唱題',
        question: 'Hey 派對動物 是否麻木\n你忘了笑 還忘了能哭 本性被馴服\n花兩億年進化卻沒有進步\nHey 派對動物 無論你是\n★★★★ ★★★★ ★★★★ ★★★★',
        answer: 'Hey 派對動物 是否麻木\n你忘了笑 還忘了能哭 本性被馴服\n花兩億年進化卻沒有進步\nHey 派對動物 無論你是\n貓咪老虎 麻雀蝙蝠 都要驕傲 都要大步',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 2,
        name: '在森林撿到錢(2012)',
        star: 3,
        type: '接唱題',
        question: '那裡湖面總是澄清 那裡空氣充滿寧靜\n雪白明月照在大地 藏著妳最深處的祕密\n或許我 ★★★\n★★★★★★★★★★\n ★★★★★★★★★★★\n★★★★★★★★★',
        answer: '那裡湖面總是澄清 那裡空氣充滿寧靜\n雪白明月照在大地 藏著妳最深處的祕密\n或許我 不該問\n讓妳平靜的心再起漣漪\n只是愛妳的心超出了界限\n我想擁有妳所有一切',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 3,
        name: '火球祭嗨翻全場(2019)',
        star: 1,
        type: '歌詞內容題',
        question: '請問剛有出現哪些動物跟昆蟲？',
        answer: '七彩衣的鳥、小黑猩猩',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 4,
        name: '三審定讞(2013)',
        star: 1,
        type: '歌詞內容題',
        question: '請問剛有出現哪些城市名字？',
        answer: '東京、巴黎、米蘭、紐約',
        isShowQuestionFirst: false,
        isAnswered: false
      }
    ]
  },
  {
    id: 5,
    name: '⑤ 藝術總監角色設計實戰',
    cover: 'ads.webp',
    songs: [
      {
        id: 1,
        name: '你為什麼不問問神奇海螺呢？',
        star: 1,
        type: '接唱題',
        question: '方方黃黃伸縮自如 海綿寶寶\n★★★★★★★★★★★ ★★★★\n★★★★★★★★★★★ ★★★★',
        answer: '方方黃黃伸縮自如 海綿寶寶\n如果四處探險是你的願望 海綿寶寶\n那就敲敲甲板讓大魚開路 海綿寶寶',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 2,
        name: 'Tulaliloo ti amo',
        star: 1,
        type: '',
        question: '請回答這是什麼電影的開頭',
        answer: '小小兵',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 3,
        name: '貝倫小姐好正',
        star: 2,
        type: '',
        question: '請問這部作品的主角們是由什麼製作',
        answer: '糖\n香料\n美好的味道\n化學物 X',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 4,
        name: '可愛喇叭嘴 (1986)',
        star: 3,
        type: '',
        question: '這是什麼作品的片頭',
        answer: '企鵝家族',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 5,
        name: '品學兼優聽話孝順根本不可能 (1997)',
        star: 3,
        type: '內容題',
        question: '這是一個什麼樣的地方？',
        answer: '這是一個沒有暴力溫馨的地方',
        isShowQuestionFirst: false,
        isAnswered: false
      }
    ]
  },
  {
    id: 6,
    name: '⑥ 居家科學微運動',
    cover: 'body.webp',
    songs: [
      {
        id: 1,
        name: '台灣尚勇 (2024)',
        star: 1,
        type: '',
        question: '請問這首歌是出自哪個棒球隊？',
        answer: '統一獅',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 2,
        name: '肌肉麻瓜 (2024)',
        star: 5,
        type: '動作題',
        question: '請跳出副歌的舞蹈',
        answer: '',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 3,
        name: '能走能飛 (2017)',
        star: 4,
        type: '',
        question: '請回答有參與這首歌的歌手有誰？',
        answer: 'BCW、熊仔、大支、呂士軒、ØZI、吳卓源、Barry',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 4,
        name: '愛就像老人斑(2022)',
        star: 1,
        type: '歌手內容題',
        question: '請問原曲的歌手、歌名，以及二創的歌名為何？',
        answer: '瘦子〈妹妹〉、〈阿公〉',
        isShowQuestionFirst: true,
        isAnswered: false
      }
    ]
  },
  {
    id: 7,
    name: '⑦ 洪震宇的精準提問',
    cover: 'chinese.webp',
    songs: [
      {
        id: 1,
        name: '誰跟你中華台北(2012)',
        star: 3,
        type: '歌詞內容題',
        question: '吃是什麼、喝是什麼、生是什麼、死是什麼？',
        answer: '台灣米、台灣水、台灣人、台灣鬼',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 2,
        name: '禁止帶回飯店房間(2018)',
        star: 5,
        type: '歌詞內容題',
        question: '請問浪子為什麼要回頭？',
        answer: '',
        answerImg: 'song-answer-7-2.webp',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 3,
        name: '都別說了(2013)',
        star: 2,
        type: '',
        question: '請搶答歌⼿與歌名',
        answer: '蛋堡 - 我們都有問題',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 4,
        name: '被害者的心聲(2018)',
        star: 3,
        type: '',
        question: '請搶答歌⼿與歌名',
        answer: '李友廷 - 誰',
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
        id: 1,
        name: '你是什麼顏色的(2017)',
        star: 1,
        type: '歌詞內容題',
        question: '請問剛剛歌詞裡提到了幾種顏色？',
        answer: '8 種\nI could be red Or I could be yellow\nI could be blue Or I could be purple\nI could be green Or pink or black or white\nI could be every color you like',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 2,
        name: '讓我看透這一個人生(2000)',
        star: 3,
        type: '',
        question: '請問剛沒有什麼顏色的彩虹燈？(多選)\nA. 灰色\nB. 粉色\nC. 藍色\nD. 黑色\nE. 橘色',
        answer: 'B. 粉色, E. 橘色\n紅色紫色藍色灰色 綠色白色黑色黃色',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 3,
        name: '偶像還是 Rapper(2020)',
        star: 3,
        type: '接唱題',
        question: "要去這 要去那 要陪你去逛街\n躺沙發 躺整天 會不會簡單些\n還要角色扮演 一路玩到半夜\n出門穿情侶裝 穿你最愛的餅乾鞋\n★★★★★★★★ color\n★★★★★★★★★★ I'm in love\n★★★★★★★★★",
        answer: "要去這 要去那 要陪你去逛街\n躺沙發 躺整天 會不會簡單些\n還要角色扮演 一路玩到半夜\n出門穿情侶裝 穿你最愛的餅乾鞋\n我的世界多了好多 color\n遇見你像中樂透我發了I'm in love\n藍色天空都變粉紅色",
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 4,
        name: '天外奇蹟(2009)',
        star: 1,
        type: '',
        question: '請問剛有提到幾個顏色、並按順序說出來',
        answer: '8個\n黑、白、紅、黃、紫、綠、藍、灰',
        isShowQuestionFirst: false,
        isAnswered: false
      }
    ]
  },
  {
    id: 9,
    name: '⑨ 輕鬆入門高級感 K-POP',
    cover: 'present.webp',
    songs: [
      {
        id: 1,
        name: '大眾所盼望的一切(2023)',
        star: 1,
        type: '計算題',
        question: '請問剛出現了幾個 Cake？',
        answer: '25 個\nCake, cake, cake, cake, cake\nIt\'s a piece of cake, cake, cake, cake, cake\nCake, cake, cake, cake, cake Yeah, piece of cake, cake, cake, cake, cake\n(Ooh-wee) la-la-la, la-la-la, la-la (Ooh-wee) la-la-la, la-la-la, la\n왕 하고 먹어버려 다 yeah, like Cake, cake, cake, cake, cake',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 2,
        name: '只相信 MIDZY！ (2021)',
        star: 1,
        type: '',
        question: '請搶答歌手與歌名',
        answer: 'ITZY - In the morning',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 3,
        name: '聖結石最愛(2015)',
        star: 1,
        type: '',
        question: '跳出舞蹈即得分！',
        answer: '',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 4,
        name: 'I will it (2024)',
        star: 5,
        type: '計算題',
        question: '請問剛總共出現了幾個 U？',
        answer: "26 次\nThis time I want\nYou You You You like it's magnetic\nU U U U U U U U super 이끌림\nYou You You You like it's magnetic\nU U U U U U U U super 이끌림",
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 5,
        name: '徐佳瑩先不要 (2022)',
        star: 1,
        type: '知識題',
        question: '請問團體成員有幾人 (11月29日前)',
        answer: '5 人\nMinji、Hanni、Danielle、Haerin、Hyein',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 6,
        name: '臺南東區國際巨星 (2019)',
        star: 2,
        type: '知識題',
        question: '請問團體中有幾個日本人',
        answer: '3 人\nMomo, Sana, Mina (2019 年放棄美國籍)',
        isShowQuestionFirst: false,
        isAnswered: false
      }
    ]
  },
  {
    id: 10,
    name: '⑩ 溝通全方位關係應用課',
    cover: 'star.webp',
    songs: [
      {
        id: 1,
        name: '叫破音的不要吵(2011)',
        star: 5,
        type: '唱歌題',
        question: '請接唱副歌，有音準沒破音者可得分\n\n天平上 讓愛恨不再 動搖\n一想你就平衡不了 我關燈還是關不掉 這風暴',
        answer: '心一跳 愛就開始煎熬\n每一分 每一秒\n火在燒 燒成灰有多好\n叫思念 不要吵\n我相信我已經快要 快要把你忘掉\n跟寂寞 再和好',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 2,
        name: '穿越來穿越去(2012)',
        star: 3,
        type: '動作題',
        question: '做出 「所以暫時將妳眼睛閉了起來」的時候\n伍佰的動作',
        answer: '',
        answerImg: 'song-answer-10-2.webp',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 3,
        name: '舞林大道(2010)',
        star: 2,
        type: '',
        question: '請搶答歌⼿與歌名',
        answer: 'DANCE FLOW - 迷人的危險',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 4,
        name: '頭一歪就上去了(2013)',
        star: 5,
        type: '唱歌題',
        question: '請接唱，有音準沒破音者可得分\n我睜開雙眼 看著空白\n忘記妳對我的期待 讀完了依賴 我很快就 ★★★\n★★★★★★ ★★★★★★★★\n★★★★★★ ★★★★★★★★★',
        answer: '我睜開雙眼 看著空白\n忘記妳對我的期待 讀完了依賴 我很快就 我只能\n永遠讀著對白 讀著我給妳的傷害\n我原諒不了我 就請妳當作我已不在',
        isShowQuestionFirst: false,
        isAnswered: false
      },
      {
        id: 5,
        name: '不是只有鯨魚才會擱淺(2016)',
        star: 1,
        type: '',
        question: '請搶答歌⼿與歌名',
        answer: '康士坦的變化球 - 擱淺的人',
        isShowQuestionFirst: true,
        isAnswered: false
      }
    ]
  },
  {
    id: 11,
    name: '⑪ 景安辦公室',
    cover: 'star.webp',
    songs: [
      {
        id: 1,
        name: '冷氣壞囉 (2022)',
        star: 1,
        type: '',
        question: '請搶答歌⼿與歌名',
        answer: 'Matzka - ⽔災',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 2,
        name: '冷氣撐住 (2021)',
        star: 1,
        type: '',
        question: '請搶答歌⼿與歌名',
        answer: '楊乃文 - 靜止',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 3,
        name: '夏天在辦公室的人啊 (2017)',
        star: 1,
        type: '',
        question: '請搶答歌⼿與歌名',
        answer: 'BLACKPINK - SO HOT',
        isShowQuestionFirst: true,
        isAnswered: false
      },
      {
        id: 4,
        name: '冷氣師傅 (2011)',
        star: 1,
        type: '',
        question: '請搶答歌⼿與歌名',
        answer: '五月天 - 突然好想你 ',
        isShowQuestionFirst: true,
        isAnswered: false
      }
    ]
  }])

  const fullyAnsweredCategoryIds = computed(() => {
    return songQuestions.value
      .filter(category => category.songs.every(song => song.isAnswered))
      .map(category => category.id)
  })

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
    fullyAnsweredCategoryIds,
    getCategoryInfo,
    getSongInfo
  }
})
