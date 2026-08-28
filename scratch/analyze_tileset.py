from PIL import Image
import numpy as np

def analyze(filepath, title, firstgid, cols, rows):
    img = Image.open(filepath).convert("RGBA")
    print(f"\n--- {title} (firstgid: {firstgid}) ---")
    data = np.array(img)
    for r in range(rows):
        row_str = []
        for c in range(cols):
            tile = data[r*16:(r+1)*16, c*16:(c+1)*16]
            avg_color = tile.mean(axis=(0,1))
            r_val, g_val, b_val, a_val = avg_color
            gid = firstgid + r*cols + c
            if a_val < 30:
                row_str.append(f"{gid:2d}:[Transparent]")
            else:
                # print color tag
                if r_val > g_val * 1.2 and r_val > b_val * 1.2:
                    tag = "Brown"
                elif g_val > r_val * 1.1 and g_val > b_val * 1.1:
                    tag = "Green"
                elif r_val > 200 and g_val > 200 and b_val > 200:
                    tag = "White"
                elif r_val < 50 and g_val < 50 and b_val < 50:
                    tag = "Black"
                else:
                    tag = f"R{int(r_val)}G{int(g_val)}B{int(b_val)}"
                row_str.append(f"{gid:2d}:[{tag}]")
        print(" | ".join(row_str))

analyze("d:/Users/pepen/gits/AugustoNicolas.github.io/img/museum/tilesets/Wooden House.png", "Wooden House", 1, 7, 5)
analyze("d:/Users/pepen/gits/AugustoNicolas.github.io/img/museum/tilesets/Wooden_House_Walls_Tilset.png", "Walls", 36, 5, 3)
