const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "covers/gatsby.jpg",
        description: "A story of love, ambition, and the American Dream.",
        category: "Classic",
    },
    {
        title: "1984",
        author: "George Orwell",
        cover: "covers/1984.jpg",
        description: "A dystopian tale about surveillance and totalitarianism.",
        category: "Dystopian",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        cover: "covers/mocking.png",
        description: "A profound story about racial injustice and morality.",
        category: "Classic",
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        cover: "covers/moby.jpg",
        description: "The epic tale of Captain Ahab's quest for revenge.",
        category: "Classic",
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        cover: "covers/pride.jpg",
        description: "A romantic comedy about love and societal expectations.",
        category: "Romance",
    },
    {
        title: "The Catcher in the Rye",
        author: " J.D. Salinger",
        cover: "covers/catcher.jpg",
        description: "Disillusioned teenager Holden Caulfield recounts his journey through New York City while grappling with alienation and identity.",
        category: "Coming-of-age",
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        cover: "covers/hobbit.jpg",
        description: "Bilbo Baggins, a reluctant hobbit, embarks on an epic adventure to help dwarves reclaim their homeland from a dragon.",
        category: "Fantasy",
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        cover: "covers/brave.jpg",
        description: "In a technologically advanced but emotionally sterile society, Bernard Marx begins questioning the meaning of happiness and individuality.",
        category: "Dystopian",
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        cover: "covers/war.jpg",
        description: "This sprawling epic follows Russian families during the Napoleonic Wars, intertwining love, war, and philosophical reflections on history.",
        category: "Historical Fiction",
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        cover: "covers/alchemist.jpg",
        description: "Santiago, a shepherd, follows his dreams and learns life lessons on a journey to find treasure in the Egyptian pyramids.",
        category: "Adventure",
    },
    {
        title: "The Odyssey",
        author: "Homer",
        cover: "covers/odyssey.jpg",
        description: "Odysseus struggles against gods, monsters, and fate to return home to Ithaca after the Trojan War.",
        category: "Epic",
    },
    {
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        cover: "covers/divine.jpg",
        description: "Dante journeys through Hell, Purgatory, and Heaven, guided by Virgil and Beatrice, to discover divine justice and love.",
        category: "Poetry",
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        cover: "covers/jane.jpg",
        description: "Jane Eyre, an orphaned governess, overcomes hardship and finds love with the enigmatic Mr. Rochester while staying true to herself.",
        category: "Classic",
    },
    {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        cover: "covers/wuthering.jpg",
        description: "A tale of intense love and revenge unfolds between Heathcliff and Catherine Earnshaw on the Yorkshire moors.",
        category: "Gothic",
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        cover: "covers/crime.jpg",
        description: "Raskolnikov, a destitute student, grapples with guilt and redemption after murdering a pawnbroker in St. Petersburg.",
        category: "Psychological Fiction",
    },
    {
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        cover: "covers/brothers.jpg",
        description: "The complex lives and philosophies of three brothers intersect amid a family tragedy and a murder trial in 19th-century Russia.",
        category: "Philosophical",
    },
    {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        cover: "covers/anna.jpg",
        description: "Anna’s passionate affair with Count Vronsky leads to personal and societal turmoil, set against a backdrop of Russian aristocracy.",
        category: "Romance",
    },
    {
        title: "Great Expectations",
        author: "Charles Dickens",
        cover: "covers/great.jpg",
        description: "Pip, a poor orphan, rises in society through mysterious benefactors, confronting love, betrayal, and his own ambitions.",
        category: "Classic",
    },
    {
        title: "Les Misérables",
        author: "Victor Hugo",
        cover: "covers/les.jpg",
        description: "Jean Valjean, an ex-convict, seeks redemption and aids the downtrodden during France’s turbulent revolutionary period.",
        category: "Historical Fiction",
    },
];
document.addEventListener("DOMContentLoaded", () => {
    const bookList = document.getElementById("bookList");
    const bookSearch = document.getElementById("bookSearch");
    const recommendedBooks = document.getElementById("recommendedBooks");
    const recommendedsBooks = document.getElementById("recommendedsBooks");
    const categoryDropButton = document.getElementById("categoryDropButton");
    const categoryContent = document.getElementById("categoryContent");


     // Toggle visibility of the category content when the button is clicked
     categoryDropButton.addEventListener("click", () => {
        // Toggle 'display' style between 'none' and 'block'
        categoryContent.style.display = categoryContent.style.display === "flex" ? "none" : "flex";
    });
    
        // Function to render recommended books
        const renderRecommendedBooks = (books) => {
            // Create HTML for the recommended books
            const recommendedHTML = books
                .slice(0, 5) // Display the first 5 recommended books
                .map(
                    (book, index) => `
                    <div class="recommended-book" style="animation-delay: ${index * 1}s;">
                        <img src="${book.cover}" alt="${book.title}" title="${book.title}">
                    </div>`
                )
                .join("");
    
            // Insert the recommended books into the recommended section
            recommendedBooks.innerHTML = recommendedHTML;
            let currentIndex = 0;
            setInterval(() => {
                const allBooks = document.querySelectorAll(".recommended-book");
                allBooks.forEach(book => book.style.opacity = "0");  // Hide all books
                allBooks[currentIndex].style.opacity = "1";  // Show the current book
                currentIndex = (currentIndex + 2) % books.length;  // Loop through the books
            }, 1000); // Change every 3 seconds (adjust as needed)
        };
        const recommendedList = books.filter((book) =>
            ["The Alchemist", "War and Peace", "Crime and Punishment", "The Odyssey", "Anna Karenina"].includes(book.title)
        );
        renderRecommendedBooks(recommendedList);

        
    });
    // Function to render recommended books
    const renderRecommendedsBooks = (books) => {
        // Create HTML for the recommended books
        const recommendedsHTML = books
            .slice(0, 5) // Display the first 5 recommended books
            .map(
                (book, index) => `
                <div class="recommendeds-book" style="animation-delay: ${index * 1}s;">
                    <img src="${book.cover}" alt="${book.title}" title="${book.title}">
                </div>`
            )
            .join("");

        // Insert the recommended books into the recommended section
        recommendedsBooks.innerHTML = recommendedsHTML;
        let currentIndex = 0;
        setInterval(() => {
            const allBooks = document.querySelectorAll(".recommendeds-book");
            allBooks.forEach(book => book.style.opacity = "0");  // Hide all books
            allBooks[currentIndex].style.opacity = "1";  // Show the current book
            currentIndex = (currentIndex + 1) % books.length;  // Loop through the books
        }, 1500); // Change every 3 seconds (adjust as needed)
    };
    const recommendedsList = books.filter((book) =>
        ["Wuthering Heights", "Jane Eyre", "1984", "The Divine Comedy", "The Brothers Karamazov"].includes(book.title)
    );
    renderRecommendedsBooks(recommendedsList);

    

    // Function to group books by category
    const groupBooksByCategory = (books) => {
        return books.reduce((groups, book) => {
            const { category } = book;
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(book);
            return groups;
        }, {});
    };

    // Render books by category
    const renderBooks = (groupedBooks, showAll = false) => {
        bookList.innerHTML = "";
        for (const category in groupedBooks) {
            const booksToDisplay = showAll ? groupedBooks[category] : [groupedBooks[category][0]];

            // Create a category section
            const categorySection = `

                <div class="book-category">
                    ${booksToDisplay
                        .map((book) => {
                            return `
                            
                                <div class="book-card">
                                <h5>${book.category}</h5>
                                
                                    <img src="${book.cover}" alt="${book.title}">
                                    <div class="book-info">
                                        <h4>${book.title}</h4>
                                        <p>Author: <br><strong>${book.author}<br></strong> </p>
                                        <p>${book.description}</p>
                                        ${
                                    !showAll
                                        ? `<button class="see-all-button" data-category="${category}">See All</button>`
                                        : ""
                                }
                                    </div>
                                        
                                </div>`;
                                
                        })
                        .join("")}
                </div>
                `;
            bookList.insertAdjacentHTML("beforeend", categorySection);
        }

        // Attach event listeners to "See All" buttons
        const seeAllButtons = document.querySelectorAll(".see-all-button");
        seeAllButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const category = button.dataset.category;
                renderBooks({ [category]: groupedBooks[category] }, true);
            });
        });
    };

    const groupedBooks = groupBooksByCategory(books);
    renderBooks(groupedBooks);

    // Search functionality
    bookSearch.addEventListener("input", (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredBooks = books.filter(
            (book) =>
                book.title.toLowerCase().includes(searchValue) ||
                book.author.toLowerCase().includes(searchValue)
        );
        const groupedFilteredBooks = groupBooksByCategory(filteredBooks);
        renderBooks(groupedFilteredBooks);
    });


    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }




    // Get the ID number from the URL
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');

    // Display the welcome message with the ID number
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (userId) {
        welcomeMessage.textContent = `Logged In: ${userId}`;
    } else {
        welcomeMessage.textContent = "Logged In: Guest";
    }

    // Logout function
    function logout() {
        window.location.href = "login.html"; // Redirect to the login page
    }

    // Theme toggling function
    function toggleTheme() {
        const themes = ['light-mode', 'dark-mode', 'pink-mode', 'brown-mode', 'blue-mode'];
        const currentTheme = document.body.classList.value;
        const nextThemeIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
        document.body.className = themes[nextThemeIndex];
    }



    var coll = document.getElementsById("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
