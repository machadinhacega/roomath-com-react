import myData from "./assets/myData"
import avatar from './assets/img/fotoPerfil.png'

import navBar from './NavBar'
import buttonAdd from './ButtonAdd'
const user = myData()[0]
const friends = myData()[1]
const bills = myData()[2]


export default function allBills() {
    return (
        <div className="allBills columnsCenter">
            <div className="billSelector">                
                <select name="" id="">
                    <option value="">Todas as contas</option>
                    <option value="">Fixas</option>
                    <option value="">Avulsas</option>
                    <option value="">Programadas</option>
                </select>
            </div>

            <div className="billUnid flex">
                <div className="billDate columnsCenter">
                    <h4>nov.</h4>
                    <h3>05</h3>
                </div>
                <div className="billImg">
                    <img src={avatar} alt="" />
                </div>
                <div className="billDesc columnsSemiCenter">
                    <h2 className="billName">Pastel</h2>
                    <h3 className="billDescValue">Você pagou R$15,00</h3>
                </div>
                <div className="billResume">
                    <h4>devem a você</h4>
                    <h3 className="credito">R$ <span>15,00</span></h3>
                    {/* <h3 className="despesa">R$ <span>15,00</span></h3> */}
                </div>
            </div>







            <div className="billUnid flex">
                <div className="billDate columnsCenter">
                    <h4>nov.</h4>
                    <h3>05</h3>
                </div>
                <div className="billImg">
                    <img src={avatar} alt="" />
                </div>
                <div className="billDesc columnsSemiCenter">
                    <h2 className="billName">Pastel</h2>
                    <h3 className="billDescValue">Você pagou R$15,00</h3>
                </div>
                <div className="billResume">
                    <h4>devem a você</h4>
                    <h3 className="credito">R$ <span>15,00</span></h3>
                    {/* <h3 className="despesa">R$ <span>15,00</span></h3> */}
                </div>
            </div>






            <div className="billUnid flex">
                <div className="billDate columnsCenter">
                    <h4>nov.</h4>
                    <h3>05</h3>
                </div>
                <div className="billImg">
                    <img src={avatar} alt="" />
                </div>
                <div className="billDesc columnsSemiCenter">
                    <h2 className="billName">Pastel</h2>
                    <h3 className="billDescValue">Você pagou R$15,00</h3>
                </div>
                <div className="billResume">
                    <h4>devem a você</h4>
                    <h3 className="credito">R$ <span>15,00</span></h3>
                    {/* <h3 className="despesa">R$ <span>15,00</span></h3> */}
                </div>
            </div>


            <div>{buttonAdd()}</div>
            <div>{navBar()}</div>

        </div>
    )
}