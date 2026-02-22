class CustomFooter extends HTMLElement {

connectedCallback() {

this.innerHTML = `

<footer class="bg-divine-charcoal text-white pt-20 pb-10">
<div class="max-w-7xl mx-auto px-6 lg:px-12">

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<!-- Brand -->
<div>

<div class="flex items-center gap-3 mb-6">
<div class="w-10 h-10 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full flex items-center justify-center">
<i data-lucide="temple-hindu" class="w-5 h-5 text-white"></i>
</div>

<div>
<span class="font-divine text-xl font-bold text-white">KRTX</span>
<span class="text-xs tracking-wider text-saffron-400 block">TOURS N TRAVELS</span>
</div>
</div>

<p class="text-gray-400 text-sm leading-relaxed mb-6">
Serving devotees since 1995, we specialize in creating meaningful 
pilgrimage experiences across South India's sacred destinations.
</p>

<div class="flex gap-4">
<a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron-500 transition-colors">
<i data-lucide="facebook" class="w-5 h-5"></i>
</a>
<a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron-500 transition-colors">
<i data-lucide="instagram" class="w-5 h-5"></i>
</a>
<a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron-500 transition-colors">
<i data-lucide="youtube" class="w-5 h-5"></i>
</a>
</div>

</div>

<!-- Quick Links -->
<div>
<h4 class="font-semibold text-lg mb-6 text-saffron-300">Quick Links</h4>
<ul class="space-y-3 text-gray-400 text-sm">
<li><a href="#home" class="hover:text-saffron-400 transition-colors">Home</a></li>
<li><a href="#destinations" class="hover:text-saffron-400 transition-colors">Destinations</a></li>
<li><a href="#services" class="hover:text-saffron-400 transition-colors">Services</a></li>
<li><a href="#about" class="hover:text-saffron-400 transition-colors">About Us</a></li>
<li><a href="#" class="hover:text-saffron-400 transition-colors">Blog</a></li>
<li><a href="#" class="hover:text-saffron-400 transition-colors">Careers</a></li>
</ul>
</div>

<!-- Top Destinations -->
<div>
<h4 class="font-semibold text-lg mb-6 text-saffron-300">Top Destinations</h4>
<ul class="space-y-3 text-gray-400 text-sm">
<li><a href="#" class="hover:text-saffron-400 transition-colors">Tirupati Balaji</a></li>
<li><a href="#" class="hover:text-saffron-400 transition-colors">Rameshwaram</a></li>
<li><a href="#" class="hover:text-saffron-400 transition-colors">Kanyakumari</a></li>
<li><a href="#" class="hover:text-saffron-400 transition-colors">Madurai Meenakshi</a></li>
<li><a href="#" class="hover:text-saffron-400 transition-colors">Srirangam</a></li>
<li><a href="#" class="hover:text-saffron-400 transition-colors">Palani</a></li>
</ul>
</div>

<!-- Contact -->
<div>
<h4 class="font-semibold text-lg mb-6 text-saffron-300">Contact Us</h4>

<ul class="space-y-4 text-gray-400 text-sm">

<li class="flex items-start gap-3">
<i data-lucide="map-pin" class="w-5 h-5 text-saffron-500 flex-shrink-0 mt-0.5"></i>
<span>123 Temple Street, Near Tirumala Bus Stand,<br>Tirupati, Andhra Pradesh 517501</span>
</li>

<li class="flex items-center gap-3">
<i data-lucide="phone" class="w-5 h-5 text-saffron-500"></i>
<span>+91 8369013101<br>+91 98765 43211</span>
</li>

<li class="flex items-center gap-3">
<i data-lucide="mail" class="w-5 h-5 text-saffron-500"></i>
<span>blessings@KRTXtours.com</span>
</li>

<li class="flex items-center gap-3">
<i data-lucide="clock" class="w-5 h-5 text-saffron-500"></i>
<span>Open 24/7 for Bookings</span>
</li>

</ul>
</div>

</div>

<div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

<p class="text-gray-500 text-sm">
© ${new Date().getFullYear()} KRTX Tours N Travels. All rights reserved.
<span class="text-saffron-400">|</span>
<a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
</p>

<p class="text-gray-600 text-xs font-divine">
Govinda Govinda 🙏
</p>

</div>

</div>
</footer>

`;

if(window.lucide) lucide.createIcons();

}

}

customElements.define('custom-footer', CustomFooter);
