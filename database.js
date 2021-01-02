const {readFile, writeFile} = require('fs');
const {promisify}  = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database{

  constructor(){
    this.NOME_ARQUIVO = 'personagens.json'
  }

  async obterDadosArquivo(){

    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8');

    return JSON.parse(arquivo.toString());

  }

  async escreverArquivo(dados){

    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados));

    return true;

  }

  async cadastrar(personagem){

    const dados = await this.obterDadosArquivo();
    const id = personagem.id <= 2 ? personagem.id : Date.now();
    const idPersonagem = {id, ...personagem};
    const finalDadosPersonagem = [...dados, idPersonagem];
    const resultado =  await this.escreverArquivo(finalDadosPersonagem);

    return resultado;

  }

  async listar(id){

    const dados = await this.obterDadosArquivo();

    const dadosFiltrados = await dados.filter(item => id ? item.id === id : true);

    return dadosFiltrados;

  }


  async remover(id){

    if(!id){

      return await this.escreverArquivo([]);
      
    }

    const dados = await this.obterDadosArquivo();
    const indice = dados.findIndex(item => item.id === parseInt(id));

    if(indice === -1){
      throw Error('O personagem não existe');
    }

    dados.splice(indice, 1);

    return await this.escreverArquivo(dados);


  }

  async atualizar(id, novoPersonagem){

    const dados = await this.obterDadosArquivo();
    const indice = dados.findIndex(item => item.id === parseInt(id));


    if(indice === -1){
      throw Error('O personagem não existe');
    }

    const atual =  dados[indice];

    const objetoAtualizar = {
      ...atual,
      ...novoPersonagem
    }

    dados.splice(indice, 1);

    return await this.escreverArquivo([
      ...dados,
      objetoAtualizar
    ])

  }

}

module.exports = new Database();