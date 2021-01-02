const Personagem =  require('./personagem');
const Commander =  require('Commander');
const Database = require('./database.js');

async function main(){



  Commander
    .version('Versão 1')
    .option('-n,  --nome [value]', "Nome do personagem")
    .option('-cl, --classe [value]', "Classe do personagem")
    .option('-p,  --passiva [value]', "Passiva do personagem")
    .option('-i,  --id [value]', "Id do personagem")

    .option('-c, --cadastrar', "Cadastrar um personagem")
    .option('-r, --remover', "Remove o personagem pelo id")
    .option('-l, --listar [value]',"Lista varios personagens")
    .option('-a, --atualizar [value]', "Atualizar o heroi pelo id")

    .parse(process.argv);

    const personagem = new Personagem(Commander);
    
    try {


      if(Commander.cadastrar){
        delete personagem.id;

        const resultado = await Database.cadastrar(personagem);

        if(!resultado){
          console.error("Personagem não foi cadastrado");
          return;
        }

        console.log("Personagem cadastrado com sucesso");
      }


      if(Commander.listar){

        const resultado = await Database.listar();
        console.log(resultado);
        return resultado;

      }

      if(Commander.remover){

        const resultado = await Database.remover(personagem.id);

        if(!resultado){
          console.error("Não foi possivel remover o personagem");
        }

        console.log("Personagem removido com sucesso");
      }

      if(Commander.atualizar){

        const idAtualizado = parseInt(Commander.atualizar);

        const dado = JSON.stringify(personagem);
        const personagemAtualizado = JSON.parse(dado);
        const resultado = await Database.atualizar(idAtualizado, personagemAtualizado);

        if(!resultado){
          console.error("Não foi possivel atualizar o personagem");
        }

        console.log("Personagem atualizado com sucesso");

      }
      
    } catch (error) {
      console.error("Error: ", error);
    }
  
}

main();
