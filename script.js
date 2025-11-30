document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header");

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }

    navItems.forEach(item => {
      item.addEventListener("click", () => {
        if (navLinks) navLinks.classList.remove("active");
      });
    });

    function updateActiveNav() {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      navItems.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${current}`) {
          item.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", updateActiveNav);

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        if (header) header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
      } else {
        if (header) header.style.boxShadow = "none";
      }
    });
  }, 100);

  setTimeout(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(
      ".hero-text, .hero-image, .about-image, .about-text, .service-card, .project-card, .contact-info, .contact-form"
    );

    animateElements.forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

    const style = document.createElement("style");
    style.textContent = `
      .animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);

    const hexagonGlow = document.querySelector(".hexagon-glow");
    if (hexagonGlow) {
      document.addEventListener("mousemove", (e) => {
        const rect = hexagonGlow.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        hexagonGlow.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
      });
    }

    function typeWriter(element, text, speed = 100) {
      let i = 0;
      element.innerHTML = "";
      
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    }

    const nameElement = document.querySelector(".name");
    if (nameElement) {
      const originalName = nameElement.textContent;
      setTimeout(() => {
        typeWriter(nameElement, originalName, 80);
      }, 500);
    }
  }, 100);
  setTimeout(() => {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const btn = contactForm.querySelector("button");
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
          btn.style.background = "var(--primary-color)";
          btn.style.color = "var(--dark-bg)";
          
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = "";
            btn.style.color = "";
            btn.disabled = false;
            contactForm.reset();
          }, 2000);
        }, 1500);
      });
    }
  }, 100);
});
