// Fonction pour mettre à jour le total du panier
function updateTotal() {
    let total = 0;

    //parcourt tous les produits présents dans le panier
    document.querySelectorAll(".card").forEach((productCard) => {
        // Récupération de la quantité et du prix unitaire dans chaque carte produit
        let quantity = parseInt(productCard.querySelector(".quantity").textContent);
        let unitPrice = parseFloat(productCard.querySelector(".unit-price").textContent.replace('$', '').trim());
        total += quantity * unitPrice;
    });

    //met à jour l'affichage du total
    document.querySelector(".total").textContent = total.toFixed(2) + " $";
}

// Quand la page est entièrement chargée
document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".card");

    products.forEach((productCard) => {
        const plusBtn = productCard.querySelector(".fa-plus-circle");
        const minusBtn = productCard.querySelector(".fa-minus-circle");
        const deleteBtn = productCard.querySelector(".fa-trash-alt");
        const heartBtn = productCard.querySelector(".fa-heart");
        const quantitySpan = productCard.querySelector(".quantity");

        // Bouton +
        plusBtn.addEventListener("click", () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantitySpan.textContent = quantity + 1;
            updateTotal(); // Mettre à jour le total après modification
        });

        // Bouton -
        minusBtn.addEventListener("click", () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                quantitySpan.textContent = quantity - 1;
                updateTotal();
            }
        });

        // Bouton Supprimer
        deleteBtn.addEventListener("click", () => {
            // supprime complètement la carte produit
            productCard.remove();
            updateTotal(); // Mise à jour du total
        });

        // Bouton J'aime (cœur)
        heartBtn.addEventListener("click", () => {
            heartBtn.classList.toggle("liked");
        });
    });

    // Calcul initial du total au chargement de la page
    updateTotal();
});
