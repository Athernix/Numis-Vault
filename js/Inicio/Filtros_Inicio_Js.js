//Funciones para los filtros de inicio
document.getElementById('filtroLlegan24').addEventListener('change', function() {
    const products = document.querySelectorAll('.producto');
    const isChecked = this.checked;
    products.forEach(product => {
        if (isChecked) {
            if (product.dataset.llega24 !== "true") {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        } else {
            product.style.display = 'block';
        }
    });
});

document.getElementById('precioHasta10000').addEventListener('change', function() {
    const products = document.querySelectorAll('.producto');
    const isChecked = this.checked;
    products.forEach(product => {
        const price = parseInt(product.dataset.precio, 10);
        if (isChecked) {
            if (price > 10000) {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        } else {
            product.style.display = 'block';
        }
    });
});
