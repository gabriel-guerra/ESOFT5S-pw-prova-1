function setInfo(uf){
    const title = document.querySelector('title');
    title.textContent = `Municípios de ${uf}`;

    const h1 = document.querySelector('h1');
    h1.textContent = `Municípios de ${uf}`;
}

async function getMunicipios(uf){
    const reqMunicipios = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
    const municipios = await reqMunicipios.json();

    return municipios;
}

function setList(municipios, ulMunicipios){

    municipios.forEach(m => {

        const button = document.createElement('button');
        button.textContent = "Favoritar"
        button.addEventListener('click', () => {
            favoritar(m);
        });

        const listItem = document.createElement('li');
        listItem.textContent = m.nome;
        listItem.appendChild(button);
        ulMunicipios.appendChild(listItem);

    });
    
}

function favoritar(m){

    if (!localStorage.getItem('favoritos')){
        let favoritos = [];
        favoritos.push(m);

        localStorage.setItem('favoritos',JSON.stringify(favoritos));
    }else{

        let favoritos = JSON.parse(localStorage.getItem('favoritos'));
        favoritos.push(m);
        localStorage.setItem('favoritos',JSON.stringify(favoritos));

    }

}

async function main(){
    const params = new URLSearchParams(location.search);
    const uf = params.get('uf');

    setInfo(uf);
    const municipios = await getMunicipios(uf);
    //console.log(municipios)

    let ulMunicipios = document.querySelector('#ul-municipios');
    setList(municipios, ulMunicipios)

}

main();