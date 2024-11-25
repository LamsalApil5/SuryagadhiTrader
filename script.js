document.addEventListener('DOMContentLoaded', () => {
    const bikesList = document.getElementById('bikesList');
    const scootersList = document.getElementById('scootersList');
    const partsList = document.getElementById('partsList');
    const contactForm = document.getElementById('contactForm');

    const bikes = [
        { name: 'Apache RTR 160 4V', price: 250000, image: './Image/Bike/Apache RTR 160 4V - 250000.webp' },
        { name: 'Bajaj dominar 400', price: 650000, image: './Image/Bike/bajaj-dominar-400-1580628763-921.jpg' },
        { name: 'Bajaj Platina ES', price: 200000, image: './Image/Bike/Bajaj-Platina-ES - 200000.jpg' },
        { name: 'Bajaj Pulsar 125', price: 201000, image: './Image/Bike/Bajaj-Pulsar-125 - 201000.jpg' },
        { name: 'CFMOTO 650NK', price: 300000, image: './Image/Bike/CFMOTO-650NK 300000.jpg' },
        { name: 'Honda XR 190L ', price: 680000, image: './Image/Bike/Honda-XR-190L 680000.jpg' },
        { name: 'Royal Enfield Classic 350', price: 520000, image: './Image/Bike/Royal Enfield Classic 350 - 520000.jpg' },
    ];

    const scooters = [
        { name: 'Aprilia SR 125', price: 175000, image: './Image/Scooter/Aprilia-SR-125 - 175000.jpg' },
        { name: 'Aprilia SR 150', price: 230000, image: './Image/Scooter/Aprilia-SR-150 - 205000.jpg' },
        { name: 'Honda-Dio-125-STD', price: 315000, image: './Image/Scooter/Honda-Dio-125-STD 315900.webp' },
        { name: 'TVS iqube', price: 250000, image: './Image/Scooter/tvs-iqube-red-814d6a69-250000.png' },
        { name: 'Honda Aviator', price: 235000, image: './Image/Scooter/honda_aviator 235000.jpg' },
        { name: 'TVS-Ntorq-125', price: 280000, image: './Image/Scooter/TVS-Ntorq-125-280000.jpg' },
    ];

    const parts = [
        { name: 'Carburetor', price: 4000, image: './Image/Parts/Carburetor - 4000.webp' },
        { name: 'Diamond chain kit', price: 3500, image: './Image/Parts/Diamondchainkitpulsar220 - 3500.webp' },
        { name: 'Disc plate', price: 6000, image: './Image/Parts/Disc plate - 6000.webp' },
        { name: 'Double Waterproof bike raincoat', price: 900, image: './Image/Parts/Double Waterproof bike raincoat - 900.webp' },
        { name: 'Genuine Clutch Assebly for Zixxer', price: 2500, image: './Image/Parts/Genuine Clutch Assebly for Zixxer - 2050.webp' },
        { name: 'Grip tyre', price: 3450, image: './Image/Parts/Grip tyre - 3450.webp' },
        { name: 'Headlight', price: 3100, image: './Image/Parts/Headlight - 3100.webp' },
        { name: 'Led Indicator side light', price: 700, image: './Image/Parts/ledindicatorsidelight - 700.webp' },
        { name: 'Thumb Light Visor', price: 700, image: './Image/Parts/thumb-light_visor - 1500.webp' },
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

