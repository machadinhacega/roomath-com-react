import expand from './assets/img/expand.svg'

import friendsContas from './FriendsContas'
import buttonAdd from './ButtonAdd'


import loadBills from './z-friends'
const billList = loadBills()

export default function friendsMyFriends() {

    return(
        <div className='myHome'>
            
            <div><button className='expandButton'><img src={expand} alt="" /></button></div>
            
            {(billList[0]) ? 
            <div>{friendsContas()}</div>
            :               
            <div className='billEmpty'><p>Você e seus amigos estão quites</p> </div>
            }

            <div>{buttonAdd()}</div>

        </div>
    )
}