let cartItems = [];

// Function to add items to the shopping cart
function addToCart(itemName, itemPrice, itemImage) {
    cartItems.push({ name: itemName, price: itemPrice, image: itemImage });

    alert(`${itemName} added to cart!`);
}

// Function to display the shopping cart
function viewCart() {
    // Get the modal element
    const modal = document.getElementById('modal');
    

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    };

    // Get the modal content element
    const modalContent = document.querySelector('.modal-content');

    // If the cart is empty, display a message
    if (cartItems.length === 0) {
        modalContent.innerHTML = '<span class="close">&times;</span><p>Your shopping cart is empty.</p>';
    } else {
        // Generate HTML for displaying cart items and total
        let cartHTML = '<span class="close">&times;</span><h2>Shopping Cart</h2><ul>';
        let total = 0;
        cartItems.forEach((item, index) => {
            cartHTML += `
                <li>
                    <img src="${item.image}" style="width: 50px; height: auto; border-radius: 15px;">
                    ${item.name}: $${item.price}
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </li>
            `;
            total += item.price;
        });
        cartHTML += `</ul><p>Total: $${total}</p>`;
        cartHTML += `<button class="checkout-btn">Checkout</button>`;

        modalContent.innerHTML = cartHTML;

        // Add event listeners for delete buttons
        const deleteBtns = modalContent.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.getAttribute('data-index'));
                cartItems.splice(index, 1);
                viewCart(); // Update the cart display
            });
            btn.style.backgroundColor = 'red'; 
            btn.style.color = 'white'; 
            btn.style.borderRadius = '5px';
            btn.style.padding = '8px 16px';
        });
    }

    // Display the modal
    modal.style.display = 'block';

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Add event listener for the checkout button
    const checkoutBtn = modalContent.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        // Perform checkout logic here
        alert('Checkout in Progress!');
    });
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

    function toggleDescription(description, productId) {
    const descriptionContainer = document.getElementById(`product-description-${productId}`);

    if (descriptionContainer.style.display === 'none') {
        descriptionContainer.style.display = 'block';
        descriptionContainer.textContent = description;
    } else {
        descriptionContainer.style.display = 'none';
    }
}
