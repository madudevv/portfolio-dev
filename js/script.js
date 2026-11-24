const listaProjetos = document.getElementById("lista-projetos");

async function carregarProjetos() {
    try {
        const resposta = await fetch(
            "https://api.github.com/users/madudevv/repos?sort=updated&per_page=30"
        );
        }    
}