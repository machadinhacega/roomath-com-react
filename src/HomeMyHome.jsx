import addBill from './AddBill'
import add from './assets/img/Add.svg'
import expand from './assets/img/expand.svg'

import homeContas from './HomeContas'




import loadBills from './Bills'
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

            <div className='containerButtonAdd'>
                <button className='buttonAdd'><img src={add} alt="" /></button>
            </div>

        </div>
    )
}