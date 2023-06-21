import myData from "./assets/myData"

const total = myData()[4]


export default function resume() {
    
    
    return (
        <div>


        {(total == 0)
        ?
        <div className="resume">
            <img src="https://trello.com/1/cards/6477aa0a218e927787924709/attachments/6477abf429fc85ae7ca7b735/previews/6477abf529fc85ae7ca7b7c7/download/simbolo-roomath.png" alt="" />
            <h2 className="valueEmpty">nenhuma despesa pendente</h2>         
        </div>
        :
        <div>
            {(total > 0)
            ?
            <div className="resume resumeCredt">
            <img src="https://trello.com/1/cards/6477aa0a218e927787924709/attachments/6477abf429fc85ae7ca7b735/previews/6477abf529fc85ae7ca7b7c7/download/simbolo-roomath.png" alt="" />
            <h2>Devem a você: <span>R$ {Math.abs(total)}</span></h2>         
            </div>
            :
            <div className="resume resumeDebt">
            <img src="https://trello.com/1/cards/6477aa0a218e927787924709/attachments/6477abf429fc85ae7ca7b735/previews/6477abf529fc85ae7ca7b7c7/download/simbolo-roomath.png" alt="" />
            <h2>Você está devendo: <span>R$ {Math.abs(total)}</span></h2>         
            </div>
            }
        </div>

        }

        





        </div>
    )
}