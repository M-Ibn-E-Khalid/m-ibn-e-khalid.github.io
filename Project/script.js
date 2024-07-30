
const products = [
    { imageURL: "Img/download.svg", name: "Polo",      category: "T-Shirt", price: 20, description: "", link: "https://example.com/polo" },
    { imageURL: "Img/download.svg", name: "Men Short", category: "Short",   price: 30, description: "", link: "https://example.com/men-short" },
    { imageURL: "Img/download.svg", name: "Jeans",     category: "Pants",   price: 50, description: "", link: "https://example.com/jeans" },
    { imageURL: "Img/download.svg", name: "Sneakers",  category: "Shoes",   price: 70, description: "", link: "https://example.com/sneakers" },
    { imageURL: "Img/download.svg", name: "Shirt",     category: "T-Shirt", price: 40, description: "", link: "https://example.com/shirt" },
    { imageURL: "Img/download.svg", name: "Skirt",     category: "Short",   price: 25, description: "", link: "https://example.com/skirt" },
    { imageURL: "Img/download.svg", name: "Chinos",    category: "Pants",   price: 45, description: "", link: "https://example.com/chinos" },
    { imageURL: "Img/download.svg", name: "Boots",     category: "Shoes",   price: 80, description: "", link: "https://example.com/boots" },
];

const productsContainer = document.querySelector('.products');
const searchInput = document.getElementById('searchProduct');
const categoryFilter = document.getElementById('categoryFilter');

function displayProducts(productsArray) {
    productsContainer.innerHTML = "";
    productsArray.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.imageURL}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        //<p>Price: $${product.price}</p>
        productElement.addEventListener('click', () => {
            window.location.href = product.link;
        });
        productsContainer.appendChild(productElement)
    });
}

function filterProducts() {
    const selectedCategory = categoryFilter.value;
    let filteredProducts = products;
    if (selectedCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === selectedCategory);
    }
    filteredProducts = searchProducts(filteredProducts);
    displayProducts(filteredProducts);
}

function searchProducts(productsArray) {
    const searchText = searchInput.value.toLowerCase();
    return productsArray.filter(product => product.name.toLowerCase().includes(searchText));
}

categoryFilter.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);

// Initial display of all products
displayProducts(products);
