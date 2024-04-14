import requests
import bs4
from datetime import datetime

url_chuo = "https://www.navitime.co.jp/bus/diagram/timelist?departure=00026254&arrival=00026237&line=00024433"

response = requests.get(url_chuo)

soup = bs4.BeautifulSoup(response.text, "html.parser")

time_deps = soup.find_all('span', {'class': 'time dep'})

time_deps = [time_dep.text for time_dep in time_deps]


print(time_deps)
now = datetime.now()

datetime_objects = [now.replace(hour=int(time.split(':')[0]), minute=int(time.split(':')[1])) for time in time_deps]


