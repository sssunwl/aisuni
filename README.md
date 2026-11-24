# Suniverse AI 學院

線上：<https://aisuni.sssuni.com/>

用真實 AI 協作專案當教材：課程（8 段學習線）、案例庫、收集箱、協作心法，加上每日 AI 新聞。

## 這個 repo 就是唯一真相來源（2026-09-21 起）

以前學院原始檔放在 `AINewsSuni/ai-academy/`，這裡只是鏡像；2026-09-21 合併後反過來，**直接改這個 repo**。

| 路徑 | 內容 |
|---|---|
| `index.html` | 首頁(便當格:今日新聞、每天一招、Prompt 卡、8 格、案例、入門包) |
| `learn/` | 學習路線 8 格(原「課程」) |
| `tips/` | 每天一招(原「協作心法」);資料 `data/tips.json`,有短片就填 `video` 欄位 |
| `prompts/` | Prompt 卡 + 收集箱;資料 `data/prompts.json`,圖放 `assets/prompts/` |
| `cases/` | 真實案例;資料 `data/cases.json`,深度筆記 `cases/*.md`(公開的才放) |
| `news/index.html` | 每日 AI 新聞頁 |
| `assets/site.css`、`assets/site.js` | 全站共用樣式、導覽列、頁尾。導覽連結改 `site.js` 的 `LINKS` |

**視覺(2026-11-24 改版定案)**:糖果漫畫混合風、logo「AISUN!」(! 的點是會轉的太陽)、每格不同圓角(`.r-a`~`.r-h`)、立體厚度底影。改版預覽在 `preview/`(不進 repo)。
入門包還沒上架,首頁只寫「準備上架中」,**上架前不放價格或購買按鈕**。

## AI 新聞的資料從哪來

新聞機器人仍在 `sssunwl/AINewsSuni` repo 跑（每天 09:00 HKT），產出寫進那邊的 `docs/data.json`。
`news/index.html` 直接跨站讀 `https://sssunwl.github.io/AINewsSuni/data.json`（GitHub Pages 允許跨站讀取），
所以這裡不用任何排程。舊網址 `sssunwl.github.io/AINewsSuni/` 會自動轉到 `news/`。

## 不放這裡的東西

這個 repo 是 public。付費商品（AI OS 入門包 `AINewsSuni/ai-academy/aios-starter-kit/`）與未公開草稿**不要放進來**。

## 部署

推 `main`，GitHub Pages 自動重建。

## 2026-11-19 進度

收集箱新增 5 張重寫 Prompt 卡，涵蓋實拍×抽象幾何、旅行磁鐵、蠟筆插畫、膠片人像與表裏擦除網頁（`aab7d5f`）；其中前 4 張已換上自家實測效果圖（`685ed2a`），表裏擦除網頁仍未補自家效果圖。

這批仍是靈感索引，不等於正式課程。下一步應補齊表裏擦除範例，並從實際專案使用結果整理輸入素材、失敗案例與適用邊界，再決定哪些卡片升格為案例或課程單元。

## 2026-11-01 進度

收集箱分兩次加入 14 張可重用 Prompt 卡，涵蓋壓克力記憶地圖、字體海報、voxel 場景、角色設定表、場景格、復古印刷與汽車封面等方向；每張均配自家生成效果圖，而非直接搬用參考貼文圖片。相關提交為 `390da73`、`abef508`，已在 `main`。

這批內容目前是靈感與 Prompt 索引，不代表已整理成正式課程。下一步應從實際專案使用結果挑選可教學的卡片，補上輸入素材、失敗案例與適用邊界，再決定是否升格為案例或課程單元。
