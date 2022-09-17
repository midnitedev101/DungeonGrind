var new_rooms = [];
var minions = [];
var bosses = [];
var player = {};
var charSelected = {}
var weapons = [];
var minionInterval = '';
var bossInterval = ''
var playerString = ''
var handler = ''
var introText = 'Welcome to DungeonGrind.\n\n Choose an adventurer to navigate through the dungeons.\n\n Use the keys W, A, S, D or any of the directional keys in the keyboard to move through the tiles.\n\n Defeat minions and bosses to gain XP and increase HP and DMG.\n\n Reach the last stage and defeat all the bosses to complete the game and earn the rewards.\n\n Good Luck!\n';

// var roomTextures = [
//   "https://drive.google.com/uc?id=1LE7nJZSf4vVN0w6obZ3EO-HehVt_KAgl",
//   "https://drive.google.com/uc?id=1HhufZnXM9s0G7h97TN-havSfrFlmvDbo",
//   "https://drive.google.com/uc?id=1CwPKXgP5SMyNxJAVpD-K15McDbwQjO0k",
//   "https://drive.google.com/uc?id=17ikzlD1TARD45lkyvurUho1YFeIpZLj3",
//   "https://drive.google.com/uc?id=1VgVtk7EUfTs97UAl64mez36rFyjefqxq"
// ];
var roomTextures = [
  "./assets/images/tile_1.png",
  "./assets/images/tile_2.png",
  "./assets/images/tile_3.png",
  "./assets/images/tile_4.png",
  "./assets/images/tile_5.png",
];

// var minionTextures = [
//   "https://drive.google.com/uc?id=1EwuaTOCee4kMWK2ULi_FONbDbRXsCFxn",               // east
//   "https://drive.google.com/uc?id=1rDvZAK8JxNdhH2mE3reEBYhzjPxVPCh8"                // west
// ];

var minionTextures = [
  "./assets/images/skeleton_1.gif",               // east
  "./assets/images/skeleton_2.gif"                // west
];

// Start: Stats for bosses
let boss_stats = 11
// var boss = [
//   {name: 'Flying Terror', health: Math.floor(Math.random() * boss_stats + 90), damage: Math.floor((Math.random() * boss_stats + 90) / 2), XP: Math.floor(Math.random() * (boss_stats - 10 + 1) + 10), textures: ['https://drive.google.com/uc?id=16P78zomlec8g6ugMkAtIz7_65FtbUwq3', 'https://drive.google.com/uc?id=132T1oD9mr3cmWuOs7j8Mqo5fCXTb6hEh']},
//   {name: 'Wasting Magician', health: Math.floor(Math.random() * boss_stats + 90), damage: Math.floor((Math.random() * boss_stats + 90) / 2), XP: Math.floor(Math.random() * (boss_stats - 10 + 1) + 10), textures: ['https://drive.google.com/uc?id=1Vp2K1wS5zqicdipYNy5HGe-h1bNShMrp', 'https://drive.google.com/uc?id=1L4Gp1sJ2giGLTKjAeoOQd3c1HllI36Cs']},
//   {name: 'Sicklewraith', health: Math.floor(Math.random() * boss_stats + 90), damage: Math.floor((Math.random() * boss_stats + 90) / 2), XP: Math.floor(Math.random() * (boss_stats - 10 + 1) + 10), textures: ['https://drive.google.com/uc?id=1y_fCOMmzfwkQUtBZ0kdXQpcjg3c1fWf5', 'https://drive.google.com/uc?id=1--lpHLhhHnljZVsamd-ekPJ2C44N-3gm']},
//   {name: 'Ember Ogre', health: Math.floor(Math.random() * boss_stats + 90), damage: Math.floor((Math.random() * boss_stats + 90) / 2), XP: Math.floor(Math.random() * (boss_stats - 10 + 1) + 10), textures: ['https://drive.google.com/uc?id=1_V87ktkJ5fs1SBAJMrKzq_qs4n37Q-4B', 'https://drive.google.com/uc?id=1A3UdfGsh7n0lK4ohZ5MeipdQEiRfF2eh']},
//   {name: 'Khanine', health: Math.floor(Math.random() * boss_stats + 90), damage: Math.floor((Math.random() * boss_stats + 90) / 2), XP: Math.floor(Math.random() * (boss_stats - 10 + 1) + 10), textures: ['https://drive.google.com/uc?id=1thkw_5cMkDPHf9QjYYBRkHl0QJYcmD5C', 'https://drive.google.com/uc?id=1PhFRPFZFi7Av-BgI93kqMD7IrHGMK54A']},
//   {name: 'Doom Steed', health: Math.floor(Math.random() * boss_stats + 90), damage: Math.floor((Math.random() * boss_stats + 90) / 2), XP: Math.floor(Math.random() * (boss_stats - 10 + 1) + 10), textures: ['https://drive.google.com/uc?id=1hQ-gqs0hrg_VReFzV8wiFP2prFI5LwsV', 'https://drive.google.com/uc?id=1VLxe7-mfEKXJdpMvuqDPRp98bhXZPzTK']},
// ]

var boss = [
  {name: 'Flying Terror', health: Math.floor(Math.random() * boss_stats + 90), damage: Math.floor((Math.random() * boss_stats + 90) / 2), XP: Math.floor(Math.random() * (boss_stats - 10 + 1) + 10), textures: ['./assets/images/demon_1.gif', './assets/images/demon_2.gif']},
  {name: 'Wasting Magician', health: Math.floor(Math.random() * boss_stats + 90), damage: Math.floor((Math.random() * boss_stats + 90) / 2), XP: Math.floor(Math.random() * (boss_stats - 10 + 1) + 10), textures: ['./assets/images/burning_skull_1.gif', './assets/images/burning_skull_2.gif']},
  {name: 'Sicklewraith', health: Math.floor(Math.random() * boss_stats + 90), damage: Math.floor((Math.random() * boss_stats + 90) / 2), XP: Math.floor(Math.random() * (boss_stats - 10 + 1) + 10), textures: ['./assets/images/ghost_1.gif', './assets/images/ghost_2.gif']},
  {name: 'Ember Ogre', health: Math.floor(Math.random() * boss_stats + 90), damage: Math.floor((Math.random() * boss_stats + 90) / 2), XP: Math.floor(Math.random() * (boss_stats - 10 + 1) + 10), textures: ['./assets/images/hell-beast_1.gif', './assets/images/hell-beast_2.gif']},
  {name: 'Khanine', health: Math.floor(Math.random() * boss_stats + 90), damage: Math.floor((Math.random() * boss_stats + 90) / 2), XP: Math.floor(Math.random() * (boss_stats - 10 + 1) + 10), textures: ['./assets/images/hell-hound_1.gif', './assets/images/hell-hound_2.gif']},
  {name: 'Doom Steed', health: Math.floor(Math.random() * boss_stats + 90), damage: Math.floor((Math.random() * boss_stats + 90) / 2), XP: Math.floor(Math.random() * (boss_stats - 10 + 1) + 10), textures: ['./assets/images/nightmare_1.gif', './assets/images/nightmare_2.gif']},
]
// boss texture orientation: [0] - west, [1] - east
// End: Stats for bosses

const arsenal = [
          {name: 'Muradon Shard', texture: './assets/images/sword_1.png', modifier: 'xpm'},
          {name: 'Stack of Annihilation', texture: './assets/images/shield_1.png', modifier: 'dpm_hpm'},
          {name: 'Phoenix Stalk', texture: './assets/images/staff_1.png', modifier: 'xpm_hpm'},
          {name: 'Kraken Shard', texture: './assets/images/sword_2.png', modifier: 'hpm'},
          {name: 'Heroic Rune', texture: './assets/images/gem_1.png', modifier: 'bxp'},
          {name: 'Manajoon Stalk', texture: './assets/images/staff_2.png', modifier: 'xpm_dpm'},
          {name: 'Demonic Rune',  texture: './assets/images/gem_2.png', modifier: 'bdp'},
          {name: 'Telekon Stone', texture: './assets/images/pearl_1.png', modifier: 'bhp_bxp_bdp'},
          {name: 'Tome of Pain', texture: './assets/images/scroll_1.png', modifier: 'bhp'},
          {name: 'Tome of Wrath', texture: './assets/images/scroll_1.png', modifier: 'dpm'},
        ]

var chars = [{
        name: 'hunter',
        health: 60,                     // Hunter starts with lowest hp compared to other characters
        damage: 10,                     // Hunter starts with lowest damage compared to other characters
        XP: 60,                         // Hunter starts with highest xp compared to other characters
        GROWTH: 1.00,                    // Hunter has highest xp growth
        textures: ['./assets/images/hunter_1.gif', './assets/images/hunter_2.gif']
      }, {
        name: 'berserker',
        health: 65,                     // Berserker has average hp compared to other characters
        damage: 20,                     // Berserker has the highest damage compared to other characters
        XP: 20,                         // Berserker has lowest xp compared to other characters
        GROWTH: 0.75,                     // Berserker has average xp growth
        textures: ['./assets/images/berserker_1.gif', './assets/images/berserker_2.gif']
      }, {
        name: 'sentinel',
        health: 70,                     // Sentinel starts with highest hp compared to other characters
        damage: 15,                     // Sentinel starts with average damage compared to other characters
        XP: 40,                         // Sentinel starts with average xp compared to other characters
        GROWTH: 0.50,                     // Sentinel has lowest xp growth
        textures: ['./assets/images/guild-knight_1.gif', './assets/images/guild-knight_2.gif']
      }]

class DungeonTile extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const divStyle = {
      opacity: 0
    };

    return (
      <div id={this.props.id} className={this.props.classname} data-dtstate={this.props.status} data-row={this.props.row} data-col={this.props.col} style={divStyle}></div>
    )
  }
}

class Dungeon extends React.Component {
  constructor (props) {
    super(props);
    this.state = {width: 60, height: 60, status: 'active', classname: 'gridElement', gameStatus: 'new', charSelect: true, charTexture: '', playerHP: 0, playerXP: 0, dungeonLvl: 1, playerDmg: 0, charLvl: 1, bossCntr: 0, mnCntr: 0, timeLeft: 10}; // 5 gamesStatus': reset, defeat, victory, new, ongoing
    this.charInfo = this.charInfo.bind(this);
    this.charSelect = this.charSelect.bind(this);
  }

  // Runs after component has been rendered
  componentDidMount() {
      this.setDungeon();
  }

  setDungeon() {
    new_rooms = [];
    minions = [];
    weapons = [];
    new_rooms.push(this.seedRoom(this.state.width, this.state.height));
    for (var x = 0; x < new_rooms.length; x++) {
      this.placeRoomInGrid(new_rooms[x], grid);
      this.setNewRoom(new_rooms[x], grid);
    }

    this.initializeMinions();
    this.initializeWeapons();
    this.initializeConsumables();
    this.initializeBosses();
    this.initializePortal();
    this.playerActivity();
    this.minionActivity();
    this.bossActivity();
  }

  clearDungeon() {
    var Grid = document.getElementById('grid');
    var GridElements = Grid.querySelectorAll('div');
    for (var x = 0; x < GridElements.length; x++) {
      GridElements[x].style.opacity = 0;
    }

    var allPlayer = document.getElementsByClassName('gridElement player');
    allPlayer[0].style['background-image'] = "url('./assets/images/tile_8.png')";
    allPlayer[0].removeAttribute('data-name');
    allPlayer[0].removeAttribute('data-hp');
    allPlayer[0].removeAttribute('data-dmg');
    allPlayer[0].removeAttribute('data-xp');
    allPlayer[0].removeAttribute('data-growth');
    allPlayer[0].removeAttribute('data-skins');
    allPlayer[0].className = 'gridElement';

    var allMinions = document.getElementsByClassName('gridElement minions');
    while(allMinions.length > 0) {
        // allRooms[0].parentNode.removeChild(allRooms[0]);
        allMinions[0].style['background-image'] = "url('./assets/images/tile_8.png')";
        allMinions[0].removeAttribute('data-hp');
        allMinions[0].removeAttribute('data-dmg');
        allMinions[0].removeAttribute('data-xp');
        allMinions[0].removeAttribute('data-status');
        allMinions[0].className = 'gridElement';
    }

    var allBosses = document.getElementsByClassName('gridElement bosses');
    while(allBosses.length > 0) {
        allBosses[0].style['background-image'] = "url('./assets/images/tile_8.png')";
        allBosses[0].removeAttribute('data-name');
        allBosses[0].removeAttribute('data-hp');
        allBosses[0].removeAttribute('data-dmg');
        allBosses[0].removeAttribute('data-xp');
        allBosses[0].removeAttribute('data-status');
        allBosses[0].className = 'gridElement';
    }

    var allWeapons = document.getElementsByClassName('gridElement weapons');
    while(allWeapons.length > 0) {
        allWeapons[0].style['background-image'] = "url('./assets/images/tile_8.png')";
        allWeapons[0].removeAttribute('data-name');
        allWeapons[0].removeAttribute('data-modifier');
        allWeapons[0].className = "gridElement";
    }

    var allConsumables = document.getElementsByClassName('gridElement consumables');
    while(allConsumables.length > 0) {
        allConsumables[0].style['background-image'] = "url('./assets/images/tile_8.png')";
        allConsumables[0].removeAttribute('addHp')
        allConsumables[0].className = "gridElement";
    }

    var allPortal = document.getElementsByClassName('gridElement portal');
    while(allPortal.length > 0) {
        allPortal[0].style.backgroundImage = "url('./assets/images/tile_8.png')";
        allPortal[0].className = "gridElement";
    }

    var allRooms = document.getElementsByClassName('gridElement room');
    while(allRooms.length > 0) {
        // allRooms[0].parentNode.removeChild(allRooms[0]);
        allRooms[0].style.backgroundImage = "url('./assets/images/tile_8.png')";
        allRooms[0].className = "gridElement";
    }
    clearInterval(minionInterval);
    clearInterval(bossInterval);

    if (this.state.gameStatus == 'new') {
      this.setState({
        gameStatus: 'continue',
        width: 60,
        height: 60,
        status: 'active',
        classname: 'gridElement',
        charTexture: '',
        playerHP: 0,
        playerXP: 0,
        dungeonLvl: 1,
        charLvl: 1,
        playerDmg: 0,
        bossCntr: 0,
        mnCntr: 0,
        charSelect: true,
        timeLeft: 10
      });
    } else {
      this.setState({
        gameStatus: 'continue',
        width: 60,
        height: 60,
        status: 'active',
        classname: 'gridElement',
        bossCntr: 0,
        mnCntr: 0,
        charSelect: false,
        timeLeft: 10
      });
    }
  }

  seedRoom(available_rows = 0, available_cols = 0) {
    // Put seed room in a centered position in the grid
    var x = Math.floor(Math.random() * (35 - 25) + 25),                    // Range of x is between 20 and 30 from the grid
        y = Math.floor(Math.random() * (35 - 25) + 25);                    // Range of y is between 20 and 30 from the grid

    var maxWidthAllowed = this.state.width - x,                      // maxWidth allowed in the board depending on x coordinates (50 - x)
        maxHeightAllowed = this.state.height - y;                    // maxHeight allowed in the board depending on y coordinates (50 - y)

    var width = Math.floor((Math.random() * 4) + 7),            // Range of room width is between 7 and 10
        height = Math.floor((Math.random() * 4) + 7);           // Range of room height is between 7 and 10

    var room = {x: x,
                y: y,
                width: width,
                height: height};

    return room;
  }
// End: Function to set the coordinates of a room

// Start: Function to place a room inside the grid
  placeRoomInGrid = (room, grid) => {

  if (this.checkRoomPlacement(room, grid) == true) {
      for (var x = room.y; x < (room.y + room.height); x++) {                                         // Loop through the height coordinates of the room
        for (var y = room.x; y < (room.x + room.width); y++) {                                        // Loop through the width coordinates of the room
          if (document.getElementById('row' + x + '_col' + y) != null) {
            document.getElementById('row' + x + '_col' + y).className = 'gridElement room';              // Add elements with classname gridElement with room
            document.getElementById('row' + x + '_col' + y).style.backgroundImage = "url('" + roomTextures[Math.floor(Math.random() * 5)] + "')";
            document.getElementById('row' + x + '_col' + y).style.background = "white contain no-repeat"
            if (room.door_x && room.door_y && document.getElementById('row' + room.door_y + '_col' + room.door_x) != null) {                    // Add doors to the boxes and set them with class 'gridElement room'
              document.getElementById('row' + room.door_y + '_col' + room.door_x).className = 'gridElement room';
              document.getElementById('row' + room.door_y + '_col' + room.door_x).style.backgroundImage = "url('" + roomTextures[Math.floor(Math.random() * 5)] + "')";
              document.getElementById('row' + room.door_y + '_col' + room.door_x).style.background = "white contain no-repeat";
            }
          }
        }
      }
  }

    return grid;
  }
// End:  Function to place a room inside the grid

  setNewRoom(base_room, grid) {

    // For north room
    var north_room = {height: Math.floor((Math.random() * 4) + 7), width: Math.floor((Math.random() * 4) + 7)};

    // For x coordinate, add code to calculate between (base_room.x - north_room.width) and (base_room.x + base_room.width + north_room.width)
    north_room.x = Math.floor(Math.random() * ((base_room.x + base_room.width) - (base_room.x - north_room.width + 1)) + (base_room.x - north_room.width + 1));

    // For y coordinate, add code to calculate between (north_room.y minus north_room's height minus the door)
    north_room.y = base_room.y - north_room.height - 1;

    // For north door y coordinates
    north_room.door_y = north_room.y + north_room.height;

    var min_n_width = Math.min(north_room.x + north_room.width, base_room.x + base_room.width);
    var max_n_x = Math.max(north_room.x, base_room.x);
    north_room.door_x = Math.floor((Math.random() * (min_n_width - max_n_x) + max_n_x));

    north_room.orientation = 'north';

    if (this.checkRoomPlacement(north_room, grid) == true) {
      this.placeRoomInGrid(north_room, grid);
      new_rooms.push(north_room);
    }

    // For east room
    var east_room = {height: Math.floor((Math.random() * 4) + 7), width: Math.floor((Math.random() * 4) + 7)};

    east_room.x = base_room.x + base_room.width + 1;

    // For y coordinate, add code to calculate between (north_room.y minus north_room's height minus the door)
    east_room.y = Math.floor(Math.random() * ((base_room.y + base_room.height) - (base_room.y - east_room.height + 1)) + (base_room.y - east_room.height + 1));

    east_room.door_x = east_room.x - 1;
    var min_e_height = Math.min(east_room.y + east_room.height, base_room.y + base_room.height);
    var max_e_y = Math.max(east_room.y, base_room.y);
    east_room.door_y = Math.floor((Math.random() * (min_e_height - max_e_y) + max_e_y));

    east_room.orientation = 'east';

    if (this.checkRoomPlacement(east_room, grid) == true) {
      this.placeRoomInGrid(east_room, grid);
      new_rooms.push(east_room);
    }


    // For south room
    var south_room = {height: Math.floor((Math.random() * 4) + 7), width: Math.floor((Math.random() * 4) + 7)};

    // For x coordinate, add code to calculate between (base_room.x - north_room.width) and (base_room.x + base_room.width + north_room.width)
    south_room.x = Math.floor(Math.random() * ((base_room.x + base_room.width) - (base_room.x - south_room.width + 1)) + (base_room.x - south_room.width + 1));

    // For y coordinate, add code to calculate between (north_room.y minus north_room's height minus the door)
    south_room.y = base_room.y + base_room.height + 1;

    // For north door y coordinates
    south_room.door_y = south_room.y - 1;

    var min_s_width = Math.min(south_room.x + south_room.width, base_room.x + base_room.width);
    var max_s_x = Math.max(south_room.x, base_room.x);
    south_room.door_x = Math.floor((Math.random() * (min_s_width - max_s_x) + max_s_x));

    south_room.orientation = 'south';

    if (this.checkRoomPlacement(south_room, grid) == true) {
      this.placeRoomInGrid(south_room, grid);
      new_rooms.push(south_room);
    }

    // For west room
    var west_room = {height: Math.floor((Math.random() * 4) + 7), width: Math.floor((Math.random() * 4) + 7)};

    west_room.x = base_room.x - west_room.width - 1;

    // For y coordinate, add code to calculate between (north_room.y minus north_room's height minus the door)
    west_room.y = Math.floor(Math.random() * ((base_room.y + base_room.height) - (base_room.y - west_room.height + 1)) + (base_room.y - west_room.height + 1));

    west_room.door_x = west_room.x + west_room.width;

    var min_w_height = Math.min(west_room.y + west_room.height, base_room.y + base_room.height);
    var max_w_y = Math.max(west_room.y, base_room.y);
    west_room.door_y = Math.floor((Math.random() * (min_w_height - max_w_y) + max_w_y));

    west_room.orientation = 'west';

    if (this.checkRoomPlacement(west_room, grid) == true) {
      this.placeRoomInGrid(west_room, grid);
      new_rooms.push(west_room);
    }
  }

  // Start: Function to check if dungeon tile can be set as gridElement room
  checkRoomPlacement(room, grid) {
    if (room.x < 0 || room.y < 0 || room.x > this.state.width ||room.y > this.state.height) {                     // If room coordinates are out of bounds of the grid
      return false;
    }
    else {
      // Start: 2nd iteration

      var row_check = false;
      var column_check = false;
      for(var x = room.y; x < room.y + 1; x++) {
        for (var y = room.x; y < room.x + room.width; y++) {
          if (document.getElementById('row' + (x - 1) + '_col' + y) != null && document.getElementById('row' + (x + room.height) + '_col' + y) != null) {
            if ((document.getElementById('row' + (x - 1) + '_col' + y).className == 'gridElement room')) {
              return false;
            }

            if ((document.getElementById('row' + (x + room.height) + '_col' + y).className == 'gridElement room')) {
              return false;
            }

            row_check = true;
          }
        }
      }

      for (var x = room.y; x < room.y + room.height; x++) {
        for (var y = room.x; y < room.x + 1; y++) {
          if (document.getElementById('row' + x + '_col' + (y - 1)) != null && document.getElementById('row' + x + '_col' + (y + room.width)) != null) {
            if ((document.getElementById('row' + x + '_col' + (y - 1)).className == 'gridElement room')) {
              return false;
            }

            if ((document.getElementById('row' + x + '_col' + (y + room.width)).className == 'gridElement room')) {
              return false;
            }

            column_check = true;
          }
        }
      }

      if (column_check == true && row_check == true) {
        return true;
      } else {
        return false;
      }
      // End: 2nd iteration
    }
  }
  // End: Function to check if dungeon tile can be set as gridElement room

  initializePlayer() {
    var new_rooms_w = new_rooms[0].width;
    var new_rooms_h = new_rooms[0].height;

    var low_w = Math.ceil(new_rooms_w * 0.25);
    var hi_w = Math.ceil(new_rooms_w * 0.75);
    var low_h = Math.ceil(new_rooms_h * 0.25);
    var hi_h = Math.ceil(new_rooms_h * 0.75);

    var player_x_pos = Math.floor(Math.random() * (hi_w - low_w) + low_w);
    var player_y_pos = Math.floor(Math.random() * (hi_h - low_h) + low_h);

    player = {x: new_rooms[0].x + (player_x_pos), y: new_rooms[0].y + (player_y_pos)};
    document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
    document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});

    document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('" + charSelected.texture + "')";
    document.getElementById('row' + player.y + '_col' + player.x).style.background = "white contain no-repeat";
    document.getElementById('row' + player.y + '_col' + player.x).setAttribute('data-name', charSelected.name);
    document.getElementById('row' + player.y + '_col' + player.x).setAttribute('data-hp', charSelected.hp);
    document.getElementById('row' + player.y + '_col' + player.x).setAttribute('data-dmg', charSelected.dmg);
    document.getElementById('row' + player.y + '_col' + player.x).setAttribute('data-xp', charSelected.xp);
    document.getElementById('row' + player.y + '_col' + player.x).setAttribute('data-growth', charSelected.growth);
    document.getElementById('row' + player.y + '_col' + player.x).setAttribute('data-skins', charSelected.skinArray);

    this.fogOfWar();

    this.setState({
      playerHP: charSelected.hp,
      playerDmg: charSelected.dmg,
      playerXP: charSelected.xp,
    })

  }

  charInfo(charNum) {
    if (charNum == 0) {
      document.getElementById('battle_ui_span').innerHTML = '<p class="charInfo">Hunter\n\n While not as durable or as powerful as the other adventurers, the hunter makes up for it in cunning and adaptability which serves them well on a long journey. </p>';
    } else if (charNum == 1) {
      document.getElementById('battle_ui_span').innerHTML = '<p class="charInfo">Berserker\n\n The heaviest of all hitters, the berserker has a single-minded approach towards a target. They follow the old adage that if it moves, then it shouldn\'t. </p>';
    } else if (charNum == 2) {
      document.getElementById('battle_ui_span').innerHTML = '<p class="charInfo">Sentinel\n\n A veritable juggernaut, the sentinel can dish it out as well as take it. This adventurer gives no quarter whether in dealing pain or receiving it.</p>';
    } else {
      document.getElementById('battle_ui_span').innerHTML = '';
    }
  }

charSelect(charNum) {
  if (charNum == 0) {
    this.setState({
        charTexture: './assets/images/hunter-idle.gif'
        })
    this.setState({ charSelect: false }, function () {
        document.getElementById('battle_sc_span').style.display = 'none';
        charSelected.name = chars[0].name;
        charSelected.hp = chars[0].health;
        charSelected.dmg = chars[0].damage;
        charSelected.xp = chars[0].XP;
        charSelected.growth = chars[0].GROWTH;
        charSelected.texture = chars[0].textures[Math.floor(Math.random() * 2)];
        charSelected.skinArray = chars[0].textures;
        this.initializePlayer();
        document.getElementById('player_intro_span').innerHTML = '<p> The ' +charSelected.name+ '\'s adventure starts somewhere in this dungeon.\n</p>';
      });
    } else if (charNum == 1) {
      this.setState({
          charTexture: './assets/images/berserker-idle.gif'
        })
      this.setState({ charSelect: false }, function () {
        document.getElementById('battle_sc_span').style.display = 'none';
        charSelected.name = chars[1].name;
        charSelected.hp = chars[1].health;
        charSelected.dmg = chars[1].damage;
        charSelected.xp = chars[1].XP;
        charSelected.growth = chars[1].GROWTH;
        charSelected.texture = chars[1].textures[Math.floor(Math.random() * 2)];
        charSelected.skinArray = chars[1].textures;
        this.initializePlayer();
      });
    } else if (charNum == 2) {
      this.setState({
          charTexture: './assets/images/guild-knight-idle.gif'
        })
      this.setState({ charSelect: false }, function () {
        document.getElementById('battle_sc_span').style.display = 'none';
        charSelected.name = chars[2].name;
        charSelected.hp = chars[2].health;
        charSelected.dmg = chars[2].damage;
        charSelected.xp = chars[2].XP;
        charSelected.growth = chars[2].GROWTH;
        charSelected.texture = chars[2].textures[Math.floor(Math.random() * 2)];
        charSelected.skinArray = chars[2].textures;
        this.initializePlayer();
      });
    } else {
      this.setState({ charSelect: true }, function () {
        document.getElementById('battle_sc_span').style.display = 'visible'
      });
    }
}

  initializeBosses() {
    var boss_low_cnt = new_rooms.length * 2;
    var boss_hi_cnt = Math.ceil(new_rooms.length * 2.75);
    bosses = [];

    // var total_boss_prediction = Math.floor(Math.random() * 2)
    var total_boss_prediction = Math.floor(Math.random() * (boss_hi_cnt - boss_low_cnt) + boss_low_cnt);
    var boss_lo_avg = Math.ceil(total_boss_prediction / new_rooms.length);
    var boss_hi_avg = Math.floor(total_boss_prediction / new_rooms.length);

    for (var x = 0; x < new_rooms.length; x++) {
      new_rooms[x].boss = Math.round(Math.random() * (boss_hi_avg - boss_lo_avg) + boss_lo_avg);
      // Start: Minion iteration
      for (var a = 0; a < new_rooms[x].boss; a++) {
        var boss_coords_x = Math.floor(Math.random() * ((new_rooms[x].x + new_rooms[x].width) - (new_rooms[x].x)) + new_rooms[x].x);
        var boss_coords_y = Math.floor(Math.random() * ((new_rooms[x].y + new_rooms[x].height) - (new_rooms[x].y)) + new_rooms[x].y);

        if (this.elementPlacementInRoom(boss_coords_x, boss_coords_y, new_rooms[x]) == true) {
          var bossPick = Math.floor(Math.random() * 6);
          document.getElementById('row' + boss_coords_y + '_col' + boss_coords_x).className = 'gridElement bosses';
          document.getElementById('row' + boss_coords_y + '_col' + boss_coords_x).setAttribute('data-boss', bossPick);
          document.getElementById('row' + boss_coords_y + '_col' + boss_coords_x).style.backgroundImage = "url('" + boss[bossPick].textures[Math.floor(Math.random() * 2)] + "')";
          document.getElementById('row' + boss_coords_y + '_col' + boss_coords_x).style.background = "white contain no-repeat";
          document.getElementById('row' + boss_coords_y + '_col' + boss_coords_x).setAttribute('data-name', boss[bossPick].name);
          document.getElementById('row' + boss_coords_y + '_col' + boss_coords_x).setAttribute('data-xp', boss[bossPick].XP * this.state.dungeonLvl);
          document.getElementById('row' + boss_coords_y + '_col' + boss_coords_x).setAttribute('data-hp', boss[bossPick].health * this.state.dungeonLvl);
          document.getElementById('row' + boss_coords_y + '_col' + boss_coords_x).setAttribute('data-dmg', boss[bossPick].damage * this.state.dungeonLvl);
          document.getElementById('row' + boss_coords_y + '_col' + boss_coords_x).setAttribute('data-status', 'idle');
          boss[bossPick].x = boss_coords_x;
          boss[bossPick].y = boss_coords_y;
          bosses.push(boss[bossPick]);
        }
      }
    }

    this.setState({
      bossCntr: bosses.length
    })
  }

  initializeMinions() {
    var minion_low_cnt = new_rooms.length * 2;
    var minion_hi_cnt = Math.ceil(new_rooms.length * 2.75);
    minions = [];

    var total_minion_prediction = Math.floor(Math.random() * (minion_hi_cnt - minion_low_cnt) + minion_low_cnt);

    var minion_lo_avg = Math.ceil(total_minion_prediction / new_rooms.length);
    var minion_hi_avg = Math.floor(total_minion_prediction / new_rooms.length);
    for (var x = 0; x < new_rooms.length; x++) {
      new_rooms[x].minions = Math.round(Math.random() * (minion_hi_avg - minion_lo_avg) + minion_lo_avg);
      // Start: Minion iteration
      for (var a = 0; a < new_rooms[x].minions; a++) {
        var minion_coords_x = Math.floor(Math.random() * ((new_rooms[x].x + new_rooms[x].width) - (new_rooms[x].x)) + new_rooms[x].x);
        var minion_coords_y = Math.floor(Math.random() * ((new_rooms[x].y + new_rooms[x].height) - (new_rooms[x].y)) + new_rooms[x].y);

        // Start: Stats for minions
        var minion_stats = Math.floor(Math.random()*(40 - 30 + 1) + 30);
        var minion = {
          health: minion_stats * this.state.dungeonLvl,                                                 // Minions will have incremental health on next stages
          damage: Math.floor(minion_stats / 4) * this.state.dungeonLvl,                                 // Minions will have incremental damage on next stages
          XP: Math.floor(minion_stats / 5) * this.state.dungeonLvl                                      // Minions will now be between 5/7
        };
        // End: Stats for minions

        if (this.elementPlacementInRoom(minion_coords_x, minion_coords_y, new_rooms[x]) == true) {
          document.getElementById('row' + minion_coords_y + '_col' + minion_coords_x).className = 'gridElement minions';
          document.getElementById('row' + minion_coords_y + '_col' + minion_coords_x).style.backgroundImage = "url('" + minionTextures[Math.floor(Math.random() * 2)] + "')";
          document.getElementById('row' + minion_coords_y + '_col' + minion_coords_x).style.background = "white contain no-repeat";
          document.getElementById('row' + minion_coords_y + '_col' + minion_coords_x).setAttribute('data-hp', minion.health);
          document.getElementById('row' + minion_coords_y + '_col' + minion_coords_x).setAttribute('data-dmg', minion.damage);
          document.getElementById('row' + minion_coords_y + '_col' + minion_coords_x).setAttribute('data-xp', minion.XP);
          document.getElementById('row' + minion_coords_y + '_col' + minion_coords_x).setAttribute('data-status', 'idle');
          minion.x = minion_coords_x;
          minion.y = minion_coords_y;
          minions.push(minion);
        }
      }
    }

    this.setState({
      mnCntr: minions.length
    })
  }

  initializeWeapons() {
    var weapon_low_cnt = new_rooms.length * 2;
    var weapon_hi_cnt = Math.ceil(new_rooms.length * 2.75);

    var total_weapon_prediction = Math.floor(Math.random() * (weapon_hi_cnt - weapon_low_cnt) + weapon_low_cnt);

    var weapon_lo_avg = Math.ceil(total_weapon_prediction / new_rooms.length);
    var weapon_hi_avg = Math.floor(total_weapon_prediction / new_rooms.length);
    for (var x = 0; x < new_rooms.length; x++) {
      new_rooms[x].weapon = Math.round(Math.random() * (weapon_hi_avg - weapon_lo_avg) + weapon_lo_avg);

      for (var a = 0; a < new_rooms[x].weapon; a++) {
        var weapon_coords_x = Math.floor(Math.random() * ((new_rooms[x].x + new_rooms[x].width) - (new_rooms[x].x)) + new_rooms[x].x);
        var weapon_coords_y = Math.floor(Math.random() * ((new_rooms[x].y + new_rooms[x].height) - (new_rooms[x].y)) + new_rooms[x].y);

        if (this.elementPlacementInRoom(weapon_coords_x, weapon_coords_y, new_rooms[x]) == true) {
          var weapon_pick = arsenal[Math.floor(Math.random() * (arsenal.length - 1) + 0)];
          document.getElementById('row' + weapon_coords_y + '_col' + weapon_coords_x).className = 'gridElement weapons';
          document.getElementById('row' + weapon_coords_y + '_col' + weapon_coords_x).style.backgroundImage = "url('" + weapon_pick.texture + "')";
          document.getElementById('row' + weapon_coords_y + '_col' + weapon_coords_x).style.background = "white contain no-repeat";
          document.getElementById('row' + weapon_coords_y + '_col' + weapon_coords_x).setAttribute('data-name', weapon_pick.name);
          document.getElementById('row' + weapon_coords_y + '_col' + weapon_coords_x).setAttribute('data-modifier', weapon_pick.modifier);

          weapon_pick.x = weapon_coords_x;
          weapon_pick.y = weapon_coords_y;
          weapons.push(weapon_pick);
        }
      }
    }
  }

  initializeConsumables() {
    var consumable_low_cnt = new_rooms.length * 2;
    var consumable_hi_cnt = Math.ceil(new_rooms.length * 2.75);

    var total_consumable_prediction = Math.floor(Math.random() * (consumable_hi_cnt - consumable_low_cnt) + consumable_low_cnt);

    var consumable_lo_avg = Math.ceil(total_consumable_prediction / new_rooms.length);
    var consumable_hi_avg = Math.floor(total_consumable_prediction / new_rooms.length);
    for (var x = 0; x < new_rooms.length; x++) {
      new_rooms[x].consumable = Math.round(Math.random() * (consumable_hi_avg - consumable_lo_avg) + consumable_lo_avg);
      // Start: Consumable iteration
      for (var a = 0; a < new_rooms[x].weapon; a++) {
        var consumable_coords_x = Math.floor(Math.random() * ((new_rooms[x].x + new_rooms[x].width) - (new_rooms[x].x)) + new_rooms[x].x);
        var consumable_coords_y = Math.floor(Math.random() * ((new_rooms[x].y + new_rooms[x].height) - (new_rooms[x].y)) + new_rooms[x].y);
        if (this.elementPlacementInRoom(consumable_coords_x, consumable_coords_y, new_rooms[x]) == true) {
          document.getElementById('row' + consumable_coords_y + '_col' + consumable_coords_x).className = 'gridElement consumables';
          document.getElementById('row' + consumable_coords_y + '_col' + consumable_coords_x).style.backgroundImage = "url('./assets/images/hp_potion.png')";
          document.getElementById('row' + consumable_coords_y + '_col' + consumable_coords_x).style.background = "white contain no-repeat";
          document.getElementById('row' + consumable_coords_y + '_col' + consumable_coords_x).setAttribute('addHp', Math.floor(Math.random() * 10 + 40));
        }
      }
    }
  }

  initializePortal() {
    if (this.state.dungeonLvl < 5) {
      var lastRoomCnt = new_rooms.length - 1;
      for (var a = new_rooms[lastRoomCnt].y; a < new_rooms[lastRoomCnt].y + new_rooms[lastRoomCnt].height; a++) {
        for (var b = new_rooms[lastRoomCnt].x; b < new_rooms[lastRoomCnt].x + new_rooms[lastRoomCnt].width; b++) {
          var portal_coords_x = Math.floor(Math.floor(Math.random() * ((new_rooms[lastRoomCnt].x + new_rooms[lastRoomCnt].width) - (new_rooms[lastRoomCnt].x)) + new_rooms[lastRoomCnt].x));
          var portal_coords_y = Math.floor(Math.floor(Math.random() * ((new_rooms[lastRoomCnt].y + new_rooms[lastRoomCnt].height) - (new_rooms[lastRoomCnt].y)) + new_rooms[lastRoomCnt].y));
          if (this.elementPlacementInRoom(portal_coords_x, portal_coords_y, new_rooms[lastRoomCnt]) == true) {
           document.getElementById('row' + portal_coords_y + '_col' + portal_coords_x).className = 'gridElement portal';
           document.getElementById('row' + portal_coords_y + '_col' + portal_coords_x).style.backgroundImage = "url('./assets/images/portal_3.png')";
           document.getElementById('row' + portal_coords_y + '_col' + portal_coords_x).style.background = "white contain no-repeat";
           return true;
          }
        }
      }
      return false
    }
  }

  elementPlacementInRoom(x_coords, y_coords, room) {
    if (document.getElementById('row' + y_coords + '_col' + x_coords).className != 'gridElement room') {
        return false;
    }
    else {
      // Check N, S, E, W, NE, NW, SE, SW
      if ((document.getElementById('row' + (y_coords + 1) + '_col' + x_coords).className != 'gridElement room') || (document.getElementById('row' + (y_coords - 1) + '_col' + x_coords).className != 'gridElement room') || (document.getElementById('row' + y_coords + '_col' + (x_coords + 1)).className != 'gridElement room') || (document.getElementById('row' + y_coords + '_col' + (x_coords - 1)).className != 'gridElement room') || (document.getElementById('row' + (y_coords - 1) + '_col' + (x_coords + 1)).className != 'gridElement room') || (document.getElementById('row' + (y_coords - 1) + '_col' + (x_coords - 1)).className != 'gridElement room') || (document.getElementById('row' + (y_coords + 1) + '_col' + (x_coords + 1)).className != 'gridElement room') || (document.getElementById('row' + (y_coords + 1) + '_col' + (x_coords - 1)).className != 'gridElement room'))
        return false;
      else
        return true;
    }
    return false;
  }

playerActivity() {
  var that = this;
  var currentPlayer = document.getElementsByClassName('gridElement player');
  document.addEventListener("keydown", handler = (event) => {
    if (event.keyCode == 87 || event.keyCode == 38 || event.keyCode == 104) {
        event.preventDefault();
        if (document.getElementById('row' + (player.y - 1) + '_col' + player.x) != null && document.getElementById('row' + (player.y - 1) + '_col' + player.x).className != 'gridElement') {
          if (document.getElementById('row' + (player.y - 1) + '_col' + player.x).className == 'gridElement room') {
            this.pa_removeAttribute(player);
            player.y = player.y - 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">Player moves north\n</p>';
          } else if (document.getElementById('row' + (player.y - 1) + '_col' + player.x).className == 'gridElement minions') {
            var currentEnemy = document.getElementById('row' + (player.y - 1) + '_col' + player.x);
            var currentEnemyHp = parseInt(currentEnemy.getAttribute('data-hp'));
            var currentEnemyDmg = parseInt(currentEnemy.getAttribute('data-dmg'));
            var currentEnemyXp = parseInt(currentEnemy.getAttribute('data-xp'));
            currentEnemy.setAttribute('data-status', 'engaged');
            playerString += '<p class="bui_span_p">An enemy minion hits the '+charSelected.name+' for '+currentEnemyDmg+' dmg. The '+charSelected.name+' retaliates with '+charSelected.dmg+' dmg.\n</p>';
            var charHp = parseInt(document.getElementById('row' + player.y + '_col' + player.x).getAttribute('data-hp', charSelected.hp)) - currentEnemyDmg;
            charSelected.hp = charHp;
            currentPlayer[0].setAttribute('data-hp', charSelected.hp);
            var finalEnemyHp = currentEnemyHp - parseInt(charSelected.dmg);
            currentEnemy.setAttribute('data-hp', finalEnemyHp);

            if (charSelected.hp <= 0 && finalEnemyHp > 0) {
              playerString += '<p class="bui_span_p">An enemy minion slays the ' + charSelected.name + '.\n</p>';
              this.pa_setAttribute(charSelected);
              document.removeEventListener("keydown", handler);
              // this.gameDefeat()
            } else if (charSelected.hp <= 0 && finalEnemyHp <= 0) {
              playerString += '<p class="bui_span_p">The ' + charSelected.name + ' perished while slaying an enemy minion.\n</p>';
              this.pa_setAttribute(charSelected);
              document.removeEventListener("keydown", handler);
              // this.gameDefeat()
            } else if (charSelected.hp > 0 && finalEnemyHp <= 0) {
              this.pa_removeAttribute(player);
              player.y = player.y - 1;
              document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
              document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
              document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";

              this.xpTransition(charSelected, currentEnemyXp);

              this.pa_setAttribute(charSelected);
              this.setState({
                mnCntr: this.state.mnCntr - 1,
              });
              this.fogOfWar();
              playerString += '<p class="bui_span_p">The ' + charSelected.name + ' has vanquished the enemy minion.\n</p>';
            } else {
            }
          } else if (document.getElementById('row' + (player.y - 1) + '_col' + player.x).className == 'gridElement bosses') {
            var currentBoss = document.getElementById('row' + (player.y - 1) + '_col' + player.x);
            var currentBossName = currentBoss.getAttribute('data-name');
            var currentBossHp = parseInt(currentBoss.getAttribute('data-hp'));
            var currentBossDmg = parseInt(currentBoss.getAttribute('data-dmg'));
            var currentBossXp = parseInt(currentBoss.getAttribute('data-xp'));
            currentBoss.setAttribute('data-status', 'engaged');
            playerString += '<p class="bui_span_p">A '+currentBossName+' hits the '+charSelected.name+' for '+currentBossDmg+' dmg. The '+charSelected.name+' retaliates with '+charSelected.dmg+' dmg.\n</p>';
            var charHp = parseInt(document.getElementById('row' + player.y + '_col' + player.x).getAttribute('data-hp', charSelected.hp)) - currentBossDmg;
            charSelected.hp = charHp;
            currentPlayer[0].setAttribute('data-hp', charSelected.hp);
            var finalBossHp = currentBossHp - parseInt(charSelected.dmg);
            currentBoss.setAttribute('data-hp', finalBossHp);

            if (charSelected.hp <= 0 && finalBossHp > 0) {
              playerString += '<p class="bui_span_p">'+currentBossName+'  slays the ' + charSelected.name + '.\n</p>';
              this.pa_setAttribute(charSelected);
              document.removeEventListener("keydown", handler);
            } else if (charSelected.hp <= 0 && finalBossHp <= 0) {
              playerString += '<p class="bui_span_p">The ' + charSelected.name + ' perished while slaying the '+currentBossName+'.\n</p>';
              this.pa_setAttribute(charSelected);
              document.removeEventListener("keydown", handler);
            } else if (charSelected.hp > 0 && finalBossHp <= 0) {
              this.pa_removeAttribute(player);
              player.y = player.y - 1;
              document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
              document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
              document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
              this.xpTransition(charSelected, currentBossXp);
              this.pa_setAttribute(charSelected);
              this.setState({
                bossCntr: this.state.bossCntr - 1,
              });
              this.fogOfWar();
              playerString += '<p class="bui_span_p">The ' + charSelected.name + ' has vanquished '+currentBossName+'.\n</p>';
              this.gameVictory();
            } else {}
          } else if (document.getElementById('row' + (player.y - 1) + '_col' + player.x).className == 'gridElement weapons') {
            var currentWeapon = document.getElementById('row' + (player.y - 1) + '_col' + player.x);
            var currentWeaponName = currentWeapon.getAttribute('data-name');
            var currentWeaponMod = currentWeapon.getAttribute('data-modifier');
            var wpString = '';
            this.pa_removeAttribute(player);
            player.y = player.y - 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
            wpString = this.setPlayerAfterArsenalProc(currentWeapon, currentWeaponName, currentWeaponMod);
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">Player obtains '+wpString+'\n</p>';
          } else if (document.getElementById('row' + (player.y - 1) + '_col' + player.x).className == 'gridElement consumables') {
            var currentConsumable = document.getElementById('row' + (player.y - 1) + '_col' + player.x);
            var currentConsumableBonus = parseInt(currentConsumable.getAttribute('addHp'));
            this.pa_removeAttribute(player);
            player.y = player.y - 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
            charSelected.hp = charSelected.hp + currentConsumableBonus;
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">The ' + charSelected.name + ' consumes a health potion and improves their vitality by '+currentConsumableBonus+' hp \n</p>';
          } else if (document.getElementById('row' + (player.y - 1) + '_col' + player.x).className == 'gridElement portal') {
            this.pa_removeAttribute(player);
            player.y = player.y - 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">Player descends to the next level\n</p>';
            document.removeEventListener('keydown', handler);
            this.setState({
              gameStatus: 'ongoing',
              dungeonLvl: this.state.dungeonLvl + 1
            })
            this.clearDungeon();
            this.setDungeon();
            this.initializePlayer();
          } else {
            playerString += '<p class="bui_span_p">The Player seems confused as to where to go...\n</p>';
          }
        }
    } else if (event.keyCode == 65 || event.keyCode == 37 || event.keyCode == 100) {
        event.preventDefault();
        if (document.getElementById('row' + player.y + '_col' + (player.x - 1)) != null && document.getElementById('row' + player.y + '_col' + (player.x - 1)).className != 'gridElement') {
          if (document.getElementById('row' + player.y + '_col' + (player.x - 1)).className == 'gridElement room') {
            this.pa_removeAttribute(player);
            player.x = player.x - 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[1] +"')";
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">Player moves west\n</p>';
          } else if (document.getElementById('row' + player.y + '_col' + (player.x - 1)).className == 'gridElement minions') {
              var currentEnemy = document.getElementById('row' + player.y + '_col' + (player.x - 1));
              var currentEnemyHp = parseInt(currentEnemy.getAttribute('data-hp'));
              var currentEnemyDmg = parseInt(currentEnemy.getAttribute('data-dmg'));
              var currentEnemyXp = parseInt(currentEnemy.getAttribute('data-xp'));
              playerString += '<p class="bui_span_p">An enemy minion hits the '+charSelected.name+' for '+currentEnemyDmg+' dmg. The '+charSelected.name+' retaliates with '+charSelected.dmg+' dmg.\n</p>';
              currentEnemy.setAttribute('data-status', 'engaged');
              var charHp = parseInt(document.getElementById('row' + player.y + '_col' + player.x).getAttribute('data-hp', charSelected.hp)) - currentEnemyDmg;
              charSelected.hp = charHp;
              currentPlayer[0].setAttribute('data-hp', charSelected.hp);
              var finalEnemyHp = currentEnemyHp - parseInt(charSelected.dmg);
              currentEnemy.setAttribute('data-hp', finalEnemyHp);
              if (charSelected.hp <= 0 && finalEnemyHp > 0) {
                playerString += '<p class="bui_span_p">An enemy minion slays the ' + charSelected.name + '.\n</p>';
                this.pa_setAttribute(charSelected);
                document.removeEventListener("keydown", handler);
                // this.gameDefeat()
              } else if (charSelected.hp <= 0 && finalEnemyHp <= 0) {
                playerString += '<p class="bui_span_p">The ' + charSelected.name + ' perished while slaying an enemy minion.\n</p>';
                this.pa_setAttribute(charSelected);
                document.removeEventListener("keydown", handler);
                // this.gameDefeat()
              } else if (charSelected.hp > 0 && finalEnemyHp <= 0) {
                this.pa_removeAttribute(player)
                player.x = player.x - 1;
                document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
                document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
                document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
                this.xpTransition(charSelected, currentEnemyXp);
                this.pa_setAttribute(charSelected);
                this.setState({
                  mnCntr: this.state.mnCntr - 1,
                });
                this.fogOfWar();
                playerString += '<p class="bui_span_p">The ' + charSelected.name + ' has vanquished the enemy minion.\n</p>';
              } else {}
          } else if (document.getElementById('row' + player.y + '_col' + (player.x - 1)).className == 'gridElement bosses') {
              var currentBoss = document.getElementById('row' + player.y + '_col' + (player.x - 1));
              var currentBossName = currentBoss.getAttribute('data-name');
              var currentBossHp = parseInt(currentBoss.getAttribute('data-hp'));
              var currentBossDmg = parseInt(currentBoss.getAttribute('data-dmg'));
              var currentBossXp = parseInt(currentBoss.getAttribute('data-xp'));
              currentBoss.setAttribute('data-status', 'engaged');
              playerString += '<p class="bui_span_p">A '+currentBossName+' hits the '+charSelected.name+' for '+currentBossDmg+' dmg. The '+charSelected.name+' retaliates with '+charSelected.dmg+' dmg.\n</p>';
              var charHp = parseInt(document.getElementById('row' + player.y + '_col' + player.x).getAttribute('data-hp', charSelected.hp)) - currentBossDmg;
              charSelected.hp = charHp;
              currentPlayer[0].setAttribute('data-hp', charSelected.hp);
              var finalBossHp = currentBossHp - parseInt(charSelected.dmg);
              currentBoss.setAttribute('data-hp', finalBossHp);

              if (charSelected.hp <= 0 && finalBossHp > 0) {
                playerString += '<p class="bui_span_p">'+currentBossName+'  slays the ' + charSelected.name + '.\n</p>';
                this.pa_setAttribute(charSelected);
                document.removeEventListener("keydown", handler);
              } else if (charSelected.hp <= 0 && finalBossHp <= 0) {
                playerString += '<p class="bui_span_p">The ' + charSelected.name + ' perished while slaying the '+currentBossName+'.\n</p>';
                this.pa_setAttribute(charSelected);
                document.removeEventListener("keydown", handler);
              } else if (charSelected.hp > 0 && finalBossHp <= 0) {
                this.pa_removeAttribute(player);
                player.x = player.x - 1;
                document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
                document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
                document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
                this.xpTransition(charSelected, currentBossXp);
                this.pa_setAttribute(charSelected);
                this.setState({
                  bossCntr: this.state.bossCntr - 1,
                });
                this.fogOfWar();
                playerString += '<p class="bui_span_p">The ' + charSelected.name + ' has vanquished the '+currentBossName+'.\n</p>';
                this.gameVictory();
              } else {}
          } else if (document.getElementById('row' + player.y + '_col' + (player.x - 1)).className == 'gridElement weapons') {
            var currentWeapon = document.getElementById('row' + player.y + '_col' + (player.x - 1));
            var currentWeaponName = currentWeapon.getAttribute('data-name');
            var currentWeaponMod = currentWeapon.getAttribute('data-modifier');
            var wpString = '';
            this.pa_removeAttribute(player);
            player.x = player.x - 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
            wpString = this.setPlayerAfterArsenalProc(currentWeapon, currentWeaponName, currentWeaponMod);
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">Player obtains '+wpString+'\n</p>';
          } else if (document.getElementById('row' + player.y + '_col' + (player.x - 1)).className == 'gridElement consumables') {
            var currentConsumable = document.getElementById('row' + player.y + '_col' + (player.x - 1));
            var currentConsumableBonus = parseInt(currentConsumable.getAttribute('addHp'));
            this.pa_removeAttribute(player);
            player.x = player.x - 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
            charSelected.hp = charSelected.hp + currentConsumableBonus;
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">The ' + charSelected.name + ' consumes a health potion and improves their vitality by '+currentConsumableBonus+' hp \n</p>';
          } else if (document.getElementById('row' + player.y + '_col' + (player.x - 1)).className == 'gridElement portal') {
            this.pa_removeAttribute(player);
            player.x = player.x - 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">Player descends to the next level\n</p>';
            document.removeEventListener('keydown', handler);
            this.setState({
              gameStatus: 'ongoing',
              dungeonLvl: this.state.dungeonLvl + 1
            })
            this.clearDungeon();
            this.setDungeon();
            this.initializePlayer();
          } else {
            playerString += '<p class="bui_span_p">The Player seems confused as to where to go...\n</p>';
          }
        }
    } else if (event.keyCode == 68 || event.keyCode == 39 || event.keyCode == 102) {
        event.preventDefault();
        if (document.getElementById('row' + player.y + '_col' + (player.x + 1)) != null && document.getElementById('row' + player.y + '_col' + (player.x + 1)).className != 'gridElement') {
          this.fogOfWar();
          if (document.getElementById('row' + player.y + '_col' + (player.x + 1)).className == 'gridElement room') {
            this.pa_removeAttribute(player);
            player.x = player.x + 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[0] +"')";
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">Player moves east\n</p>';
          } else if (document.getElementById('row' + player.y + '_col' + (player.x + 1)).className == 'gridElement minions') {
              var currentEnemy = document.getElementById('row' + player.y + '_col' + (player.x + 1));
              var currentEnemyHp = parseInt(currentEnemy.getAttribute('data-hp'));
              var currentEnemyDmg = parseInt(currentEnemy.getAttribute('data-dmg'));
              var currentEnemyXp = parseInt(currentEnemy.getAttribute('data-xp'));
              currentEnemy.setAttribute('data-status', 'engaged');
              playerString += '<p class="bui_span_p">An enemy minion hits the '+charSelected.name+' for '+currentEnemyDmg+' dmg. The '+charSelected.name+' retaliates with '+charSelected.dmg+' dmg.\n</p>';
              var charHp = parseInt(document.getElementById('row' + player.y + '_col' + player.x).getAttribute('data-hp', charSelected.hp)) - currentEnemyDmg;
              charSelected.hp = charHp;
              currentPlayer[0].setAttribute('data-hp', charSelected.hp);
              var finalEnemyHp = currentEnemyHp - parseInt(charSelected.dmg);
              currentEnemy.setAttribute('data-hp', finalEnemyHp);
              if (charSelected.hp <= 0 && finalEnemyHp > 0) {
                playerString += '<p class="bui_span_p">An enemy minion slays the ' + charSelected.name + '.\n</p>';
                this.pa_setAttribute(charSelected);
                document.removeEventListener("keydown", handler);
                // this.gameDefeat()
              } else if (charSelected.hp <= 0 && finalEnemyHp <= 0) {
                playerString += '<p class="bui_span_p">The ' + charSelected.name + ' perished while slaying an enemy minion.\n</p>';
                this.pa_setAttribute(charSelected);
                document.removeEventListener("keydown", handler);
                // this.gameDefeat()
              } else if (charSelected.hp > 0 && finalEnemyHp <= 0) {
                this.pa_removeAttribute(player)
                player.x = player.x + 1
                document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
                document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
                document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
                this.xpTransition(charSelected, currentEnemyXp);
                this.pa_setAttribute(charSelected);
                this.setState({
                  mnCntr: this.state.mnCntr - 1,
                });
                this.fogOfWar();
                playerString += '<p class="bui_span_p">The ' + charSelected.name + ' has vanquished the enemy minion.\n</p>';
              } else {}
          } else if (document.getElementById('row' + player.y + '_col' + (player.x + 1)).className == 'gridElement bosses') {
              var currentBoss = document.getElementById('row' + player.y + '_col' + (player.x + 1));
              var currentBossName = currentBoss.getAttribute('data-name');
              var currentBossHp = parseInt(currentBoss.getAttribute('data-hp'));
              var currentBossDmg = parseInt(currentBoss.getAttribute('data-dmg'));
              var currentBossXp = parseInt(currentBoss.getAttribute('data-xp'));
              currentBoss.setAttribute('data-status', 'engaged');
              playerString += '<p class="bui_span_p">A '+currentBossName+' hits the '+charSelected.name+' for '+currentBossDmg+' dmg. The '+charSelected.name+' retaliates with '+charSelected.dmg+' dmg.\n</p>';
              var charHp = parseInt(document.getElementById('row' + player.y + '_col' + player.x).getAttribute('data-hp', charSelected.hp)) - currentBossDmg;
              charSelected.hp = charHp;
              currentPlayer[0].setAttribute('data-hp', charSelected.hp);
              var finalBossHp = currentBossHp - parseInt(charSelected.dmg);
              currentBoss.setAttribute('data-hp', finalBossHp);
              if (charSelected.hp <= 0 && finalBossHp > 0) {
                playerString += '<p class="bui_span_p">'+currentBossName+'  slays the ' + charSelected.name + '.\n</p>';
                this.pa_setAttribute(charSelected);
                document.removeEventListener("keydown", handler);
              } else if (charSelected.hp <= 0 && finalBossHp <= 0) {
                playerString += '<p class="bui_span_p">The ' + charSelected.name + ' perished while slaying the '+currentBossName+'.\n</p>';
                this.pa_setAttribute(charSelected);
                document.removeEventListener("keydown", handler);
              } else if (charSelected.hp > 0 && finalBossHp <= 0) {
                this.pa_removeAttribute(player);
                player.x = player.x + 1;
                document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
                document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
                document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
                this.xpTransition(charSelected, currentBossXp);
                this.pa_setAttribute(charSelected);
                this.setState({
                  bossCntr: this.state.bossCntr - 1,
                });
                this.fogOfWar();
                this.gameVictory();
              } else {
                playerString += '<p class="bui_span_p">The fight with the '+currentBossName+' continues.\n</p>';
              }
          } else if (document.getElementById('row' + player.y + '_col' + (player.x + 1)).className == 'gridElement weapons') {
            var currentWeapon = document.getElementById('row' + player.y + '_col' + (player.x + 1));
            var currentWeaponName = currentWeapon.getAttribute('data-name');
            var currentWeaponMod = currentWeapon.getAttribute('data-modifier');
            var wpString = '';
            this.pa_removeAttribute(player);
            player.x = player.x + 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[0] +"')";
            wpString = this.setPlayerAfterArsenalProc(currentWeapon, currentWeaponName, currentWeaponMod);
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">Player obtains '+wpString+'\n</p>';
          } else if (document.getElementById('row' + player.y + '_col' + (player.x + 1)).className == 'gridElement consumables') {
            var currentConsumable = document.getElementById('row' + player.y + '_col' + (player.x + 1));
            var currentConsumableBonus = parseInt(currentConsumable.getAttribute('addHp'));
            this.pa_removeAttribute(player);
            player.x = player.x + 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[0] +"')";
            charSelected.hp = charSelected.hp + currentConsumableBonus;
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">The ' + charSelected.name + ' consumes a health potion and improves their vitality by '+currentConsumableBonus+' hp \n</p>';
          } else if (document.getElementById('row' + player.y + '_col' + (player.x + 1)).className == 'gridElement portal') {
            this.pa_removeAttribute(player);
            player.x = player.x + 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[0] +"')";
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">Player descends to the next level\n</p>';
            document.removeEventListener('keydown', handler);
            this.setState({
              gameStatus: 'ongoing',
              dungeonLvl: this.state.dungeonLvl + 1
            })
            this.clearDungeon();
            this.setDungeon();
            this.initializePlayer();
          } else {
            playerString += '<p class="bui_span_p">The Player seems confused as to where to go...\n</p>';
          }
        }
    } else if (event.keyCode == 83 || event.keyCode == 40 || event.keyCode == 98) {
        event.preventDefault();
        if (document.getElementById('row' + (player.y + 1) + '_col' + player.x) != null && document.getElementById('row' + (player.y + 1) + '_col' + player.x).className != 'gridElement') {
          if (document.getElementById('row' + (player.y + 1) + '_col' + player.x).className == 'gridElement room') {
            this.pa_removeAttribute(player);
            player.y = player.y + 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">Player moves south\n</p>'
          } else if (document.getElementById('row' + (player.y + 1) + '_col' + player.x).className == 'gridElement minions') {
              var currentEnemy = document.getElementById('row' + (player.y + 1) + '_col' + player.x);
              var currentEnemyHp = parseInt(currentEnemy.getAttribute('data-hp'));
              var currentEnemyDmg = parseInt(currentEnemy.getAttribute('data-dmg'));
              var currentEnemyXp = parseInt(currentEnemy.getAttribute('data-xp'));
              currentEnemy.setAttribute('data-status', 'engaged');
              playerString += '<p class="bui_span_p">An enemy minion hits the '+charSelected.name+' for '+currentEnemyDmg+' dmg. The '+charSelected.name+' retaliates with '+charSelected.dmg+' dmg.\n</p>';
              var charHp = parseInt(document.getElementById('row' + player.y + '_col' + player.x).getAttribute('data-hp', charSelected.hp)) - currentEnemyDmg;
              charSelected.hp = charHp;
              currentPlayer[0].setAttribute('data-hp', charSelected.hp);
              var finalEnemyHp = currentEnemyHp - parseInt(charSelected.dmg);
              currentEnemy.setAttribute('data-hp', finalEnemyHp);
              if (charSelected.hp <= 0 && finalEnemyHp > 0) {
                playerString += '<p class="bui_span_p">An enemy minion slays the ' + charSelected.name + '.\n</p>';
                this.pa_setAttribute(charSelected);
                document.removeEventListener("keydown", handler);
              } else if (charSelected.hp <= 0 && finalEnemyHp <= 0) {
                playerString += '<p class="bui_span_p">The ' + charSelected.name + ' perished while slaying an enemy minion.\n</p>';
                this.pa_setAttribute(charSelected);
                document.removeEventListener("keydown", handler);
              } else if (charSelected.hp > 0 && finalEnemyHp <= 0) {
                this.pa_removeAttribute(player);
                player.y = player.y + 1;
                document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
                document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
                document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
                this.xpTransition(charSelected, currentEnemyXp);
                this.pa_setAttribute(charSelected);
                this.setState({
                  mnCntr: this.state.mnCntr - 1,
                });
                this.fogOfWar();
                playerString += '<p class="bui_span_p">The ' + charSelected.name + ' has vanquished the enemy minion.\n</p>';
              } else {}
          } else if (document.getElementById('row' + (player.y + 1) + '_col' + player.x).className == 'gridElement bosses') {
              var currentBoss = document.getElementById('row' + (player.y + 1) + '_col' + player.x);
              var currentBossName = currentBoss.getAttribute('data-name');
              var currentBossHp = parseInt(currentBoss.getAttribute('data-hp'));
              var currentBossDmg = parseInt(currentBoss.getAttribute('data-dmg'));
              var currentBossXp = parseInt(currentBoss.getAttribute('data-xp'));
              currentBoss.setAttribute('data-status', 'engaged');
              playerString += '<p class="bui_span_p">A '+currentBossName+' hits the '+charSelected.name+' for '+currentBossDmg+' dmg. The '+charSelected.name+' retaliates with '+charSelected.dmg+' dmg.\n</p>';
              var charHp = parseInt(document.getElementById('row' + player.y + '_col' + player.x).getAttribute('data-hp', charSelected.hp)) - currentBossDmg;
              charSelected.hp = charHp;
              currentPlayer[0].setAttribute('data-hp', charSelected.hp);
              var finalBossHp = currentBossHp - parseInt(charSelected.dmg);
              currentBoss.setAttribute('data-hp', finalBossHp);
              if (charSelected.hp <= 0 && finalBossHp > 0) {
                playerString += '<p class="bui_span_p">'+currentBossName+'  slays the ' + charSelected.name + '.\n</p>';
                this.pa_setAttribute(charSelected);
                document.removeEventListener("keydown", handler);
                // this.gameDefeat()
              } else if (charSelected.hp <= 0 && finalBossHp <= 0) {
                playerString += '<p class="bui_span_p">The ' + charSelected.name + ' perished while slaying the '+currentBossName+'.\n</p>'
                this.pa_setAttribute(charSelected);
                document.removeEventListener("keydown", handler);
                // this.gameDefeat()
              } else if (charSelected.hp > 0 && finalBossHp <= 0) {
                this.pa_removeAttribute(player);
                player.y = player.y + 1;
                document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
                document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
                document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
                this.xpTransition(charSelected, currentBossXp);
                this.pa_setAttribute(charSelected);
                this.setState({
                  bossCntr: this.state.bossCntr - 1,
                });
                this.fogOfWar()
                playerString += '<p class="bui_span_p">The ' + charSelected.name + ' has vanquished the '+currentBossName+'.\n</p>';
                this.gameVictory();
              } else {}
          } else if (document.getElementById('row' + (player.y + 1) + '_col' + player.x).className == 'gridElement weapons') {
            var currentWeapon = document.getElementById('row' + (player.y + 1) + '_col' + player.x);
            var currentWeaponName = currentWeapon.getAttribute('data-name');
            var currentWeaponMod = currentWeapon.getAttribute('data-modifier');
            var wpString = '';
            this.pa_removeAttribute(player);
            player.y = player.y + 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
            wpString = this.setPlayerAfterArsenalProc(currentWeapon, currentWeaponName, currentWeaponMod);
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">Player obtains '+wpString+'\n</p>';
          } else if (document.getElementById('row' + (player.y + 1) + '_col' + player.x).className == 'gridElement consumables') {
            var currentConsumable = document.getElementById('row' + (player.y + 1) + '_col' + player.x);
            var currentConsumableBonus = parseInt(currentConsumable.getAttribute('addHp'));
            this.pa_removeAttribute(player);
            player.y = player.y + 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
            charSelected.hp = charSelected.hp + currentConsumableBonus;
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">The ' + charSelected.name + ' consumes a health potion and improves their vitality by '+currentConsumableBonus+' hp \n</p>';
          } else if (document.getElementById('row' + (player.y + 1) + '_col' + player.x).className == 'gridElement portal') {
            this.pa_removeAttribute(player);
            player.y = player.y + 1;
            document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
            document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
            this.pa_setAttribute(charSelected);
            this.fogOfWar();
            playerString += '<p class="bui_span_p">Player descends to the next level\n</p>';
            document.removeEventListener('keydown', handler);
            this.setState({
              gameStatus: 'ongoing',
              dungeonLvl: this.state.dungeonLvl + 1
            })
            this.clearDungeon();
            this.setDungeon();
            this.initializePlayer();
          } else {
            playerString += '<p class="bui_span_p">The Player seems confused as to where to go...\n</p>';
          }
        }
    }

    var total = ((playerString
              ? playerString
              : "")).split("\n");

    if (total.length > 3)
      total = total.slice(total.length - 4);

    playerString = total.join("\n");
    document.getElementById('battle_ui_span').innerHTML = playerString;
    var bui_span_p = document.getElementsByClassName('bui_span_p');
    for (var x = 0; x < bui_span_p.length; x++) {
      if (x == bui_span_p.length - 1) {
        bui_span_p[x].style.color = 'pink';
        bui_span_p[x].style.opacity = '1.0';
      }
    }
  })
}

setPlayerAfterArsenalProc(currentWeapon, currentWeaponName, currentWeaponMod) {
  var wpString = '';
  var xpAttr = 0;
  var dmgAttr = 0;
  var hpAttr = 0;
  var xpAttrDiff = 0;
  var hpAttrDiff = 0;
  var dmgAttrDiff = 0;
  if (currentWeaponMod == 'xpm') {
    xpAttr = charSelected.xp * 2;
    xpAttrDiff = this.xpTransition(charSelected, xpAttr)
    wpString = currentWeaponName+'. The '+charSelected.name+' increases the xp by '+xpAttrDiff+'.';
  } else if (currentWeaponMod == 'hpm') {
    hpAttr = Math.floor(charSelected.hp * 1.20);
    hpAttrDiff = hpAttr - charSelected.hp;
    charSelected.hp = hpAttr;
    wpString = currentWeaponName+'. The '+charSelected.name+' increases the hp by '+hpAttrDiff+'.';
  } else if (currentWeaponMod == 'dpm') {
    dmgAttr = Math.floor(charSelected.dmg * 1.20);
    dmgAttrDiff = dmgAttr - charSelected.dmg;
    charSelected.dmg = dmgAttr;
    wpString = currentWeaponName+'. The '+charSelected.name+' increases the dmg by '+dmgAttrDiff+'.';
  } else if (currentWeaponMod == 'bhp') {
    hpAttr = charSelected.hp + 20;
    hpAttrDiff = hpAttr - charSelected.hp;
    charSelected.hp = hpAttr;
    wpString = currentWeaponName+'. The '+charSelected.name+' increases the hp by '+hpAttrDiff+'.';
  } else if (currentWeaponMod == 'bxp') {
    xpAttr = charSelected.xp + 20;
    xpAttrDiff = this.xpTransition(charSelected, xpAttr);
    wpString = currentWeaponName+'. The '+charSelected.name+' increases the xp by '+xpAttrDiff+'.';
  } else if (currentWeaponMod == 'bdp') {
    dmgAttr = charSelected.dmg + 20;
    dmgAttrDiff = dmgAttr - charSelected.dmg;
    charSelected.dmg = dmgAttr;
    wpString = currentWeaponName+'. The '+charSelected.name+' increases the dmg by '+dmgAttrDiff+'.';
  } else if (currentWeaponMod == 'xpm_hpm') {
    xpAttr = Math.floor(charSelected.xp * 1.10);
    xpAttrDiff = this.xpTransition(charSelected, xpAttr);
    hpAttr = Math.floor(charSelected.hp * 1.10);
    hpAttrDiff = hpAttr - charSelected.hp;
    charSelected.hp = hpAttr;
    wpString = currentWeaponName+'. The '+charSelected.name+' increases the hp by '+hpAttrDiff+' and the xp by '+xpAttrDiff+'.';
  } else if (currentWeaponMod == 'xpm_dpm') {
    xpAttr = Math.floor(charSelected.xp * 1.10);
    xpAttrDiff = this.xpTransition(charSelected, xpAttr);
    dmgAttr = Math.floor(charSelected.dmg * 1.10);
    dmgAttrDiff = dmgAttr - charSelected.dmg;
    charSelected.dmg = dmgAttr;
    wpString = currentWeaponName+'. The '+charSelected.name+' increases the dmg by '+dmgAttrDiff+' and the xp by '+xpAttrDiff+'.';
  } else if (currentWeaponMod == 'dpm_hpm') {
    hpAttr = Math.floor(charSelected.hp * 1.10);
    hpAttrDiff = hpAttr - charSelected.hp;
    charSelected.hp = hpAttr;
    dmgAttr = Math.floor(charSelected.dmg * 1.10);
    dmgAttrDiff = dmgAttr - charSelected.dmg;
    charSelected.dmg = dmgAttr;
    wpString = currentWeaponName+'. The '+charSelected.name+' increases the hp by '+hpAttrDiff+' and the dmg by '+dmgAttrDiff+'.';
  } else if (currentWeaponMod == 'bhp_bxp_bdp') {
    hpAttr = charSelected.hp + 10;
    hpAttrDiff = hpAttr - charSelected.hp;
    charSelected.hp = hpAttr;
    dmgAttr = charSelected.dmg + 10;
    dmgAttrDiff = dmgAttr - charSelected.dmg;
    charSelected.dmg = dmgAttr;
    xpAttr = charSelected.xp + 10;
    xpAttrDiff = this.xpTransition(charSelected, xpAttr);
    wpString = currentWeaponName+'. The '+charSelected.name+' increases the hp by '+hpAttrDiff+', xp by '+xpAttrDiff+' and dmg by '+dmgAttrDiff+'.';
  } else {
    wpString = '';
  }
  return wpString;
}

pa_removeAttribute(player) {
  document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement room';
  document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('" + roomTextures[Math.floor(Math.random() * 5)] + "')";
  document.getElementById('row' + player.y + '_col' + player.x).style.background = "white contain no-repeat";
  document.getElementById('row' + player.y + '_col' + player.x).removeAttribute('data-name');
  document.getElementById('row' + player.y + '_col' + player.x).removeAttribute('data-hp');
  document.getElementById('row' + player.y + '_col' + player.x).removeAttribute('data-dmg');
  document.getElementById('row' + player.y + '_col' + player.x).removeAttribute('data-xp');
  document.getElementById('row' + player.y + '_col' + player.x).removeAttribute('data-growth');
  document.getElementById('row' + player.y + '_col' + player.x).removeAttribute('data-skins');
}

pa_setAttribute(charSelected) {
  document.getElementById('row' + player.y + '_col' + player.x).style.background = "white contain no-repeat";
  document.getElementById('row' + player.y + '_col' + player.x).setAttribute('data-name', charSelected.name);
  document.getElementById('row' + player.y + '_col' + player.x).setAttribute('data-hp', charSelected.hp);
  document.getElementById('row' + player.y + '_col' + player.x).setAttribute('data-dmg', charSelected.dmg);
  document.getElementById('row' + player.y + '_col' + player.x).setAttribute('data-xp', charSelected.xp);
  document.getElementById('row' + player.y + '_col' + player.x).setAttribute('data-growth', charSelected.growth);
  document.getElementById('row' + player.y + '_col' + player.x).setAttribute('data-skins', charSelected.skinArray);
  document.getElementById('player_intro_span').innerHTML = '';

  this.setState({
    playerHP: charSelected.hp,
    playerDmg: charSelected.dmg,
    playerXP: charSelected.xp,
  })
}

xpTransition(charSelected, xpSource) {
  var XpToReceive = Math.floor(parseFloat(charSelected.growth) * xpSource);
  charSelected.xp = charSelected.xp + XpToReceive;
  if (charSelected.xp >= 100) {
    if (charSelected.name == 'hunter') {
      charSelected.xp = 1;
      charSelected.dmg += (6 * this.state.dungeonLvl);
      charSelected.hp += (12 * this.state.dungeonLvl);
    } else if (charSelected.name == 'berserker') {
      charSelected.xp = 1;
      charSelected.dmg += (5 * this.state.dungeonLvl);
      charSelected.hp += (10 * this.state.dungeonLvl);
    } else if (charSelected.name == 'sentinel') {
      charSelected.xp = 1;
      charSelected.dmg += (5 * this.state.dungeonLvl);
      charSelected.hp += (10 * this.state.dungeonLvl);
    }

    this.setState({
      charLvl: this.state.charLvl + 1
    })

  }
  return XpToReceive;
}

minionActivity() {
  var that = this;
  var minionList = document.getElementsByClassName('gridElement minions');
  minionInterval = setInterval(function() {
    Array.prototype.forEach.call(minionList, function(mn) {
      var minionRow = parseInt(mn.getAttribute("data-row"));
      var minionCol = parseInt(mn.getAttribute("data-col"));
      var randomCell = document.getElementById('row' + (minionRow + Math.floor(Math.random() * 3) - 1) + '_col' + (minionCol + Math.floor(Math.random() * 3) - 1));
      var currentMinion = document.getElementById('row' + minionRow + '_col' + minionCol);
      var minionHp = parseInt(mn.getAttribute('data-hp'));
      var minionDmg = parseInt(mn.getAttribute('data-dmg'));
      var minionXp = parseInt(mn.getAttribute('data-xp'));
      // var playerString = ''

      var currentPlayerHp = '';
      var currentPlayerDmg = '';
      var currentPlayerXp = '';

      var currentPlayer = document.getElementsByClassName('gridElement player');
      if (mn.getAttribute('data-status') == 'idle') {
        if (randomCell != null && randomCell.className != 'gridElement') {
          if (randomCell.className == 'gridElement room') {
            mn.style.backgroundImage = "url('" + roomTextures[Math.floor(Math.random() * 5)] + "')";
            mn.style.background = "white contain no-repeat";
            mn.className = 'gridElement room';
            randomCell.className = 'gridElement minions';
            randomCell.style.backgroundImage = "url('" + minionTextures[Math.floor(Math.random() * 2)] + "')";
            randomCell.setAttribute('data-hp', minionHp);
            randomCell.setAttribute('data-dmg', minionDmg);
            randomCell.setAttribute('data-xp', minionXp);
            randomCell.setAttribute('data-status', 'idle');
            mn.removeAttribute('data-hp');
            mn.removeAttribute('data-dmg');
            mn.removeAttribute('data-xp');
            mn.removeAttribute('data-status');
            randomCell.style.background = "white contain no-repeat";
          }
        }
      } else if (mn.getAttribute('data-status') == 'engaged') {
        var directions = [[-1,-1], [-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1], [0, -1]];
        // var checked = false
        var setPos = '';
        var setPosTexture = '';
        var loc_1 = '';
        var loc_2 = '';
        var playerProximity = false;
        var storeArrDir = [];
        for (var x = 0; x < directions.length; x++) {
          storeArrDir = [];
          if (document.getElementById('row' + (minionRow + directions[x][0]) + '_col' + (minionCol + directions[x][1])).className == 'gridElement player') {          // Checks if any of the directions contains the player
            if (x == 0) {
              loc_1 = document.getElementById('row' + (minionRow + directions[7][0]) + '_col' + (minionCol + directions[7][1]));
              loc_2 = document.getElementById('row' + (minionRow + directions[1][0]) + '_col' + (minionCol + directions[1][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = minionTextures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[7]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = minionTextures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[1]);
                  break;
                } else {
                  setPos = currentMinion;
                  setPosTexture = minionTextures[0];
                  playerProximity = true;
                  break;
                }
              }
            } else if (x == 1) {
              loc_1 = document.getElementById('row' + (minionRow + directions[0][0]) + '_col' + (minionCol + directions[0][1]));
              loc_2 = document.getElementById('row' + (minionRow + directions[2][0]) + '_col' + (minionCol + directions[2][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = minionTextures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[0]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = minionTextures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[2]);
                  break;
                } else {
                  setPos = currentMinion;
                  setPosTexture = minionTextures[Math.floor(Math.random() * 2)];
                  playerProximity = true;
                  break;
                }
              }
              // dirCnt = x
            } else if (x == 2) {
              loc_1 = document.getElementById('row' + (minionRow + directions[1][0]) + '_col' + (minionCol + directions[1][1]));
              loc_2 = document.getElementById('row' + (minionRow + directions[5][0]) + '_col' + (minionCol + directions[5][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = minionTextures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[1]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = minionTextures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[5]);
                  break;
                } else {
                  setPos = currentMinion;
                  setPosTexture = minionTextures[0];
                  playerProximity = true;
                  break;
                }
              }
              // dirCnt = x
            } else if (x == 3) {
              loc_1 = document.getElementById('row' + (minionRow + directions[2][0]) + '_col' + (minionCol + directions[2][1]));
              loc_2 = document.getElementById('row' + (minionRow + directions[4][0]) + '_col' + (minionCol + directions[4][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = minionTextures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[2]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = minionTextures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[4]);
                  break;
                } else {
                  setPos = currentMinion;
                  setPosTexture = minionTextures[0];
                  playerProximity = true;
                  break;
                }
              }
              // dirCnt = x
            } else if (x == 4) {
              loc_1 = document.getElementById('row' + (minionRow + directions[3][0]) + '_col' + (minionCol + directions[3][1]));
              loc_2 = document.getElementById('row' + (minionRow + directions[5][0]) + '_col' + (minionCol + directions[5][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = minionTextures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[3]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = minionTextures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[5]);
                  break;
                } else {
                  setPos = currentMinion;
                  setPosTexture = minionTextures[0];
                  playerProximity = true;
                  break;
                }
              }
            } else if (x == 5) {
              loc_1 = document.getElementById('row' + (minionRow + directions[4][0]) + '_col' + (minionCol + directions[4][1]));
              loc_2 = document.getElementById('row' + (minionRow + directions[6][0]) + '_col' + (minionCol + directions[6][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = minionTextures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[4]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2
                  setPosTexture = minionTextures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[6]);
                  break;
                } else {
                  setPos = currentMinion;
                  setPosTexture = minionTextures[0];
                  playerProximity = true;
                  break;
                }
              }
              // dirCnt = x
            } else if (x == 6) {
              loc_1 = document.getElementById('row' + (minionRow + directions[5][0]) + '_col' + (minionCol + directions[5][1]));
              loc_2 = document.getElementById('row' + (minionRow + directions[7][0]) + '_col' + (minionCol + directions[7][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = minionTextures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[5]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = minionTextures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[7]);
                  break;
                } else {
                  setPos = currentMinion;
                  setPosTexture = minionTextures[0];
                  playerProximity = true;
                  break;
                }
              }
              // dirCnt = x
            } else if (x == 7) {
              loc_1 = document.getElementById('row' + (minionRow + directions[0][0]) + '_col' + (minionCol + directions[0][1]));
              loc_2 = document.getElementById('row' + (minionRow + directions[6][0]) + '_col' + (minionCol + directions[6][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = minionTextures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[0]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = minionTextures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[6]);
                  break;
                } else {
                  setPos = currentMinion;
                  setPosTexture = minionTextures[0];
                  playerProximity = true;
                  break;
                }
              }
            } else {
              playerProximity = false;
              break;
            }
          }
        }
        if (playerProximity == false) {                                                                 // Player is out of range
          if (randomCell != null && randomCell.className != 'gridElement') {
            if (randomCell.className == 'gridElement room') {
              mn.style.backgroundImage = "url('" + roomTextures[Math.floor(Math.random() * 5)] + "')";
              mn.style.background = "white contain no-repeat";
              mn.className = 'gridElement room';
              randomCell.className = 'gridElement minions';
              randomCell.style.backgroundImage = "url('" + minionTextures[Math.floor(Math.random() * 2)] + "')";
              randomCell.setAttribute('data-hp', minionHp);
              randomCell.setAttribute('data-dmg', minionDmg);
              randomCell.setAttribute('data-xp', minionXp);
              randomCell.setAttribute('data-status', 'engaged');
              mn.removeAttribute('data-hp');
              mn.removeAttribute('data-dmg');
              mn.removeAttribute('data-xp');
              mn.removeAttribute('data-status');
              randomCell.style.background = "white contain no-repeat";
            }
          }
        } else {                                                                                        // Player is within range
            var enemyStatus = true;
            minionHp = minionHp - charSelected.dmg;

          var charHp = parseInt(document.getElementById('row' + player.y + '_col' + player.x).getAttribute('data-hp', charSelected.hp)) - minionDmg;
          charSelected.hp = charHp;
          playerString +=  '<p class="bui_span_p">A minion remembers the ' +charSelected.name+ ' from a previous encounter and lashes out for ' +minionDmg+ ' dmg. The ' +charSelected.name+ ' retaliates for ' +charSelected.dmg+ ' dmg.\n</p>';
            if (charSelected.hp <= 0 && minionHp > 0) {
              playerString += '<p class="bui_span_p">An enemy minion slays the ' + charSelected.name + '.\n</p>';
              clearInterval(minionInterval);
              that.gameDefeat();
            } else if (charSelected.hp <= 0 && minionHp <= 0) {
              playerString += '<p class="bui_span_p">The ' + charSelected.name + ' perished while slaying an enemy minion.\n</p>';
              clearInterval(minionInterval);
              that.gameDefeat();
            } else if (charSelected.hp > 0 && minionHp <= 0) {
              that.pa_removeAttribute(player);
              document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
              document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
              document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";
              that.xpTransition(charSelected, minionXp);
              that.pa_setAttribute(charSelected);
              document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('" + charSelected.skinArray[Math.floor(Math.random() * 2)] + "')";

              that.setState({
                mnCntr: that.state.mnCntr - 1,
              });

              enemyStatus = false;
              playerString += '<p class="bui_span_p">The ' + charSelected.name + ' has vanquished the enemy minion.\n</p>';
            } else {}

          var total = ((playerString
              ? playerString
              : "")).split("\n");

          if (total.length > 3)
            total = total.slice(total.length - 4);

          playerString = total.join("\n");

          document.getElementById('battle_ui_span').innerHTML = playerString;

          var bui_span_p = document.getElementsByClassName('bui_span_p')
          for (var x = 0; x < bui_span_p.length; x++) {
            if (x == bui_span_p.length - 1) {
              bui_span_p[x].style.color = 'pink';
              bui_span_p[x].style.opacity = '1.0';
            }
          }

          if (enemyStatus == true) {
            mn.style.backgroundImage = "url('" + roomTextures[Math.floor(Math.random() * 5)] + "')";
            mn.style.background = "white contain no-repeat";
            mn.className = 'gridElement room';
            setPos.className = 'gridElement minions';
            setPos.style.backgroundImage = "url('" + setPosTexture + "')";
            setPos.setAttribute('data-hp', minionHp);
            setPos.setAttribute('data-dmg', minionDmg);
            setPos.setAttribute('data-xp', minionXp);
            setPos.setAttribute('data-status', 'engaged');
            mn.removeAttribute('data-hp');
            mn.removeAttribute('data-dmg');
            mn.removeAttribute('data-xp');
            mn.removeAttribute('data-status');
            setPos.style.background = "white contain no-repeat";
          } else {
            mn.style.backgroundImage = "url('" + roomTextures[Math.floor(Math.random() * 5)] + "')";
            mn.style.background = "white contain no-repeat";
            mn.className = 'gridElement room';
            mn.removeAttribute('data-hp');
            mn.removeAttribute('data-dmg');
            mn.removeAttribute('data-xp');
            mn.removeAttribute('data-status');
            setPos.style.background = "white contain no-repeat";
          }

        }
      }
    });
  }, 1000);
}

bossActivity() {
  var that = this;
  var bossList = document.getElementsByClassName('gridElement bosses');

  bossInterval = setInterval(function() {
    Array.prototype.forEach.call(bossList, function(bs) {
      var bossRow = parseInt(bs.getAttribute("data-row"));
      var bossCol = parseInt(bs.getAttribute("data-col"));
      var bossNum = parseInt(bs.getAttribute("data-boss"));
      var bossXp = parseInt(bs.getAttribute("data-xp"));
      var currentBoss = document.getElementById('row' + bossRow + '_col' + bossCol);
      var randomCell = document.getElementById('row' + (bossRow + Math.floor(Math.random() * 3) - 1) + '_col' + (bossCol + Math.floor(Math.random() * 3) - 1));
      var bossName = bs.getAttribute('data-name');
      var bossHp = bs.getAttribute('data-hp');
      var bossDmg = bs.getAttribute('data-dmg');
      var currentPlayerHp = '';
      var currentPlayerDmg = '';
      var currentPlayerXp = '';

      var currentPlayer = document.getElementsByClassName('gridElement player');
      if (bs.getAttribute('data-status') == 'idle') {
        if (randomCell != null && randomCell.className != 'gridElement') {
          if (randomCell.className == 'gridElement room') {
            bs.style.backgroundImage = "url('" + roomTextures[Math.floor(Math.random() * 5)] + "')";
            bs.style.background = "white contain no-repeat";
            // bs.removeAttribute("data-boss")
            bs.className = 'gridElement room';
            randomCell.className = 'gridElement bosses';
            randomCell.style.backgroundImage = "url('" + boss[bossNum].textures[Math.floor(Math.random() * 2)] + "')";
            randomCell.setAttribute('data-name', bossName);
            randomCell.setAttribute('data-hp', bossHp);
            randomCell.setAttribute('data-dmg', bossDmg);
            randomCell.setAttribute('data-boss', bossNum);
            randomCell.setAttribute('data-xp', bossXp);
            randomCell.setAttribute('data-status', 'idle');
            bs.removeAttribute('data-hp');
            bs.removeAttribute('data-dmg');
            bs.removeAttribute('data-boss');
            bs.removeAttribute('data-name');
            bs.removeAttribute('data-xp');
            bs.removeAttribute('data-status');
            randomCell.style.background = "white contain no-repeat";
          }
        }
      } else if (bs.getAttribute('data-status') == 'engaged') {
        var directions = [[-1,-1], [-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1], [0, -1]];
        // var checked = false
        var setPos = '';
        var setPosTexture = '';
        var loc_1 = '';
        var loc_2 = '';
        var playerProximity = false;
        var storeArrDir = [];
        for (var x = 0; x < directions.length; x++) {
          storeArrDir = [];
          if (document.getElementById('row' + (bossRow + directions[x][0]) + '_col' + (bossCol + directions[x][1])).className == 'gridElement player') {          // Checks if any of the directions contains the player
            if (x == 0) {
              loc_1 = document.getElementById('row' + (bossRow + directions[7][0]) + '_col' + (bossCol + directions[7][1]));
              loc_2 = document.getElementById('row' + (bossRow + directions[1][0]) + '_col' + (bossCol + directions[1][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = boss[bossNum].textures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[7]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = boss[bossNum].textures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[1]);
                  break;
                } else {
                  setPos = currentBoss;
                  setPosTexture = boss[bossNum].textures[1];
                  playerProximity = true;
                  break;
                }
              }
            } else if (x == 1) {
              loc_1 = document.getElementById('row' + (bossRow + directions[0][0]) + '_col' + (bossCol + directions[0][1]));
              loc_2 = document.getElementById('row' + (bossRow + directions[2][0]) + '_col' + (bossCol + directions[2][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[0]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = boss[bossNum].textures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[2]);
                  break;
                } else {
                  setPos = currentBoss;
                  setPosTexture = boss[bossNum].textures[Math.floor(Math.random() * 2)];
                  playerProximity = true;
                  break;
                }
              }
            } else if (x == 2) {
              loc_1 = document.getElementById('row' + (bossRow + directions[1][0]) + '_col' + (bossCol + directions[1][1]));
              loc_2 = document.getElementById('row' + (bossRow + directions[5][0]) + '_col' + (bossCol + directions[5][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[1]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[5]);
                  break;
                } else {
                  setPos = currentBoss;
                  setPosTexture = boss[bossNum].textures[1];
                  playerProximity = true;
                  break;
                }
              }
            } else if (x == 3) {
              loc_1 = document.getElementById('row' + (bossRow + directions[2][0]) + '_col' + (bossCol + directions[2][1]));
              loc_2 = document.getElementById('row' + (bossRow + directions[4][0]) + '_col' + (bossCol + directions[4][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[2]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[4]);
                  break;
                } else {
                  setPos = currentBoss;
                  setPosTexture = boss[bossNum].textures[1];
                  playerProximity = true;
                  break;
                }
              }
            } else if (x == 4) {
              loc_1 = document.getElementById('row' + (bossRow + directions[3][0]) + '_col' + (bossCol + directions[3][1]));
              loc_2 = document.getElementById('row' + (bossRow + directions[5][0]) + '_col' + (bossCol + directions[5][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[3]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[5]);
                  break;
                } else {
                  setPos = currentMinion;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  break;
                }
              }
            } else if (x == 5) {
              loc_1 = document.getElementById('row' + (bossRow + directions[4][0]) + '_col' + (bossCol + directions[4][1]));
              loc_2 = document.getElementById('row' + (bossRow + directions[6][0]) + '_col' + (bossCol + directions[6][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[4]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = boss[bossNum].textures[1];
                  playerProximity = true;
                  storeArrDir.push(directions[6]);
                  break;
                } else {
                  setPos = currentBoss;
                  setPosTexture = boss[bossNum].textures[Math.floor(Math.random() * 2)];
                  playerProximity = true;
                  break;
                }
              }
              // dirCnt = x
            } else if (x == 6) {
              loc_1 = document.getElementById('row' + (bossRow + directions[5][0]) + '_col' + (bossCol + directions[5][1]));
              loc_2 = document.getElementById('row' + (bossRow + directions[7][0]) + '_col' + (bossCol + directions[7][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[5]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[7]);
                  break;
                } else {
                  setPos = currentBoss;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  break;
                }
              }
            } else if (x == 7) {
              loc_1 = document.getElementById('row' + (bossRow + directions[0][0]) + '_col' + (bossCol + directions[0][1]));
              loc_2 = document.getElementById('row' + (bossRow + directions[6][0]) + '_col' + (bossCol + directions[6][1]));
              if ((loc_1 != null && loc_1.className != 'gridElement') || (loc_2 != null && loc_2.className != 'gridElement')) {
                if (loc_1.className == 'gridElement room') {
                  setPos = loc_1;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[0]);
                  break;
                } else if (loc_2.className == 'gridElement room') {
                  setPos = loc_2;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  storeArrDir.push(directions[6]);
                  break;
                } else {
                  setPos = currentBoss;
                  setPosTexture = boss[bossNum].textures[0];
                  playerProximity = true;
                  break;
                }
              }
            } else {
              playerProximity = false;
              break;
            }
          }
        }
        if (playerProximity == false) {                                                                 // Player is out of range
          if (randomCell != null && randomCell.className != 'gridElement') {
            if (randomCell.className == 'gridElement room') {
              bs.style.backgroundImage = "url('" + roomTextures[Math.floor(Math.random() * 5)] + "')";
              bs.style.background = "white contain no-repeat";
              bs.className = 'gridElement room';
              randomCell.className = 'gridElement bosses';
              randomCell.style.backgroundImage = "url('" + boss[bossNum].textures[Math.floor(Math.random() * 2)] + "')";
              randomCell.setAttribute('data-hp', bossHp);
              randomCell.setAttribute('data-dmg', bossDmg);
              randomCell.setAttribute('data-xp', bossXp);
              randomCell.setAttribute('data-name', bossName);
              randomCell.setAttribute('data-boss', bossNum);
              randomCell.setAttribute('data-status', 'engaged');
              bs.removeAttribute('data-name');
              bs.removeAttribute('data-boss');
              bs.removeAttribute('data-hp');
              bs.removeAttribute('data-dmg');
              bs.removeAttribute('data-xp');
              bs.removeAttribute('data-status');
              randomCell.style.background = "white contain no-repeat";
            }
          }
        } else {                                                                                        // Player is within range
            var enemyStatus = true;
            bossHp = bossHp - charSelected.dmg;

          var charHp = parseInt(document.getElementById('row' + player.y + '_col' + player.x).getAttribute('data-hp', charSelected.hp)) - bossDmg;
          charSelected.hp = charHp;
          playerString +=  '<p class="bui_span_p">A '+bossName+' remembers the ' +charSelected.name+ ' from a previous encounter and lashes out for ' +bossDmg+ ' dmg. The ' +charSelected.name+ ' retaliates for ' +charSelected.dmg+ ' dmg.\n</p>';
            if (charSelected.hp <= 0 && bossHp > 0) {
              playerString += '<p class="bui_span_p">The '+bossName+' slays the ' + charSelected.name + '.\n</p>';
              clearInterval(bossInterval);
              that.gameDefeat();
            } else if (charSelected.hp <= 0 && bossHp <= 0) {
              playerString += '<p class="bui_span_p">The ' + charSelected.name + ' perished while slaying the '+bossName+'.\n</p>';
              clearInterval(bossInterval);
              that.gameDefeat();
            } else if (charSelected.hp > 0 && bossHp <= 0) {
              that.pa_removeAttribute(player);
              document.getElementById('row' + player.y + '_col' + player.x).className = 'gridElement player';
              document.getElementById('row' + player.y + '_col' + player.x).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
              document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('"+ charSelected.skinArray[Math.floor(Math.random() * 2)] +"')";

              that.xpTransition(charSelected, bossXp);

              that.pa_setAttribute(charSelected);
              document.getElementById('row' + player.y + '_col' + player.x).style.backgroundImage = "url('" + charSelected.skinArray[Math.floor(Math.random() * 2)] + "')";

              that.setState({
                bossCntr: that.state.bossCntr - 1,
              });

              enemyStatus = false;
              playerString += '<p class="bui_span_p">The ' + charSelected.name + ' has vanquished the '+bossName+'.\n</p>';
              that.gameVictory();
            } else {
              playerString += '<p class="bui_span_p">The fight with the enemy minion continues.\n</p>';
            }
          var total = ((playerString
              ? playerString
              : "")).split("\n");

          if (total.length > 3)
            total = total.slice(total.length - 4);

          playerString = total.join("\n");

          document.getElementById('battle_ui_span').innerHTML = playerString;

          var bui_span_p = document.getElementsByClassName('bui_span_p')
          for (var x = 0; x < bui_span_p.length; x++) {
            if (x == bui_span_p.length - 1) {
              bui_span_p[x].style.color = 'pink';
              bui_span_p[x].style.opacity = '1.0';
            }
          }

          if (enemyStatus == true) {
            bs.style.backgroundImage = "url('" + roomTextures[Math.floor(Math.random() * 5)] + "')";
            bs.style.background = "white contain no-repeat";
            bs.className = 'gridElement room';
            setPos.className = 'gridElement bosses';
            setPos.style.backgroundImage = "url('" + setPosTexture + "')";
            setPos.setAttribute('data-name', bossName);
            setPos.setAttribute('data-hp', bossHp);
            setPos.setAttribute('data-dmg', bossDmg);
            setPos.setAttribute('data-xp', bossXp);
            setPos.setAttribute('data-boss', bossNum);
            setPos.setAttribute('data-status', 'engaged');
            bs.removeAttribute('data-name');
            bs.removeAttribute('data-hp');
            bs.removeAttribute('data-dmg');
            bs.removeAttribute('data-xp');
            bs.removeAttribute('data-boss');
            bs.removeAttribute('data-status');
            setPos.style.background = "white contain no-repeat";
          } else {
            bs.style.backgroundImage = "url('" + roomTextures[Math.floor(Math.random() * 5)] + "')";
            bs.style.background = "white contain no-repeat";
            bs.className = 'gridElement room';
            bs.removeAttribute('data-name');
            bs.removeAttribute('data-hp');
            bs.removeAttribute('data-dmg');
            bs.removeAttribute('data-xp');
            bs.removeAttribute('data-boss');
            bs.removeAttribute('data-status');
            setPos.style.background = "white contain no-repeat";
          }

        }
      }

        // End
    })
  }, 1000);
}

fogOfWar() {
  var currentPlayer = document.getElementsByClassName('gridElement player')
  var currentPlayerCol = parseInt(currentPlayer[0].getAttribute('data-col'));
  var currentPlayerRow = parseInt(currentPlayer[0].getAttribute('data-row'));
  var arrAroundPlayer = [[-3, 0], [-2, -1], [-2, 0], [-2, 1], [-1, -2], [-1, -1], [-1, 0], [-1, 1], [-1, 2], [0, -3], [0, -2], [0, -1], [0, 0], [0, 1], [0, 2], [0, 3], [1, -2], [1, -1], [1, 0], [1, 1], [1, 2], [2, -1], [2, 0], [2, 1], [3, 0]];

  for (var x = 0; x < arrAroundPlayer.length; x++) {
    if (document.getElementById('row'+(currentPlayerRow + arrAroundPlayer[x][0])+'_col'+(currentPlayerCol + arrAroundPlayer[x][1])+'')) {
      document.getElementById('row'+(currentPlayerRow + arrAroundPlayer[x][0])+'_col'+(currentPlayerCol + arrAroundPlayer[x][1])+'').style.opacity = "1.0";
    }
  }
}

gameVictory() {
  var that = this;
  if ((that.state.bossCntr == 0) && (that.state.dungeonLvl == 5)) {
    document.removeEventListener("keydown", handler);
     that.setState({
       playerHP: charSelected.hp,
       playerDmg: charSelected.dmg,
       playerXP: charSelected.xp,
     });
    player = {}
    var cntDown = setInterval(function() {
      that.setState({
        timeLeft: that.state.timeLeft - 1
      }, function() {
        document.getElementById('battle_ui_span').innerHTML = 'Victory!!!\n\n You have completed the dungeon and finished the game.\n\n You will be redirected to your reward in ' +that.state.timeLeft+ ' seconds.\n\n';
        document.getElementById('battle_ui_span').style.color = '#1f3a93';
      })
      if(that.state.timeLeft <= 0) {
        clearInterval(cntDown);
        that.setState({
          timeLeft: 10
        })
        window.open("https://youtu.be/6-HUgzYPm9g?t=10")
        that.setState({
          gameStatus: 'new',
          charSelect: true
        })
        playerString = '';
        that.clearDungeon();
        that.setDungeon();
        document.getElementById('battle_sc_span').style.display = 'inline-flex';
        document.getElementById('battle_ui_span').style.color = 'white';
        document.getElementById('battle_ui_span').innerHTML = introText;
      }
    }, 1000);
  }
}

gameDefeat() {
  var that = this;
    document.removeEventListener("keydown", handler);
     that.setState({
       playerHP: charSelected.hp,
       playerDmg: charSelected.dmg,
       playerXP: charSelected.xp,
     });
    player = {};
    var cntDown = setInterval(function() {
      that.setState({
        timeLeft: that.state.timeLeft - 1
      }, function() {
        charSelected = {}
        document.getElementById('battle_ui_span').innerHTML = 'Defeat!!!\n\n You have failed to complete the dungeon and lost the game.\n\n The game will restart in ' +that.state.timeLeft+ ' seconds.\n\n';
        document.getElementById('battle_ui_span').style.color = 'red';
      })
      if(that.state.timeLeft <= 0) {
        clearInterval(cntDown);
        that.setState({
          gameStatus: 'new',
          charSelect: true
        })
        playerString = '';
        that.clearDungeon();
        that.setDungeon();
        document.getElementById('battle_sc_span').style.display = 'inline-flex';
        document.getElementById('battle_ui_span').style.color = 'white';
        document.getElementById('battle_ui_span').innerHTML = introText;
      }
    }, 1000);
}

  render () {
    let grid = [];
    let dungeon_width = 70, dungeon_height = 70;

      for (let i = 0; i < dungeon_width; i++) {
        grid.push([]);
        for (let j = 0; j < dungeon_height; j++) {
          this.id = 'row' + i + '_col' + j;
          grid[i].push(<DungeonTile
                         id={this.id}
                         row={i}
                         col={j}
                         classname={this.state.classname}
                         key={this.id}
                         status={this.state.status}
                         />)
        }
      }

    return (
      <div id='grid_container'>
         <div id='grid' style={{width: 3100+'px', height: 3100+'px'}}>
          {grid}
        </div>

        <div id='battle_ui'>
          <div id='battle_ui_screen'>
            <div style={{display: this.state.charSelect ? 'block' : 'none'}}>Choose your adventurer</div>
            <span id='battle_sc_span'>
              <div className='battle_sc_char'><img src='./assets/images/hunter-idle.gif' style={{width:50+'%'}} onMouseOver={() => this.charInfo(0)} onMouseOut={() => this.charInfo(0)} onClick={() => this.charSelect(0)} /></div><div className='battle_sc_char'><img src='./assets/images/berserker-idle.gif' style={{width:40+'%'}} onMouseOver={() => this.charInfo(1)} onMouseOut={() => this.charInfo(1)} onClick={() => this.charSelect(1)} /></div><div className='battle_sc_char'><img src='./assets/images/guild-knight-idle.gif' style={{width:30+'%'}} onMouseOver={() => this.charInfo(2)} onMouseOut={() => this.charInfo(2)} onClick={() => this.charSelect(2)} /></div>
            </span>
            <span id='battle_gm_span' style={{display: this.state.charSelect ? 'none' : 'block'}}>
              <span className='gm_header'>Dungeon Lvl: {this.state.dungeonLvl}</span>
              <div className='gm_info'>
                <span className='gm_subInfo'>
                  <span>HP: {this.state.playerHP}</span>
                  <span>Dmg: {this.state.playerDmg}</span>
                </span>
                <span className='gm_subInfo'>
                  <span>Lvl: {this.state.charLvl}</span>
                  <span>Xp: {this.state.playerXP}</span>
                </span>
              </div>
              <div><img id='charRender' src={this.state.charTexture}/></div>
              <div className='gm_info'>
                <span className='gm_subInfo'>
                  <span>Bosses: {this.state.bossCntr}</span>
                </span>
                <span className='gm_subInfo'>
                  <span>Minions: {this.state.mnCntr}</span>
                </span>
              </div>
            </span>
          </div>
          <div id='battle_ui_log'>
            <span id='player_intro_span'></span>
            <span id='battle_ui_span'>{introText}</span>
          </div>
        </div>

      </div>
    )
  }
}
ReactDOM.render(<Dungeon />, document.getElementById('app'));

// Start: Draggable DOM Element concept from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_draggable
dragElement(document.getElementById(("battle_ui")));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
// End: Draggable DOM Element concept from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_draggable
