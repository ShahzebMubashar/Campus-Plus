let itemCount = 12;

function createDivs(count) {
    const container = document.getElementById('container');
    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = 'item';

        const heading = document.createElement('h2');
        heading.textContent = `Heading ${itemCount + 1}`;
        div.appendChild(heading);

        const para = document.createElement('p');
        para.textContent = `This is a paragraph for item ${itemCount + 1}.`;
        div.appendChild(para);

        container.appendChild(div);
        itemCount++;
    }
}

function loadMoreDivs() {
    createDivs(12);
}

// Initial divs are already in the HTML
