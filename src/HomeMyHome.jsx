import expand from './assets/img/expand.svg'

import homeContas from './HomeContas'
import buttonAdd from './ButtonAdd'

import myData from "./assets/myData"
const bills = myData()[2]



export default function myHome() {

    return(
        <div className='myHome'>
            
            <div><button className='expandButton'><img src={expand} alt="" /></button></div>
            
            {(bills[0]) ? 
            <div>{homeContas()}</div>
            :               
            <div className='billEmpty'><p>Registre uma despesa para começar</p> </div>
            }

            <div>{buttonAdd()}</div>

        </div>
    )
}