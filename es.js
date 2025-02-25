let currentSlide = 0;

function changeSlide(slideIndex) {
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");

  // Update slide position
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;

  // Update active dot
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === slideIndex);
  });

  currentSlide = slideIndex;
}

// Auto-slide functionality
setInterval(() => {
  currentSlide = (currentSlide + 1) % 3; // Change 3 to the number of slides
  changeSlide(currentSlide);
}, 5000); // Change slide every 5 seconds

// Dropdown functionality
function myFunction() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
};

// Page loaded event
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded");
  // Additional interactive functionality can be added here
});
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".vertical-menu a");
  const contentDiv = document.getElementById("content");

  const contentMap = {
    content1: `
      <div class="shopping-menu">
        <a href="farmer_page1.html" class="item">
          <img src="farmer desc1.jpg" alt="Red Rice Item 1">
          <p>Ramesh Naik</p>
        </a>
        <a href="farmer_page2.html" class="item">
          <img src="red_rice_item2.jpeg" alt="Red Rice Item 2">
          <p>Anitha Shetty</p>
        </a>
        <a href="farmer_page3.html" class="item">
          <img src="red_rice_item3.jpeg" alt="Red Rice Item 3">
          <p>Manjunath Gowda</p>
        </a>
        <a href="farmer_page4.html" class="item">
          <img src="red_rice_item4.jpeg" alt="Red Rice Item 4">
          <p>Lakshmi Hegde</p>
        </a>
        <a href="farmer_page5.html" class="item">
          <img src="red_rice_item5.jpeg" alt="Red Rice Item 5">
          <p>Prakash Patil</p>
        </a>
        <a href="farmer_page6.html" class="item">
          <img src="red_rice_item6.jpeg" alt="Red Rice Item 6">
          <p>Shantha Reddy</p>
        </a>
        <a href="farmer_page7.html" class="item">
          <img src="red_rice_item7.jpeg" alt="Red Rice Item 7">
          <p>Suresh Desai</p>
        </a>
        <a href="farmer_page8.html" class="item">
          <img src="farmer desc1.jpg" alt="Red Rice Item 8">
          <p>Nirmala Kulkarni</p>
        </a>
      </div>
    `,
    content2: `
      <div class="shopping-menu">
        <a href="farmer_page1.html" class="item">
          <img src="farmer desc1.jpg" alt="White Rice Item 1">
          <p>Rajesh Sharma</p>
        </a>
        <a href="farmer_page2.html" class="item">
          <img src="white_rice_item2.jpeg" alt="White Rice Item 2">
          <p>Sunita Verma</p>
        </a>
        <a href="farmer_page3.html" class="item">
          <img src="white_rice_item3.jpeg" alt="White Rice Item 3">
          <p>Mohan Singh</p>
        </a>
        <a href="farmer_page4.html" class="item">
          <img src="white_rice_item4.jpeg" alt="White Rice Item 4">
          <p>Priya Gupta</p>
        </a>
        <a href="farmer_page5.html" class="item">
          <img src="white_rice_item5.jpeg" alt="White Rice Item 5">
          <p>Sandeep Mehra</p>
        </a>
        <a href="farmer_page6.html" class="item">
          <img src="white_rice_item6.jpeg" alt="White Rice Item 6">
          <p>Aarti Thakur</p>
        </a>
        <a href="farmer_page7.html" class="item">
          <img src="white_rice_item7.jpeg" alt="White Rice Item 7">
          <p>Vijay Chauhan</p>
        </a>
        <a href="farmer_page8.html" class="item">
          <img src="farmer desc1.jpg" alt="White Rice Item 8">
          <p>Kusum Agarwal</p>
        </a>
      </div>
    `,
    content3: `
      <div class="shopping-menu">
        <a href="farmer_page1.html" class="item">
          <img src="farmer desc1.jpg" alt="Link 3 Item 1">
          <p>Ravi Kumar</p>
        </a>
        <a href="farmer_page2.html" class="item">
          <img src="link3_item2.jpeg" alt="Link 3 Item 2">
          <p>Deepa Srinivas</p>
        </a>
        <a href="farmer_page3.html" class="item">
          <img src="link3_item3.jpeg" alt="Link 3 Item 3">
          <p>Gopal Reddy</p>
        </a>
        <a href="farmer_page4.html" class="item">
          <img src="link3_item4.jpeg" alt="Link 3 Item 4">
          <p>Harini Bhat</p>
        </a>
        <a href="farmer_page5.html" class="item">
          <img src="link3_item5.jpeg" alt="Link 3 Item 5">
          <p>Arjun Rao</p>
        </a>
        <a href="farmer_page6.html" class="item">
          <img src="link3_item6.jpeg" alt="Link 3 Item 6">
          <p>Nayana Deshpande</p>
        </a>
        <a href="farmer_page7.html" class="item">
          <img src="link3_item7.jpeg" alt="Link 3 Item 7">
          <p>Vinod Shekhar</p>
        </a>
        <a href="farmer_page8.html" class="item">
          <img src="farmer desc1.jpg" alt="Link 3 Item 8">
          <p>Shruti Iyer</p>
        </a>
      </div>
    `,
  };

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const contentKey = this.getAttribute("data-content");

      // Fade out the current content
      contentDiv.classList.remove("visible");
      setTimeout(() => {
        contentDiv.innerHTML =
          contentMap[contentKey] || "<p>No content available</p>";
        // Fade in the new content
        contentDiv.classList.add("visible");
      }, 500); // Match the transition duration

      // Remove active class from all menu items
      menuItems.forEach((menuItem) => menuItem.classList.remove("active"));

      // Add active class to the clicked menu item
      this.classList.add("active");
    });
  });
  if (menuItems.length > 0) {
    menuItems[0].click();
  }
});
