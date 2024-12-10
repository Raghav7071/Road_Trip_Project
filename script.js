document.addEventListener('DOMContentLoaded', function() {

    const destinations = [
        { name: 'Dehli', description: 'Explore the History of Grand city', image: 'a-photo-of-a-road-trip-to-delhi-the-image-features-tJ_wEodiREi5w9OmtCsoCQ-FsDVZ025RqSMRjFRCE2hYw.jpeg' },
        { name: 'Mumbai', description: 'Discover the wonders of Mumbai streets', image: 'a-photo-of-a-scenic-road-trip-through-mumbai-india-CANW9q50SNa16TK_ZB6E2A-YofYF8Y6QdmKiHptuDTKUA.jpeg' },
        { name: 'Ladhakh', description: 'Experience the vibrant culture of the Big Apple.', image: 'Best-time-to-visit-North-East-India.webp' },
        { name: 'Kerala', description: 'Travelling along the winding roads of Kerala is always worth the sight that awaits you atop the height.', image: 'RTC1.jpg' },
        { name: 'Assam', description: 'Immerse yourself in the rich culture and music of Assam.', image: 'Seven_Sisters_Road_Trip-India.jpg' },
        { name: 'Sikkim', description: 'Enjoy the beautiful panoramic view of Sikkim with a vast mountain range covered with lush green forests and white clouds..', image: 'skm.jpeg' },
    ];


    const destinationsContainer = document.getElementById('destinations-container');
    if (destinationsContainer) {
        destinations.forEach(destination => {
            const destinationCard = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${destination.image}" class="card-img-top" alt="${destination.name}">
                        <div class="card-body">
                            <h5 class="card-title">${destination.name}</h5>
                            <p class="card-text">${destination.description}</p>
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            `;
            destinationsContainer.innerHTML += destinationCard;
        });
    }

    // Handle trip planner form submission
    const tripPlannerForm = document.getElementById('trip-planner-form');
    if (tripPlannerForm) {
        tripPlannerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const startLocation = document.getElementById('start-location').value;
            const endLocation = document.getElementById('end-location').value;
            const tripDuration = document.getElementById('trip-duration').value;

            const tripSummary = `
                <h3>Your Trip Summary</h3>
                <p><strong>Start:</strong> ${startLocation}</p>
                <p><strong>End:</strong> ${endLocation}</p>
                <p><strong>Duration:</strong> ${tripDuration} days</p>
                <p>We're excited for your upcoming adventure! Our team will be in touch with a detailed itinerary soon.</p>
            `;

            document.getElementById('trip-summary').innerHTML = tripSummary;
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Thank you for your message, ${name}! We'll get back to you at ${email} as soon as possible.`);
            contactForm.reset();
        });
    }
});

