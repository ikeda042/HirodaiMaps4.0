import cv2

def resize_image_maintaining_aspect_ratio(image_path, max_size):
    image = cv2.imread(image_path)
    h, w = image.shape[:2]
    if h > w:
        new_h, new_w = max_size, int(w * max_size / h)
    else:
        new_h, new_w = int(h * max_size / w), max_size

    return cv2.resize(image, (new_w, new_h))


def resize(filename:str,size:int) -> None:
    thumbnail = resize_image_maintaining_aspect_ratio(filename, size)  
    cv2.imwrite(f'{filename.split("/")[-1].split(".")[0]+"_thumbnail.jpg"}', thumbnail)
    cv2.imwrite(f'{filename.split("/")[-1].split(".")[0]+".jpg"}', thumbnail)


if __name__ == '__main__':
    resize('frontend/public/building1.jpg', 300)
