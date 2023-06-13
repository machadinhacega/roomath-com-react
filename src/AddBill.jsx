import back from './assets/img/icon-back.svg'
import okay from './assets/img/icon-ok.svg'

import addNome from './assets/img/icon-add-nome.svg'
import addValor from './assets/img/icon-add-valor.svg'
import addQuem from './assets/img/icon-add-quem.svg'
import addDividir from './assets/img/icon-add-dividir.svg'
import addLembrete from './assets/img/icon-add-lembrete.svg'

const user = 'Fulana'
const avatar = 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/6477aa0b05dd5de039a67e5e/previews/6477aa0c05dd5de039a67f5f/download/foto-perfill.png'



export default function addBill(){

    return (

        <div>

            <form action="" method='get'>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" name="" id="" />
                </div>
            </form>








            <h1>#############################################</h1>











            <div>
                <img src={back} alt="" />
                <h1>Adicionar despesa</h1>
                <img src={okay} alt="" />
            </div>
            <div>
                <label htmlFor="">Envolvidos:</label>
                <input type="text" />
            </div>
            <div>
                <div>
                    <label htmlFor="nomeConta"><img src={addNome} alt="" /></label>
                    <input type="text" id='nomeConta' placeholder='Nome da Conta' name='nomeConta'/>
                </div>
                <div>
                    <label htmlFor="valor"><img src={addValor} alt="" /></label>
                    <input type="number" id='valor' placeholder='Valor' name='valor'/>
                </div>
                <div>
                    
                    <img src={addQuem} alt="" />
                    <h3>Pago por:</h3>
                    <img className='avatar' src={avatar} alt="" />
                    <h3>{user}</h3>
                </div>
                <div>
                    <img src={addDividir} alt="" />
                    <h3>Dividido igualmente</h3>
                </div>
                <div>
                    <img src={addLembrete} alt="" />
                    <h3>Lembrar da conta</h3>
                </div>
            </div>
            <div>
                <h2>Cancelar</h2>
                <h2>Salvar</h2>
            </div>







    
        </div>
    )
}

// INPUT