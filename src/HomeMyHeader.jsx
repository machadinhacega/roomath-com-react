import myData from "./assets/myData"

const user = myData()[0]

export default function myHeader() {

    return (

        <div className="myHeader">
            <div>
                <h1>Olá, <span>{user[0].name}</span></h1>
                <h3>Fica ligada nas contas ;)</h3>
            </div>
            <div>
                <img src={user[0].avatar} alt="" />
            </div>
        </div>
        
    )
}