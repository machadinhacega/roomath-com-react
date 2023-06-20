import myData from "./assets/myData"

const user = myData()[0]
const friends = myData()[1]
const bills = myData()[2]
const group = myData()[3]

import expandBillsButton from "./HomeButtonExpand"
const show = expandBillsButton()



export default function friendsContas(){
    return(

        <div className="containerBillList">
            
            

            <ul>
                {group.map( (group) => {
                    return(
                        <div className='containerBillList'>
                            <li key={group.id}>
                                <div className="containerBill">
                                    <div className="billContact">
                                        <img className="avatar" src={group.avatar} alt="foto de perfil do amigo veaco" />
                                        <h3>{group.name}</h3>
                                    </div>
                                    {/* PRECISA CRIAR A LÓGICA DO RESUMO DAS CONTAS EM GRUPO */}
                                    {/* CALCULAR QUANTO O USUARIO DEVE, OU NÃO EM CADA GRUPO */}
                                    <div className="billResume">
                                        <h4>{(friends.debt)?<p>Deve a você</p>:<p>Você deve</p>}</h4>
                                        {(friends.debt)?
                                        <h3 className="credito">R$ <span>{friends.totalAmount}</span></h3>:
                                        <h3 className="despesa">R$ <span>{friends.totalAmount}</span></h3>}
                                    </div>
                                </div>
                                

                                {/* PRECISA CRIAR A LÓGICA DO RESUMO DAS CONTAS EM GRUPO */}
                                {/* MOSTRAR (SHOW) SOMENTE AS CONTAS QUE FAZEM PARTE DE GRUPO */}
                                {(show)?
                                    <div>
                                        <ul>
                                            {bills.map( (bills) => {
                                                return (
                                                    <div>
                                                        {(friends.name == bills.involved[1])?
                                                        <li key={bills.id} className="itemBillDescription">
                                                            <div className="containerBillDescription">
                                                                {(bills.paidFor == user[0].name)?
                                                                <div className="markLine Credt"></div>
                                                                :
                                                                <div className="markLine Debt"></div>}
                                                                {(bills.paidFor == user[0].name)?
                                                                <h4 className="billDescription Credt">R$ {bills.amount} {(bills.group)?<span>em {bills.group}</span>:<span>fora de grupos</span>}</h4>
                                                                :
                                                                <h4 className="billDescription Debt">R$ {bills.amount} {(bills.group)?<span>em {bills.group}</span>:<span>fora de grupos</span>}</h4>
                                                                }
                                                            </div>
                                                        </li>
                                                        :
                                                        <p></p>}
                                                    </div>
                                                )
                                            }) }
                                        </ul>
                                    </div>
                                :
                                    <div></div>
                                }





                            </li>
                        </div>
                    )
                } )}
            </ul>
        </div>

    )
    
}


