import './style.css'

import FAQs from "./data/faqs"; // Import FAQ data

// DOM Elements
const categoryContainer = document.getElementById("faq-categories") as HTMLDivElement;

// Function to Render Category Buttons
function renderCategoryButtons() {
  // Step 1: Get unique categories
  const categories = ["All", ...new Set(FAQs.map((faq) => faq.category))];

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
    faqItem.classList.add("faq-item","bg-gray-100","rounded-xl");
    faqItem.innerHTML = `
    <div class="p-4 px-5">
        <div class="flex gap-2 items-center justify-between cursor-pointer">
          <h3 class="faq-question text-neutral-800 font-semibold text-left w-11/12">${faq.question}</h3>
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
  });
});

// Initial Render (Show All FAQs)
renderFAQs("All");

// Event Listeners for Category Buttons
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category") || "All";
    renderFAQs(category);
  });
});

// Initial Render (Show All FAQs)
renderFAQs("All");


// Event Listeners for Category Buttons
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category") || "All";
    renderFAQs(category);
  });
});

// Initial Render (Show All FAQs)
renderFAQs("All");