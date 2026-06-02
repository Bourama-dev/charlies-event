// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Modal Management
const devisModal = document.getElementById('devisModal');
const rendezVousModal = document.getElementById('rendez-vousModal');
const modalOverlay = document.getElementById('modalOverlay');

function openModal(modalId) {
    const modal = document.getElementById(modalId + 'Modal');
    if (modal) {
        modal.classList.add('active');
        modalOverlay.classList.add('active');
    }
}

function closeModal() {
    devisModal.classList.remove('active');
    rendezVousModal.classList.remove('active');
    modalOverlay.classList.remove('active');
}

document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        openModal(e.target.dataset.modal);
    });
});

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeModal);
});

modalOverlay.addEventListener('click', closeModal);

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form Submissions
const devisForm = document.getElementById('devisForm');
const contactForm = document.getElementById('contactForm');

devisForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(devisForm);
    console.log('Devis form submitted:', Object.fromEntries(formData));
    alert('Merci! Votre demande de devis a été reçue. Nous vous contacterons très bientôt.');
    closeModal();
    devisForm.reset();
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Contact form submitted');
    alert('Merci! Nous avons reçu votre message et vous répondrons dans les plus brefs délais.');
    contactForm.reset();
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.concept-card, .sector-card, .portfolio-item, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

console.log('Charlie\'s Events - Site Premium v1.0');
