const products = [
  {
    id: "p001",
    name: "雙重人格：大理石焦糖巴斯克",
    price: 180,
    priceOptions: {
      slice: 180
    },
    size: "6吋（切片販售）",
    desc: "結合經典原味與濃醇巧克力兩種麵糊，交織出迷人的大理石紋路。表面覆蓋厚厚的焦糖淋醬，入口即化，帶有重乳酪鹹香與焦糖絲滑。",
    storage: "冷藏 3 天，冷凍 7 天（退冰 10 分鐘口感最佳）",
    image: "img/products/p001.jpg"
  },
  {
    id: "p002",
    name: "楓糖胡桃乳酪蛋糕",
    price: 190,
    priceOptions: {
      slice: 190
    },
    size: "6吋（切片販售）",
    desc: "經典紐約重乳酪基底，搭配低溫烘烤胡桃碎與手作焦糖餅乾底。",
    storage: "冷藏保存 4 天",
    image: "img/products/p002.jpg"
  },
  {
    id: "p003",
    name: "招牌「烤焦」經典巴斯克",
    price: 160,
    priceOptions: {
      slice: 160,
      whole: 620
    },
    size: "6吋 / 8吋",
    desc: "高溫烘焙焦黑表皮，內部半熟流心，搭配特製厚焦糖醬，是店的靈魂。",
    storage: "冷藏 3–5 天",
    image: "img/products/p003.jpg"
  },
  {
    id: "p004",
    name: "怦然心動：草莓夾心巴斯克",
    price: 170,
    priceOptions: {
      slice: 170
    },
    size: "6吋（切片）",
    desc: "新鮮草莓熬成果醬拌入麵糊，果香與乳酪焦香交織。",
    storage: "冷藏 2–3 天",
    image: "img/products/p004.jpg"
  },
  {
    id: "p005",
    name: "琥珀草莓鮮奶油蛋糕",
    price: 220,
    priceOptions: {
      slice: 220,
      whole: 880
    },
    size: "4吋 / 6吋",
    desc: "戚風蛋糕夾入雙層草莓，搭配微苦焦糖醬。",
    storage: "冷藏不超過 2 天",
    image: "img/products/p005.jpg"
  },
  {
    id: "p006",
    name: "海鹽焦糖脆層巧克力蛋糕",
    price: 200,
    priceOptions: {
      slice: 200,
      whole: 750
    },
    size: "4吋 / 6吋",
    desc: "70% 巧克力蛋糕體，搭配焦糖奶油霜與法國鹽之花。",
    storage: "冷藏 3–4 天",
    image: "img/products/p006.jpg"
  },
  {
    id: "p007",
    name: "極致黑金：法芙娜巧克力慕斯",
    price: 240,
    priceOptions: {
      slice: 240
    },
    size: "3.5吋(切片)",
    desc: "鏡面巧克力外皮，內裹絲滑如綢緞的法芙娜巧克力慕斯。頂部點綴一顆象徵貴氣的焦糖金球，內餡藏有驚喜的流心焦糖。",
    storage: "嚴格冷藏，離開冷箱建議不超過 30 分鐘",
    image: "img/products/p007.jpg"
  },
  {
    id: "p008",
    name: "芒果焦糖巴斯克乳酪",
    price: 180,
    priceOptions: {
      slice: 180
    },
    size: "4吋(切片)",
    desc: "經典西班牙焦香工法，外層焦脆、內裡如冰淇淋般順滑。內餡嵌入大塊新鮮芒果，淋上濃郁手工焦糖醬，每一口都是酸甜與焦香的完美碰撞。",
    storage: "冷藏保存 3 天",
    image: "img/products/p008.jpg"
  },
  {
    id: "p009",
    name: "靜岡濃抹茶巴斯克",
    price: 170,
    priceOptions: {
      slice: 170
    },
    size: "4吋(切片)",
    desc: "選用日本靜岡抹茶粉，低溫緩慢烘焙保留抹茶鮮綠與回甘。無麩質配方，質地極度細緻，是抹茶控不容錯過的深度苦甜味。",
    storage: "冷藏保存 3 天",
    image: "img/products/p009.jpg"
  },
  {
    id: "p010",
    name: "抹茶金箔淋醬層次蛋糕",
    price: 210,
    priceOptions: {
      slice: 210
    },
    size: "高約 10cm(切片)",
    desc: "三層抹茶戚風交織特調抹茶鮮奶油，頂部淋上如熔岩般的濃郁抹茶醬，並點綴高貴金箔。層次分明，茶香優雅不膩。",
    storage: "冷藏保存 2 天",
    image: "img/products/p010.jpg"
  },
  {
    id: "p011",
    name: "伯爵巧克力流沙層次蛋糕",
    price: 200,
    priceOptions: {
      slice: 200
    },
    size: "高約 10cm(切片)",
    desc: "帶著佛手柑清香的伯爵茶戚風，搭配輕盈乳酪奶油，上方淋下濃黑巧克力醬並撒上藍色矢車菊碎。茶香與可可香氣在口中悠長縈繞。",
    storage: "冷藏保存 2 天",
    image: "img/products/p011.jpg"
  },
  {
    id: "p012",
    name: "法式經典蘋果溫蛋糕",
    price: 160,
    priceOptions: {
      slice: 160
    },
    size: "扇形大切片",
    desc: "法式鄉村家常做法，將大量蘋果片層層堆疊入餡，口感扎實濕潤。點綴新鮮紅醋栗，微酸清爽，建議稍微加熱食用風味更佳。",
    storage: "冷藏保存 4 天，食用前可回烤",
    image: "img/products/p012.jpg"
  },
  {
    id: "p013",
    name: "開心果抹茶青檸蛋糕",
    price: 220,
    priceOptions: {
      slice: 220
    },
    size: "高約 10cm(切片)",
    desc: "結合了堅果與茶香的神奇組合。抹茶蛋糕體夾入清爽青檸鮮奶油，外層抹上輕盈乳霜並覆蓋開心果碎，口感豐富，餘韻帶有檸檬皮的清香。",
    storage: "冷藏保存 2 天",
    image: "img/products/p013.jpg"
  },
  {
    id: "p014",
    name: "盛夏鮮芒雲朵蛋糕",
    price: 190,
    priceOptions: {
      slice: 190
    },
    size: "高約 10cm(切片)",
    desc: "蓬鬆如雲朵的香草戚風，夾入大量鮮甜的愛文芒果丁。頂部覆蓋亮澄澄的芒果淋醬與柔滑擠花，是最純粹的夏季滋味。",
    storage: "冷藏保存 2 天",
    image: "img/products/p014.jpg"
  },
  {
    id: "p015",
    name: "海鹽焦糖太妃層次蛋糕",
    price: 200,
    priceOptions: {
      slice: 200
    },
    size: "高約 10cm(切片)",
    desc: "特製太妃奶茶色蛋糕體，淋上誘人的厚焦糖醬並撒上法國海鹽。鹹甜交織的平衡感，讓焦糖的濃郁完全不甜膩，是一款成熟大人的甜點。",
    storage: "冷藏保存 2 天",
    image: "img/products/p015.jpg"
  }
];
