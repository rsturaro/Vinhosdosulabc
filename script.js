// --- Elementos do DOM ---
const cartIcon = document.getElementById('cart-icon');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartButton = document.getElementById('close-cart-button');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');
const cartCountSpan = document.querySelector('.cart-count');

const menuToggle = document.getElementById('menu-toggle');
const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
const navLinks = document.querySelectorAll('.main-nav a, .mobile-nav-link, .btn-primary');

// Elementos do Overlay de Idade
const ageVerificationOverlay = document.getElementById('age-verification-overlay');
const ageConfirmButton = document.getElementById('age-confirm-button');
const ageDenyButton = document.getElementById('age-deny-button');

// Elemento de Notificação
const notificationElement = document.getElementById('notification');

// Elemento do Catálogo
const catalogGrid = document.getElementById('catalog-grid');

// --- Dados dos Produtos (Todos com rating >= 4.8 e imagens de 1.jpg a 19.jpg) ---
const products = [
    { id: "1", name: "Gans Portugal Branco - 750ml", price: 115.00, image: "1.png", rating: 4.9, description: "Cor amarelo leve. Aromas florais e a frutos Tropicais. Demonstra elegância, frescura e um fim de boca elegante." },
    { id: "2", name: "Gans Portugal Tinto - 750ml", price: 115.00, image: "2.png", rating: 4.8, description: "Cor rubi e aroma de frutos silvestres, bom equilíbrio e fim de boca suave e refinado." },
    { id: "3", name: "Gans Setúbal Tinto - 750ml", price: 129.00, image: "4.png", rating: 5.0, description: "Castas Fernão Pires, Antão Vaz e Arinto produzidas na Região da Península de Setúbal, conta a sua história e guarda o segredo do seu autentico aruma e frescor" },
    { id: "5", name: "Vinho Português Tinto - 750ml", price: 109.00, image: "5.jpeg", rating: 4.8, description: "Cor vermelho escuro, aroma de Frutos pretos maduros com especiarias defumadas." },
    { id: "6", name: "Vinho Português Branco - 750ml", price: 109.00, image: "6.png", rating: 4.9, description: "Ótimo com Molusco, Mexilhão, ostras, peixes e principalmente com um famoso prato típico português chamado Amêijoas á Bulhão Pato." },
    { id: "8", name: "Outeiro Tinto - 750ml", price: 879.00, image: "8.jpeg", rating: 4.9, description: "Castas 50% Syrah, 50% Petit Verdot. Muito intenso com aroma de frutas pretas e notas de especiarias e café, boa acidez, estrutura de grande complexidade." },
    { id: "9", name: "Sete Linhas Tinto - 750ml", price: 1150.00, image: "9.jpeg", rating: 4.8, description: "100% Alicante Bouschet, boca um bolo de fruta madura com ameixas e violeta, densa finla complexo com frutos pretos e suculentos." },
    { id: "10", name: "Seixo Amarelo Reserva Tinto - 750ml", price: 139.00, image: "10.jpeg", rating: 4.9, description: "Castas Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Francisca e Tinto Cão." },
    { id: "11", name: "Seixo Amarelo Reserva Branco - 750ml", price: 139.00, image: "11.jpeg", rating: 4.8, description: "Castas Viosinho, Rabigato e Gouveio. Vinho Branco com notas de frutas limpas e Citrinas, boca leve com madeira integrada." },
    { id: "12", name: "Pedra Cavada Reserva Tinto - 750ml", price: 170.00, image: "12.jpeg", rating: 5.0, description: "Castas Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Francisca e Tinto Cão." },
    { id: "13", name: "Pedra Cavada Branco - 750ml", price: 170.00, image: "13.jpeg", rating: 4.9, description: "Castas Viosinho, Rabigato e Gouveio. Vinho Branco aromaticamente intenso, destacando flor doce e fruta de polpa branca." },
    { id: "14", name: "Espumante Brut Costa Blu - 750ml", price: 69.00, image: "14.jpeg", rating: 4.8, description: "Complexo, fino e delicado com notas frutadas, fresco de boa estrutura." },
    { id: "15", name: "Expressão Branco - 750ml", price: 125.00, image: "15.jpeg", rating: 4.9, description: "Nota de prova cor amarelo claro com tons esverdeado, mineral, floral, fruta tropical e citrino. Harmoniza bem, Frango grelhado, peixe de carne branca, marisco, queijo branco e de cabra." },
    { id: "16", name: "Marquês de Estremoz Aragonez - 750ml", price: 295.00, image: "16.jpeg", rating: 5.0, description: "Cor granada com ligeiras nuances acastanhadas, aroma de grande complexidade, fruto vermelhos, geléias, especiarias e baunilha, vinho potente, macio, quente, encorpado." },
    { id: "17", name: "Marquês de Estremoz Tinto Touriga - 750ml", price: 275.00, image: "17.jpeg", rating: 4.9, description: "Cor Violeta Intensa, aroma elegante de flores e fruto silvestre. Na boca é um vinho redondo, aveludado com tatinos finos." },
    { id: "18", name: "Barquinha Tinto - 750ml", price: 175.00, image: "18.jpeg", rating: 4.8, description: "Nariz profundo com várias camadas, fruta preta floral e algumas notas defumadas bem integradas. Na boca torna-se envolvente com taninos sedutores e aveludados." },
    { id: "19", name: "Marquês de Estremoz Tinto Reserva - 750ml", price: 205.00, image: "19.jpeg", rating: 5.0, description: "Nota de Prova com cor rubi forte, com aroma complexo de frutos vermelhos e especiarias, resultado da madeira. Na boa é macio encorpado e consistente.." },
    { id: "20", name: "Gans Setúbal Branco - 750ml", price: 129.00, image: "1.png", rating: 4.9, description: "Apresenta Cor Citrina e Aromas tropicais, frutas citricas mais minerais que o GANS PORTUGAL, entregando uma autententicidade única." },
    { id: "21", name: "Expressão Rosé - 750ml", price: 125.00, image: "15.jpeg", rating: 4.9, description: "Nota de Prova de Cor Rosa Claro, Fresco, Frutado com notas de Violeta. Excelente Harmonização com Carne Branca em Geral (Suínos, Aves e Peixes), além de massas e saladas." }
];

// --- Variáveis do Carrinho ---
let cart = []; // Array para armazenar os itens no carrinho
// Variável para armazenar as sugestões de upsell que já foram geradas
// Assim, não geramos um novo set a cada vez.
let currentUpsellSuggestions = [];

// --- Funções Auxiliares ---

// Função para mostrar notificação
function showNotification(message, isSuccess = true) {
    // Garante que a notificação está completamente escondida antes de mostrar novamente
    notificationElement.classList.remove('show', 'hide-left', 'hide-right');
    notificationElement.style.opacity = '0';
    notificationElement.style.visibility = 'hidden';
    notificationElement.style.transform = 'translateX(-50%)'; // Reseta a posição

    // Pequeno delay para permitir que o CSS reset seja aplicado
    setTimeout(() => {
        notificationElement.textContent = message;
        notificationElement.style.backgroundColor = isSuccess ? 'var(--purchase-button-color)' : '#dc3545';

        notificationElement.classList.add('show');
        notificationElement.style.opacity = '1';
        notificationElement.style.visibility = 'visible';

        // Limpa timeout anterior e configura um novo
        clearTimeout(notificationElement.hideTimeout);
        notificationElement.hideTimeout = setTimeout(() => {
            hideNotification();
        }, 3000); // 3 segundos
    }, 50); // Delay mínimo
}

// Função para esconder a notificação
function hideNotification(direction = '') {
    clearTimeout(notificationElement.hideTimeout);
    notificationElement.classList.remove('show');
    notificationElement.style.transition = 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease';

    if (direction === 'left') {
        notificationElement.classList.add('hide-left');
    } else if (direction === 'right') {
        notificationElement.classList.add('hide-right');
    } else {
        notificationElement.style.opacity = '0';
        notificationElement.style.visibility = 'hidden';
    }

    const onTransitionEnd = () => {
        notificationElement.classList.remove('hide-left', 'hide-right');
        notificationElement.style.transform = 'translateX(-50%)';
        notificationElement.removeEventListener('transitionend', onTransitionEnd);
    };

    if (notificationElement.style.opacity !== '0' && notificationElement.style.visibility !== 'hidden') {
         notificationElement.addEventListener('transitionend', onTransitionEnd, { once: true });
    } else {
        onTransitionEnd();
    }
}


// Função para gerar as estrelas de avaliação
function generateStars(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star filled"></i>';
    }
    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt filled"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    return starsHtml;
}

// Função para renderizar os produtos no catálogo
function renderCatalogProducts() {
    catalogGrid.innerHTML = ''; // Limpa o catálogo existente
    const filteredProducts = products.filter(product => product.rating >= 4.8); // FILTRAR Vinhos com avaliação 4.8 ou mais

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('data-id', product.id);
        productCard.setAttribute('data-name', product.name);
        productCard.setAttribute('data-price', product.price.toFixed(2));
        productCard.setAttribute('data-rating', product.rating.toFixed(1));

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-details">
                <span class="product-price">R$ ${product.price.toFixed(2)}</span>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.rating.toFixed(1)})</span>
                </div>
            </div>
            <button class="add-to-cart"><b>Adicionar ao Carrinho</b></button>
        `;
        catalogGrid.appendChild(productCard);
    });

    // Adiciona event listeners aos novos botões "Adicionar ao Carrinho" do catálogo
    document.querySelectorAll('#catalogo .add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// **NOVA LÓGICA:** Função para gerar e gerenciar as sugestões de upsell
function generateUpsellSuggestions() {
    const productsInCartIds = new Set(cart.map(item => item.id));
    // Filtra todos os produtos que *não* estão no carrinho
    let availableProductsForUpsell = products.filter(p => !productsInCartIds.has(p.id));

    // Embaralha os produtos disponíveis
    for (let i = availableProductsForUpsell.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableProductsForUpsell[i], availableProductsForUpsell[j]] = [availableProductsForUpsell[j], availableProductsForUpsell[i]];
    }
    // Pega os 2 primeiros e os armazena em currentUpsellSuggestions
    currentUpsellSuggestions = availableProductsForUpsell.slice(0, 2);
}


// --- Funções do Carrinho ---

// Função para atualizar a exibição do carrinho
function updateCartUI() {
    cartItemsContainer.innerHTML = ''; // Limpa o conteúdo atual
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Seu carrinho está vazio.</p>';
        currentUpsellSuggestions = []; // Limpa sugestões se carrinho vazio
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>R$ ${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity-control">
                        <button data-id="${item.id}" data-action="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button data-id="${item.id}" data-action="increase">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        // Filtra as sugestões existentes, removendo as que já estão no carrinho
        const productsInCartIds = new Set(cart.map(item => item.id));
        const finalUpsellSuggestionsToDisplay = currentUpsellSuggestions.filter(p => !productsInCartIds.has(p.id));

        const upsellSection = document.createElement('div');
        upsellSection.classList.add('cart-upsell');
        upsellSection.innerHTML = '<h3>Leve também:</h3>';

        if (finalUpsellSuggestionsToDisplay.length > 0) {
            finalUpsellSuggestionsToDisplay.forEach(product => {
                const upsellItem = document.createElement('div');
                upsellItem.classList.add('cart-upsell-item');
                upsellItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.name} - R$ ${product.price.toFixed(2)}</p>
                    <button class="add-to-cart-upsell" data-id="${product.id}">Adicionar</button>
                `;
                upsellSection.appendChild(upsellItem);
            });
        } else {
            // Se não há sugestões, exibe a mensagem "sem sugestões"
            const noSuggestionsMessage = document.createElement('p');
            noSuggestionsMessage.classList.add('no-suggestions-message'); // Adicionar classe para estilização
            noSuggestionsMessage.textContent = 'Nenhuma sugestão disponível.';
            upsellSection.appendChild(noSuggestionsMessage);
        }
        cartItemsContainer.appendChild(upsellSection);

        // Adiciona event listeners aos botões "Adicionar" dos produtos sugeridos
        document.querySelectorAll('.add-to-cart-upsell').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.id;
                const productToAdd = products.find(p => p.id === productId);
                if (productToAdd) {
                    const tempEvent = {
                        target: {
                            closest: () => ({
                                dataset: {
                                    id: productToAdd.id,
                                    name: productToAdd.name,
                                    price: productToAdd.price.toFixed(2)
                                }
                            })
                        }
                    };
                    addToCart(tempEvent);
                    // addToCart já chama generateUpsellSuggestions e updateCartUI
                }
            });
        });
    }

    const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotalSpan.textContent = total.toFixed(2);
    cartCountSpan.textContent = totalItemsInCart.toString();

    // Event listeners para itens do carrinho (DEVE ESTAR AQUI pois o HTML é recriado)
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
    document.querySelectorAll('.cart-item-quantity-control button').forEach(button => {
        button.addEventListener('click', updateQuantity);
    });
}

// Função para adicionar item ao carrinho
function addToCart(event) {
    const productCard = event.target.closest('.product-card') || event.target.closest('.cart-upsell-item');
    const productId = productCard.dataset.id;
    const productName = productCard.dataset.name;
    const productPrice = parseFloat(productCard.dataset.price);
    const productData = products.find(p => p.id === productId);
    const productImage = productData ? productData.image : '';

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }
    // REGENERA as sugestões após adicionar um item
    generateUpsellSuggestions();
    updateCartUI(); // Atualiza a UI do carrinho e a seção de upsell
    showNotification(`"${productName}" adicionado ao carrinho!`);
}

// Função para remover item do carrinho
function removeFromCart(event) {
    const productIdToRemove = event.target.closest('.remove-item').dataset.id;
    const removedItem = cart.find(item => item.id === productIdToRemove);

    cart = cart.filter(item => item.id !== productIdToRemove);
    // REGENERA as sugestões após remover um item
    generateUpsellSuggestions();
    updateCartUI();
    if (removedItem) {
        showNotification(`"${removedItem.name}" removido do carrinho.`, false);
    }
}

// Função para atualizar quantidade de itens no carrinho
function updateQuantity(event) {
    const productId = event.target.dataset.id;
    const action = event.target.dataset.action;
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        const currentItem = cart[itemIndex];
        if (action === 'increase') {
            currentItem.quantity++;
        } else if (action === 'decrease') {
            if (currentItem.quantity > 1) {
                currentItem.quantity--;
            } else {
                cart.splice(itemIndex, 1);
                showNotification(`"${currentItem.name}" removido do carrinho.`, false);
            }
        }
        // REGENERA as sugestões
        generateUpsellSuggestions();
        updateCartUI();
    }
}

// --- Event Listeners do Carrinho ---
cartIcon.addEventListener('click', () => {
    cartOverlay.classList.toggle('active');
    mobileNavOverlay.classList.remove('active');
    // Gera novas sugestões APENAS ao abrir o carrinho ou atualizar o carrinho
    generateUpsellSuggestions();
    updateCartUI(); // Força atualização da UI ao abrir o carrinho para garantir sugestões corretas
});

closeCartButton.addEventListener('click', () => {
    cartOverlay.classList.remove('active');
});

cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
        cartOverlay.classList.remove('active');
    }
});

// --- Funções do Menu Mobile ---
menuToggle.addEventListener('click', () => {
    mobileNavOverlay.classList.toggle('active');
    cartOverlay.classList.remove('active');
});

mobileNavOverlay.addEventListener('click', (e) => {
    if (e.target === mobileNavOverlay) {
        mobileNavOverlay.classList.remove('active');
    }
});

// --- Smooth Scroll para links de navegação ---
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = document.querySelector('.main-header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            if (mobileNavOverlay.classList.contains('active')) {
                mobileNavOverlay.classList.remove('active');
            }
        }
    });
});

// --- Animação do Banner Hero ---
const bannerSlides = document.querySelectorAll('.hero-banner .banner-slide');
let currentBannerIndex = 0;

function showNextBanner() {
    if (bannerSlides.length === 0) return;

    bannerSlides[currentBannerIndex].classList.remove('active');
    currentBannerIndex = (currentBannerIndex + 1) % bannerSlides.length;
    bannerSlides[currentBannerIndex].classList.add('active');
}

if (bannerSlides.length > 1) {
    setInterval(showNextBanner, 5000);
}
if (bannerSlides.length > 0) {
    bannerSlides[0].classList.add('active');
}

// --- Lógica do Overlay de Verificação de Idade ---
function checkAgeVerification() {
    ageVerificationOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

ageConfirmButton.addEventListener('click', () => {
    ageVerificationOverlay.style.display = 'none';
    document.body.style.overflow = '';
});

ageDenyButton.addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
});

// --- Funcionalidade de Arrastar e Clicar Notificação ---
let isDragging = false;
let startX;
let initialTransformX;
let dragThreshold = 70;

function getTransformXValue(element) {
    const transform = getComputedStyle(element).transform;
    if (transform && transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        return matrix.m41;
    }
    return 0;
}

notificationElement.addEventListener('click', (e) => {
    // A notificação já se auto-esconde, este clique é apenas para interrupção manual
    // ou se o usuário não arrastou o suficiente e quer tirar com clique
    if (!isDragging && Math.abs(e.clientX - startX) < 5) {
        hideNotification();
        clearTimeout(notificationElement.hideTimeout);
    }
});

notificationElement.addEventListener('touchstart', (e) => {
    if (notificationElement.classList.contains('show')) {
        isDragging = true;
        startX = e.touches[0].clientX;
        initialTransformX = getTransformXValue(notificationElement);

        notificationElement.style.transition = 'none';
        clearTimeout(notificationElement.hideTimeout);
    }
}, { passive: false });

notificationElement.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const currentClientX = e.touches[0].clientX;
    const dx = currentClientX - startX;

    notificationElement.style.transform = `translateX(${initialTransformX + dx}px)`;
}, { passive: false });

notificationElement.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const finalTransformX = getTransformXValue(notificationElement);
    const originalCenterOffset = -notificationElement.offsetWidth / 2;
    const finalDisplacement = finalTransformX - originalCenterOffset;

    notificationElement.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out, visibility 0.3s ease';

    if (finalDisplacement < -dragThreshold) {
        hideNotification('left');
    } else if (finalDisplacement > dragThreshold) {
        hideNotification('right');
    } else {
        notificationElement.style.transform = 'translateX(-50%)';
        notificationElement.hideTimeout = setTimeout(() => {
            hideNotification();
        }, 3000);
    }
    isDragging = false;
});


// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    // Gera as sugestões iniciais apenas uma vez ao carregar a página
    generateUpsellSuggestions();
    updateCartUI(); // Renderiza o carrinho com as sugestões iniciais
    checkAgeVerification();
    renderCatalogProducts();

    document.querySelectorAll('#mais-vendidos .add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
