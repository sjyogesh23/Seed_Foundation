import ReactCardFlip from 'react-card-flip';
import { useState } from 'react'

export const Mission_card = () => {
    const [IsFlipped,setIsFlipped] = useState(false);

    function flipCard(){
        setIsFlipped(!IsFlipped);
    }

    return (
        <div>
            <ReactCardFlip flipDirection='vertical' isFlipped={IsFlipped} >
                <div className='card_front mission_card' onClick={flipCard}>
                    <div className='card_body'>
                        <i class="fa-solid fa-rocket"></i>
                        <span className='icon_gap'> Our Mission </span>
                    </div>                
                </div>

                <div className='card_back mission_card' onClick={flipCard}>
                    Technological & Leadership Empowerment of the Students of PTU through Innovation and Applied Engineering.
                </div>
            </ReactCardFlip>
        </div>
    )
}
