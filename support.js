document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const arrow = button.querySelector('.arrow');

        // Check if the answer is already expanded
        if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
            answer.style.maxHeight = '0';
            arrow.textContent = '+';
        } else {
            // First, reset all answers to ensure only one is expanded at a time
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.style.maxHeight = '0';
                item.previousElementSibling.querySelector('.arrow').textContent = '+';
            });

            // Set the maxHeight to the scrollHeight of the answer to expand it
            answer.style.maxHeight = answer.scrollHeight + 'px';
            arrow.textContent = '-';
        }
    });
});
