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

        <div className='default addBill'>

            <div className='containerTitle'>
                <a href="#"><img src={back} alt="" /></a>
                <h1>Adicionar despesa</h1>
                <a href="#"><img src={okay} alt="" /></a>
            </div>


            <form action="" method='get'>

                <div className='formHeader'>
                    <label htmlFor="envolvidos">Envolvidos:</label>
                    <input type="text" name="envolvidos" id="envolvidos" />
                </div>

                <div className='formBody'>
                    <div>
                        <label htmlFor="nomeConta"><img src={addNome} alt="" /></label>
                        <input type="text" id='nomeConta' placeholder='Nome da Conta' name='nomeConta'/>
                    </div>
                    <div>
                        <label htmlFor="valor"><img src={addValor} alt="" /></label>
                        <input type="number" id='valor' placeholder='Valor' name='valor'/>
                    </div>
                    <div>
                        <label htmlFor="selectedPaidFor">
                        <img src={addQuem} alt="" /></label>
                        <p className='FormPaidFor'>Pago por:</p>
                        <select name="selectedPaidFor" id="selectedPaidFor">
                            <option value="" disabled selected>Selecione pagante</option>
                            <option value="">Você</option>
                            <option value="">Saulo</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="selectedPaidFor">
                        <img src={addDividir} alt="" /></label>
                        <select name="selectedPaidFor" id="selectedPaidFor">
                            <option value="" selected>Dividido igulamente</option>
                            <option value="">Você pagou o valor total</option>
                            <option value="">Saulo pagou o valor total</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor=""><img src={addLembrete} alt="" /></label>
                        <button>Lembrar da conta</button>
                    </div>
                </div>


                <div className='formFooter'>
                        <div><h2>Cancelar</h2></div>
                        <div><h2>Cadastrar</h2></div>
                    </div>

            </form>




    
        </div>
    )
}

// INPUT