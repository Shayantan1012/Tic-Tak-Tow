import Icon from "../icon/icon"
import './card.css'
function Card({gameend,player,onPlay,index}){
    let icon=<Icon/>
    if(player=='X'){
        icon=<Icon name="cross"/>
    }
    else if(player =='O'){
icon=<Icon name ="circle"/>
    }
    return (
        <div className="Card" onClick={()=>!gameend && player=="" && onPlay(index)}>
{icon}
        </div>
    )
}
export default Card;