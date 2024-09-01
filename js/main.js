// jQuery to toggle the navbar
$(".hamburger").on("click", function () {
  $(".nav").toggleClass("active");
});


$(document).ready(function () {
  // Toggle view for collection items
  $(".view-all").click(function () {
    $(".collection").toggleClass("show-all");
    // Change button text based on the state
    if ($(".collection").hasClass("show-all")) {
      $(this).text("VIEW LESS");
    } else {
      $(this).text("VIEW ALL");
    }
  });
});

// New function to show the second icon when the first icon is clicked
function showSecondIcon() {
  const secondIcon = document.getElementById("icon2");
  secondIcon.style.display = "block";
}

// Show footer on scroll to bottom
document.addEventListener("scroll", function () {
  const footer = document.querySelector(".footer");
  const scrollPosition = window.innerHeight + window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= documentHeight) {
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }
});

// Carousel functionality
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  const scrollAmount = 300; // Adjust this value based on how much you want to scroll

  // Function to scroll the carousel to the left
  function scrollLeft() {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  }

  // Function to scroll the carousel to the right
  function scrollRight() {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  // Event listeners for arrow buttons
  leftArrow.addEventListener("click", scrollLeft);
  rightArrow.addEventListener("click", scrollRight);
});

// Collection item hover effect
document.addEventListener("DOMContentLoaded", function () {
  // Select all collection items
  const collectionItems = document.querySelectorAll(".collection .d-item");

  collectionItems.forEach((item) => {
    // Find the images within the collection item
    const images = item.querySelectorAll("img");

    // Ensure there are exactly two images
    if (images.length === 2) {
      const firstImage = images[0];
      const secondImage = images[1];

      // Show the first image and hide the second image initially
      secondImage.style.display = "none";

      // Add event listeners for hover effect, affecting only the images
      item.addEventListener("mouseover", () => {
        firstImage.style.display = "none";
        secondImage.style.display = "block";
      });

      item.addEventListener("mouseout", () => {
        firstImage.style.display = "block";
        secondImage.style.display = "none";
      });
    }
  });
});

//review carousel
$(document).ready(function () {
  $(".reviews-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// carousel navigation:
$(document).ready(function () {
  // Variables for smooth scrolling
  const scrollAmount = 250; // Adjust this value as needed for smooth scrolling

  $(".right-arrow").click(function () {
    $(".carousel-wrapper").animate(
      {
        scrollLeft: $(".carousel-wrapper").scrollLeft() + scrollAmount,
      },
      300
    ); // 300ms for animation duration
  });

  $(".left-arrow").click(function () {
    $(".carousel-wrapper").animate(
      {
        scrollLeft: $(".carousel-wrapper").scrollLeft() - scrollAmount,
      },
      300
    ); // 300ms for animation duration
  });
});
