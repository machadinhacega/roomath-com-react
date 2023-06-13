import loadBills from "./z-friends"
import myData from "./assets/myData"

const user = myData()[0]
const friends = myData()[1]
const bills = myData()[2]

import expandBillsButton from "./HomeButtonExpand"
const show = expandBillsButton()

export default function homeContas(){
    return(

        <div className="containerBillList">
            
            

            <ul>
                {friends.map( (friends) => {
                    return(
                        <div className='containerBillList'>
                            <li key={friends.id}>
                                <div className="containerBill">
                                    <div className="billContact">
                                        <img className="avatar" src={friends.avatar} alt="foto de perfil do amigo veaco" />
                                        <h3>{friends.name}</h3>
                                    </div>
                                    <div className="billResume">
                                        <h4>{(friends.debt)?<p>Deve a você</p>:<p>Você deve</p>}</h4>
                                        {(friends.debt)?
                                        <h3 className="credito">R$ <span>{friends.totalAmount}</span></h3>:
                                        <h3 className="despesa">R$ <span>{friends.totalAmount}</span></h3>}
                                    </div>
                                </div>
                                


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


