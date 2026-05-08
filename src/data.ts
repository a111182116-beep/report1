export interface RoadmapPhase {
  id: number;
  title: string;
  days: string;
  description: string;
}

export interface DayDetail {
  day: number;
  title: string;
  activities: string[];
  keyActions: string[];
  details?: string;
  transport?: string;
  items?: string[];
  safety?: string;
}

export const roadmap: RoadmapPhase[] = [
  {
    id: 1,
    title: "建立基地",
    days: "Day 1-2",
    description: "抵達清萊，完成文化巡禮與物資初步採購。"
  },
  {
    id: 2,
    title: "推進邊境",
    days: "Day 3-4",
    description: "移防清萊，進行三角地理實測與聯絡網建立。"
  },
  {
    id: 3,
    title: "正式跨國",
    days: "Day 5-6",
    description: "最後戰備縮影，準時跨越亞大橋進入緬甸。"
  }
];

export const dailySchedule: DayDetail[] = [
  {
    day: 1,
    title: "建立後勤補給基地",
    activities: [
      "機場接駁: Grab (200B) 或 CR Bus (20B)",
      "交通調整: 前往第一巴士站確認往美塞車次",
      "物資補給: 清萊夜市 (Night Bazaar) 補齊生活用品"
    ],
    keyActions: [
      "購買泰國長期通訊卡",
      "兌換泰銖現鈔"
    ]
  },
  {
    day: 2,
    title: "文化洗禮與身心備戰",
    activities: [
      "上午品嚐地標美食 Khao Soy Maesai 咖哩麵",
      "下午包雙條車造訪「白廟」與「藍廟」"
    ],
    details: "這些南泰精緻建築活力極強，是進入緬甸前最重要的文化記憶點。",
    keyActions: [
      "採買防蚊液、腸胃藥、感冒藥、個人常備藥"
    ]
  },
  {
    day: 3,
    title: "推進邊境：移防美塞",
    activities: [
      "上午參觀黑屋博物館 (黑廟)",
      "下午搭乘客運前往泰國最北端 —— 美塞 (Mae Sai)"
    ],
    transport: "Local Bus (45B) 或 Minivan (100B)",
    keyActions: [
      "複印所有證件 (護照、簽證、合約)",
      "實體影印本與數位位置管理分開存放 (安全確保)"
    ]
  },
  {
    day: 4,
    title: "地理實測：金三角區域",
    activities: [
      "從美塞包車前往金三角地理，觀察三國交界地形",
      "參觀「鴉片博物館」，了解區域歷史背景"
    ],
    keyActions: [
      "下載大其力周邊 50 公里離線地圖"
    ]
  },
  {
    day: 5,
    title: "最後整備：進入戰備狀態",
    activities: [
      "上午在「翠峰茶園」享受最後的悠閒時光",
      "下午回美塞進行最後物資清點"
    ],
    items: ["大容量行動電源", "瓶裝水", "乾糧"],
    keyActions: [
      "測試手機 2 套以上 VPN 翻牆狀況",
      "與工作聯絡人確認翌日 08:00 交接細節"
    ]
  },
  {
    day: 6,
    title: "正式跨國：進入大其力",
    activities: [
      "08:00 準時對接",
      "泰國關: 出境查驗與回遞居留書",
      "步行: 跨越「泰緬友誼大橋」(約 10 分鐘)",
      "緬甸關: 提交 e-Visa 與查驗護照",
      "對接: 確認已由緬方接應人員安全接到"
    ],
    keyActions: [
      "確認手機訊號與網路暢通"
    ]
  }
];

export const budgetData = [
  { name: "國際機票", value: 13500 },
  { name: "住宿", value: 5000 },
  { name: "交通與門票", value: 6000 },
  { name: "物資與採買", value: 3500 },
  { name: "緊急預備金", value: 2000 }
];

export const checklist = [
  { category: "文件類", items: ["護照正本", "緬甸 e-Visa (紙本x2)", "泰國免簽/簽證文件", "工作合約影本"] },
  { category: "通訊類", items: ["泰國長期卡", "大容量行動電源", "2 套以上 VPN (測試完成)"] },
  { category: "藥品類", items: ["防蚊液 (強效)", "腸胃藥", "感冒與發燒藥", "個人固定用藥"] },
  { category: "數據類", items: ["Google Maps 離線地圖 (Day 4 下載)", "雲端備份所有證件掃描檔"] }
];

export const safetySop = [
  {
    title: "通訊安全",
    content: "進入大其力後，第一時間確認區域網路或卡片訊號，並綁定位置傳送給台灣緊急聯絡人。測試網路速度是否足以支撐安全回報。"
  },
  {
    title: "接頭驗證",
    content: "跨國前當再次確認對接人姓名與聯絡方式。入境大其力後，核對接頭員身分後再上車，保持警覺直到抵達工作地點。"
  }
];
