// const perfil = [
//     {
//         idUser: 1, 
//         nomeUser: 'Iza Machado',
//         avatarUser: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/6477aa0b05dd5de039a67e5e/previews/6477aa0c05dd5de039a67f5f/download/foto-perfill.png',
//     }
// ]


// const users = [
//     {
//         idUser: 1, 
//         nomeUser: 'Iza Machado',
//         avatarUser: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/6477aa0b05dd5de039a67e5e/previews/6477aa0c05dd5de039a67f5f/download/foto-perfill.png',
//     },{
//         idUser: 2,
//         nomeUser: 'Saulo Cruz',
//         avatarUser: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d93e20f6e6af21730c/previews/647f73da3e20f6e6af217379/download/Perfil-Foto.png',
//         valorTotal: '321,50',
//         devendo: true
//     },{
//         idUser: 3,
//         nomeUser: 'Juliano',
//         avatarUser: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d93e20f6e6af21730c/previews/647f73da3e20f6e6af217379/download/Perfil-Foto.png',
//         valorTotal: '19,00',
//         devendo: true
//     }
// ]



// const contas = [
//     {
//         idConta: 1,
//         envolvidos: ['Iza Machado', 'Saulo Cruz'],
//         nomeConta: 'Pastel',
//         valor: 28.50,
//         pagoPor: ['Iza Machado'],
//         dividir: envolvidos.length(),
//         lembrete: false
//     },{
//         idConta: 2,
//         envolvidos: [user1, user2],
//         nomeConta: 'luz',
//         valor: 50,
//         pagoPor: ['Saulo Cruz'],
//         dividir: envolvidos.length(),
//         lembrete: true
//     },{
//         idConta: 3,
//         envolvidos: [user1, user2],
//         nomeConta: 'luz',
//         valor: 50,
//         pagoPor: ['Juliano'],
//         dividir: envolvidos.length(),
//         lembrete: false
//     },
    
// ]





//             {contaId: 1, contaNome: 'pastel', valor: '28,50', grupo:false}, 
//             {contaId: 2, contaNome: 'aluguel', valor: '350,00', grupo: '304'}]},
//     {id:'2', imagem:'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d8da76cbf23b224cc9/previews/647f73d9da76cbf23b224d39/download/Perfil-Foto_%281%29.png', nome: 'Juliano', valorTotal:'19,00', devendo:true, 
//         contas:[
//             {contaId: 1, contaNome: 'pizza', valor:'19,00', grupo: 'canoa'}]}
// ]




const friends = [
    {
        idUser: 1, 
        nomeUser: 'Iza Machado',
        avatarUser: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/6477aa0b05dd5de039a67e5e/previews/6477aa0c05dd5de039a67f5f/download/foto-perfill.png',
    },{
        idUser: 2,
        nomeUser: 'Saulo Cruz',
        avatarUser: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d93e20f6e6af21730c/previews/647f73da3e20f6e6af217379/download/Perfil-Foto.png',
        valorTotal: '321,50',
        devendo: true
    },{
        idUser: 3,
        nomeUser: 'Juliano',
        avatarUser: 'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d93e20f6e6af21730c/previews/647f73da3e20f6e6af217379/download/Perfil-Foto.png',
        valorTotal: '19,00',
        devendo: true
    }
]


export default function myFriends(){
    return (friends)
}