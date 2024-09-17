import qrcode
import qrcode.image.pil


for i in range(1, 50):
    img = qrcode.make(f"https://hirodaimaps.com/{i}")
    img.save(f"qr_images/qrcode{i}.png")
