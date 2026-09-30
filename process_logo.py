from PIL import Image

def process_logo():
    img = Image.open("public/logo.png").convert("RGBA")
    width, height = img.size
    data = img.load()
    
    # Target background color we are trying to remove
    # The background is mostly white, so we'll do a flood fill starting from (0,0)
    # We will mark connected white pixels as transparent.
    
    visited = set()
    queue = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    
    while queue:
        x, y = queue.pop(0)
        
        if (x, y) in visited:
            continue
            
        if x < 0 or x >= width or y < 0 or y >= height:
            continue
            
        visited.add((x, y))
        
        r, g, b, a = data[x, y]
        
        # If it's a very light color (background)
        if r > 220 and g > 220 and b > 220 and max(r,g,b) - min(r,g,b) < 15:
            # Make it fully transparent
            data[x, y] = (255, 255, 255, 0)
            
            # Add neighbors to queue
            queue.append((x+1, y))
            queue.append((x-1, y))
            queue.append((x, y+1))
            queue.append((x, y-1))

    # Second pass for anti-aliasing the edges of the transparent areas
    for y in range(height):
        for x in range(width):
            r, g, b, a = data[x, y]
            if a == 255:  # Not transparent
                # Check if it's adjacent to a transparent pixel
                is_edge = False
                for dx, dy in [(0,1), (1,0), (0,-1), (-1,0)]:
                    nx, ny = x+dx, y+dy
                    if 0 <= nx < width and 0 <= ny < height:
                        if data[nx, ny][3] == 0:
                            is_edge = True
                            break
                if is_edge and r > 200 and g > 200 and b > 200 and max(r,g,b)-min(r,g,b) < 20:
                    # Soften the edge if it's light grey/white
                    data[x, y] = (r, g, b, 128)

    img.save("public/logo.png", "PNG")
    print("Logo flood-filled and processed successfully.")

process_logo()
