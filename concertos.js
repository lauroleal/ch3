/*
Crie um array de objetos consertos que tenha como atributos: aparelho (string),
itens consertados (array de strings), valores (array de números) e pronto (booleano). Deve
ter ao menos 15 itens dentro de consertos salve o arquivo como consertos.js e exporte
este módulo. Módelo de exemplo do array de consertos:
*/

let concertos = [

    { aparelho: 'Geladeira',
      itensConsertados:['porta','borracha','motor'],
      valores: [78.90,26.40,120.89],
     pronto:true
    },
    
    { aparelho: 'Microondas',
      itensConsertados:['prato','placa'],
      valores: [58.90,86.40],
     pronto:false
    },
    
    { aparelho: 'Cafeteira',
      itensConsertados:['tomada','circuitos'],
      valores: [18.90,29.40],
     pronto:true
    },

    { aparelho: 'Notebook',
      itensConsertados:['placa mãe','carregador','placa de rede'],
      valores: [578.90,126.40,190.89],
     pronto:true
    },
    
    { aparelho: 'Televisão',
      itensConsertados:['tela','tomada'],
      valores: [978.90,22.40],
     pronto:false
    },

    { aparelho: 'Ferro',
      itensConsertados:['tomada','circuito'],
      valores: [18.90,26.90],
     pronto: true
    },
    
    { aparelho: 'Liquidificador',
      itensConsertados:['motor','copo','tampa'],
      valores: [58.90,16.40,12.89],
     pronto:true
    },

    { aparelho: 'Xbox One',
      itensConsertados:['fonte','tomada'],
      valores: [178.90,46.40],
     pronto: false
    },
    
    { aparelho: 'SmartPhone G23',
      itensConsertados:['display','touch','camera'],
      valores: [258.90,226.40,160.89],
     pronto:true
    },
    
    { aparelho: 'SmartPhone Iphone 40',
      itensConsertados:['display','bateria'],
      valores: [778.90,446.40],
     pronto:false
    },

    { aparelho: 'Fritadeira',
      itensConsertados:['tampa','coletor','tomada'],
      valores: [74.90,46.40,8.89],
     pronto:false
    },
   
    { aparelho: 'Panela Eletrica',
      itensConsertados:['capacitor','botão'],
      valores: [46.90,23.40],
     pronto:true
    },
    
    { aparelho: 'Maquina de Lavar Roupa',
      itensConsertados:['placa','motor'],
      valores: [278.90,176.40],
       pronto:false
    },
    
    { aparelho:'Maquina de Lavar Louça',
      itensConsertados:['mangueira','porta'],
      valores: [78.90,126.40],
     pronto:false
    },
    
    { aparelho: 'Robo Aspirador',
    itensConsertados:['coletor','capacitor'],
    valores: [58.90,36.40],
   pronto:true
  }
    
    ]

    module.exports = {concertos};
