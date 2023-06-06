import loadBills from "./Bills"
const billList = loadBills ()




export default function homeContas(){

    return(
        <div className='containerBillList'>
        <ul>
            {billList.map( (billList) => {
                return (
                        <div>
                            <li key={billList.id}>
                                <div className="billContact">
                                    <img className="avatar" src={billList.imagem} alt="" />
                                    <h3>{billList.nome}</h3>
                                </div>
                                <div className="billResume">
                                    <h4>{(billList.devendo)? <p>Você deve</p> :<p>Deve a você</p>}</h4>
                                    {(billList.devendo)? 
                                    <h3 className="despesa">R$ <span>{billList.valorTotal}</span></h3>
                                    :
                                    <h3 className="credito">R$ <span>{billList.valorTotal}</span></h3>
                                    }
                                </div>
                                
                            </li>

                        </div>
                        )
            })
                
            }
        </ul>
       </div>
    )
    
}



// 
// contas:[
//     {contaId: 1, contaNome: 'pastel', valor: '28,50', grupo:false},
//     {contaId: 2, contaNome: 'aluguel', valor: '350,00', grupo: '304'}]}
// contas:[
//     {contaId: 1, contaNome: 'pizza', valor:'19,00', grupo: 'canoa'}]}