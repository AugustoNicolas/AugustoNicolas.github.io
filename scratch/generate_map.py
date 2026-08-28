import json
import os

# Map Dimensions
WIDTH = 50
HEIGHT = 40
SIZE = WIDTH * HEIGHT

# Layer templates (flat 1D arrays of size 2000)
ground = [0] * SIZE
walls = [0] * SIZE
collisions = [0] * SIZE
furniture = [0] * SIZE

def get_index(x, y):
    return y * WIDTH + x

# 1. Fill ground (floors)
# Let's use GID 16 (light wood floor from Wooden House.png)
def fill_rect_ground(x1, y1, x2, y2, gid):
    for y in range(y1, y2 + 1):
        for x in range(x1, x2 + 1):
            ground[get_index(x, y)] = gid

# Define Lobby / Entry Hall
fill_rect_ground(15, 25, 35, 35, 16)
# Define Main Hall
fill_rect_ground(10, 9, 40, 24, 16)
# Define Wing Right (Retro Zone / Natural Enemies)
fill_rect_ground(40, 9, 48, 20, 16)
# Define Secret Room (Easter Egg)
fill_rect_ground(20, 3, 30, 8, 16)


# 2. Draw Walls & Collisions
# GID 36 is the wood wall tile from Wooden_House_Walls_Tilset.png
# We will put wall tiles on the borders and also mark them in collisions array.
def draw_wall(x, y, gid):
    idx = get_index(x, y)
    walls[idx] = gid
    collisions[idx] = 36  # Mark collision as solid

def draw_wall_rect(x1, y1, x2, y2, gid):
    # Top and bottom horizontal walls
    for x in range(x1, x2 + 1):
        draw_wall(x, y1, gid)
        draw_wall(x, y2, gid)
    # Left and right vertical walls
    for y in range(y1, y2 + 1):
        draw_wall(x1, y, gid)
        draw_wall(x2, y, gid)

# Draw Main Hall perimeter
draw_wall_rect(10, 9, 40, 24, 36)
# Draw Lobby perimeter
draw_wall_rect(15, 25, 35, 35, 36)
# Draw Wing Right perimeter
draw_wall_rect(40, 9, 48, 20, 36)
# Draw Secret Room perimeter
draw_wall_rect(20, 3, 30, 8, 36)

# Clear doorways (where player needs to pass)
# Lobby to Main Hall doorway (connects row 24/25, cols 23 to 27)
for x in range(23, 28):
    walls[get_index(x, 25)] = 0
    collisions[get_index(x, 25)] = 0
    ground[get_index(x, 25)] = 16
    
    walls[get_index(x, 24)] = 0
    collisions[get_index(x, 24)] = 0
    ground[get_index(x, 24)] = 16

# Main Hall to Wing Right doorway (connects col 40, rows 13 to 16)
for y in range(13, 17):
    walls[get_index(40, y)] = 0
    collisions[get_index(40, y)] = 0
    ground[get_index(40, y)] = 16

# Secret Door (from Main Hall to Secret Room, behind bookcase at row 9, col 25)
# In the beginning, it is a solid wall tile in the collisions layer.
# We will clear the wall tile in the walls layer and manage collision swapping in Phaser.
walls[get_index(25, 9)] = 36
collisions[get_index(25, 9)] = 36  # Initially solid

# Fill Outer Area Collisions
# Block everything outside the cabin boundaries so player cannot walk into blackness.
# A tile is outer if ground is 0 and wall is 0.
for y in range(HEIGHT):
    for x in range(WIDTH):
        idx = get_index(x, y)
        if ground[idx] == 0 and walls[idx] == 0:
            collisions[idx] = 36


# 3. Add Furniture, Exhibits & Decorations
# Exhibit 1: Soy yo Digital (Lobby center-left pedestal)
# We place a table/box (GID 51 from Basic Furniture)
furniture[get_index(16, 16)] = 51
collisions[get_index(16, 16)] = 36  # Make it solid

# Exhibit 2: Toffi Automation System (Lobby center-right desk)
# We place a desk (GID 52)
furniture[get_index(34, 16)] = 52
collisions[get_index(34, 16)] = 36  # Make it solid

# Exhibit 3: Natural Enemies (Right Wing desk)
# We place a table (GID 53)
furniture[get_index(44, 13)] = 53
collisions[get_index(44, 13)] = 36  # Make it solid

# Retro Arcade Machines (Right Wing bottom)
# Place arcade cabinets (GID 54)
furniture[get_index(43, 18)] = 54
collisions[get_index(43, 18)] = 36
furniture[get_index(45, 18)] = 54
collisions[get_index(45, 18)] = 36

# Secret Room Fireplace (GID 81)
furniture[get_index(25, 4)] = 81
collisions[get_index(25, 4)] = 36

# Secret Room Sofa
# GID 82 from basic furniture
furniture[get_index(25, 7)] = 82
collisions[get_index(25, 7)] = 36

# Bookcase in Main Hall hiding secret door (GID 80)
# Placed on row 9, col 25.
furniture[get_index(25, 9)] = 80


# 4. Construct Tiled Map Object
map_data = {
    "compressionlevel": -1,
    "height": HEIGHT,
    "infinite": False,
    "layers": [
        {
            "data": ground,
            "height": HEIGHT,
            "id": 1,
            "name": "Ground",
            "opacity": 1,
            "type": "tilelayer",
            "visible": True,
            "width": WIDTH,
            "x": 0,
            "y": 0
        },
        {
            "data": walls,
            "height": HEIGHT,
            "id": 2,
            "name": "Walls",
            "opacity": 1,
            "type": "tilelayer",
            "visible": True,
            "width": WIDTH,
            "x": 0,
            "y": 0
        },
        {
            "data": furniture,
            "height": HEIGHT,
            "id": 3,
            "name": "Furniture",
            "opacity": 1,
            "type": "tilelayer",
            "visible": True,
            "width": WIDTH,
            "x": 0,
            "y": 0
        },
        {
            "data": collisions,
            "height": HEIGHT,
            "id": 4,
            "name": "Collisions",
            "opacity": 1,
            "type": "tilelayer",
            "visible": False,  # Hidden collision layer
            "width": WIDTH,
            "x": 0,
            "y": 0
        }
    ],
    "nextlayerid": 5,
    "nextobjectid": 1,
    "orientation": "orthogonal",
    "renderorder": "right-down",
    "tiledversion": "1.8.4",
    "tileheight": 16,
    "tilewidth": 16,
    "type": "map",
    "version": "1.8",
    "width": WIDTH,
    "tilesets": [
        {
            "firstgid": 1,
            "columns": 7,
            "image": "../tilesets/Wooden House.png",
            "imageheight": 80,
            "imagewidth": 112,
            "margin": 0,
            "name": "wooden_house",
            "spacing": 0,
            "tilecount": 35,
            "tileheight": 16,
            "tilewidth": 16
        },
        {
            "firstgid": 36,
            "columns": 5,
            "image": "../tilesets/Wooden_House_Walls_Tilset.png",
            "imageheight": 48,
            "imagewidth": 80,
            "margin": 0,
            "name": "wooden_walls",
            "spacing": 0,
            "tilecount": 15,
            "tileheight": 16,
            "tilewidth": 16
        },
        {
            "firstgid": 51,
            "columns": 9,
            "image": "../Objects/Basic Furniture.png",
            "imageheight": 96,
            "imagewidth": 144,
            "margin": 0,
            "name": "basic_furniture",
            "spacing": 0,
            "tilecount": 54,
            "tileheight": 16,
            "tilewidth": 16
        },
        {
            "firstgid": 105,
            "columns": 12,
            "image": "../Objects/decorations_BR.png",
            "imageheight": 192,
            "imagewidth": 192,
            "margin": 0,
            "name": "decorations",
            "spacing": 0,
            "tilecount": 144,
            "tileheight": 16,
            "tilewidth": 16
        }
    ]
}

# Ensure map output directory exists
os.makedirs("d:/Users/pepen/gits/AugustoNicolas.github.io/img/museum/maps", exist_ok=True)

# Write map JSON file
with open("d:/Users/pepen/gits/AugustoNicolas.github.io/img/museum/maps/museum_layout.json", "w") as f:
    json.dump(map_data, f, indent=2)

print("Map layout generated successfully in img/museum/maps/museum_layout.json")
