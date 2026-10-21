export interface MenuItem {
	name: string;
	price: string;
	description?: string;
}

export interface MenuGroup {
	label: string;
	items: MenuItem[];
	note?: string;
}

export const shop = {
	name: '==Fuhs==',
	tel: '042-733-3811',
	telHref: 'tel:0427333811',
	postal: '〒195-0061',
	address: '東京都町田市鶴川２丁目１４−１３',
	place: '鶴川団地セントラル商店街',
	landmark: '横浜銀行前',
	station: '小田急線 鶴川駅',
	walk: '徒歩25分',
	hours: '9:30〜気まぐれ時間',
	reception: '17:00',
	closed: '毎週月曜日',
	instagram: 'https://www.instagram.com/fuhs_hair_cafe/?hl=ja',
	instagramHandle: '@FUHS_HAIR_CAFE',
	map:
		'https://www.google.com/maps/search/?api=1&query=' +
		encodeURIComponent('東京都町田市鶴川2丁目14-13'),
};

// Source: HP用 宣材データ.pdf, page 1 (provided 2026-10-21).
export const hairMenu: MenuGroup[] = [
	{
		label: 'カット',
		items: [
			{ name: 'カットのみ（ドライ付き）', price: '1,800' },
			{ name: 'カット＋シャンプー', price: '3,000' },
			{ name: '丸刈り', price: '600' },
			{ name: '前髪カット', price: '800' },
		],
		note: 'ロング料金 ＋500円。大幅なスタイルチェンジの場合は、追加料金をいただく場合もあります。',
	},
	{
		label: 'カラー・マニキュア',
		items: [
			{ name: 'リタッチカラー', price: '3,500' },
			{ name: 'リタッチマニキュア', price: '3,500' },
			{ name: '全体カラー／マニキュア', price: '4,500' },
		],
		note: 'ロング料金 ＋500円。',
	},
	{
		label: 'セット割引・パーマ',
		items: [
			{ name: 'カット＋カラー（リタッチ）', price: '5,000' },
			{ name: 'カット＋マニキュア（リタッチ）', price: '5,000' },
			{ name: 'カット＋カラー／マニキュア（全体）', price: '6,000' },
			{ name: 'パーマ', price: '6,000', description: 'カット・シャンプー・ブロー付き' },
			{ name: '部分パーマ', price: '5,500', description: 'カット・シャンプー・ブロー付き' },
		],
		note: 'ロング料金 ＋500円。',
	},
	{
		label: 'その他',
		items: [
			{ name: 'シャンプー', price: '1,200' },
			{ name: 'ブロー', price: '1,200' },
			{ name: 'トリートメント', price: '1,200' },
			{ name: 'スタイルチェンジ', price: 'ご相談ください' },
			{ name: 'その他オプションなど追加', price: 'ご相談ください' },
		],
	},
];

export const hairNotes = [
	'抱っこカットの場合は、追加500円です。',
	'その他ご不明点などございましたら、お気軽にご相談ください。',
];

// Source: HP用 宣材データ.pdf, page 5. Page 6 flyer coupons are not menu prices.
export const cafeMenu: MenuGroup[] = [
	{
		label: 'ごはん・パスタ',
		items: [
			{ name: 'ミートソースパスタ（普通）', price: '600' },
			{ name: 'ミートソースのみ', price: '380', description: '冷凍・常温' },
			{ name: 'ロコモコ（普通）', price: '850', description: '数量限定。土日祝日は前々日に注文のご相談をお願いします。' },
			{ name: 'タコライス', price: '800' },
			{ name: 'キーマカレー', price: '750' },
			{ name: 'Fuhsスープ', price: '400', description: 'トッピング・冷製スープもあります。' },
		],
	},
	{
		label: 'サンド・ミートパイ',
		items: [
			{ name: 'ビッグサンド（1個）', price: '480' },
			{ name: 'ビッグサンド（2個セット）', price: '850' },
			{ name: 'ホットドッグ', price: '480' },
			{ name: 'ミートドッグ', price: '480', description: '自家製ミートソースパスタ入り' },
			{ name: 'Fuhsサンド（各種）', price: '450', description: 'ミートソース・たまご・ハムなど' },
			{ name: 'ミニミートパイ（1つ）', price: '230' },
			{ name: 'ミニミートパイ（2つ）', price: '450' },
		],
	},
	{
		label: 'スイーツ',
		items: [
			{ name: 'Fuhsケーキ（1袋2つ入り）', price: '300', description: 'りんごとレーズン。チョコとバナナは予約限定。' },
			{ name: 'チーズケーキ', price: '350' },
			{ name: '麻花', price: '300' },
			{ name: 'プリン', price: '350' },
			{ name: 'コーヒーゼリー', price: '300' },
			{ name: 'アイスクリーム', price: '200' },
			{ name: 'アフォガート', price: '300' },
			{ name: 'スティックラスク', price: '150' },
		],
		note: '各種ケーキのホール注文を承ります。',
	},
	{
		label: 'ドリンク',
		items: [
			{ name: 'TEARTH紅茶（各種・HOT）', price: '300' },
			{ name: 'TEARTH紅茶（各種・ICE）', price: '400' },
			{ name: 'コーヒー（HOT）', price: '300' },
			{ name: 'コーヒー（ICE）', price: '400' },
			{ name: 'カフェラテ（HOT）', price: '380' },
			{ name: 'カフェラテ（ICE）', price: '480' },
			{ name: 'くっく紅茶（HOT）', price: '450' },
			{ name: 'くっく紅茶（ICE）', price: '550' },
			{ name: 'ジュース', price: '250', description: 'リンゴ・オレンジ・カルピス・ラムネ・スプライト・Dr.Pepper' },
			{ name: 'ジュース（ミニ缶）・お茶', price: '150', description: 'コーラ・ファンタなど' },
		],
		note: 'アイスフロートは各種＋50円。TEARTH紅茶は、はちみつ紅茶もおすすめです。',
	},
];

export const refa = {
	name: 'ReFa ULTRA FINE BUBBLE VEENA',
	optionPrice: '500',
	period: '期間限定',
	services: ['シャンプー', 'トリートメント', 'カラー', 'マニキュア', 'パーマ'],
};
