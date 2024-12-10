document.addEventListener('DOMContentLoaded', function() {
    const hotels = [
        {
            id: 1,
            name: "Roadside Inn",
            image: "https://imgs.search.brave.com/g6ON1i7WPeTSAkNx3hszhAaUpGqbUuGh8Q6Qqht7Xug/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0Lzc1Lzc2Lzg2/LzM2MF9GXzQ3NTc2/ODY3Nl93bXdFVldZ/V05sY3FhTW9qNGto/YjRHRjNGMGY0ZjdU/Ri5qcGc",
            description: "Comfortable and affordable lodging for road trippers.",
            price: 75,
            rating: 3.5,
            amenities: ["wifi", "parking"],
            priceCategory: "budget"
        },
        {
            id: 2,
            name: "Highway Haven Hotel",
            image: "608929476.jpg",
            description: "Modern amenities with easy highway access.",
            price: 120,
            rating: 4,
            amenities: ["pool", "wifi", "parking"],
            priceCategory: "mid-range"
        },
        {
            id: 3,
            name: "Luxury Lanes Resort",
            image: "mvv.webp",
            description: "Indulge in luxury during your road trip adventure.",
            price: 250,
            rating: 5,
            amenities: ["pool", "wifi", "parking"],
            priceCategory: "luxury"
        },
        {
            id: 4,
            name: "Traveler's Rest",
            image: "a4.jpeg",
            description: "Cozy rooms and a friendly atmosphere for weary travelers.",
            price: 90,
            rating: 3.8,
            amenities: ["wifi", "parking"],
            priceCategory: "budget"
        },
        {
            id: 5,
            name: "Scenic View Inn",
            image: "sv.webp",
            description: "Enjoy breathtaking views while resting from your journey.",
            price: 150,
            rating: 4.2,
            amenities: ["pool", "wifi"],
            priceCategory: "mid-range"
        },
        {
            id: 6,
            name: "Route 66 Retreat",
            image: "wseoNHVBTXWxy9mSi0iekw.webp",
            description: "Experience the nostalgia of historic Route 66.",
            price: 110,
            rating: 4.1,
            amenities: ["wifi", "parking"],
            priceCategory: "mid-range"
        }
    ];

    const hotelList = document.getElementById('hotel-list');
    const filterForm = document.getElementById('filter-form');
    const sortBy = document.getElementById('sort-by');

    function renderHotels(hotelsToRender) {
        hotelList.innerHTML = '';
        hotelsToRender.forEach(hotel => {
            const hotelCard = `
                <div class="col-md-6 mb-4">
                    <div class="card hotel-card">
                        <img src="${hotel.image}" class="card-img-top" alt="${hotel.name}">
                        <div class="card-body">
                            <h5 class="card-title">${hotel.name}</h5>
                            <p class="card-text">${hotel.description}</p>
                            <p class="price">$${hotel.price} per night</p>
                            <p class="rating">
                                ${'★'.repeat(Math.floor(hotel.rating))}${hotel.rating % 1 !== 0 ? '½' : ''}
                                ${'☆'.repeat(5 - Math.ceil(hotel.rating))}
                                (${hotel.rating})
                            </p>
                            <div class="amenities">
                                ${hotel.amenities.includes('pool') ? '<i class="fas fa-swimming-pool" title="Pool"></i>' : ''}
                                ${hotel.amenities.includes('wifi') ? '<i class="fas fa-wifi" title="Free Wi-Fi"></i>' : ''}
                                ${hotel.amenities.includes('parking') ? '<i class="fas fa-parking" title="Free Parking"></i>' : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            hotelList.innerHTML += hotelCard;
        });
    }

    function filterAndSortHotels() {
        const priceRange = document.getElementById('price-range').value;
        const rating = parseFloat(document.getElementById('rating').value);
        const pool = document.getElementById('pool').checked;
        const wifi = document.getElementById('wifi').checked;
        const parking = document.getElementById('parking').checked;
        const sortValue = sortBy.value;

        let filteredHotels = hotels.filter(hotel => {
            if (priceRange !== 'all' && hotel.priceCategory !== priceRange) return false;
            if (hotel.rating < rating) return false;
            if (pool && !hotel.amenities.includes('pool')) return false;
            if (wifi && !hotel.amenities.includes('wifi')) return false;
            if (parking && !hotel.amenities.includes('parking')) return false;
            return true;
        });

        filteredHotels.sort((a, b) => {
            switch (sortValue) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });

        renderHotels(filteredHotels);
    }

    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        filterAndSortHotels();
    });

    sortBy.addEventListener('change', filterAndSortHotels);

    // Initial render
    renderHotels(hotels);
});

