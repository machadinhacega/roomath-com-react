// const billList = [
//     {id:'1', nome: 'agua', valor:52},
//     {id:'2', nome: 'energia', valor:52},
//     {id:'3', nome: 'aluguel', valor:52},
//     {id:'4', nome: 'internet', valor:52}
// ]

// bills = [
//     {
//       "id": 1,
//       "name": "Energia",
//       "amount": 120.00,
//       "paidFor": "Iza",
//       "split": "igualmente",
//       "alarm": [28, 07, 2023]
//     },
//   ]




const billList = [
    {id:'1', imagem:'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d93e20f6e6af21730c/previews/647f73da3e20f6e6af217379/download/Perfil-Foto.png', nome: 'Saulo Cruz', valorTotal:'321,50', devendo:true, contas:[{contaId: 1, contaNome: 'pastel', valor: '28,50', grupo:false}, {contaId: 2, contaNome: 'aluguel', valor: '350,00', grupo: '304'}]},
    {id:'2', imagem:'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d8da76cbf23b224cc9/previews/647f73d9da76cbf23b224d39/download/Perfil-Foto_%281%29.png', nome: 'Juliano', valorTotal:'19,00', devendo:true, contas:[{contaId: 1, contaNome: 'pizza', valor:'19,00', grupo: 'canoa'}]}
]






// const billList = []

export default function loadBills(){
    return (billList)
}