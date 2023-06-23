import expand from './assets/img/expand.svg'

import friendsContas from './FriendsContas'
import buttonAdd from './ButtonAdd'



import myData from './assets/myData'
const bills = myData()[2]

export default function friendsMyFriends() {

    return(
        <div className='myHome'>
            
            <div><button className='expandButton'><img src={expand} alt="" /></button></div>
            
            {(bills) ? 
            <div>{friendsContas()}</div>
            :               
            <div className='billEmpty'><p>Você e seus amigos estão quites</p> </div>
            }

            <div>{buttonAdd()}</div>

        </div>
    )
}