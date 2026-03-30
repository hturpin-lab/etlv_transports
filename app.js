// Application principale - Version sans mode sombre et sans Company Info
class VehicleApp {
    constructor() {
        this.currentVehicleId = null;
        this.init();
    }

    init() {
        this.generateNavigation();
        this.loadVehicleFromURL();
        this.setupEventListeners();
        this.checkMobileMenu();
        this.setupNavScroll();
    }

    generateNavigation() {
        const navMenu = document.getElementById('navMenu');
        if (!navMenu) return;

        // Générer les liens avec gestion des textes longs
        navMenu.innerHTML = vehiclesData.map(vehicle => `
            <li>
                <a href="#${vehicle.id}" data-vehicle="${vehicle.id}" class="nav-link" title="${vehicle.title}">
                    ${vehicle.title}
                </a>
            </li>
        `).join('');

        // Ajouter les événements de navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const vehicleId = link.dataset.vehicle;
                this.loadVehicle(vehicleId);
                this.updateActiveNav(vehicleId);
                this.updateURL(vehicleId);
                
                // Fermer le menu mobile si ouvert
                const navWrapper = document.getElementById('navWrapper');
                if (navWrapper && navWrapper.classList.contains('active')) {
                    navWrapper.classList.remove('active');
                }
            });
        });
    }

    loadVehicle(vehicleId) {
        const vehicle = vehiclesData.find(v => v.id === vehicleId);
        if (!vehicle) return;

        this.currentVehicleId = vehicleId;
        const mainContent = document.getElementById('mainContent');
        
        mainContent.innerHTML = this.generateVehiclePage(vehicle);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    generateVehiclePage(vehicle) {
        return `
            <div class="vehicle-page">
                <!-- Header -->
                <div class="vehicle-header">
                    <h1>${vehicle.title}</h1>
                    <p class="subtitle">${vehicle.subtitle}</p>
                    <p class="website-link">
                        <i class="fas fa-globe"></i> 
                        <a href="${vehicle.website}" target="_blank">${vehicle.website}</a>
                    </p>
                </div>

                <!-- Vehicle Description -->
                <div class="vehicle-content">
                    <div class="vehicle-description">
                        <h2><i class="fas fa-car"></i> The Vehicle</h2>
                        <p>${vehicle.description}</p>
                    </div>

                    <div class="vehicle-image">
                        <img src="${vehicle.image}" alt="${vehicle.title}" onerror="this.src='https://placehold.co/600x400?text=${encodeURIComponent(vehicle.title)}'">
                    </div>
                </div>

                <!-- Equipment and Software -->
                <div class="info-card">
                    <h2><i class="fas fa-laptop"></i> ${vehicle.equipment.title}</h2>
                    <ul class="equipment-list">
                        ${vehicle.equipment.items.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('')}
                    </ul>
                </div>

                <!-- Work Schedule -->
                <div class="info-card">
                    <h2><i class="fas fa-calendar-alt"></i> ${vehicle.workSchedule.title}</h2>
                    <div class="schedule-items">
                        ${vehicle.workSchedule.items.map(item => `
                            <div class="schedule-item">
                                <span class="task">${item.task}</span>
                                <span class="duration">${item.duration}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Role Play Scenario -->
                <div class="info-card roleplay">
                    <h2><i class="fas fa-users"></i> ${vehicle.rolePlay.title}</h2>
                    <p>${vehicle.rolePlay.description}</p>
                </div>

                <!-- Task Requirements -->
                <div class="info-card task-requirements">
                    <h2><i class="fas fa-tasks"></i> Your Task - Presentation Requirements</h2>
                    <ul class="task-list">
                        ${vehicle.taskRequirements.map(req => {
                            if (req.startsWith('  •') || req.startsWith('  -')) {
                                return `<li class="sub-task">${req}</li>`;
                            }
                            return `<li><i class="fas fa-star"></i> ${req}</li>`;
                        }).join('')}
                    </ul>
                    <div class="convincing-message">
                        <i class="fas fa-comment-dollar"></i>
                        <strong>Be as convincing as possible! Your mark depends on it!</strong>
                    </div>
                </div>

                <!-- Placeholder for student's work -->
                <div class="info-card student-work">
                    <h2><i class="fas fa-pencil-alt"></i> Your Presentation Materials</h2>
                    <div class="work-placeholder">
                        <p><i class="fas fa-chalkboard-teacher"></i> <strong>PowerPoint Slide Show</strong></p>
                        <p>Create your slides with:</p>
                        <ul>
                            <li>Information about your company (${vehicle.company.split(' - ')[0]})</li>
                            <li>Vehicle pictures with labeled components (battery, engine, motor...)</li>
                            <li>How the vehicle works</li>
                            <li>Technical characteristics in tabular form</li>
                        </ul>
                        <div class="video-placeholder">
                            <i class="fas fa-video"></i>
                            <p>Include a short video (3 minutes max)</p>
                        </div>
                        <div class="estimate-placeholder">
                            <i class="fas fa-file-invoice-dollar"></i>
                            <p>Prepare an A4 document with detailed preliminary estimate and total price</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    loadVehicleFromURL() {
        const hash = window.location.hash.slice(1);
        if (hash && vehiclesData.some(v => v.id === hash)) {
            this.loadVehicle(hash);
            this.updateActiveNav(hash);
        } else if (vehiclesData.length > 0) {
            this.loadVehicle(vehiclesData[0].id);
            this.updateActiveNav(vehiclesData[0].id);
        }
    }

    updateActiveNav(vehicleId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.dataset.vehicle === vehicleId) {
                link.classList.add('active');
                // Scroll pour rendre l'élément actif visible
                this.scrollToActiveNav(link);
            } else {
                link.classList.remove('active');
            }
        });
    }

    scrollToActiveNav(activeLink) {
        const navWrapper = document.getElementById('navWrapper');
        if (navWrapper && window.innerWidth > 768) {
            const linkRect = activeLink.getBoundingClientRect();
            const wrapperRect = navWrapper.getBoundingClientRect();
            const scrollLeft = linkRect.left - wrapperRect.left + navWrapper.scrollLeft - 20;
            navWrapper.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
    }

    setupNavScroll() {
        const navWrapper = document.getElementById('navWrapper');
        if (navWrapper && window.innerWidth > 768) {
            // Ajouter des indicateurs de défilement si nécessaire
            const checkScroll = () => {
                const hasScroll = navWrapper.scrollWidth > navWrapper.clientWidth;
                if (hasScroll) {
                    navWrapper.style.cursor = 'grab';
                } else {
                    navWrapper.style.cursor = 'default';
                }
            };
            checkScroll();
            window.addEventListener('resize', checkScroll);
        }
    }

    updateURL(vehicleId) {
        window.location.hash = vehicleId;
    }

    setupEventListeners() {
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const navWrapper = document.getElementById('navWrapper');
        
        if (mobileBtn && navWrapper) {
            mobileBtn.addEventListener('click', () => {
                navWrapper.classList.toggle('active');
            });
        }

        document.addEventListener('click', (e) => {
            if (navWrapper && mobileBtn && !navWrapper.contains(e.target) && !mobileBtn.contains(e.target)) {
                navWrapper.classList.remove('active');
            }
        });

        // Gestion du défilement horizontal par souris
        const navWrapperScroll = document.getElementById('navWrapper');
        if (navWrapperScroll && window.innerWidth > 768) {
            let isDown = false;
            let startX;
            let scrollLeft;

            navWrapperScroll.addEventListener('mousedown', (e) => {
                isDown = true;
                navWrapperScroll.style.cursor = 'grabbing';
                startX = e.pageX - navWrapperScroll.offsetLeft;
                scrollLeft = navWrapperScroll.scrollLeft;
            });

            navWrapperScroll.addEventListener('mouseleave', () => {
                isDown = false;
                navWrapperScroll.style.cursor = 'grab';
            });

            navWrapperScroll.addEventListener('mouseup', () => {
                isDown = false;
                navWrapperScroll.style.cursor = 'grab';
            });

            navWrapperScroll.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - navWrapperScroll.offsetLeft;
                const walk = (x - startX) * 1.5;
                navWrapperScroll.scrollLeft = scrollLeft - walk;
            });
        }
    }

    checkMobileMenu() {
        const navWrapper = document.getElementById('navWrapper');
        if (window.innerWidth > 768 && navWrapper) {
            navWrapper.classList.remove('active');
        }
    }
}

// Initialisation
const app = new VehicleApp();

// Fonction globale pour ajouter des véhicules
window.addVehicle = function(vehicle) {
    vehiclesData.push(vehicle);
    app.generateNavigation();
    console.log(`Vehicle ${vehicle.title} added successfully!`);
    app.loadVehicle(vehicle.id);
};