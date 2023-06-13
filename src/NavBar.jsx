import home from './assets/img/Inicio.svg'
import bill from './assets/img/Contas.svg'
import group from './assets/img/Group.svg'
import hist from './assets/img/Historico.svg'

export default function navBar() {

    return(

        <div className='navBar'>
            <div><a href="#"><img src={home} alt="ira para home" /></a></div>
            <div><a href="#"><img src={bill} alt="ir para contas" /></a></div>
            <div><a href="#"><img src={group} alt="ir para grupos" /></a></div>
            <div><a href="#"><img src={hist} alt="ir para o histórico" /></a></div>
        </div>

    )
}