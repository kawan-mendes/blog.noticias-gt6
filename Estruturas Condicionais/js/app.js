// const idade = 19;

// if (idade>=18) {
//     console.log("maior");
// }

// else {
//     console.log("menor");
// }

// const regiao=1;

// switch(regiao){
//     case 1:
//         console.log("Nordeste");
//         break;

//         case 2:
//         console.log("Norte");
//         break;
        
//         case 3:
//         console.log("Sudeste");
//         break;

//         case 4:
//         console.log("Centro-Oeste");
//         break;

//         case 5:
//         console.log("Sul");
//         break;

//         default:
//             console.log("Opção inválida");
//             break;

// }

// === Exercicios === //

// 1. Escreva um algoritmo que receba a idade de uma pessoa.

// - se a idade for menor que  12 anos, escreva "criança"
// - se a idade for menor que  18 anos, escreva "adolescente"
// - se a idade for menor que  29 anos, escreva "jovem adulto":
// - se a idade for menor que  65 anos, escreva "adulto"
// - senao, escreva "idoso"

// const idade =70;

// if (idade<12){
//     console.log("criança");
    
// }

//  else if (idade<18){
//     console.log("adolescente");
    
// }

// else if (idade<29){
//     console.log("jovem adulto");
    
// }
// else if (idade<65){
//     console.log("adulto");
    
// }

// else if (idade>65){
//     console.log("Isoso");
    
// }

// Declação de valores 
// let nota1,nota2,nota3,media;

// // Atribuição de valores (entrada)
// nota1 = 5;
// nota2 = 7;
// nota3 = 8;

// // claculos e validações (processamento)
// media = (nota1 + nota2 + nota3) /3;

// // mostra resultado na tela 

// console.log(`media:${media.toFixed(1)}`);
// // console.log('media:'+ media);
// // console.log('media:',media);

// // Verifição da media 

// if (media>=6){
//     console.log("Aprovado (a)");
// }

// else if (media > 3 && media <6){
//     console.log("recuperação")
// }

// else {
//     console.log("Reprovado")
// }


// Estruturas Condicionais (if else, switch case)

// 8. Escreva um algoritmo que receba 4 notas. Calcule a média das notas e mostre na tela. Se a média for maior ou igual a 6, escreva "Aprovado", senão escreva "Reprovado".

// Exemplo:
// 		Entrada:
// 			nota 1: 7
// 			nota 2: 6.3
// 			nota 3: 8
// 			nota 4: 5.5
// 		Saída:
// 			Média: 6.7
// 			Aprovado!

// Execicios 8 

// Declação de valores 
let nota1,nota2,nota3,nota4,media;

// // Atribuição de valores (entrada)
nota1 = 7;
nota2 = 6.3;
nota3 =8;
nota4 = 5.5;

// // claculos e validações (processamento)
media= ( nota1 + nota2 + nota3 + nota4)/ 4;


// // mostra resultado na tela 

console.log(`media:${media.toFixed(1)}`);

if (media>=6.7){
        console.log("Aprovado (a)");
    }


    // 9. Escreva um algoritmo que verifique se o usuário informou o nome. Se o nome estiver em branco, mostre a frase "Bem-vindo(a) visitante!", senão escreva "Bem-vindo(a) " e o nome do usuário (ex: "Bem-vindo(a) Marnei").
	
    // Exemplo 1:
    //         Entrada:
    //             nome recebe "Marnei"
    //         Saída:
    //             "Bem-vindo(a) Marnei!"
        
    //     Exemplo 2:
    //         Entrada:
    //             nome recebe ""
    //         Saída:
    //             "Bem-vindo(a) visitante!"


    /// Declação de valore
    let nome ;
    nome = "kawan";

// // Atribuição de valores (entrada)
if (nome) {
    console.log(`bem vindo ${nome}`)
}

// // claculos e validações (processamento)
else(
     console.log(`bem vindo visitante`)
)
// // mostra resultado na tela