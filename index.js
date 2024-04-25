async function getEstados(){
    const reqEstados = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
    const estados = await reqEstados.json();

    return estados;
}

function setList(estados, ulEstados){

    estados.forEach(e => {

        const anchor = document.createElement('a');
        anchor.href = `./municipios/index.html?uf=${e.sigla}`;
        anchor.innerHTML = e.nome;

        const listItem = document.createElement('li');
        listItem.appendChild(anchor);
        ulEstados.appendChild(listItem);

    });
    
}


async function main(){

    const estados = await getEstados();
    console.log(estados);

    let ulEstados = document.querySelector('#ul-estados');

    setList(estados, ulEstados);

        

}

main();