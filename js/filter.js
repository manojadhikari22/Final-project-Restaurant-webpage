//initializing all inputs food items as an array of object
const foodItems = [
  {
    name: "Chowmin",
    price: 10,
    category: "veg",
    image: "./assets/chowmin.jpg",
  },
  {
    name: "Momo",
    price: 20,
    category: "non-veg",
    image: "./assets/momos.jpg",
  },

  {
    name: "Chicken Khana",
    price: 28,
    category: "non-veg",
    image: "./assets/chicken-khana.jpg",
  },
  {
    name: "Kachila",
    price: 25,
    category: "non-veg",
    image: "./assets/kachila.jpg",
  },
  {
    name: "Selroti",
    price: 5,
    category: "veg",
    image: "./assets/Sel-Roti.webp",
  },
  {
    name: "Thakali khana",
    price: 35,
    category: "non-veg",
    image: "./assets/gallery1.jpg",
  },
  {
    name: "Salad",
    price: 12,
    category: "veg",
    image: "./assets/salad.jpg",
  },
  {
    name: "Newari khaja",
    price: 45,
    category: "non-veg",
    image: "./assets/gallery4.png",
  },
  {
    name: "Aaloo",
    price: 8,
    category: "veg",
    image: "./assets/piro Aaloo.jpg",
  },
];
// This function takes an array of food items (items) as a parameter.
function displayItems(items) {
  const container = document.getElementById("foodContainer");
  container.innerHTML = "";// clears the container existing content
  //It loops through each item in the provided array and dynamically creates HTML elements to display the food items.
  items.forEach(function (item) {
    const div = document.createElement("div");//div elements
    div.className = "grid-item";
    div.innerHTML =
      '<img src="' +
      item.image +
      '"><br>' +
      "Name: " +
      item.name +
      "<br>" +
      "Price: " +
      item.price +
      "<br>" +
      "Category: " +
      item.category;
    container.appendChild(div);//Appends this div to the "foodContainer".
  });
}

// This finction is called when a filter button is clicked
function filter(category) {
  let buttons = document.getElementsByClassName("btn-filter");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  event.target.classList.add("active");

  let filteredItems;
  if (category === "all") {
    filteredItems = foodItems;
  } else {
    filteredItems = foodItems.filter(function (item) {
      return item.category === category;
    });
  }
  displayItems(filteredItems);
}

function sortPrice() {
  // Get all buttons
  const buttons = document.getElementsByClassName("btn-filter");

  // Remove 'active' class from all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Add 'active' class to the button that triggered this function
  event.target.classList.add("active");

  // Continue with the sorting
  var sortedItems = foodItems.slice().sort(function (a, b) {
    return a.price - b.price;
  });
  displayItems(sortedItems);
}

// Display all items at the start
displayItems(foodItems);

