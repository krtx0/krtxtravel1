class CustomNavbar extends HTMLElement {

connectedCallback() {

this.innerHTML = `
<nav id="navbar"
class="fixed top-0 left-0 w-full z-50 bg-brand-dark backdrop-blur-md py-4 shadow-lg">

<div class="max-w-7xl mx-auto flex items-center justify-between">

<div class="flex items-center gap-3 group cursor-pointer">

<div class="relative w-12 h-12 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full flex items-center justify-center glow-saffron">
<i data-lucide="temple-hindu" class="w-6 h-6 text-white"></i>
</div>

<div class="flex flex-col">
<span class="font-divine text-2xl font-bold text-divine-blue leading-none">KRTX</span>
<span class="text-xs tracking-[0.3em] text-saffron-500 font-medium">TOURS N TRAVELS</span>
</div>

</div>

<div class="hidden lg:flex items-center gap-8">

<a href="#home">Home</a>
<a href="#destinations">Destinations</a>
<a href="#services">Services</a>
<a href="#about">About</a>
<a href="#testimonials">Testimonials</a>

</div>

<div class="hidden lg:flex items-center gap-4">

<a href="tel:+918369013101" class="flex items-center gap-2 text-sm font-medium">
<i data-lucide="phone" class="w-4 h-4"></i>
<span>+91 8369013101</span>
</a>

<button onclick="openBookingModal()" class="btn-premium bg-gradient-to-r from-saffron-400 to-saffron-600 text-white px-6 py-3 rounded-full font-medium">
Plan Your Yatra
</button>

</div>

<button id="mobileMenuBtn" class="lg:hidden p-2">
<i data-lucide="menu" class="w-6 h-6"></i>
</button>

</div>


<div id="mobileMenu" class="lg:hidden fixed inset-0 bg-white z-40 transform translate-x-full transition-transform duration-300 pt-20 px-6">

<button id="closeMenu" class="absolute top-6 right-6 p-2">
<i data-lucide="x" class="w-6 h-6"></i>
</button>

<div class="flex flex-col gap-6">

<a href="#home" class="text-2xl font-divine">Home</a>
<a href="#destinations" class="text-2xl font-divine">Destinations</a>
<a href="#services" class="text-2xl font-divine">Services</a>
<a href="#about" class="text-2xl font-divine">About</a>
<a href="#testimonials" class="text-2xl font-divine">Testimonials</a>

<button onclick="openBookingModal()" class="btn-premium bg-gradient-to-r from-saffron-400 to-saffron-600 text-white px-6 py-4 rounded-full font-medium mt-4">
Plan Your Yatra
</button>

</div>

</div>

</nav>
`;

const btn = this.querySelector("#mobileMenuBtn");
const close = this.querySelector("#closeMenu");
const menu = this.querySelector("#mobileMenu");

btn.addEventListener("click",()=>menu.style.transform="translateX(0)");
close.addEventListener("click",()=>menu.style.transform="translateX(100%)");

if(window.lucide) lucide.createIcons();

}

}

customElements.define("custom-navbar", CustomNavbar);
