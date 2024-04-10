from pydantic import BaseModel

data = [    
    { 'buildingId': '2', 'title': '中央図書館', 'description': '広島大学の中央図書館です。', 'imageUrl': 'building_images/building2.jpg', 'keywords': ['中央図書館', '図書館', '図書', "Library", "Central"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.40320', 'lon': '132.71345' },

    { 'buildingId': '4', 'title': '学生プラザ', 'description': '学生プラザの説明。', 'imageUrl': 'building_images/building4.jpg', 'keywords': ['学生プラザ', '留学', "奨学金", "学プラ"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.40088', 'lon': '132.71119' },

    { 'buildingId': '5', 'title': '教育学部講義棟L', 'description': '教育学部の講義棟L', 'imageUrl': 'building_images/building5.jpg', 'keywords': ["教育学部", "講義棟L", "講義等L", "こうぎとうL"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.40329205', 'lon': '132.7106335' },

    { 'buildingId': '10', 'title': 'ミライクリエ', 'description': 'ミライクリエ', 'imageUrl': 'building_images/building6.jpg', 'keywords': ['ミライクリエ', '起業部', "未来クリエ", "みらいくりえ", "企業部", "きぎょうぶ", "Miraicrea"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.713', 'lat': '34.39791', 'lon': '132.7137419' },

    { 'buildingId': '3', 'title': '賑わいパビリオン', 'description': '賑わいパビリオン', 'imageUrl': 'building_images/building3.jpg', 'keywords': ['賑わいパビリオン', '起業部', "企業部", "きぎょうぶ"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.403504', 'lon': '132.71372325' },

    { 'buildingId': '1', 'title': 'HUモニュメント', 'description': '', 'imageUrl': 'building_images/building1.jpg', 'keywords': ['HU', 'モニュメント', "写真撮影", "広島大学", "広大", "HiroshimaUniversity"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.40351499', 'lon': '132.71318827' },

    { 'buildingId': '7', 'title': '経済学部棟', 'description': '', 'imageUrl': 'building_images/building7.jpg', 'keywords': ["経済学部", "経済", "Econ", "economics", "けいざいがくぶ"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.4042702', 'lon': '132.7136511' },

    { 'buildingId': '8', 'title': '先端物質科学研究科', 'description': '中央図書館前の広島大学モニュメントです。', 'imageUrl': 'building_images/building8.jpg', 'keywords': ["先端物質科学研究科", "先端件", "せんたんけん"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.4051457', 'lon': '132.7162162' },

    { 'buildingId': '101', 'title': '中央口の交差点', 'description': '中央口入ってすぐの交差点。', 'imageUrl': 'building_images/building101.jpg', 'keywords': ["先端物質科学研究科", "先端件", "せんたんけん", "交差点"], 'tag': 'faculty', 'mapCoordinate': '#17/34.403814/132.725201', 'lat': '34.4046857', 'lon': '132.7145562' },
]

class Building(BaseModel):
    buildingId: str
    title: str
    description: str
    imageUrl: str
    keywords: list[str]
    tag: str
    mapCoordinate: str
    lat: str
    lon: str

    def __repr__(self) -> str:
        return super().__repr__()
    

buildings = [Building(**building) for building in data]

