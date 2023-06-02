import add from './assets/img/Add.svg'
import expand from './assets/img/expand.svg'

// const billList = [
//     {id:'1', nome: 'agua', valor:52},
//     {id:'2', nome: 'energia', valor:52},
//     {id:'3', nome: 'aluguel', valor:52},
//     {id:'4', nome: 'internet', valor:52}
// ]

const billList = []


export default function myHome() {

    return(
        <div className='myHome'>

            <div><button className='expandButton'><img src={expand} alt="" /></button></div>
            {(billList[0]) ? 
            <div className='containerBillList'>
                <ul>
                        {billList.map( (billList) => {
                            return (
                                <div>
                                    <li key={billList.id}>
                                        <p>{billList.nome}</p>
                                    </li>
                                </div>
                                 )
                            })
                        
                        }
                    </ul>
            </div>
            :               
            <div className='billEmpty'><p>Registre uma despesa para começar</p> </div>
            }




            <div className='containerButtonAdd'>
                <button className='buttonAdd'><img src={add} alt="" /></button>
            </div>
        </div>
    )
}

//<div></div>


// <ol>
// {tarefa.map( (tarefa) => {
//   return (
//     <div>
//       <li key={tarefa.id}>
//         {tarefa.completed ? <span><s>{tarefa.title}</s></span> : tarefa.title}

//         {/* {tarefa.title} */}
//         {/* {tarefa.completed ? <span><mark>Tarefa concluída</mark></span> : null} */}
//       </li>
//     </div>
//     )
//   })}
// </ol>



// {tarefa.completed ? {tarefa.title} : tarefa.title}


// {billList ? <p>{billList.nome}</p> : <p>Registre uma despesa para começar</p>}