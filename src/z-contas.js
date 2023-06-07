const contas = [
    {
        idConta: 1,
        envolvidos: ['Iza Machado', 'Saulo Cruz'],
        nomeConta: 'Pastel',
        valor: 28.50,
        pagoPor: ['Iza Machado'],
        dividir: envolvidos.length(),
        lembrete: false
    },{
        idConta: 2,
        envolvidos: [user1, user2],
        nomeConta: 'luz',
        valor: 50,
        pagoPor: ['Saulo Cruz'],
        dividir: envolvidos.length(),
        lembrete: true
    },{
        idConta: 3,
        envolvidos: [user1, user2],
        nomeConta: 'luz',
        valor: 50,
        pagoPor: ['Juliano'],
        dividir: envolvidos.length(),
        lembrete: false
    },
    
]



const billList = [
    {
    userId:'1', 
    imagem:'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d93e20f6e6af21730c/previews/647f73da3e20f6e6af217379/download/Perfil-Foto.png', 
    nome: 'Saulo Cruz', 
    valorTotal:'321,50', 
    devendo:true, 
    contas:[
        {contaId: 1, contaNome: 'pastel', valor: '28,50', grupo:false}, 
        {contaId: 2, contaNome: 'aluguel', valor: '350,00', grupo: '304'}]
    },{
    userId:'2', imagem:'https://trello.com/1/cards/6477aa0a218e927787924709/attachments/647f73d8da76cbf23b224cc9/previews/647f73d9da76cbf23b224d39/download/Perfil-Foto_%281%29.png', 
    nome: 'Juliano', 
    valorTotal:'19,00', 
    devendo:true, 
    contas:[
        {contaId: 1, contaNome: 'pizza', valor:'19,00', grupo: 'canoa'}]}
]