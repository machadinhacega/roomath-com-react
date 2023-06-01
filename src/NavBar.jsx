import home from './assets/img/Inicio.svg'
import bill from './assets/img/Contas.svg'
import group from './assets/img/Group.svg'
import hist from './assets/img/Historico.svg'

export default function navBar() {

    return(

        <div>
            <img src={home} alt="" />
            <img src={bill} alt="" />
            <img src={group} alt="" />
            <img src={hist} alt="" />
        </div>

    )
}