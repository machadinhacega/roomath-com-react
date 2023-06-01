import add from './assets/img/Add.svg'
import expand from './assets/img/expand.svg'

export default function myHome() {

    return(
        <div>

            <div><button><img src={expand} alt="" /></button></div>

            <p>Registre uma despesa para começar</p>
            
            <div>
                <button><img src={add} alt="" /></button>
            </div>
        </div>
    )
}