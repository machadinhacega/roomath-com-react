import add from './assets/img/Add.svg'

export default function buttonAdd(){
    return(
        <div className='containerButtonAdd'>
        <button className='buttonAdd'><img src={add} alt="" /></button>
        </div>
    )
}