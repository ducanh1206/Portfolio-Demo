document.querySelectorAll("a.nav-link").forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const targetId = this.getAttribute("href").substring(1);
		const targetElement = document.getElementById(targetId);
		window.scrollTo({
			top: targetElement.offsetTop - 70,
			behavior: "smooth",
		});
	});
});

// navbar scroll animation
let lastScrollTop = 0;
navbar = document.getElementById("container-nav");
window.addEventListener("scroll", function () {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navbar.classList.add("active");
	} else {
		navbar.classList.remove("active");
	}
	lastScrollTop = scrollTop;
});

const ticker = document.getElementById("ticker");
const clone = ticker.cloneNode(true);

// Responsive Navbar Toggle
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuIcon && mobileMenu) {
	menuIcon.addEventListener("click", function () {
		mobileMenu.classList.toggle("active");
	});
	// Close mobile menu when a link is clicked
	mobileMenu.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", function () {
			mobileMenu.classList.remove("active");
		});
	});
}


// header scroll-action
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const homeSection = document.querySelector('.home-section');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;

        if (scrollTop > homeSectionBottom) {
            header.style.height = '71px';
        } else {
            header.style.height = '91px';
        }

        lastScrollTop = scrollTop;
    });
}); 


// number counter animation (testimonial-section)
const counters = document.querySelectorAll('.counter');
    const speed = 550; // The lower the faster

    const startCounting = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => startCounting(counter), 1);
        } else {
            counter.innerText = target;
        }
    };

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
