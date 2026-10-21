# 仮画像の生成・差し替え

> 初期案の記録です。現在はPDFの正式メニューと、資料を参考に生成した新しい画像へ更新済みです。最新の管理情報は `menu-and-refa-assets.md` を参照してください。以下は差し替え前の状態です。

2026-10-21 / imagegen スキル・組み込み image_gen ツールで生成。
正式なメニュー・料金、ReFa公式写真が届くまでの仮画像です。
旧料金は画面と JSON-LD に掲載せず、元データを src/data/shop.ts に保存しています。

## 保存先と使用箇所

- `src/assets/images/hair-menu-placeholder.png`: 美容ルームの仮メニュー。`HairMenu.astro` で使用。
- `src/assets/images/cafe-menu-placeholder.png`: カフェの仮メニュー。`CafeMenu.astro` で使用。
- `src/assets/images/refa-placeholder.png`: ReFa掲載枠の仮イメージ。`Refa.astro` で使用。実際の製品・公式写真ではありません。

差し替え時は各コンポーネントの画像 import、alt、仮画像の注記を更新してください。
正式メニューの内容と料金を確認できたら MenuBoard.astro と更新した src/data/shop.ts でテキストメニューを再表示できます。JSON-LD の料金も確認済みデータに合わせて更新してください。

## 生成に使用したプロンプト

### hair-menu-placeholder

Use case: ads-marketing. Asset type: temporary hair salon menu illustration for Japanese local Fuhs beauty room website. Landscape 3:2 composition. Warm cream paper background, restrained dark brown and muted terracotta palette. Tasteful editorial still life of hairdressing scissors, comb, small towel and botanical sprig, arranged only along the bottom third and right side; spacious typography area. Exact text only: 'Fuhs', 'Hair Cut room.', 'SAMPLE MENU', 'カット / カラー / パーマ', '仮メニュー'. Clear highly legible simple typography, professionally designed understated neighborhood salon menu card, gentle daylight, tactile paper. No prices, no fabricated products, no tiny illegible text, no frames or website interface.

### cafe-menu-placeholder

Use case: ads-marketing. Asset type: temporary cafe menu image for Japanese Fuhs takeout cafe website. Landscape 3:2 composition. Warm cream paper background, dark brown text, muted sage and terracotta accents. Beautiful realistic editorial food photography arranged along bottom half: one small takeaway tray of meat sauce pasta, one small slice cheesecake and a clear iced coffee. Spacious upper typography. Exact text only: 'Fuhs', 'Minced meat and sweet cafe', 'SAMPLE MENU', '自家製ミートソースとスイーツ', '仮メニュー'. Clear elegant typography. No prices, no other text, no brand packaging, no webpage interface. Warm daylight and simple clean composition matching a cozy local cafe.

### refa-placeholder

Use case: product-mockup. Asset type: temporary beauty product advertising image for ReFa section on Japanese salon website. Landscape 3:2 composition. Premium editorial studio still life of an unbranded elegant white and silver hair dryer and a silver beauty roller on an ivory stone plinth with a folded white towel, subtle soft cream and champagne background. Tactile realistic materials, soft diffused daylight, clean sophisticated restrained composition, generous negative space. Entire products fully in frame. This is a conceptual placeholder, not a depiction of a specific model. No logos, no brand name printed on devices, no text, no product claims, no watermarks.

