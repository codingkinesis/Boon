import { storageService } from './async-storage.service';
import imgBush from '../assets/imgs/bush.png'
import imgWall from '../assets/imgs/wall.png'
import imgChest from '../assets/imgs/chest.png'
import imgVortex from '../assets/imgs/vortex.png'
import imgStrength from '../assets/imgs/strength.png'
import imgMovement from '../assets/imgs/movement.png'
import imgReach from '../assets/imgs/reach.png'
import imgCoin from '../assets/imgs/coin.png'

export const boardService = {
    getTile,
    combindTiles,
    createBoard,
    getImgOf
}

/* - - blanck
w - wall, c - chest, b - bush, v - vortex
m - movement, s - strength, r - reach */
const tiles = {
    t0: [
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
    ],
    t1: [
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: 'c', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: 's', coins: 0},{type: 'w', coins: 0},{type: 'w', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: 'b', coins: 0},{type: 'r', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
    ],
    t2: [
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: 'r', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: 'v', coins: 0},{type: 'v', coins: 0},{type: 'b', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: 'v', coins: 0},{type: 'v', coins: 0},{type: 'b', coins: 0},
        {type: '-', coins: 0},{type: 'b', coins: 0},{type: 'b', coins: 0},{type: 'b', coins: 0},{type: 'b', coins: 0},
    ],
    t3: [
        {type: '-', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: 'c', coins: 0},{type: 'w', coins: 0},{type: 'm', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: 'w', coins: 0},{type: 'w', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: 'm', coins: 0},{type: '-', coins: 0},{type: 'm', coins: 0},
    ],
    t4: [
        {type: '-', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},{type: '-', coins: 0},{type: 'r', coins: 0},
        {type: '-', coins: 0},{type: 'w', coins: 0},{type: '-', coins: 0},{type: 'w', coins: 0},{type: '-', coins: 0},
        {type: 'b', coins: 0},{type: '-', coins: 0},{type: 'c', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},
        {type: '-', coins: 0},{type: 'w', coins: 0},{type: '-', coins: 0},{type: 'w', coins: 0},{type: '-', coins: 0},
        {type: 'r', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
    ],
    t5: [
        {type: '-', coins: 0},{type: 'b', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: 'w', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: 'c', coins: 0},{type: 's', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: 'w', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: 'r', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},{type: '-', coins: 0},
    ],
    t6: [
        {type: 'b', coins: 0},{type: 'b', coins: 0},{type: 'b', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: 'm', coins: 0},{type: '-', coins: 0},{type: 'm', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: 'b', coins: 0},{type: 'b', coins: 0},{type: 'b', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: 'v', coins: 0},{type: '-', coins: 0},
    ],
    t7: [
        {type: '-', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: 'b', coins: 0},{type: '-', coins: 0},{type: 'r', coins: 0},{type: 'b', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},{type: 'b', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
    ],
    t8: [
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},{type: '-', coins: 0},
        {type: 'b', coins: 0},{type: 's', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},{type: '-', coins: 0},
        {type: 'b', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: 'v', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},
        {type: 'r', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},{type: 'b', coins: 0},
    ],
    t9: [
        {type: 'w', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: 'b', coins: 0},
        {type: 'w', coins: 0},{type: '-', coins: 0},{type: 'v', coins: 0},{type: 'v', coins: 0},{type: '-', coins: 0},
        {type: 'c', coins: 0},{type: '-', coins: 0},{type: 'v', coins: 0},{type: 'v', coins: 0},{type: '-', coins: 0},
        {type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},
        {type: 'b', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: '-', coins: 0},{type: 'm', coins: 0},
    ],
}

/* placeing
    3 4
    2 1*/
function getTile(tileNum, placing = 1) {
    let tile = placing === 1 ? tiles[tileNum] :  _rotateTile(tiles[tileNum], placing-1)
    return [...tile]
}

function _rotateTile(tile, times) {
    let tempTile
    for (let i = 0; i < times; i++) {
        tempTile = [
            tile[20],tile[15],tile[10],tile[5],tile[0],
            tile[21],tile[16],tile[11],tile[6],tile[1],
            tile[22],tile[17],tile[12],tile[7],tile[2],
            tile[23],tile[18],tile[13],tile[8],tile[3],
            tile[24],tile[19],tile[14],tile[9],tile[4]
        ]
        tile = tempTile
    }
    return tile
}

function combindTiles(t1, t2, t3, t4) {
    let tileBoard = []
    for (let i = 0; i < 5; i++) {
        tileBoard =[...tileBoard, ...t3.splice(0,5)]
        tileBoard =[...tileBoard, ...t4.splice(0,5)]
    }
    for (let i = 0; i < 5; i++) {
        tileBoard =[...tileBoard, ...t2.splice(0,5)]
        tileBoard =[...tileBoard, ...t1.splice(0,5)]
    }
    return tileBoard
}

// big, med, small
function createBoard(tileBoard, size = 'big') {
    let board = []
    if(size === 'big') {
        for (let i = 0; i < 144; i++) board.push({type: ' '})
        board.splice(1,10,{type: '1'},{type: '2'},{type: '3'},{type: '4'},{type: '5'},{type: '6'},{type: '7'},{type: '8'},{type: '9'},{type: '10'})
        for (let i = 1; i <= 10; i++) {
            board.splice(12*i, 1, {type: i.toString()})
            board.splice(12*i+1,10,...tileBoard.splice(0,10))
        }
    }
    return board
}


function getImgOf(i) {
    switch(i) {
        case 'b': return imgBush
        case 'w': return imgWall
        case 'c': return imgChest
        case 'v': return imgVortex
        case 's': return imgStrength
        case 'm': return imgMovement
        case 'r': return imgReach
        case 'coin': return imgCoin
        default: return null
    }
}
