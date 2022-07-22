import Endereço from "./classes/Endereço";
import Usuário from "./classes/Usuário";
import Sexo from "./utils/Sexo";

let user1 = new Usuário("Rafael Fischer", 9889648997, Sexo.M, new Endereço("Acácias", 99, 85012130, "Trianon", "Guarapuava"));
console.log("Informações do Usuário 1:")
console.log(`Nome: ${user1.nome}`);
console.log(`CPF: ${user1.cpf}`);
console.log(`Sexo: ${user1.sexo}`);
console.log(`Endereço: ${user1.endereço.rua}, ${user1.endereço.numero} - ${user1.endereço.bairro} \n\t ${user1.endereço.cidade} \n\t ${user1.endereço.cep}`)
let user2 = new Usuário("Maria da Silva", 61068581018, Sexo.F, new Endereço("Marechal Rondon", 813, 85000100, "Água Verde", "Curitiba"))
console.log("\nInformações do Usuário 2:")
console.log(`Nome: ${user2.nome}`);
console.log(`CPF: ${user2.cpf}`);
console.log(`Sexo: ${user2.sexo}`);
console.log(`Endereço: ${user2.endereço.rua}, ${user2.endereço.numero} - ${user2.endereço.bairro} \n\t ${user2.endereço.cidade} \n\t ${user2.endereço.cep}`)