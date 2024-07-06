let itemCount = 0;

function createDivs(count) {
    const container = document.getElementById('container');
    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = `Item ${itemCount + 1}`;
        container.appendChild(div);
        itemCount++;
    }
}

function loadMoreDivs() {
    createDivs(12);
}

// Load initial 12 divs
createDivs(12);
