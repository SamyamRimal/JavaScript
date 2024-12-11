document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('.product button');

            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    const productName = this.parentElement.querySelector('h3').innerText;
                    alert(`${productName} has been added to your cart!`);
                });
            });
        });