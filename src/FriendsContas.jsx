import myData from "./assets/myData"

const user = myData()[0]
const friends = myData()[1]
const bills = myData()[2]
const groups = myData()[3]

import expandBillsButton from "./HomeButtonExpand"
const show = expandBillsButton()



export default function friendsContas(){
    return(

        <div className="containerBillList">
            
            

            <ul>
                {groups.map( (groups) => {
                    return(
                        <div className='containerBillList'>
                            <li key={groups.id}>
                                <div className="containerBill">
                                    <div className="billContact">
                                        <img className="avatar" src={groups.avatar} alt="foto de perfil do amigo veaco" />
                                        <h3>{groups.name}</h3>
                                    </div>
                                    
                                    {/* CALCULAR QUANTO O USUARIO DEVE, OU NÃO EM CADA GRUPO (debt)*/}
                                    <div className="billResume">
                                        <h4>{(friends.debt)?<p>Deve a você</p>:<p>Você deve</p>}</h4>
                                        {(friends.debt)?
                                        <h3 className="credito">R$ <span>{groups.amount}</span></h3>:
                                        <h3 className="despesa">R$ <span>{groups.amount}</span></h3>}
                                    </div>
                                </div>
                                

                                {(show)?
                                    <div>


                                        <ul>
                                        {bills.map( (bills) => {
                                            return(
                                                <div>
                                                    {(bills.group === groups.name)
                                                    ?
                                                    <li key={bills.id} className="itemBillDescription">
                                                        <div className="containerBillDescription">
                                                        {(bills.paidFor == user[0].name)
                                                        ?
                                                        <div className="markLine Debt"></div>
                                                        :
                                                        <div className="markLine Credt"></div>
                                                        }

                                                        {(bills.paidFor == user[0].name)
                                                        ?
                                                        <h4 className="billDescription Debt">
                                                            <span>Você</span> emprestou R$ {bills.amount/bills.dividedBy} </h4>
                                                        :
                                                        <h4 className="billDescription Credt">
                                                            <span>{bills.paidFor}</span> emprestou R$ {bills.amount/bills.dividedBy} </h4>
                                                        }
                                                    </div>
                                                    </li>
                                                    :
                                                    <div></div>
                                                    }
                                                        
                                                   
                                                </div>
                                            )
                                        })}

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


