document.addEventListener('DOMContentLoaded', () => {
    const bikesList = document.getElementById('bikesList');
    const scootersList = document.getElementById('scootersList');
    const partsList = document.getElementById('partsList');
    const contactForm = document.getElementById('contactForm');

    const bikes = [
        { name: 'Mountain Bike', price: 599, image: './Image/bike.png' },
        { name: 'Road Bike', price: 799, image: 'https://via.placeholder.com/300x200.png?text=Road+Bike' },
        { name: 'City Bike', price: 449, image: 'https://via.placeholder.com/300x200.png?text=City+Bike' },
    ];

    const scooters = [
        { name: 'Electric Scooter', price: 399, image: 'https://via.placeholder.com/300x200.png?text=Electric+Scooter' },
        { name: 'Kick Scooter', price: 129, image: 'https://via.placeholder.com/300x200.png?text=Kick+Scooter' },
        { name: 'Mobility Scooter', price: 899, image: 'https://via.placeholder.com/300x200.png?text=Mobility+Scooter' },
    ];

    const parts = [
        { name: 'Bike Chain', price: 29, image: 'https://via.placeholder.com/300x200.png?text=Bike+Chain' },
        { name: 'Scooter Wheel', price: 49, image: 'https://via.placeholder.com/300x200.png?text=Scooter+Wheel' },
        { name: 'Bike Pedals', price: 39, image: './Image/parts.jpg' },
    ];

    function createProductCard(product) {
        return `
            <div class="bg-white p-6 rounded-lg shadow-md">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover mb-4 rounded">
                <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
                <p class="text-gray-600 mb-4">Price: NPR ${product.price}</p>
               </div>
        `;
    }

    if (bikesList) {
        bikes.forEach(bike => {
            bikesList.innerHTML += createProductCard(bike);
        });
    }

    if (scootersList) {
        scooters.forEach(scooter => {
            scootersList.innerHTML += createProductCard(scooter);
        });
    }

    if (partsList) {
        parts.forEach(part => {
            partsList.innerHTML += createProductCard(part);
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.add('hidden');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    });
});

