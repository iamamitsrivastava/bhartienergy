from PIL import Image

img = Image.open("/Users/amitsrivastava/.gemini/antigravity-ide/brain/dc7c79fc-a2e6-4c14-b53d-d42ed4a01b6b/.user_uploaded/media_1790746864175.png").convert("RGBA")
width, height = img.size

# Scan for non-transparent pixels around y = 70% to 85%
for y in range(int(height*0.7), int(height*0.85), 5):
    found = False
    for x in range(int(width*0.1), int(width*0.5), 5):
        r,g,b,a = img.getpixel((x, y))
        if a > 0 and (r < 200 or g < 200 or b < 200): # ignore white background
            print(f"y={y}, first non-bg pixel at x={x} is {r},{g},{b},{a}")
            found = True
            break
