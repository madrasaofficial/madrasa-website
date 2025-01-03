import './style.css'

import FAQs from "./data/faqs"; // Import FAQ data

// DOM Elements
const categoryContainer = document.getElementById("faq-categories") as HTMLDivElement;

// Function to Render Category Buttons
function renderCategoryButtons() {
  // Step 1: Get unique categories
  const categories = [...new Set(FAQs.map((faq) => faq.category))];

  // Step 2: Create and inject buttons
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className =
      "text-neutral-700 rounded-3xl bg-slate-100 px-4 py-1.5 inline-block text-nowrap active:text-neutral-200 active:bg-slate-800 focus:text-neutral-200 focus:bg-slate-900 !outline-none !border-none";
    button.setAttribute("data-category", category);
    button.textContent = category;

    // Optional: Add an event listener (if required)
    button.addEventListener("click", () => {
      renderFAQs(category); // Call FAQ rendering function for this category
    });

    // Append button to the container
    categoryContainer.appendChild(button);
  });
}

// Call function to render buttons
renderCategoryButtons();

// Make the first button active by default
categoryContainer.firstElementChild?.classList.add('active');



// DOM Elements
const faqContainer = document.getElementById("faq-container") as HTMLDivElement;
const categoryButtons = document.querySelectorAll("[data-category]");


// Function to Render FAQs
// Function to Render FAQs
function renderFAQs(category: string) {
  faqContainer.innerHTML = ""; // Clear existing FAQs

  const filteredFAQs =
    category === "All"
      ? FAQs
      : FAQs.filter((faq) => faq.category === category);

  // Create FAQ items
  filteredFAQs.forEach((faq) => {
    const faqItem = document.createElement("div");
    faqItem.classList.add("faq-item", "bg-gray-100", "rounded-xl");
    faqItem.innerHTML = `
    <div class="p-4 px-5">
        <div class="flex gap-2 items-center justify-between cursor-pointer">
          <h3 class="faq-question text-neutral-800 font-semib<formold text-left w-11/12">${faq.question}</h3>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
            <path d="M9.99999 4.1665V15.8332M4.16666 9.99984H15.8333" stroke="#111024" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="faq-answer">
          <p class="text-left text-neutral-600 pt-2">${faq.answer}</p>
        </div>
    </div>
    `;
    faqContainer.appendChild(faqItem);

    // Get the title, answer, and SVG of each FAQ item
    const faqTitle = faqItem.querySelector("h3");
    const faqAnswer = faqItem.querySelector(".faq-answer");
    const faqSvg = faqItem.querySelector("svg");

    // Ensure elements are not null before adding event listeners
    if (faqTitle && faqAnswer && faqSvg) {
      // Toggle the answer visibility and rotate the SVG when the FAQ question is clicked
      faqTitle.addEventListener("click", () => {
        faqAnswer.classList.toggle("open");
        faqSvg.classList.toggle("rotate-45");
        faqTitle.classList.toggle("text-violet-800");
        faqItem.classList.toggle("bg-violet-50");
      });

      // Optionally, toggle the SVG for open/close
      faqSvg.addEventListener("click", () => {
        faqAnswer.classList.toggle("open");
        faqSvg.classList.toggle("rotate-45");
        faqTitle.classList.toggle("text-violet-800");
        faqItem.classList.toggle("bg-violet-50");
      });
    }
  });
}

// Event Listeners for Category Buttons
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category") || "All";
    renderFAQs(category);
    categoryButtons.forEach(btn => {
      btn.classList.remove('active');
    })
    button.classList.add('active');
  });
});

// Initial Render (Show All FAQs)
renderFAQs("All");


// State for more features card
const cards = document.querySelectorAll('.more-feature-card');
function activateCard(clickedCard: Element) {
  cards.forEach((card) => {
    const bg = card.querySelector('.bg-decor');
    const content = card.querySelector('p.text-sm');
    if (card === clickedCard) {
      card.classList.add('![background:linear-gradient(180deg,#FFF_55.77%,#F1F1FF_100%)]', '!shadow-[0px_15px_15.2px_0px_rgba(0,0,147,0.05)]', '!border-[rgba(109,45,211,0.30)]');
      bg?.classList.add('opacity-90');
      content?.classList.add('text-neutral-500');
      setTimeout(() => {
        card.classList.remove('![background:linear-gradient(180deg,#FFF_55.77%,#F1F1FF_100%)]', '!shadow-[0px_15px_15.2px_0px_rgba(0,0,147,0.05)]', '!border-[rgba(109,45,211,0.30)]');
        bg?.classList.remove('opacity-90');
        content?.classList.remove('text-neutral-500')
      }, 1000);

    } else {
      card.classList.remove('![background:linear-gradient(180deg,#FFF_55.77%,#F1F1FF_100%)]', '!shadow-[0px_15px_15.2px_0px_rgba(0,0,147,0.05)]', '!border-[rgba(109,45,211,0.30)]');
      bg?.classList.remove('opacity-90');
      content?.classList.remove('text-neutral-500')
    }
  });
}

// Add click event listeners to all cards
cards.forEach((card) => {
  card.addEventListener('click', () => activateCard(card));
});



// Preloader / Loader
const progressElement = document.getElementById('progress');
const loaderElement = document.getElementById('loader');
const bodyElement = document.body;

// Add event listener for the animation end
if (progressElement && loaderElement) {
  progressElement.addEventListener('animationend', function () {
    // Hide the loader
    loaderElement.style.display = 'none';
    // Enable scrolling
    bodyElement.classList.remove('overflow-hidden');
  });
} else {
  console.error('Progress or loader element is missing in the DOM.');
}

// Hamburger Menu Animation
const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeMenuButton');
const menuPanel = document.getElementById('menuPanel');

menuButton?.addEventListener('click', () => {
  menuPanel?.classList.remove("hidden");
  menuButton.classList.add('hidden');
  closeButton?.classList.remove('hidden');
});

closeButton?.addEventListener('click', () => {
  menuPanel?.classList.add("hidden");
  menuButton?.classList.remove('hidden');
  closeButton?.classList.add('hidden');

});

//Intercept the form submission request to handle the feedback
window.addEventListener("load", () => {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  const toast = document.getElementById("toast") as HTMLDivElement | null;

  const toastBg = document.getElementById("toast-bg") as HTMLDivElement | null;
  const toastIcon = document.getElementById("toast-icon") as HTMLImageElement | null; // for changing icon
  const toastHeading = document.getElementById("toast-head") as HTMLSpanElement | null; // for changing heading
  const toastMessage = document.getElementById("toast-message") as HTMLSpanElement | null; // for changing content

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const action = form.action;
      if (!action) {
        alert("Form action URL is missing.");
        return;
      }

      const formData = new FormData(form);

      try {
        const response = await fetch(action, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          // Add success toast content
          toastBg?.classList.add("from-[#d9f4d9]"); //change bg to green
          toastIcon && (toastIcon.src = "/success.svg"); // change icon to success
          toastHeading && (toastHeading.textContent = "Alhamdulillah!");
          toastMessage && (toastMessage.textContent = "Your query has been submitted. We’ll respond soon, Insha’Allah. May Allah guide us all. 🤲");
          toast?.classList.add("!-translate-y-5", "!md:-translate-y-32", "opacity-100"); // change opacity to 100 and move it up

          // Hide toast after 5s
          setTimeout(() => {
            toast?.classList.remove("!-translate-y-5", "!md:-translate-y-32");
          }, 5000);

          // clear the form
          form.reset();
        }
      } catch (error) {
        console.error("Form submission failed:", error);
        toastBg?.classList.add("from-[#ffe0e4]"); //change bg to red
        toast?.classList.add("!-translate-y-5", "opacity-100"); // change opacity to 100 and move it up
        toastIcon && (toastIcon.src = "/failure.svg"); // change icon to failure
        toastHeading && (toastHeading.textContent = "Something went wrong.");
        toastMessage && (toastMessage.textContent = "Please try again. JazakAllahu Khair for your patience.");

        setTimeout(() => {
          toast?.classList.remove("!-translate-y-5", "!md:-translate-y-32");
        }, 5000);
      }
    });
  } else {
    console.warn("Form element with id 'my-form' not found.");
  }
});
