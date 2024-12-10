// animação suave ao clicar nos links do menu
document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        // encontra o elemento correspondente na página pelo ID
        let targetId = this.getAttribute('href')
        let targetElement = document.querySelector(targetId)

        // rola suavemente até o destino
        targetElement.scrollIntoView({
            behavior: 'smooth'
        })

        controleMenu(this)
    })
})

// função para adicionar a classe 'active' ao link clicado
function controleMenu(link) {
    // remove a classe 'active' de todos os links
    document.querySelectorAll('#nav-list a').forEach(item => {
        item.classList.remove('active')
    });

    // adiciona a classe 'active' ao link clicado
    link.classList.add('active')

    // fecha o menu de navegação em telas pequenas
    if (window.innerWidth <= 768) {
        navList.classList.remove('active')
        mobileMenuButton.classList.remove('active')
    }
}

// Seleciona o botão do menu a lista de navegação, e todos os links do menu
let mobileMenuButton = document.getElementById("mobile-menu")
let navList = document.getElementById("nav-list")
let navLinks = document.querySelectorAll('.nav-item a') 


mobileMenuButton.addEventListener("click", () => {
    mobileMenuButton.classList.toggle("active") 
    navList.classList.toggle("active") 
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("active") // Esconde o menu
        mobileMenuButton.classList.remove("active") // Restaura o ícone do hambúrguer
    })
})

function scrollReveal() {
    // Seleciona os elementos que devem aparecer com o scroll
    const elements = document.querySelectorAll('.info-item, .box-diferenciais ul li, .matricula-item, #titulo')

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top 
        const windowHeight = window.innerHeight

        if (elementTop < windowHeight - 100) {
            el.classList.add('visible')
        }
    })
}

// Seleciona o botão de voltar ao topo
const backToTopButton = document.getElementById('backToTop')

// Exibe ou oculta o botão de voltar ao topo dependendo da rolagem
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'block'; 
    } else {
        backToTopButton.style.display = 'none'; 
    }

    // Chama a função para ativar a animação de scroll
    scrollReveal()
})

// Voltar ao topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

// Exibe ou oculta a lista de infraestrutura com um botão de alternância
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button')
    const listContainer = document.querySelector('.list-container')

    toggleButton.addEventListener('click', () => {
        listContainer.classList.toggle('visible')

        toggleButton.textContent = listContainer.classList.contains('visible') ? "↑" : "↓"
    })
})
