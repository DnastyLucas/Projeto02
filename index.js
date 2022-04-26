import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, ("Não há arquivo nesse caminho")))
}

async function pegarArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.blue(texto))
    }
    catch(erro){
        trataErro(erro)
    }
}

/*function pegarArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, encoding)
    .then((text) => console.log(chalk.blue(text)))
    .catch((erro) => trataErro(erro))
}*/
/*function pegarArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) =>{
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.blue(texto))
    });
};
*/

pegarArquivo('./arquivos/texto.md');
//pegarArquivo('./arquivos/texto.');