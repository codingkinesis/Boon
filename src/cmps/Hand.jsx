import { Card } from './Card'
import img from '../assets/imgs/c-bomb.png'

export function Hand({cards}) {
    
    let cardInHand = 1
    return (
        <ul className='hand-layout'>
            {cards.map(card => <li key={'cardInHand'+(cardInHand++)}><Card img={card.img}/></li>)}
        </ul>
    )
}