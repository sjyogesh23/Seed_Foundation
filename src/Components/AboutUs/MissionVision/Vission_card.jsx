import ReactCardFlip from 'react-card-flip';
import { useState } from 'react'

export const Vission_card = (props) => {
    const [IsFlipped,setIsFlipped] = useState(false);
    function flipCard(){
        setIsFlipped(!IsFlipped);
    }

    

  return (
    <div>
        <ReactCardFlip flipDirection='vertical' isFlipped={IsFlipped}>
            <div className='card_front vision_card' onClick={flipCard}>
                <div className='card_body'>
                    <i class="fa-solid fa-eye"></i>
                    <span className='icon_gap'> Our Vision </span>
                </div>                
            </div>
            <div className='card_back vision_card' onClick={flipCard}>
                {props.content}
            </div>
        </ReactCardFlip>
    </div>
  )
}
