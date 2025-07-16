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

// Elementos do Modal de Detalhes do Produto
const productModalOverlay = document.getElementById('product-modal-overlay');
const closeProductModalButton = document.getElementById('close-product-modal');
const modalProductImage = document.getElementById('modal-product-image');
const modalProductName = document.getElementById('modal-product-name');
const modalProductDescription = document.getElementById('modal-product-description');
const modalProductPrice = document.getElementById('modal-product-price');


// --- Dados dos Produtos (Todos com rating >= 4.8 e imagens de 1.jpg a 19.jpg) ---
const products = [
    { id: "1", name: "Gans Portugal Branco - 750ml", price: 115.00, image: "1.png", rating: 4.9, description: "Cor amarelo leve. Aromas florais e a frutos Tropicais. Demonstra elegância, frescura e um fim de boca elegante." },
    { id: "2", name: "Gans Portugal Tinto - 750ml", price: 115.00, image: "2.png", rating: 4.8, description: "Cor rubi e aroma de frutos silvestres, bom equilíbrio e fim de boca suave e refinado." },
    { id: "4", name: "Gans Setúbal Tinto - 750ml", price: 129.00, image: "4.png", rating: 5.0, description: "Castas Fernão Pires, Antão Vaz e Arinto produzidas na Região da Península de Setúbal, conta a sua história e guarda o segredo do seu autentico aruma e frescor" },
    { id: "5", name: "Vinho Português Tinto - 750ml", price: 109.00, image: "5.jpeg", rating: 4.8, description: "Cor vermelho escuro, aroma de Frutos pretos maduros com especiarias defumadas." },
    { id: "6", name: "Vinho Português Branco - 750ml", price: 109.00, image: "6.png", rating: 4.9, description: "Ótimo com Molusco, Mexilhão, ostras, peixes e principalmente com um famoso prato típico português chamado Amêijoas á Bulhão Pato." },
    { id: "7", name: "Sete Linhas Tinto - 750ml", price: 1150.00, image: "9.jpeg", rating: 5.0, description: "100% Alicante Bouschet, boca um bolo de fruta madura com ameixas e violeta, densa finla complexo com frutos pretos e suculentos." },
    { id: "8", name: "Outeiro Tinto - 750ml", price: 879.00, image: "8.jpeg", rating: 5.0, description: "Castas 50% Syrah, 50% Petit Verdot. Muito intenso com aroma de frutas pretas e notas de especiarias e café, boa acidez, estrutura de grande complexidade." },
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
    { id: "21", name: "Expressão Rosé - 750ml", price: 125.00, image: "15.jpeg", rating: 4.9, description: "Nota de Prova de Cor Rosa Claro, Fresco, Frutado com notas de Violeta. Excelente Harmonização com Carne Branca em Geral (Suínos, Aves e Peixes), além de massas e saladas." },
    { id: "22", name: "Colinas do Douro Tinto - 750ml", price: 260.00, image: "20.jpeg", rating: 4.9, description: "Castas 30% Touriga Nacional, 35% Touriga Franca, 15% Sousão, 10% Tinta Francisca e 10% Tinto Cão." }
];

// --- Variáveis do Carrinho ---
let cart = []; // Array para armazenar os itens no carrinho
let currentUpsellSuggestions = []; // Variável para armazenar as sugestões de upsell que já foram geradas

// --- Funções Auxiliares ---

// Função para mostrar notificação
function showNotification(message) {
    notificationElement.classList.remove('show', 'hide-left', 'hide-right');
    // Força o reset de propriedades inline para o CSS controlar
    notificationElement.style.opacity = '';
    notificationElement.style.visibility = '';
    notificationElement.style.transform = '';
    notificationElement.style.filter = '';

    setTimeout(() => {
        notificationElement.textContent = message;
        notificationElement.classList.add('show');

        clearTimeout(notificationElement.hideTimeout);
        notificationElement.hideTimeout = setTimeout(() => {
            hideNotification();
        }, 3000);
    }, 50);
}

// Função para esconder a notificação
function hideNotification(direction = '') {
    clearTimeout(notificationElement.hideTimeout);
    notificationElement.classList.remove('show');

    if (direction === 'left') {
        notificationElement.classList.add('hide-left');
    } else if (direction === 'right') {
        notificationElement.classList.add('hide-right');
    }

    const onTransitionEnd = () => {
        if (getComputedStyle(notificationElement).opacity === '0' || getComputedStyle(notificationElement).visibility === 'hidden') {
            notificationElement.classList.remove('hide-left', 'hide-right');
            notificationElement.style.transform = '';
            notificationElement.style.filter = '';
        }
        notificationElement.removeEventListener('transitionend', onTransitionEnd);
    };

    notificationElement.addEventListener('transitionend', onTransitionEnd, { once: true });
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

// Função para abrir o modal de detalhes do produto
function openProductModal(product) {
    modalProductImage.src = product.image;
    modalProductImage.alt = product.name;
    modalProductName.textContent = product.name;
    modalProductDescription.textContent = product.description;
    modalProductPrice.textContent = `R$ ${product.price.toFixed(2)}`;
    
    productModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evita scroll no body
}

// Função para renderizar os produtos no catálogo
function renderCatalogProducts() {
    catalogGrid.innerHTML = '';
    const filteredProducts = products.filter(product => product.rating >= 4.8);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('data-id', product.id); // Sempre usa o ID do objeto product

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

    document.querySelectorAll('#catalogo .add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productId = productCard.dataset.id;
            addToCartById(productId); // Chama a função centralizada de adição
        });
    });

    document.querySelectorAll('#catalogo .product-card img').forEach(image => {
        image.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productId = productCard.dataset.id;
            const product = products.find(p => p.id === productId);
            if (product) {
                openProductModal(product);
            }
        });
    });
}

// Função para gerar as sugestões de upsell
function generateUpsellSuggestions() {
    const productsInCartIds = new Set(cart.map(item => item.id));
    let availableProductsForUpsell = products.filter(p => !productsInCartIds.has(p.id));

    for (let i = availableProductsForUpsell.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableProductsForUpsell[i], availableProductsForUpsell[j]] = [availableProductsForUpsell[j], availableProductsForUpsell[i]];
    }
    currentUpsellSuggestions = availableProductsForUpsell.slice(0, 2);
}

// --- Funções do Carrinho ---

// Função para atualizar a exibição do carrinho
function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Seu carrinho está vazio.</p>';
        currentUpsellSuggestions = [];
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
            const noSuggestionsMessage = document.createElement('p');
            noSuggestionsMessage.classList.add('no-suggestions-message');
            noSuggestionsMessage.textContent = 'Nenhuma sugestão disponível.';
            upsellSection.appendChild(noSuggestionsMessage);
        }
        cartItemsContainer.appendChild(upsellSection);

        document.querySelectorAll('.add-to-cart-upsell').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.id;
                addToCartById(productId);
            });
        });
    }

    const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotalSpan.textContent = total.toFixed(2);
    cartCountSpan.textContent = totalItemsInCart.toString();

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
    document.querySelectorAll('.cart-item-quantity-control button').forEach(button => {
        button.addEventListener('click', updateQuantity);
    });
}

// NOVA Função centralizada para adicionar ao carrinho pelo ID do produto
function addToCartById(productId) {
    const productData = products.find(p => p.id === productId);
    if (!productData) {
        console.error("Produto não encontrado no array 'products':", productId);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productData.id,
            name: productData.name,
            price: productData.price,
            image: productData.image,
            quantity: 1
        });
    }
    generateUpsellSuggestions();
    updateCartUI();
    showNotification(`"${productData.name}" adicionado ao carrinho!`);
}

// Função para adicionar item ao carrinho (chamada de botões no catálogo/mais vendidos)
function addToCart(event) {
    const productCard = event.target.closest('.product-card');
    const productId = productCard.dataset.id;
    addToCartById(productId); // Usa a função centralizada
}

// Função para remover item do carrinho
function removeFromCart(event) {
    const productIdToRemove = event.target.closest('.remove-item').dataset.id;
    const removedItem = cart.find(item => item.id === productIdToRemove);

    cart = cart.filter(item => item.id !== productIdToRemove);
    generateUpsellSuggestions();
    updateCartUI();
    if (removedItem) {
        showNotification(`"${removedItem.name}" removido do carrinho.`);
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
                showNotification(`"${currentItem.name}" removido do carrinho.`);
            }
        }
        generateUpsellSuggestions();
        updateCartUI();
    }
}

// --- Event Listeners do Carrinho ---
cartIcon.addEventListener('click', () => {
    cartOverlay.classList.toggle('active');
    mobileNavOverlay.classList.remove('active');
    generateUpsellSuggestions();
    updateCartUI();
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
const dragThreshold = 70;

function getTransformXValue(element) {
    const transform = getComputedStyle(element).transform;
    if (transform && transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        return matrix.m41;
    }
    return 0;
}

notificationElement.addEventListener('click', (e) => {
    if (!isDragging && Math.abs(e.clientX - startX) < 10) { 
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
    isDragging = false;

    const finalTransformX = getTransformXValue(notificationElement);
    const notificationWidth = notificationElement.offsetWidth;
    const centralOffset = -notificationWidth / 2;
    const displacement = finalTransformX - centralOffset;

    notificationElement.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease, visibility 0.3s ease, filter 0.3s ease-out';

    if (displacement < -dragThreshold) {
        hideNotification('left');
    } else if (displacement > dragThreshold) {
        hideNotification('right');
    } else {
        notificationElement.style.transform = '';
        notificationElement.hideTimeout = setTimeout(() => {
            hideNotification();
        }, 2000);
    }
});


// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    generateUpsellSuggestions();
    updateCartUI();
    checkAgeVerification();
    renderCatalogProducts();

    // Event listeners para a seção "Mais Vendidos"
    document.querySelectorAll('#mais-vendidos .add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productId = productCard.dataset.id;
            addToCartById(productId); // Chama a função centralizada de adição
        });
    });

    document.querySelectorAll('#mais-vendidos .product-card img').forEach(image => {
        image.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productId = productCard.dataset.id;
            const product = products.find(p => p.id === productId);
            if (product) {
                openProductModal(product);
            }
        });
    });

    // Event listeners para fechar o modal de detalhes do produto
    closeProductModalButton.addEventListener('click', () => {
        productModalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    productModalOverlay.addEventListener('click', (e) => {
        if (e.target === productModalOverlay) {
            productModalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
