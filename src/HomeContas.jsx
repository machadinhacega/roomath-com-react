import loadBills from "./users"
const billList = loadBills ()



const list = [
    {id:1, contaId: 1, contaNome: 'pastel', valor: '28,50', grupo:false},
    {id:1, contaId: 2, contaNome: 'aluguel', valor: '350,00', grupo: '304'},
    {id:2, contaId: 1, contaNome: 'pizza', valor:'19,00', grupo: 'canoa'}
]



export default function homeContas(){

    return(
        <div className='containerBillList'>
        <ul>
            {billList.map( (billList) => {
                return (
                        <div>
                            <li key={billList.userId}>
                                <div className="containerBill">
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
                                </div>



                                <h2>xxx</h2>
                                <h2>{billList['contas'][0].grupo}</h2>
                                <h2>{billList['contas'].contaId}</h2>



                            </li>

                        </div>
                        )
            })
                
            }
        </ul>
       </div>
    )
    
}



// const billList = [
//     {id:'1', imagem:'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d93e20f6e6af21730c/previews/647f73da3e20f6e6af217379/download/Perfil-Foto.png', nome: 'Saulo Cruz', valorTotal:'321,50', devendo:true, 
//         contas:[
//             {contaId: 1, contaNome: 'pastel', valor: '28,50', grupo:false}, 
//             {contaId: 2, contaNome: 'aluguel', valor: '350,00', grupo: '304'}]},
//     {id:'2', imagem:'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d8da76cbf23b224cc9/previews/647f73d9da76cbf23b224d39/download/Perfil-Foto_%281%29.png', nome: 'Juliano', valorTotal:'19,00', devendo:true, 
//         contas:[
//             {contaId: 1, contaNome: 'pizza', valor:'19,00', grupo: 'canoa'}]}
// ]
