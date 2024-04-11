import qrcode             
import qrcode.image.pil

img = qrcode.make('https://hirodaimaps.com/paths/1') 
img.save('qrcode.png')

