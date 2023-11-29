const persons = [
  {
    id: 1,
    imgSrc: "img/person-1.jpg",
    name: "Susan Smith",
    profession: "WEB DEVELOPER",
    description: `I'm baby meggings twee health goth +1. Bicycle rights tumeric
                chartreuse before they sold out chambray pop-up. Shaman humblebrag
                pickled coloring book salvia hoodie, cold-pressed four dollar toast
                everyday carry`,
  },
  {
    id: 2,
    imgSrc: "img/person-2.jpg",
    name: "Anna Johnson",
    profession: "WEB DESIGNER",
    description: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. 
                  Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion
                  axe.photo booth jean shorts artisan narwhal.`,
  },
  {
    id: 3,
    imgSrc: "img/person-3.jpg",
    name: "Jane Doe",
    profession: "InTERN",
    description:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    imgSrc: "img/person-4.jpg",
    name: "Bill Anderson",
    profession: "THE BOSS",
    description:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const randomBtn = document.getElementById("random");
const card = document.getElementById("card");

let currIndex = 0;

const generatePersonCard = () => {
  card.innerHTML = "";
  let personInfo = document.createElement("div");
  personInfo.innerHTML = `<img class="img" src="${persons[currIndex].imgSrc}" alt="">
        <p class="name">${persons[currIndex].name}</p>
        <p class="proffesion">${persons[currIndex].profession}</p>
        <p class="description">${persons[currIndex].description}</p>
  `;

  card.appendChild(personInfo);
};

const updateCard = () => {
  generatePersonCard();
};
leftBtn.addEventListener("click", () => {
  currIndex = (currIndex - 1 + persons.length) % persons.length;
  updateCard();
});
rightBtn.addEventListener("click", () => {
  currIndex = (currIndex + 1) % persons.length;
  updateCard();
});

const generateRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

randomBtn.addEventListener("click", () => {
  const randomNumber = generateRandomNum(0, 3);
  currIndex = randomNumber;
  updateCard();
});

generatePersonCard();
