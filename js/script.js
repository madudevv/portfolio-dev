const listaProjetos = document.getElementById("lista-projetos");

async function carregarProjetos() {
  try {
    const resposta = await fetch(
      "https://api.github.com/users/madudevv/repos?sort=updated&per_page=30",
    );

    const projetos = await resposta.json();

    listaProjetos.innerHTML = "";

    console.log(projetos);

    projetos.forEach((projeto) => {
      
      const card = document.createElement("div");
      card.classList.add("card-projeto");
      const titulo = document.createElement("h3");
      const descricao = document.createElement("p");
      const link = document.createElement("a");
      const linguagem = document.createElement("p");

      linguagem.classList.add("tag-linguagem"); 

      link.textContent = "Ver projeto";
      link.href = projeto.html_url;
      link.target = "_blank"; /*abre em outra aba */
      link.rel = "noopener noreferrer"; /* proteção */

      titulo.textContent = projeto.name;
      descricao.textContent = projeto.description || "Sem descrição"; /* as duas || servem para caso não tenha descrição, ele vai colocar "Sem descrição" */
      linguagem.textContent = projeto.language || "Linguagem não especificada";

      card.appendChild(titulo);
      card.appendChild(descricao);
      card.appendChild(linguagem);
      card.appendChild(link);

      listaProjetos.appendChild(card);

    });
  } catch (erro) {
    console.error("Erro ao carregar projetos:", erro);
  }
}

carregarProjetos();
