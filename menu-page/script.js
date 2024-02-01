const data = [
  {
    id: 1,
    category: "dinner",
    name: "Grilled Salmon",
    description: "Fresh salmon fillet seasoned and grilled to perfection.",
  },
  {
    id: 2,
    category: "dinner",
    name: "Vegetarian Lasagna",
    description:
      "Layers of pasta, ricotta, marinara sauce, and vegetables baked to a golden brown.",
  },
  {
    id: 3,
    category: "dinner",
    name: "Chicken Alfredo Pasta",
    description:
      "Creamy Alfredo sauce tossed with tender chicken and fettuccine pasta.",
  },
  {
    id: 4,
    category: "lunch",
    name: "Caprese Salad",
    description:
      "A refreshing salad with tomatoes, mozzarella cheese, fresh basil, and balsamic glaze.",
  },
  {
    id: 5,
    category: "lunch",
    name: "Turkey Avocado Wrap",
    description:
      "Sliced turkey, avocado, lettuce, and tomato wrapped in a whole-grain tortilla.",
  },
  {
    id: 6,
    category: "lunch",
    name: "Quinoa Bowl",
    description:
      "A nutritious bowl with quinoa, mixed vegetables, and a tahini dressing.",
  },
  {
    id: 7,
    category: "breakfast",
    name: "Avocado Toast",
    description:
      "Sliced avocado on toasted whole-grain bread, drizzled with olive oil and sprinkled with salt and pepper.",
  },
  {
    id: 8,
    category: "breakfast",
    name: "Greek Yogurt Parfait",
    description:
      "Layers of Greek yogurt, granola, and fresh berries for a delicious and healthy start.",
  },
  {
    id: 9,
    category: "breakfast",
    name: "Omelette with Spinach and Feta",
    description:
      "Fluffy omelette filled with sautéed spinach and crumbled feta cheese.",
  },
  {
    id: 10,
    category: "breakfast",
    name: "Blueberry Pancakes",
    description:
      "Light and fluffy pancakes filled with juicy blueberries, served with maple syrup.",
  },
];

const cardsContainer = document.querySelector(".cards-container");

const createCard = (food) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-category", food.category);
  const title = document.createElement("h2");
  title.textContent = food.name;

  const description = document.createElement("p");
  description.textContent = food.description;

  card.appendChild(title);
  card.appendChild(description);

  return card;
};

const filterCards = (category) => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (category === "All" || card.getAttribute("data-category") === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

document.querySelector(".category").addEventListener("click", (event) => {
  if (event.target.classList.contains("category-btn")) {
    const selectedCategory = event.target.textContent;
    filterCards(selectedCategory);
  }
});

data.forEach((food) => {
  const card = createCard(food);
  cardsContainer.appendChild(card);
});
