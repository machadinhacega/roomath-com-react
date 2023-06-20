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
        totalAmount: '321,50',
        debt: false
    },{
        id: 3,
        name: 'Juliano',
        avatar: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d8da76cbf23b224cc9/previews/647f73d9da76cbf23b224d39/download/Perfil-Foto_%281%29.png',
        totalAmount: '19,00',
        debt: false
    }
]

const group = [
    {
        id: 1,
        name: '304',
        members:[user[0].name, friends[0].name],
        avatar: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/64920ba7dfd42bc93dea355d/download/image.png',

    },{
        id: 2,
        name: 'Canoa',
        members: [user[0].name, friends[0].name, friends[1].name],
        avatar: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/64920bbb03ee3c37e0dc52fd/download/image.png'

    }
]


const bills = [
    {
        id: 1,
        involved: [user[0].name,friends[0].name],
        name: 'Pastel',
        amount: 28.50,
        paidFor: [user[0].name],
        dividedBy: 2,
        alarm: false,
        group: false
    },{
        id: 2,
        involved: [user[0].name,friends[0].name],
        name: 'Aluguel',
        amount: 350.00,
        paidFor: [friends[0].name],
        dividedBy: 2,
        alarm: true,
        group: '304'
    },{
        id: 3,
        involved: [user[0].name,friends[1].name],
        name: 'Pizza',
        amount: 19,
        paidFor: [friends[1].name],
        dividedBy: 2,
        alarm: false,
        group: 'Canoa'
    },
    
]


export default function myData(){
    return ([user, friends, bills, group ])
}
