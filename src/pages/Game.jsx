import { Board } from '../cmps/Board'
import { Hand } from '../cmps/Hand'
import { gameService } from '../services/game.service'
import { boardService } from '../services/board.service'
import imgCbg from '../assets/imgs/c-bg.png'
import imgCbomb from '../assets/imgs/c-bomb.png'
import imgChide from '../assets/imgs/c-hide.png'
import imgCfog from '../assets/imgs/c-fog.png'


export function Game() {

    var players = [
        {id: 123, cards: [{img: imgCbg}, {img: imgCbg}, {img: imgCbg}]},
        {id: 234, cards: [{img: imgCbg}, {img: imgCbg}, {img: imgCbg}, {img: imgCbg}, {img: imgCbg}]},
        {id: 345, cards: [{img: imgCbg}, {img: imgCbg}, {img: imgCbg}, {img: imgCbg}]},
        {id: 456, cards: [{img: imgCbg}, {img: imgCbg}]}
    ]
    var yourCards = [{img: imgCbomb}, {img: imgChide}, {img: imgCfog}]
    var board = boardService.combindTiles(
        boardService.getTile('t1',1), 
        boardService.getTile('t3',2), 
        boardService.getTile('t5',3), 
        boardService.getTile('t8',4))

    board = boardService.createBoard(board)

  return (
    <div className='game-layout'>
        <div className='opponents-hands'>
            {players.map(player => <Hand key={player.id} cards={player.cards}/>)}
        </div>
        <Board board={board}/>
        <div className='your-hand'>
            <Hand className='your-hand' cards={yourCards}/>
        </div>
    </div>
  )
}