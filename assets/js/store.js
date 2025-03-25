// بيانات المنتجات
const products = [
    {
        id: 1,
        name: {
            ar: 'كاميرا احترافية',
            en: 'Professional Camera'
        },
        description: {
            ar: 'كاميرا رقمية عالية الدقة',
            en: 'High-resolution digital camera'
        },
        price: 99,
        image: 'assets/images/products/product1.jpg',
        condition: 'new',
        stock: 'available'
    },
    {
        id: 2,
        name: {
            ar: 'سماعات لاسلكية',
            en: 'Wireless Headphones'
        },
        description: {
            ar: 'سماعات بلوتوث مع إلغاء الضوضاء',
            en: 'Bluetooth headphones with noise cancellation'
        },
        price: 49,
        image: 'assets/images/products/product2.jpg',
        condition: 'new',
        stock: 'available'
    },
    {
        id: 3,
        name: {
            ar: 'لابتوب مستعمل',
            en: 'Used Laptop'
        },
        description: {
            ar: 'لابتوب بحالة ممتازة',
            en: 'Laptop in excellent condition'
        },
        price: 199,
        image: 'assets/images/products/product3.jpg',
        condition: 'used',
        stock: 'available'
    },
    {
        id: 4,
        name: {
            ar: 'ماوس قيمنق',
            en: 'Gaming Mouse'
        },
        description: {
            ar: 'ماوس احترافي للألعاب',
            en: 'Professional gaming mouse'
        },
        price: 29,
        image: 'assets/images/products/product4.jpg',
        condition: 'new',
        stock: 'low'
    },
    {
        id: 5,
        name: {
            ar: 'شاشة كمبيوتر',
            en: 'Computer Monitor'
        },
        description: {
            ar: 'شاشة LED عالية الدقة',
            en: 'High-resolution LED monitor'
        },
        price: 149,
        image: 'assets/images/products/product5.jpg',
        condition: 'new',
        stock: 'available'
    },
    {
        id: 6,
        name: {
            ar: 'لوحة مفاتيح ميكانيكية',
            en: 'Mechanical Keyboard'
        },
        description: {
            ar: 'لوحة مفاتيح للمحترفين',
            en: 'Professional mechanical keyboard'
        },
        price: 79,
        image: 'assets/images/products/product6.jpg',
        condition: 'used',
        stock: 'available'
    },
    {
        id: 7,
        name: {
            ar: 'كونسول ألعاب',
            en: 'Gaming Console'
        },
        description: {
            ar: 'PlayStation 5 مستعمل',
            en: 'Used PlayStation 5'
        },
        price: 299,
        image: 'assets/images/products/product7.jpg',
        condition: 'used',
        stock: 'low'
    },
    {
        id: 8,
        name: {
            ar: 'طابعة ليزر',
            en: 'Laser Printer'
        },
        description: {
            ar: 'طابعة HP ليزر ملونة',
            en: 'HP Color Laser Printer'
        },
        price: 159,
        image: 'assets/images/products/product8.jpg',
        condition: 'new',
        stock: 'available'
    }
];

// الحصول على اللغة الحالية
function getCurrentLanguage() {
    return document.documentElement.lang;
}

// تحميل المنتجات
function loadProducts(filter = 'all') {
    const productsGrid = document.querySelector('.products-grid');
    const currentLang = getCurrentLanguage();
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.condition === filter);

    productsGrid.innerHTML = '';
    let currentRow;

    filteredProducts.forEach((product, index) => {
        if (index % 4 === 0) {
            currentRow = document.createElement('div');
            currentRow.className = 'product-row';
            productsGrid.appendChild(currentRow);
        }

        const productCard = createProductCard(product, currentLang);
        currentRow.appendChild(productCard);
    });

    // إضافة AOS
    AOS.refresh();
}

// إنشاء بطاقة منتج
function createProductCard(product, lang) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (product.id * 100).toString());

    const conditionText = {
        ar: { new: 'جديد', used: 'مستعمل' },
        en: { new: 'New', used: 'Used' }
    };

    const stockText = {
        ar: { available: 'متوفر', low: 'كمية محدودة' },
        en: { available: 'In Stock', low: 'Low Stock' }
    };

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name[lang]}">
            <div class="product-overlay">
                <span class="price">$${product.price}</span>
                <button class="quick-view-btn">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h4>${product.name[lang]}</h4>
            <p>${product.description[lang]}</p>
            <div class="product-meta">
                <span class="condition ${product.condition}">
                    ${conditionText[lang][product.condition]}
                </span>
                <span class="stock ${product.stock === 'low' ? 'low' : ''}">
                    ${stockText[lang][product.stock]}
                </span>
            </div>
        </div>
    `;

    return card;
}

// تحديث نصوص قائمة الترتيب
function updateSortSelectText() {
    const currentLang = getCurrentLanguage();
    const sortSelect = document.querySelector('.sort-select');
    const options = sortSelect.querySelectorAll('option');
    
    options.forEach(option => {
        const ar = option.querySelector('.ar');
        const en = option.querySelector('.en');
        
        if (currentLang === 'en') {
            ar.style.display = 'none';
            en.style.display = 'inline';
        } else {
            ar.style.display = 'inline';
            en.style.display = 'none';
        }
    });
}

// تحديث نص حقل البحث
function updateSearchPlaceholder() {
    const currentLang = getCurrentLanguage();
    const arInput = document.querySelector('.search-input.ar');
    const enInput = document.querySelector('.search-input.en');
    
    if (currentLang === 'en') {
        arInput.style.display = 'none';
        enInput.style.display = 'block';
    } else {
        arInput.style.display = 'block';
        enInput.style.display = 'none';
    }
}

// تحميل المنتجات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();

    // أزرار التصفية
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadProducts(btn.dataset.filter);
        });
    });

    // البحث
    const searchInputAr = document.querySelector('.search-input.ar');
    const searchInputEn = document.querySelector('.search-input.en');
    const searchBtn = document.querySelector('.search-btn');

    function searchProducts() {
        const currentLang = getCurrentLanguage();
        const searchTerm = currentLang === 'en' 
            ? searchInputEn.value.toLowerCase()
            : searchInputAr.value.toLowerCase();
            
        const productsGrid = document.querySelector('.products-grid');
        productsGrid.innerHTML = '';
        let currentRow;

        const filteredProducts = products.filter(product => 
            product.name[currentLang].toLowerCase().includes(searchTerm) ||
            product.description[currentLang].toLowerCase().includes(searchTerm)
        );

        filteredProducts.forEach((product, index) => {
            if (index % 4 === 0) {
                currentRow = document.createElement('div');
                currentRow.className = 'product-row';
                productsGrid.appendChild(currentRow);
            }

            const productCard = createProductCard(product, currentLang);
            currentRow.appendChild(productCard);
        });

        AOS.refresh();
    }

    searchBtn.addEventListener('click', searchProducts);
    searchInputAr.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchProducts();
    });
    searchInputEn.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchProducts();
    });

    // الترتيب
    const sortSelect = document.querySelector('.sort-select');
    sortSelect.addEventListener('change', () => {
        const value = sortSelect.value;
        const currentLang = getCurrentLanguage();
        let sortedProducts = [...products];

        switch (value) {
            case 'price-asc':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                sortedProducts.sort((a, b) => a.name[currentLang].localeCompare(b.name[currentLang]));
                break;
            case 'name-desc':
                sortedProducts.sort((a, b) => b.name[currentLang].localeCompare(a.name[currentLang]));
                break;
        }

        const productsGrid = document.querySelector('.products-grid');
        productsGrid.innerHTML = '';
        let currentRow;

        sortedProducts.forEach((product, index) => {
            if (index % 4 === 0) {
                currentRow = document.createElement('div');
                currentRow.className = 'product-row';
                productsGrid.appendChild(currentRow);
            }

            const productCard = createProductCard(product, currentLang);
            currentRow.appendChild(productCard);
        });

        AOS.refresh();
    });

    // إعادة تحميل المنتجات عند تغيير اللغة
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', () => {
        setTimeout(() => {
            loadProducts();
            updateSortSelectText();
            updateSearchPlaceholder();
        }, 100);
    });

    // تحديث النصوص عند تحميل الصفحة
    updateSortSelectText();
    updateSearchPlaceholder();
});
