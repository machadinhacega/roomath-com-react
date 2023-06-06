export default function myHeader() {

    const user = 'Fulana'
    const avatar = 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/6477aa0b05dd5de039a67e5e/previews/6477aa0c05dd5de039a67f5f/download/foto-perfill.png'

    return (

        <div className="myHeader">
            <div>
                <h1>Olá, <span>{user}</span></h1>
                <h3>Fica ligada nas contas ;)</h3>
            </div>
            <div>
                <img src={avatar} alt="" />
            </div>
        </div>
        
    )
}