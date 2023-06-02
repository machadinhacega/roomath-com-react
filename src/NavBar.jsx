import home from './assets/img/Inicio.svg'
import bill from './assets/img/Contas.svg'
import group from './assets/img/Group.svg'
import hist from './assets/img/Historico.svg'

export default function navBar() {

    return(

        <div className='navBar'>
            <div><img src={home} alt="" /></div>
            <div><img src={bill} alt="" /></div>
            <div><img src={group} alt="" /></div>
            <div><img src={hist} alt="" /></div>
        </div>

    )
}