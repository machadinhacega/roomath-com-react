const user = [
    {
        id: 1,
        name: 'Iza Machado',
        avatar: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/6477aa0b05dd5de039a67e5e/previews/6477aa0c05dd5de039a67f5f/download/foto-perfill.png',
        totalAmount: '340,50',
        debt: true
    }
]


const friends = [
    {
        id: 2,
        name: 'Saulo Cruz',
        avatar: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d93e20f6e6af21730c/previews/647f73da3e20f6e6af217379/download/Perfil-Foto.png',
        totalAmount: 0,
        debt: false
    },{
        id: 3,
        name: 'Juliano',
        avatar: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d8da76cbf23b224cc9/previews/647f73d9da76cbf23b224d39/download/Perfil-Foto_%281%29.png',
        totalAmount: 0,
        debt: false
    }
]

const groups = [
    {
        id: 1,
        name: '304',
        members:[user[0].name, friends[0].name],
        avatar: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/64920ba7dfd42bc93dea355d/download/image.png',
        amount: 0,
        bills: [],
        paidFor: []

    },{
        id: 2,
        name: 'Canoa',
        members: [user[0].name, friends[0].name, friends[1].name],
        avatar: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/64920bbb03ee3c37e0dc52fd/download/image.png',
        amount: 0,
        bills: [],
        paidFor: []

    }
]


const bills = [
    {
        id: 1,
        involved: [user[0].name,friends[0].name],
        name: 'Pastel',
        amount: 50.00,
        paidFor: [user[0].name],
        dividedBy: 2,
        alarm: false,
        group: false
    },{
        id: 2,
        involved: [user[0].name,friends[0].name],
        name: 'Aluguel',
        amount: 300.00,
        paidFor: [friends[0].name],
        dividedBy: 2,
        alarm: true,
        group: groups[0].name
    },{
        id: 3,
        involved: [user[0].name,friends[1].name],
        name: 'Pizza',
        amount: 20.00,
        paidFor: [friends[1].name],
        dividedBy: 2,
        alarm: false,
        group: groups[1].name
    },{
        id: 4,
        involved: [user[0].name,friends[0].name],
        name: 'Luz',
        amount: 60.00,
        paidFor: [user[0].name],
        dividedBy: 2,
        alarm: true,
        group: groups[0].name
    },{
        id: 5,
        involved: [user[0].name,friends[0].name],
        name: 'Internet',
        amount: 100.00,
        paidFor: [friends[0].name],
        dividedBy: 2,
        alarm: true,
        group: groups[0].name
    },
    
]

let total = 0
for (let bill of bills){
    if (bill.paidFor == user[0].name){
        total += bill.amount/bill.dividedBy
    } else {
        total -= bill.amount/bill.dividedBy
    }
}




export default function myData(){
    return ([user, friends, bills, groups, total])
}





// Calcular TOTAL POR AMIGO
function totalPorAmigo(){
    for (let friend of friends){
        for (let bill of bills){

            if(bill.involved.includes(friend.name)){
                if (bill.paidFor == friend.name){
                    friend.totalAmount -= bill.amount/bill.involved.length
                } else {
                    friend.totalAmount += bill.amount/bill.involved.length
                }

                
            }
        }
    }
}
totalPorAmigo()







// Calcular TOTAL POR GRUPO
function totalPorGrupo(){
    for (let group of groups){
        for (let bill of bills){
            // SE FAZ PARTE DE GRUPO
            if(group.name === bill.group){
                // Soma os valores
                // group.amount += bill.amount
                if (bill.paidFor.includes(user[0].name)){
                    group.amount -= bill.amount/bill.involved.length
                } else {
                    group.amount += bill.amount/bill.involved.length
                }
                // // ESSA PARTE DO CÓDIGO NÃO É NECESSÁRIA. ELA APENAS MELHORA A VIZUALIZAÇÃO DO OBJETO "GROUPS" NO PROPRIO OBJETO MAS É TOTALMENTE DESCARTÁVEL NO PROJETO COMO UM TODO
                // // Separa os valores em listas
                // group.bills.push(bill.amount)
                // // Separa os pagantes em listas (depois de entrar na lista de pagantes)
                // for (let index in bill.paidFor){
                //     group.paidFor.push(bill.paidFor[index])
                // }
            }
        }
    }
}
totalPorGrupo()