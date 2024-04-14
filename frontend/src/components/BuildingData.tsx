const buildings = [
    // { 'buildingId': '2', 'title': '中央図書館', 'description': '広島大学の中央図書館です。', 'imageUrl': 'building_images/building2.jpg', 'keywords': ['中央図書館', '図書館', '図書', "Library", "Central"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.40320', 'lon': '132.71345' },

    // { 'buildingId': '4', 'title': '学生プラザ', 'description': '学生プラザの説明。', 'imageUrl': 'building_images/building4.jpg', 'keywords': ['学生プラザ', '留学', "奨学金", "学プラ"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.40088', 'lon': '132.71119' },

    // { 'buildingId': '5', 'title': '教育学部講義棟L', 'description': '教育学部の講義棟L', 'imageUrl': 'building_images/building5.jpg', 'keywords': ["教育学部", "講義棟L", "講義等L", "こうぎとうL"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.40329205', 'lon': '132.7106335' },

    // { 'buildingId': '10', 'title': 'ミライクリエ', 'description': 'ミライクリエ', 'imageUrl': 'building_images/building6.jpg', 'keywords': ['ミライクリエ', '起業部', "未来クリエ", "みらいくりえ", "企業部", "きぎょうぶ", "Miraicrea"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.713', 'lat': '34.39791', 'lon': '132.7137419' },

    // { 'buildingId': '3', 'title': '賑わいパビリオン', 'description': '賑わいパビリオン', 'imageUrl': 'building_images/building3.jpg', 'keywords': ['賑わいパビリオン', '起業部', "企業部", "きぎょうぶ"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.403504', 'lon': '132.71372325' },

    // { 'buildingId': '1', 'title': 'HUモニュメント', 'description': '', 'imageUrl': 'building_images/building1.jpg', 'keywords': ['HU', 'モニュメント', "写真撮影", "広島大学", "広大", "HiroshimaUniversity"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.40351499', 'lon': '132.71318827' },

    // { 'buildingId': '7', 'title': '経済学部棟', 'description': '', 'imageUrl': 'building_images/building7.jpg', 'keywords': ["経済学部", "経済", "Econ", "economics", "けいざいがくぶ"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.4042702', 'lon': '132.7136511' },

    // { 'buildingId': '8', 'title': '先端物質科学研究科', 'description': '中央図書館前の広島大学モニュメントです。', 'imageUrl': 'building_images/building8.jpg', 'keywords': ["先端物質科学研究科", "先端件", "せんたんけん"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.4051457', 'lon': '132.7162162' },

    // { 'buildingId': '101', 'title': '中央口の交差点', 'description': '中央口入ってすぐの交差点。', 'imageUrl': 'building_images/building101.jpg', 'keywords': ["先端物質科学研究科", "先端件", "せんたんけん", "交差点"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.725201', 'lat': '34.4046857', 'lon': '132.7145562' },

    // Point(132.7110850149721557 34.39929103384179143)	1	総合科学部
    // Point(132.71126061576700295 34.40297405819667631)	2	教育学部　北第２複利会館前
    // Point(132.71315408190230301 34.40327873975600426)	3	中央図書館前
    // Point(132.71431955189419227 34.40357441655767445)	4	北第１複利会館前
    // Point(132.7147174642223888 34.40466338084781484)	5	中央口交差点
    // Point(132.71427374652378717 34.40183830947186294)	6	情報科学部
    // Point(132.71339417135317262 34.3997809561484047)	7	工学部
    // Point(132.71343554063628289 34.39847004425039501)	8	学生会館前
    // Point(132.71108 34.40068)	9	学生プラザ
    {
        'buildingId': '1',
        'title': '総合科学部',
        'description': '総合科学部の本部および支援室です。',
        'imageUrl': 'building_images/building2.jpg',
        'keywords': ["そうかとう", "総合科学部", "総科", "そうか", "総科本部", "総合科学部本部", "総科支援室", "総合科学部支援室"],
        'tag': 'faculty',
        'mapCoordinate': '#17/34.403814/132.715201',
        'lat': '34.40327873975600426',
        'lon': '132.71315408190230301',
    },
    {
        'buildingId': '2',
        'title': '教育学部　北第２複利会館前',
        'description': '教育学部の北第２複利会館前です。',
        'imageUrl': 'building_images/building2.jpg',
        'keywords': ["きょういくがくぶ", "教育学部", "きょういく", "教育", "北第２複利会館前", "北第２複利会館"],
        'tag': 'faculty',
        'mapCoordinate': '#17/34.403814/132.715201',
        'lat': '34.40297405819667631',
        'lon': '132.71126061576700295',
    },
    {
        'buildingId': '3',
        'title': '中央図書館前',
        'description': '中央図書館前です。',
        'imageUrl': 'building_images/building2.jpg',
        'keywords': ["ちゅうおうとしょかん", "中央図書館", "ちゅうおう", "図書館", "図書", "中央図書館前"],
        'tag': 'faculty',
        'mapCoordinate': '#17/34.403814/132.715201',
        'lat': '34.40327873975600426',
        'lon': '132.71315408190230301',
    },
    {
        'buildingId': '4',
        'title': '北第１複利会館前',
        'description': '北第１複利会館前です。',
        'imageUrl': 'building_images/building2.jpg',
        'keywords': ["きただいいっぷくりかいかん", "北第１複利会館", "北第１複利会館前", "北第１複利会館前"],
        'tag': 'faculty',
        'mapCoordinate': '#17/34.403814/132.715201',
        'lat': '34.40357441655767445',
        'lon': '132.71431955189419227',
    },
    {
        "buildingId": "5",
        "title": "中央口交差点",
        "description": "中央口交差点です。",
        "imageUrl": "building_images/building2.jpg",
        "keywords": ["ちゅうおうぐちこうさてん", "中央口交差点", "中央口", "交差点"],
        "tag": "faculty",
        "mapCoordinate": "#17/34.403814/132.715201",
        "lat": "34.40466338084781484",
        "lon": "132.7147174642223888"
    },
    {
        'buildingId': '6',
        'title': '情報科学部',
        'description': '情報科学部です。',
        'imageUrl': 'building_images/building2.jpg',

        'keywords': ["じょうほうかがくぶ", "情報科学部", "じょうほう", "情報", "情報科学部"],
        'tag': 'faculty',
        'mapCoordinate': '#17/34.403814/132.715201',
        'lat': '34.40183830947186294',
        'lon': '132.71427374652378717',
    },
    {
        'buildingId': '7',
        'title': '工学部',
        'description': '工学部です。',
        'imageUrl': '/building_images/7.jpg',
        'keywords': ["こうがくぶ", "工学部", "こうがく", "工学", "工学部"],
        'tag': 'faculty',
        'mapCoordinate': '#17/34.403814/132.715201',
        'lat': '34.3997809561484047',
        'lon': '132.71339417135317262',
    },
    {
        'buildingId': '8',
        'title': '学生会館前',
        'description': '学生会館前です。',
        'imageUrl': '/building_images/8.jpg',
        'keywords': ["がくせいかいかんまえ", "学生会館前", "学生会館", "がくせいかいかん"],
        'tag': 'faculty',
        'mapCoordinate': '#17/34.403814/132.715201',
        'lat': '34.39847004425039501',
        'lon': '132.71343554063628289',
    },
    {
        'buildingId': '9',
        'title': '学生プラザ',
        'description': '学生プラザです。',
        'imageUrl': '/building_images/9.jpg',
        'keywords': ["がくせいぷらざ", "学生プラザ", "学プラ", "がくせい", "学生"],
        'tag': 'faculty',
        'mapCoordinate': '#17/34.403814/132.715201',
        'lat': '34.40068',
        'lon': '132.71108',
    }
];

export default buildings;
