import chalk from "chalk";
import validarURL from "./arquivos/http-validacao.js";
import pegarArquivo from "./index.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegarArquivo(caminhoDoArquivo[2]);

    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('Links válidos'), await validarURL(resultado))
    }else{
        console.log(chalk.yellow('Lista de Links'), resultado)
    }
}

processaTexto(caminho);