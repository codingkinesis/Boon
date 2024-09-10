import { boardService } from '../services/board.service'
import imgForest from '../assets/imgs/forest.png'

export function Board({board}) {

    function createTile(tile) {
        let numTile = parseInt(tile.type, 10)

        let cn = ''
        if(!isNaN(numTile)) cn = 'num'
        else if(tile.type !== ' ') {
            cn = 'tile'
            if(tile.type !== '-') cn += ' ' + tile.type
        }
        return (
            <div className={cn}>
                { cn.includes('tile') && <img className='tile-type' src={boardService.getImgOf(tile.type)} /> }
                { cn.includes('tile') && tile.coins !== 0 && <div className='tile-coins'> 
                    <img src={boardService.getImgOf('coin')} />
                    {tile.coins > 1 && <p>{tile.coins}</p>}
                </div> }
                { !isNaN(numTile) && <p>{numTile}</p> }
            </div>
        )
    }
    
    return (
        <div className='board-layout'>
            <div className='board-grid'>
                {board.map(tile => createTile(tile) )}
            </div>
            <img className='bg-img' src={imgForest}/>
        </div>
    )
}