// Initialize Lucide Icons
lucide.createIcons();

// GSAP ScrollTrigger Registration
gsap.registerPlugin(ScrollTrigger);

// Page Load Animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            initAnimations();
        }, 500);
    }, 1500);
});


// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
});

// Close mobile menu when clicking links
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
});

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize GSAP Animations
function initAnimations() {
    // Hero parallax
    gsap.to('#heroBg img', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: '#home',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Reveal animations
    const revealTexts = document.querySelectorAll('.reveal-text');
    revealTexts.forEach((text, index) => {
        gsap.to(text, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: text,
                start: 'top 85%',
                toggleActions: 'play none none none'

            },
        });
    });

    const revealImages = document.querySelectorAll('.reveal-image');
    revealImages.forEach((img, index) => {
        gsap.to(img, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: img,
                start: 'top 85%',
                toggleActions: 'play none none none'

            },
            delay: index * 0.1
        });
    });
}

// Testimonial Carousel
let currentTestimonial = 0;
const testimonialTrack = document.getElementById('testimonialTrack');
const totalTestimonials = 3;

function updateTestimonial() {
    testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    updateTestimonial();
}

// Auto-advance testimonials
setInterval(nextTestimonial, 6000);

// Modal Functions
function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    const content = document.getElementById('modalContent');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
    
    lucide.createIcons();
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    const content = document.getElementById('modalContent');
    
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

function openVideoModal() {
    const modal = document.getElementById('videoModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function showDestinationDetails(destination) {
    // In a real app, this would show specific details
    openBookingModal();
}

// Form Handling
function handleBookingSubmit(e) {
    e.preventDefault();
    
    // Show success message
    const btn = e.target.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML;
    
    btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Request Submitted!';
    btn.classList.remove('from-saffron-400', 'to-saffron-600');
    btn.classList.add('bg-green-500');
    lucide.createIcons();
    
    setTimeout(() => {
        closeBookingModal();
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.classList.add('from-saffron-400', 'to-saffron-600');
            btn.classList.remove('bg-green-500');
            e.target.reset();
            lucide.createIcons();
        }, 300);
    }, 2000);
}

// Close modals on escape key
document.addEventListener