// DOM Elements
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const productCards = document.querySelectorAll(".product-card");
const modal = document.getElementById("productModal");
const closeModal = document.querySelector(".close-modal");
const modalTitle = document.querySelector(".modal-title");
const modalPrice = document.querySelector(".modal-price");
const modalDescription = document.querySelector(".modal-description");
const modalImg = document.querySelector(".modal-img img");
const contactForm = document.getElementById("contactForm");
const sections = document.querySelectorAll("section");

// Product Data
const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: "₹1,999",
    description:
      "A timeless wardrobe essential crafted from premium cotton denim — built for style and comfort. Perfect for layering in any season.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: "₹2,499",
    description:
      "Elegant floral pattern with lightweight fabric. Perfect for summer outings and special occasions. Available in multiple colors.",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f8c2f25d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Premium Sneakers",
    price: "₹3,299",
    description:
      "Comfortable and stylish sneakers made with high-quality materials. Perfect for both casual and athletic wear.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Casual T-Shirt",
    price: "₹899",
    description:
      "Soft cotton t-shirt with a comfortable fit. Essential for everyday wear. Available in various colors and sizes.",
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Leather Handbag",
    price: "₹4,599",
    description:
      "Elegant leather handbag with spacious compartments. Perfect for both work and social events. Durable and stylish.",
    image:
      "https://images.unsplash.com/photo-1542272601-3026baca0c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Wool Scarf",
    price: "₹1,299",
    description:
      "Soft and warm wool scarf perfect for winter. Adds a touch of elegance to any outfit while keeping you cozy.",
    image:
      "https://images.unsplash.com/photo-1540221652346-8cc276d8f795?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Active navigation link on scroll
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Product modal functionality
productCards.forEach((card) => {
  card.addEventListener("click", () => {
    const productId = parseInt(card.getAttribute("data-id"));
    const product = products.find((p) => p.id === productId);

    if (product) {
      modalTitle.textContent = product.name;
      modalPrice.textContent = product.price;
      modalDescription.textContent = product.description;
      modalImg.src = product.image;
      modalImg.alt = product.name;

      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Contact form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Here you would normally send the form data to a server
  // For demonstration, we'll just show a success message
  alert(
    `Thank you, ${name}! Your message has been sent successfully. We'll contact you soon at ${email}.`
  );

  // Reset form
  contactForm.reset();
});

// Add to cart functionality
document.querySelector(".add-to-cart").addEventListener("click", () => {
  const productName = modalTitle.textContent;
  alert(`${productName} has been added to your cart!`);
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Add fade-in class to sections
sections.forEach((section) => {
  section.classList.add("fade-in");
  observer.observe(section);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
