const items = [
    { heading: "Operating Systems (OS)", para: "This is a paragraph for item 1. This is a paragraph for item 1. This is a paragraph for item 1. This is a paragraph for item 1.", link: "page1.html" },
    { heading: "Heading 2", para: "This is a paragraph for item 2.", link: "page2.html", rating: 4.2 },
    { heading: "Heading 3", para: "This is a paragraph for item 3.", link: "page3.html" },
    { heading: "Heading 4", para: "This is a paragraph for item 4.", link: "page4.html" },
    { heading: "Heading 5", para: "This is a paragraph for item 5.", link: "page5.html" },
    { heading: "Heading 6", para: "This is a paragraph for item 6.", link: "page6.html" },
    { heading: "Heading 7", para: "This is a paragraph for item 7.", link: "page7.html" },
    { heading: "Heading 8", para: "This is a paragraph for item 8.", link: "page8.html" },
    { heading: "Heading 9", para: "This is a paragraph for item 9.", link: "page9.html" },
    { heading: "Heading 10", para: "This is a paragraph for item 10.", link: "page10.html" },
    { heading: "Heading 11", para: "This is a paragraph for item 11.", link: "page11.html" },
    { heading: "Heading 12", para: "This is a paragraph for item 12.", link: "page12.html" },
    { heading: "Heading 13", para: "This is a paragraph for item 13.", link: "page13.html" },
    { heading: "Heading 14", para: "This is a paragraph for item 14.", link: "page14.html" },
    { heading: "Heading 15", para: "This is a paragraph for item 15.", link: "page15.html" },
    { heading: "Heading 16", para: "This is a paragraph for item 16.", link: "page16.html" },
    { heading: "Heading 17", para: "This is a paragraph for item 17.", link: "page17.html" },
    { heading: "Heading 18", para: "This is a paragraph for item 18.", link: "page18.html" },
    { heading: "Heading 19", para: "This is a paragraph for item 19.", link: "page19.html" },
    { heading: "Heading 20", para: "This is a paragraph for item 20.", link: "page20.html" },
    { heading: "Heading 21", para: "This is a paragraph for item 21.", link: "page21.html" },
    { heading: "Heading 22", para: "This is a paragraph for item 22.", link: "page22.html" },
    { heading: "Heading 23", para: "This is a paragraph for item 23.", link: "page23.html" },
    { heading: "Heading 24", para: "This is a paragraph for item 24.", link: "page24.html" }
];

let currentIndex = 0;

function createDivs(count) {
    const container = document.getElementById('container');
    for (let i = 0; i < count; i++) {
        if (currentIndex >= items.length) {
            document.getElementById('viewMoreBtn').disabled = true;
            return;
        }

        const div = document.createElement('div');
        div.className = 'item';

        const link = document.createElement('a');
        link.href = items[currentIndex].link;

        const heading = document.createElement('h2');
        heading.textContent = items[currentIndex].heading;
        link.appendChild(heading);

        const para = document.createElement('p');
        para.textContent = items[currentIndex].para;
        link.appendChild(para);

        div.appendChild(link);

        // Add button inside the div item
        const button = document.createElement('button');
        button.textContent = "Click Me";
        button.className = 'item-button';
        div.appendChild(button);

        // Add rating stars and text inside the div item
        const ratingDiv = document.createElement('div');
        ratingDiv.className = 'rating';
        const ratingValue = items[currentIndex].rating;

        const stars = document.createElement('span');
        stars.innerHTML = `${'★'.repeat(Math.floor(ratingValue))}${'☆'.repeat(5 - Math.floor(ratingValue))}`;
        ratingDiv.appendChild(stars);

        const ratingText = document.createElement('span');
        ratingText.textContent = ` ${ratingValue}/5`;
        ratingDiv.appendChild(ratingText);

        div.appendChild(ratingDiv);

        container.appendChild(div);
        currentIndex++;
    }
}

function loadMoreDivs() {
    createDivs(12);
}

// Load initial 12 divs
createDivs(12);

// Function to filter items based on search input
function filterItems(searchText) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing items

    items.forEach(item => {
        // Convert heading and para to lowercase for case-insensitive search
        const headingText = item.heading.toLowerCase();
        const paraText = item.para.toLowerCase();
        const searchLower = searchText.toLowerCase();

        // Check if search text matches heading or paragraph
        if (headingText.includes(searchLower) || paraText.includes(searchLower)) {
            const div = document.createElement('div');
            div.className = 'item';

            const link = document.createElement('a');
            link.href = item.link;

            const heading = document.createElement('h2');
            heading.textContent = item.heading;
            link.appendChild(heading);

            const para = document.createElement('p');
            para.textContent = item.para;
            link.appendChild(para);

            div.appendChild(link);

            // Add button inside the filtered div item
            const button = document.createElement('button');
            button.textContent = "Click Me";
            button.className = 'item-button';
            div.appendChild(button);

            // Add rating stars and text inside the filtered div item
            const ratingDiv = document.createElement('div');
            ratingDiv.className = 'rating';
            const ratingValue = item.rating;

            const stars = document.createElement('span');
            stars.innerHTML = `${'★'.repeat(Math.floor(ratingValue))}${'☆'.repeat(5 - Math.floor(ratingValue))}`;
            ratingDiv.appendChild(stars);

            const ratingText = document.createElement('span');
            ratingText.textContent = ` ${ratingValue}/5`;
            ratingDiv.appendChild(ratingText);

            div.appendChild(ratingDiv);

            container.appendChild(div);
        }
    });
}

// Function to handle search button click
document.querySelector('.search-bar button').addEventListener('click', function () {
    const searchText = document.querySelector('.search-bar input').value;
    filterItems(searchText);
});

// Function to handle search input change
document.querySelector('.search-bar input').addEventListener('input', function () {
    const searchText = document.querySelector('.search-bar input').value;
    filterItems(searchText);
});