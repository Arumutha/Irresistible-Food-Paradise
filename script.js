<script>
const orderButtons = document.querySelectorAll(".order-btn, .btn-primary");

orderButtons.forEach((btn)
    btn.addEventListener("click", ()
        alert("🍔 Thanks! Your order request is received. We will contact you soon.");
    );
);
</script>