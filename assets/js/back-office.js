const productForm = document.getElementById('productForm');


productForm.addEventListener('submit', function (e) {

    e.preventDefault()

    const nameProduct = document.getElementById('nameProduct');
    const brandName = document.getElementById('brandName');
    const productDescription = document.getElementById('productDescription');
    const priceProduct = document.getElementById('priceProduct');
    const imageProduct = document.getElementById('imgProduct');

    const nameValue = nameProduct.value;
    const brandValue = brandName.value;
    const descriptionValue = productDescription.value;
    const priceValue = priceProduct.value;
    const imgURLValue = imageProduct.value;

    const newProduct = {
        name: nameValue,
        brand: brandValue,
        description: descriptionValue,
        price: priceValue,
        imageUrl: imgURLValue,
    }

    const url = "https://striveschool-api.herokuapp.com/api/product/";



    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNmEyY2YyNjBjYzAwMTVjYzBlMGIiLCJpYXQiOjE3MjE5ODU1ODAsImV4cCI6MTcyMzE5NTE4MH0.hwKxgGnyE_jLDO7s9CwnN6F3zSur_gdQJr4IZfFyqDA",
            "Content-Type": "application/json",
        },
    })
    
    .then((response) => {
        if (response.ok) {

            const modal = document.createElement('div')
            alert('SALVATAGGIO COMPLETATO')

        } else {
            alert('ERRORE NEL SALVATAGGIO');
            throw new Error('Errore nel salvataggio');
        }
    })

    .catch ((err) => {
        console.log('errore', err);
    })


});




