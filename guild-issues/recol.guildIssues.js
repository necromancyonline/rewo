( function () {
	"use strict";
	var list = [],
		DATE   = 0,
		ITEM   = 1,
		PIECES = 2,
		LINEUP = 3,
		ISSUES = {
			"グランドキャンプ": "grandcamp",
			"高級修理道具": "delux-repair-tool",
			"ブルーポーション": "blue-potion",
			"レッドポーション": "red-portion",
			"癒しの香": "healing-incense",
			"高級レッドポーション": "high-red-potion",
			"ラッキーコイン": "luckycoin",
			"鑑定眼": "eye-of-identification",
			"高級ブルーポーション": "high-blue-potion",
			"最高級レッドポーション": "super-high-red-potion",
		},
		SPECIAL = {
			"very-goods-1st": {
				"レッドポーション": "vg1-01",
				"高級レッドポーション": "vg1-02",
				"最高級レッドポーション": "vg1-03",
				"高級ブルーポーション": "vg1-04",
				"鍛錬費用半額チケット": "vg1-05",
				"鍛錬費用無料チケット": "vg1-06",
				"ラッキーコイン": "vg1-07",
				"癒しの香": "vg1-08",
				"エナジーメイト (STR)": "vg1-09",
				"エナジーメイト (VIT)": "vg1-10",
				"エナジーメイト (DEX)": "vg1-11",
				"エナジーメイト (AGI)": "vg1-12",
				"エナジーメイト (INT)": "vg1-13",
				"エナジーメイト (PIE)": "vg1-14",
				"最高級ロイヤル武器鍛錬石": "vg1-15",
				"特級ロイヤル武器鍛錬石": "vg1-16",
				"最高級ロイヤル防具鍛錬石": "vg1-17",
				"特級ロイヤル防具鍛錬石": "vg1-18",
				"最高級ロイヤル装飾鍛錬石": "vg1-19",
				"特級ロイヤル装飾鍛錬石": "vg1-20",
				"あの伝説の飲み物": "vg1-21"
			},
			"very-goods-2nd": {
				"レッドポーション": "vg2-01",
				"高級レッドポーション": "vg2-02",
				"最高級レッドポーション": "vg2-03",
				"高級ブルーポーション": "vg2-04",
				"鍛錬費用半額チケット": "vg2-05",
				"鍛錬費用無料チケット": "vg2-06",
				"ラッキーコイン": "vg2-07",
				"癒しの香": "vg2-08",
				"エナジーメイト (STR)": "vg2-09",
				"エナジーメイト (VIT)": "vg2-10",
				"エナジーメイト (DEX)": "vg2-11",
				"エナジーメイト (AGI)": "vg2-12",
				"エナジーメイト (INT)": "vg2-13",
				"エナジーメイト (PIE)": "vg2-14",
				"最高級ロイヤル武器鍛錬石": "vg2-15",
				"特級ロイヤル武器鍛錬石": "vg2-16",
				"最高級ロイヤル防具鍛錬石": "vg2-17",
				"特級ロイヤル防具鍛錬石": "vg2-18",
				"最高級ロイヤル装飾鍛錬石": "vg2-19",
				"特級ロイヤル装飾鍛錬石": "vg2-20",
				"経験会得の秘伝書（60分）": "vg2-21",
				"経験会得の極意書（30分）": "vg2-22",
				"バッジスの強化保護石": "vg2-23",
				"ドルクの書簡": "vg2-24",
				"ガーディアンバッグ": "vg2-25",
				"あの伝説の飲み物": "vg2-26"
			},
			"summer-goods-2015": {
				"レッドポーション": "sm15-01",
				"高級レッドポーション": "sm15-02",
				"最高級レッドポーション": "sm15-03",
				"高級ブルーポーション": "sm15-04",
				"鍛錬費用半額チケット": "sm15-05",
				"鍛錬費用無料チケット": "sm15-06",
				"ラッキーコイン": "sm15-07",
				"癒しの香": "sm15-08",
				"最高級ロイヤル武器鍛錬石": "sm15-09",
				"特級ロイヤル武器鍛錬石": "sm15-10",
				"最高級ロイヤル防具鍛錬石": "sm15-11",
				"特級ロイヤル防具鍛錬石": "sm15-12",
				"最高級ロイヤル装飾鍛錬石": "sm15-13",
				"特級ロイヤル装飾鍛錬石": "sm15-14",
				"高級万能剥離剤": "sm15-15",
				"ドルクの書簡": "sm15-16",
				"経験会得の秘伝書（60分）": "sm15-17",
				"経験会得の極意（30分）": "sm15-18",
				"心魂獲得の秘伝書（60分）": "sm15-19",
				"金運招来の秘伝書（60分）": "sm15-20",
				"パートナースフィア": "sm15-21",
				"バッジスの強化保護石": "sm15-22",
				"ガーディアンバッグ": "sm15-23",
				"あの伝説の飲み物": "sm15-24",
				"ハーサントフラッペ【イチゴ】": "sm15-25",
				"ハーサントフラッペ【ブルーハワイ】": "sm15-26",
				"ハーサントフラッペ【メロン】": "sm15-27",
				"ハーサントフラッペ【レモン】": "sm15-28",
				"ハーサントフラッペ【ミルク】": "sm15-29",
				"ハーサントフラッペ【グレープ】": "sm15-30",
				"ディメントアイス【白き貴婦人】": "sm15-31",
				"ディメントアイス【秘匿の桃源郷】": "sm15-32",
				"ディメントアイス【甘美な誘惑】": "sm15-33"
			},
			"4th-anniv-goods": {
				"レッドポーション": "4anniv-01",
				"高級レッドポーション": "4anniv-02",
				"最高級レッドポーション": "4anniv-03",
				"高級ブルーポーション": "4anniv-04",
				"ラッキーコイン": "4anniv-07",
				"癒しの香": "4anniv-08",
				"最高級ロイヤル武器鍛錬石": "4anniv-09",
				"特級ロイヤル武器鍛錬石": "4anniv-10",
				"最高級ロイヤル防具鍛錬石": "4anniv-11",
				"特級ロイヤル防具鍛錬石": "4anniv-12",
				"最高級ロイヤル装飾鍛錬石": "4anniv-13",
				"特級ロイヤル装飾鍛錬石": "4anniv-14",
				"鍛錬費用半額チケット": "4anniv-05",
				"鍛錬費用無料チケット": "4anniv-06",
				"高級万能剥離剤": "4anniv-15",
				"ドルクの書簡": "4anniv-16",
				"経験会得の秘伝書（60分）": "4anniv-17",
				"経験会得の極意（30分）": "4anniv-18",
				"心魂獲得の秘伝書（60分）": "4anniv-19",
				"金運招来の秘伝書（60分）": "4anniv-20",
				"パートナースフィア【討伐】": "4anniv-21",
				"バッジスの強化保護石": "4anniv-22",
				"ガーディアンバッグ": "4anniv-23",
				"あの伝説の飲み物": "4anniv-24",
				"天賦開花の秘伝書（60分）": "4anniv-25",
				"エンチャントスフィア": "4anniv-26",
				"ポリスマタ銅貨袋【小】": "4anniv-27",
				"付与の魔水晶": "4anniv-28",
				"継承の魔水晶": "4anniv-29",
				"全能の魔水晶": "4anniv-30",
				"付与の上級魔水晶": "4anniv-31",
				"継承の上級魔水晶": "4anniv-32",
				"全能の上級魔水晶": "4anniv-33"
			},
			"very-goods-3rd": {
				"レッドポーション": "vg3-01",
				"高級レッドポーション": "vg3-02",
				"最高級レッドポーション": "vg3-03",
				"高級ブルーポーション": "vg3-04",
				"ラッキーコイン": "vg3-05",
				"癒しの香": "vg3-06",
				"最高級ロイヤル武器鍛錬石": "vg3-07",
				"特級ロイヤル武器鍛錬石": "vg3-08",
				"最高級ロイヤル防具鍛錬石": "vg3-09",
				"特級ロイヤル防具鍛錬石": "vg3-10",
				"最高級ロイヤル装飾鍛錬石": "vg3-11",
				"特級ロイヤル装飾鍛錬石": "vg3-12",
				"鍛錬費用半額チケット": "vg3-13",
				"鍛錬費用無料チケット": "vg3-14",
				"ドルクの書簡": "vg3-15",
				"高級万能剥離剤": "vg3-16",
				"経験会得の極意書（30分）": "vg3-17",
				"金運招来の秘伝書（60分）": "vg3-18",
				"経験会得の秘伝書（60分）": "vg3-19",
				"心魂獲得の秘伝書（60分）": "vg3-20",
				"経験会得の絶技書（60分）": "vg3-21",
				"天賦開花の秘伝書（60分）": "vg3-22",
				"黄泉送りの指南書": "vg3-23",
				"亜人殺しの指南書": "vg3-24",
				"元素砕きの指南書": "vg3-25",
				"不死殺しの指南書": "vg3-26",
				"獣殺しの指南書": "vg3-27",
				"樹根殺しの指南書": "vg3-28",
				"獣人殺しの指南書": "vg3-29",
				"悪魔祓いの指南書": "vg3-30",
				"神獣殺しの指南書": "vg3-31",
				"龍殺しの指南書": "vg3-32",
				"精霊殺しの指南書": "vg3-33",
				"ソウル・リベレーター": "vg3-34",
				"ただのスクロール": "vg3-35",
				"良品質のスクロール": "vg3-36",
				"光り輝くスクロール": "vg3-37",
				"経験の秘薬": "vg3-38",
				"パートナースフィア【討伐】": "vg3-39",
				"バッジスの強化保護石": "vg3-40",
				"ガーディアンバッグ": "vg3-41",
				"あの伝説の飲み物": "vg3-42"
			},
			"summer-goods-2016": {
				"レッドポーション": "sm16-01",
				"高級レッドポーション": "sm16-02",
				"最高級レッドポーション": "sm16-03",
				"高級ポップポーション": "sm16-04",
				"最高級ポップポーション": "sm16-05",
				"鍛錬費用半額チケット": "sm16-06",
				"鍛錬費用無料チケット": "sm16-07",
				"癒しの香": "sm16-08",
				"ディメントアイス【白き貴婦人】": "sm16-09",
				"ディメントアイス【秘匿の桃源郷】": "sm16-10",
				"ディメントアイス【甘美な誘惑】": "sm16-11",
				"特級ロイヤル武器鍛錬石": "sm16-12",
				"特級ロイヤル防具鍛錬石": "sm16-13",
				"特級ロイヤル装飾鍛錬石": "sm16-14",
				"ラッキーコイン": "sm16-15",
				"ハーサントフラッペ【イチゴ】": "sm16-16",
				"ハーサントフラッペ【ブルーハワイ】": "sm16-17",
				"ハーサントフラッペ【メロン】": "sm16-18",
				"ハーサントフラッペ【レモン】": "sm16-19",
				"ハーサントフラッペ【ミルク】": "sm16-20",
				"ハーサントフラッペ【グレープ】": "sm16-21",
				"経験会得の奥義書（30分）": "sm16-22",
				"経験会得の絶技書（60分）": "sm16-23",
				"相棒円熟の奥義書（30分）": "sm16-24",
				"天賦開花の奥義書（30分）": "sm16-25",
				"ドルクの書簡": "sm16-26",
				"良品質のスクロール": "sm16-27",
				"光り輝くスクロール": "sm16-28",
				"ハーサント武器鍛錬石WP-G1": "sm16-29",
				"ハーサント防具鍛錬石AR-G1": "sm16-30",
				"ハーサント装飾鍛錬石AC-G1": "sm16-31",
				"バッジスの強化保護石": "sm16-32",
				"あの伝説の飲み物": "sm16-33",
				"パートナースフィア【絆】": "sm16-34",
				"ガーディアンバッグ": "sm16-35"
			},
			"anniv-goods": {
				"アニバーサリーメダル【撃】": "anniv-01",
				"アニバーサリーメダル【護】": "anniv-02",
				"鍛錬費用半額チケット": "anniv-03",
				"鍛錬費用無料チケット": "anniv-04",
				"レッドポーション": "anniv-05",
				"高級レッドポーション": "anniv-06",
				"最高級レッドポーション": "anniv-07",
				"高級ポップポーション": "anniv-08",
				"最高級ポップポーション": "anniv-09",
				"素敵なハート": "anniv-10",
				"フレンドオーブ": "anniv-11",
				"SG回復サプリ": "anniv-12",
				"パートナースフィア【絆】": "anniv-13",
				"癒しの香": "anniv-14",
				"ドルクの書簡": "anniv-15",
				"ラッキーコイン": "anniv-16",
				"経験会得の奥義書（30分）": "anniv-17",
				"経験会得の絶技書（60分）": "anniv-18",
				"相棒円熟の奥義書（30分）": "anniv-19",
				"天賦開花の奥義書（30分）": "anniv-20",
				"特級ロイヤル武器鍛錬石": "anniv-21",
				"特級ロイヤル防具鍛錬石": "anniv-22",
				"特級ロイヤル装飾鍛錬石": "anniv-23",
				"良品質のスクロール": "anniv-24",
				"豪華な宝石箱【盤】": "anniv-25",
				"豪華な宝石箱【撃】": "anniv-26",
				"ディメント褒章（1日）": "anniv-27",
				"ハーサント褒章（1日）": "anniv-28",
				"冒険勲章（1日）": "anniv-29",
				"あの伝説の飲み物": "anniv-30",
				"ハーサント武器鍛錬石WP-G1": "anniv-31",
				"ハーサント防具鍛錬石AR-G1": "anniv-32",
				"ハーサント装飾鍛錬石AC-G1": "anniv-33",
				"光り輝くスクロール": "anniv-34",
				"ガーディアンバッグ": "anniv-35",
				"強化保護石": "anniv-36",
				"バッジスの強化保護石": "anniv-37",
				"レントンの強化保護石": "anniv-38"
			},
			"final-goods": {
				"バーサクコイン": "final-01",
				"ストロングコイン": "final-02",
				"最高級ポップポーション": "final-03",
				"最高級レッドポーション": "final-04",
				"癒しの香": "final-05",
				"ドルクの書簡": "final-06",
				"パートナースフィア【絆】": "final-07",
				"光り輝くスクロール": "final-08",
				"ガーディアンバッグ": "final-09",
				"あの伝説の飲み物": "final-10",
				"経験会得の奥義書（30分）": "final-11",
				"経験会得の絶技書（60分）": "final-12",
				"最高級ロイヤル武器鍛錬石": "final-13",
				"最高級ロイヤル防具鍛錬石": "final-14",
				"最高級ロイヤル装飾鍛錬石": "final-15",
				"特級ロイヤル武器鍛錬石": "final-16",
				"特級ロイヤル防具鍛錬石": "final-17",
				"特級ロイヤル装飾鍛錬石": "final-18",
				"ハーサント武器鍛錬石WP-G1": "final-19",
				"ハーサント防具鍛錬石AR-G1": "final-20",
				"ハーサント装飾鍛錬石AC-G1": "final-21",
				"バッジスの強化保護石": "final-22",
				"レントンの強化保護石": "final-23"
			},
			counts: {
				"very-goods-1st-n":    0,
				"very-goods-2nd-n":    0,
				"summer-goods-2015-n": 0,
				"4th-anniv-goods-n":   0,
				"very-goods-3rd-n":    0,
				"summer-goods-2016-n": 0,
				"anniv-goods-n":       0,
				"final-goods-n":       0,

				"vg1-01": 0,
				"vg1-02": 0,
				"vg1-03": 0,
				"vg1-04": 0,
				"vg1-05": 0,
				"vg1-06": 0,
				"vg1-07": 0,
				"vg1-08": 0,
				"vg1-09": 0,
				"vg1-10": 0,
				"vg1-11": 0,
				"vg1-12": 0,
				"vg1-13": 0,
				"vg1-14": 0,
				"vg1-15": 0,
				"vg1-16": 0,
				"vg1-17": 0,
				"vg1-18": 0,
				"vg1-19": 0,
				"vg1-20": 0,
				"vg1-21": 0,

				"vg2-01": 0,
				"vg2-02": 0,
				"vg2-03": 0,
				"vg2-04": 0,
				"vg2-05": 0,
				"vg2-06": 0,
				"vg2-07": 0,
				"vg2-08": 0,
				"vg2-09": 0,
				"vg2-10": 0,
				"vg2-11": 0,
				"vg2-12": 0,
				"vg2-13": 0,
				"vg2-14": 0,
				"vg2-15": 0,
				"vg2-16": 0,
				"vg2-17": 0,
				"vg2-18": 0,
				"vg2-19": 0,
				"vg2-20": 0,
				"vg2-21": 0,
				"vg2-22": 0,
				"vg2-23": 0,
				"vg2-24": 0,
				"vg2-25": 0,
				"vg2-26": 0,

				"sm15-01": 0,
				"sm15-02": 0,
				"sm15-03": 0,
				"sm15-04": 0,
				"sm15-05": 0,
				"sm15-06": 0,
				"sm15-07": 0,
				"sm15-08": 0,
				"sm15-09": 0,
				"sm15-10": 0,
				"sm15-11": 0,
				"sm15-12": 0,
				"sm15-13": 0,
				"sm15-14": 0,
				"sm15-15": 0,
				"sm15-16": 0,
				"sm15-17": 0,
				"sm15-18": 0,
				"sm15-19": 0,
				"sm15-20": 0,
				"sm15-21": 0,
				"sm15-22": 0,
				"sm15-23": 0,
				"sm15-24": 0,
				"sm15-25": 0,
				"sm15-26": 0,
				"sm15-27": 0,
				"sm15-28": 0,
				"sm15-29": 0,
				"sm15-30": 0,
				"sm15-31": 0,
				"sm15-32": 0,
				"sm15-33": 0,

				"4anniv-01": 0,
				"4anniv-02": 0,
				"4anniv-03": 0,
				"4anniv-04": 0,
				"4anniv-07": 0,
				"4anniv-08": 0,
				"4anniv-09": 0,
				"4anniv-10": 0,
				"4anniv-11": 0,
				"4anniv-12": 0,
				"4anniv-13": 0,
				"4anniv-14": 0,
				"4anniv-05": 0,
				"4anniv-06": 0,
				"4anniv-15": 0,
				"4anniv-16": 0,
				"4anniv-17": 0,
				"4anniv-18": 0,
				"4anniv-19": 0,
				"4anniv-20": 0,
				"4anniv-21": 0,
				"4anniv-22": 0,
				"4anniv-23": 0,
				"4anniv-24": 0,
				"4anniv-25": 0,
				"4anniv-26": 0,
				"4anniv-27": 0,
				"4anniv-28": 0,
				"4anniv-29": 0,
				"4anniv-30": 0,
				"4anniv-31": 0,
				"4anniv-32": 0,
				"4anniv-33": 0,

				"vg3-01": 0,
				"vg3-02": 0,
				"vg3-03": 0,
				"vg3-04": 0,
				"vg3-05": 0,
				"vg3-06": 0,
				"vg3-07": 0,
				"vg3-08": 0,
				"vg3-09": 0,
				"vg3-10": 0,
				"vg3-11": 0,
				"vg3-12": 0,
				"vg3-13": 0,
				"vg3-14": 0,
				"vg3-15": 0,
				"vg3-16": 0,
				"vg3-17": 0,
				"vg3-18": 0,
				"vg3-19": 0,
				"vg3-20": 0,
				"vg3-21": 0,
				"vg3-22": 0,
				"vg3-23": 0,
				"vg3-24": 0,
				"vg3-25": 0,
				"vg3-26": 0,
				"vg3-27": 0,
				"vg3-28": 0,
				"vg3-29": 0,
				"vg3-30": 0,
				"vg3-31": 0,
				"vg3-32": 0,
				"vg3-33": 0,
				"vg3-34": 0,
				"vg3-35": 0,
				"vg3-36": 0,
				"vg3-37": 0,
				"vg3-38": 0,
				"vg3-39": 0,
				"vg3-40": 0,
				"vg3-41": 0,
				"vg3-42": 0,

				"sm16-01": 0,
				"sm16-02": 0,
				"sm16-03": 0,
				"sm16-04": 0,
				"sm16-05": 0,
				"sm16-06": 0,
				"sm16-07": 0,
				"sm16-08": 0,
				"sm16-09": 0,
				"sm16-10": 0,
				"sm16-11": 0,
				"sm16-12": 0,
				"sm16-13": 0,
				"sm16-14": 0,
				"sm16-15": 0,
				"sm16-16": 0,
				"sm16-17": 0,
				"sm16-18": 0,
				"sm16-19": 0,
				"sm16-20": 0,
				"sm16-21": 0,
				"sm16-22": 0,
				"sm16-23": 0,
				"sm16-24": 0,
				"sm16-25": 0,
				"sm16-26": 0,
				"sm16-27": 0,
				"sm16-28": 0,
				"sm16-29": 0,
				"sm16-30": 0,
				"sm16-31": 0,
				"sm16-32": 0,
				"sm16-33": 0,
				"sm16-34": 0,
				"sm16-35": 0,

				"anniv-01": 0,
				"anniv-02": 0,
				"anniv-03": 0,
				"anniv-04": 0,
				"anniv-05": 0,
				"anniv-06": 0,
				"anniv-07": 0,
				"anniv-08": 0,
				"anniv-09": 0,
				"anniv-10": 0,
				"anniv-11": 0,
				"anniv-12": 0,
				"anniv-13": 0,
				"anniv-14": 0,
				"anniv-15": 0,
				"anniv-16": 0,
				"anniv-17": 0,
				"anniv-18": 0,
				"anniv-19": 0,
				"anniv-20": 0,
				"anniv-21": 0,
				"anniv-22": 0,
				"anniv-23": 0,
				"anniv-24": 0,
				"anniv-25": 0,
				"anniv-26": 0,
				"anniv-27": 0,
				"anniv-28": 0,
				"anniv-29": 0,
				"anniv-30": 0,
				"anniv-31": 0,
				"anniv-32": 0,
				"anniv-33": 0,
				"anniv-34": 0,
				"anniv-35": 0,
				"anniv-36": 0,
				"anniv-37": 0,
				"anniv-38": 0,

				"final-01": 0,
				"final-02": 0,
				"final-03": 0,
				"final-04": 0,
				"final-05": 0,
				"final-06": 0,
				"final-07": 0,
				"final-08": 0,
				"final-09": 0,
				"final-10": 0,
				"final-11": 0,
				"final-12": 0,
				"final-13": 0,
				"final-14": 0,
				"final-15": 0,
				"final-16": 0,
				"final-17": 0,
				"final-18": 0,
				"final-19": 0,
				"final-20": 0,
				"final-21": 0,
				"final-22": 0,
				"final-23": 0
			}
		},
		counts = {
			"grandcamp": 0,
			"delux-repair-tool": 0,
			"blue-potion": 0,
			"red-portion": 0,
			"healing-incense": 0,
			"high-red-potion": 0,
			"luckycoin": 0,
			"eye-of-identification": 0,
			"high-blue-potion": 0,
			"super-high-red-potion": 0
		},
		sum = 0,
		order = [
			"レッドポーション", "高級レッドポーション", "最高級レッドポーション", "ブルーポーション", "高級ブルーポーション",
			"鑑定眼", "高級修理道具", "癒しの香", "ラッキーコイン", "グランドキャンプ"
		],
		getDateString = function ( date ) {
			var month = date.getMonth() + 1,
				day   = date.getDate();

			return date.getFullYear() + "." + ( month < 10 ? "0" + month : month ) + "." + ( day < 10 ? "0" + day : day );
		},
		getDateHTML = function( date ) {
			return "<span class=\"date\">" + getDateString( new Date( date ) ) + "</span>";
		},
		proc = function() {
			// counts
			order.sort( function ( a, b ) {
				return counts[ ISSUES[ a ] ] > counts[ ISSUES[ b ] ] ? -1 : counts[ ISSUES[ a ] ] < counts[ ISSUES[ b ] ] ? 1 : 0;
			} );

			$.each( order, function () {
				$( "#issues" ).append( "<tr><td>" + this + "</td><td>" + counts[ ISSUES[ this ] ] + "</td><td>" + ( counts[ ISSUES[ this ] ] / sum ).toFixed( 4 ) + "</td></tr>" );
			} );
			$( "#sum-count" ).text( sum );

			$.each( SPECIAL.counts, function ( key, val ) {
				$( "#" + key ).text( val );
			} );

			// list
			$.each( list, function () {
				$( "#list" ).append(
					"<span class=\"data" + ( this.lineup !== "common" ? " special" : ""  ) + "\">" + getDateHTML( this.date ) + this.item + ( 1 < this.pieces ? "<span class=\"pieces\">" + this.pieces + "</span>" : "" ) + "</span>"
				);
			} );
		};

	$.ajax( {
		type: "GET",
		url: "/data/guildIssues.json",
		dataType: "json",
		async: true,
		success: function( data ) {
			data.list.reverse();

			$.each( data.list, function () {
				list.push( {
					date:   this[ DATE ],
					item:   this[ ITEM ],
					pieces: this[ PIECES ],
					lineup: this[ LINEUP ]
				} );

				if ( this[ LINEUP ] === "common" ) {
					counts[ ISSUES[ this[ ITEM ] ] ] += 1;
					sum += 1;
				} else {
					SPECIAL.counts[ SPECIAL[ this[ LINEUP ] ][ this[ ITEM ] ] ] += 1;
					SPECIAL.counts[ this[ LINEUP ] + "-n" ] += 1;
				}
			} );

			proc();
		}
	} );
} () );
