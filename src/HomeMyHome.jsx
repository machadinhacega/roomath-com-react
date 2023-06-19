import addBill from './AddBill'
import expand from './assets/img/expand.svg'

import homeContas from './HomeContas'
import buttonAdd from './ButtonAdd'


import loadBills from './z-friends'
const billList = loadBills()

export default function myHome() {

    return(
        <div className='myHome'>
            
            <div><button className='expandButton'><img src={expand} alt="" /></button></div>
            
            {(billList[0]) ? 
            <div>{homeContas()}</div>
            :               
            <div className='billEmpty'><p>Registre uma despesa para começar</p> </div>
            }

            <div>{buttonAdd()}</div>

        </div>
    )
}