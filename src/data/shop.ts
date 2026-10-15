export interface MenuItem {
	name: string;
	price: string;
}

export interface MenuGroup {
	label: string;
	items: MenuItem[];
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

export const hairMenu: MenuGroup[] = [
	{
		label: 'カット',
		items: [
			{ name: 'カットのみ（ドライ付き）', price: '1,500' },
			{ name: 'シャンプー・カット・ブロー', price: '3,000' },
			{ name: 'シャンプーのみ', price: '1,000' },
			{ name: 'ブローセットのみ', price: '1,000' },
			{ name: '丸刈りカット', price: '500' },
		],
	},
	{
		label: 'カラー・パーマ',
		items: [
			{ name: 'カラー（リタッチ）', price: '3,000' },
			{ name: '全体カラー', price: '4,000' },
			{ name: 'カット＋カラー（リタッチ）', price: '4,500' },
			{ name: '全体カラー＋カット', price: '5,000' },
			{ name: 'マニキュア（リタッチ）', price: '3,000' },
			{ name: 'マニキュア＋カット（リタッチ）', price: '4,500' },
			{ name: 'パーマ（シャンプー・カット・ブロー）', price: '5,000' },
			{ name: 'トリートメント', price: '1,000' },
		],
	},
];

export const hairNotes = [
	'前髪カットは 500円です',
	'ロングは +300円、超ロングは +500円です',
	'その他のご注文も承ります',
];

export const cafeMenu: MenuGroup[] = [
	{
		label: 'お食事',
		items: [
			{ name: 'ミートソースパスタ', price: '500' },
			{ name: 'ミートソースのみ', price: '300' },
			{ name: 'にいナチョス', price: '400' },
			{ name: 'Fuhsビッグサンド', price: '480' },
			{ name: 'Fuhsサンド', price: '350' },
			{ name: 'フルーツサンド', price: '250' },
			{ name: 'ミニミートパイ', price: '180' },
		],
	},
	{
		label: 'スイーツ',
		items: [
			{ name: 'Fuhsケーキ（3個入り）', price: '300' },
			{ name: 'チーズケーキ', price: '280' },
			{ name: 'コーヒージェリー', price: '250' },
			{ name: 'ふっきー（10枚）', price: '300' },
			{ name: 'パウンドケーキ', price: '300' },
			{ name: 'チョコスティックパイ', price: '180' },
			{ name: 'アイスクリーム', price: '150' },
		],
	},
	{
		label: 'ドリンク',
		items: [
			{ name: 'ホットコーヒー', price: '200' },
			{ name: 'アイスコーヒー', price: '300' },
			{ name: 'はちみつ紅茶', price: '300' },
			{ name: 'アイスはちみつ紅茶', price: '400' },
			{ name: 'ルイボスティー', price: '300' },
			{ name: 'ジュース', price: '150' },
		],
	},
];

export const cafeNotes = ['その他のご注文も承ります'];
