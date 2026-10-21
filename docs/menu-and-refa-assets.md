# メニューとReFaの画像・料金データ

2026-10-21更新。提供資料 `C:/Users/callt/Downloads/LINE WORKS/HP用　宣材データ.pdf` を参照。

## 反映した資料

- 1ページ: 美容ルームの料金表。表示価格は税込。ロング料金、抱っこカット、大幅なスタイルチェンジの注意書きも反映。
- 2〜4ページ: ReFa ULTRA FINE BUBBLE VEENA。期間限定の追加500円と対象メニューを反映。
- 5ページ: カフェの全メニュー・料金。6ページのチラシ持参割引は通常料金に混ぜていません。
- 6〜7ページ: 料理と店内の雰囲気を画像生成の参考に使用。今回の変更はメニューと関連画像に限定し、店舗の営業時間等は変更していません。

## 画像

組み込み image_gen ツールで生成してプロジェクトにコピーしました。各画像は資料を参考にしたAI生成画像であり、実際の料理・店舗・施術の写真やReFa公式画像そのものではありません。2026-10-21の追加依頼により、公開ページの生成画像に関する注記は削除しました。

- `src/assets/images/hair-menu-visual.png`: 美容ルームのメニュー上部。シザー・コーム・タオルのイメージ。
- `src/assets/images/cafe-main-visual.png`: カフェ上部。ミートソースパスタ・ロコモコ・ビッグサンドのイメージ。
- `src/assets/images/cafe-sweets-visual.png`: カフェ上部。Fuhsケーキ・チーズケーキ・プリン・紅茶のイメージ。
- `src/assets/images/refa-veena-equipment.png`: ReFa欄。追加添付された機器写真を参考に再生成したジェネレーター・シャンプーボウル・シャワーヘッド。
- `src/assets/images/refa-veena-visual.png`: 以前の施術画像。使用を終了し、保存用に残しています。

品名と料金は画像に焼き込まず、`src/data/shop.ts` と `MenuBoard.astro` の文字で表示します。美容ルーム17項目（うち相談2項目）、カフェ31項目、別記オプションと注記を反映しています。将来の料金変更は `shop.ts` を編集してください。

以前の `*-placeholder.png` は使用を終了しました。ファイルは初期案の保存用に残しています。

## 生成プロンプト

### hair-menu-visual

参照: page-1.png, page-7.png

Use case: photorealistic-natural. Create a landscape 3:2 editorial photograph for the hair menu section of Fuhs, a friendly small Japanese neighborhood beauty room. Input images are references only: page 1 shows the actual menu's warm cream palette and salon interior; page 7 provides salon atmosphere. Photograph a tidy close-up still life of real stainless steel hairdressing scissors, a brown comb, a folded ivory towel and a small green branch on a pale oak salon counter, softly blurred white salon mirror and shampoo bowl in the background. Warm natural daylight, inviting humble local salon rather than luxury spa, cream and muted brown palette, tactile realistic materials, clean intentional composition with the full scissors visible. No people, no text, no prices, no logos, no marketing claims. Do not reproduce the document layout. This is a supplementary menu illustration, not the written price list.

### cafe-main-visual

参照: page-5.png, page-6.png

Use case: photorealistic-natural. Landscape 3:2 editorial food photograph for Fuhs takeout cafe menu. Reference images show the actual food; faithfully use them for recipe, ingredients, color and simple serving style. A black oval takeaway plate of spaghetti generously topped with the cafe's chunky reddish orange meat and onion tomato sauce is the hero in the foreground. Behind it to the right is a black takeaway dish of loco moco: white rice, hamburger steak, sunny-side-up egg, tomato, lettuce and vivid purple cabbage, with meat sauce. At the left behind is a thick white bread sandwich cut in half, with hamburger, meat sauce, lettuce, tomato, purple cabbage and cheese. Keep portions plausible and dishes recognizable from references. Pale oak table, ivory linen, soft warm window daylight, cozy unpretentious Japanese neighborhood cafe, realistic appetizing photography. Camera at a gentle 35 degree angle, all three dishes fully inside frame, restrained styling, no extraneous foods or props. No text, labels, logos, prices, or watermarks. Do not reproduce the flyer.

### cafe-sweets-visual

参照: page-5.png, page-6.png

Use case: photorealistic-natural. Landscape 3:2 editorial dessert photograph for Fuhs neighborhood takeout cafe. Input images are references of actual cafe items, not edit targets. On a pale oak table arrange two small rustic square pieces of apple and raisin Fuhs cake with the golden dense crumb and baked apple visible, a small portion of the golden baked cheesecake shown in the references on a small cream plate, and a simple clear cup of caramel custard pudding. A cup of hot tea rests behind the desserts. Match the humble homemade baking style in the documents, no elaborate decorations, no berries, no whipped cream. Warm natural window lighting, ivory linen, soft cream and brown palette, natural realistic food photography, clean friendly editorial composition. All food fully visible, no text, no brand packaging, no prices, no logos, no watermark.

### refa-veena-visual

参照: page-2.png, page-4.png

Use case: ads-marketing. Create a new landscape 3:2 photorealistic salon shampoo treatment photograph for the ReFa ULTRA FINE BUBBLE VEENA service at a friendly Japanese local beauty room. Both input pages are visual references only, not edit targets. Reference page 2 supplies the treatment composition; page 4 shows the actual black rounded salon shower head and white ceramic shampoo bowl. A generic adult woman rests comfortably with eyes closed, head and dark wet hair supported at the neck rest of a white ceramic shampoo basin; her body is fully covered by a light cream salon cape/towel. Only the hairstylist's anatomically correct hands and navy apron are visible, holding the compact glossy black rounded shower head close over the wet hair. Show a believable gentle water stream and subtle small bubbles in the basin, not exaggerated foam. Preserve the realistic compact shower head shape shown in the source; this must be shampoo equipment, not a hair dryer, beauty roller, household shower booth, or silver wand. Soft warm daylight, warm ivory salon background, calm gentle experience, realistic clean editorial photography matching a cream/brown website. Do not reproduce a person's identity from the document. No text, added logos, price labels, efficacy claims, before-after comparison, or watermark.

