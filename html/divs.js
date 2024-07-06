const items = [
    { heading: "Heading 1", para: "This is a paragraph for item 1." },
    { heading: "Heading 2", para: "This is a paragraph for item 2." },
    { heading: "Heading 3", para: "This is a paragraph for item 3." },
    { heading: "Heading 4", para: "This is a paragraph for item 4." },
    { heading: "Heading 5", para: "This is a paragraph for item 5." },
    { heading: "Heading 6", para: "This is a paragraph for item 6." },
    { heading: "Heading 7", para: "This is a paragraph for item 7." },
    { heading: "Heading 8", para: "This is a paragraph for item 8." },
    { heading: "Heading 9", para: "This is a paragraph for item 9." },
    { heading: "Heading 10", para: "This is a paragraph for item 10." },
    { heading: "Heading 11", para: "This is a paragraph for item 11." },
    { heading: "Heading 12", para: "This is a paragraph for item 12." },
    { heading: "Heading 13", para: "This is a paragraph for item 13." },
    { heading: "Heading 14", para: "This is a paragraph for item 14." },
    { heading: "Heading 15", para: "This is a paragraph for item 15." },
    { heading: "Heading 16", para: "This is a paragraph for item 16." },
    { heading: "Heading 17", para: "This is a paragraph for item 17." },
    { heading: "Heading 18", para: "This is a paragraph for item 18." },
    { heading: "Heading 19", para: "This is a paragraph for item 19." },
    { heading: "Heading 20", para: "This is a paragraph for item 20." },
    { heading: "Heading 21", para: "This is a paragraph for item 21." },
    { heading: "Heading 22", para: "This is a paragraph for item 22." },
    { heading: "Heading 23", para: "This is a paragraph for item 23." },
    { heading: "Heading 24", para: "This is a paragraph for item 24." },
    { heading: "Heading 12", para: "This is a paragraph for item 12." },
    { heading: "Heading 13", para: "This is a paragraph for item 13." },
    { heading: "Heading 14", para: "This is a paragraph for item 14." },
    { heading: "Heading 15", para: "This is a paragraph for item 15." },
    { heading: "Heading 16", para: "This is a paragraph for item 16." },
    { heading: "Heading 17", para: "This is a paragraph for item 17." },
    { heading: "Heading 18", para: "This is a paragraph for item 18." },
    { heading: "Heading 19", para: "This is a paragraph for item 19." },
    { heading: "Heading 20", para: "This is a paragraph for item 20." },
    { heading: "Heading 21", para: "This is a paragraph for item 21." },
    { heading: "Heading 22", para: "This is a paragraph for item 22." },
    { heading: "Heading 23", para: "This is a paragraph for item 23." },
    { heading: "Heading 24", para: "This is a paragraph for item 24." }
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

        const heading = document.createElement('h2');
        heading.textContent = items[currentIndex].heading;
        div.appendChild(heading);

        const para = document.createElement('p');
        para.textContent = items[currentIndex].para;
        div.appendChild(para);

        container.appendChild(div);
        currentIndex++;
    }
}

function loadMoreDivs() {
    createDivs(12);
}

// Load initial 12 divs
createDivs(12);
