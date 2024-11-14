// Adiciona animação suave ao clicar nos links do menu
document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        // Obtém o ID do destino e encontra o elemento correspondente na página
        let targetId = this.getAttribute('href');
        let targetElement = document.querySelector(targetId);

        // Rola suavemente até o destino
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        // Chama a função para adicionar a classe 'active' ao link clicado
        controleMenu(this);
    });
});

// Função para adicionar a classe 'active' ao link clicado
function controleMenu(link) {
    // Remove a classe 'active' de todos os links
    document.querySelectorAll('#nav-list a').forEach(item => {
        item.classList.remove('active');
    });

    // Adiciona a classe 'active' ao link clicado
    link.classList.add('active');

    // Fecha o menu de navegação em telas pequenas
    if (window.innerWidth <= 768) {
        navList.classList.remove('active');  // Fecha o menu
        mobileMenuButton.classList.remove('active'); // Restaura o ícone de hambúrguer
    }
}

// Seleciona o botão do menu (ícone hambúrguer), a lista de navegação, e todos os links do menu
let mobileMenuButton = document.getElementById("mobile-menu");
let navList = document.getElementById("nav-list");
let navLinks = document.querySelectorAll('#nav-list a');

// Alterna a visibilidade do menu ao clicar no botão hambúrguer
mobileMenuButton.addEventListener("click", () => {
    mobileMenuButton.classList.toggle("active"); // Alterna o ícone do hambúrguer
    navList.classList.toggle("active"); // Mostra ou esconde o menu
});

// Esconde o menu quando um link do menu é clicado
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("active"); // Esconde o menu
        mobileMenuButton.classList.remove("active"); // Restaura o ícone do hambúrguer
    });
});


// Função de animação que revela elementos à medida que rolam para a tela
function scrollReveal() {
    // Seleciona os elementos que devem aparecer com o scroll
    const elements = document.querySelectorAll('.info-item, .box-diferenciais ul li, .matricula-item, #titulo');

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top; // Posição do elemento em relação à tela
        const windowHeight = window.innerHeight; // Altura da janela visível

        // Se o elemento está dentro da área visível da tela, adicione a classe 'visible'
        if (elementTop < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
}

// Seleciona o botão de voltar ao topo
const backToTopButton = document.getElementById('backToTop');

// Exibe ou oculta o botão de voltar ao topo dependendo da rolagem
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'block'; // Exibe o botão
    } else {
        backToTopButton.style.display = 'none'; // Oculta o botão
    }

    // Chama a função para ativar a animação de scroll
    scrollReveal();
});

// Voltar ao topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // Vai para o topo da página
        behavior: 'smooth' // Rola suavemente
    });
});

// Exibe ou oculta a lista de infraestrutura com um botão de alternância
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const listContainer = document.querySelector('.list-container');

    // Adiciona evento de clique para alternar a visibilidade da lista
    toggleButton.addEventListener('click', () => {
        listContainer.classList.toggle('visible'); // Alterna a classe 'visible' na lista

        // Alterar o ícone do botão conforme a visibilidade da lista
        toggleButton.textContent = listContainer.classList.contains('visible') ? "↑" : "↓";
    });
});
