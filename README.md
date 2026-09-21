# Suniverse AI 學院

線上：<https://sssunwl.github.io/aisuni/>

用真實 AI 協作專案當教材：課程（8 段學習線）、案例庫、收集箱、協作心法，加上每日 AI 新聞。

## 這個 repo 就是唯一真相來源（2026-09-21 起）

以前學院原始檔放在 `AINewsSuni/ai-academy/`，這裡只是鏡像；2026-09-21 合併後反過來，**直接改這個 repo**。

| 路徑 | 內容 |
|---|---|
| `index.html` | 學院主頁。新增案例改 `CASES` 陣列，收集箱改 `COLLECT` 陣列 |
| `cases/` | 已公開的案例深度筆記（範本與草稿不公開，留在 `AINewsSuni/ai-academy/cases/`） |
| `news/index.html` | 每日 AI 新聞頁（原 AINewsSuni 網站） |

## AI 新聞的資料從哪來

新聞機器人仍在 `sssunwl/AINewsSuni` repo 跑（每天 09:00 HKT），產出寫進那邊的 `docs/data.json`。
`news/index.html` 直接跨站讀 `https://sssunwl.github.io/AINewsSuni/data.json`（GitHub Pages 允許跨站讀取），
所以這裡不用任何排程。舊網址 `sssunwl.github.io/AINewsSuni/` 會自動轉到 `news/`。

## 不放這裡的東西

這個 repo 是 public。付費商品（AI OS 入門包 `AINewsSuni/ai-academy/aios-starter-kit/`）與未公開草稿**不要放進來**。

## 部署

推 `main`，GitHub Pages 自動重建。
