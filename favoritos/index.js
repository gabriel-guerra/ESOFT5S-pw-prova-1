

function setList(ulFavoritos){
    if (localStorage.getItem('favoritos')){

        const favoritos = JSON.parse(localStorage.getItem('favoritos'));

        favoritos.forEach(f => {
    
            const listItem = document.createElement('li');
            listItem.textContent = f.nome;
            ulFavoritos.appendChild(listItem);
    
        });

        
    }
}



function main(){

    const ulFavoritos = document.querySelector('#ul-favoritos');

   setList(ulFavoritos);
    
}

main();