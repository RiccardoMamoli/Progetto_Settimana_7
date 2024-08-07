const cardList = document.getElementById('cardList');



function getData() {

    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNmEyY2YyNjBjYzAwMTVjYzBlMGIiLCJpYXQiOjE3MjE5ODU1ODAsImV4cCI6MTcyMzE5NTE4MH0.hwKxgGnyE_jLDO7s9CwnN6F3zSur_gdQJr4IZfFyqDA"
        }
    })
        .then((respone) => {
            console.log(respone);
            if (respone.ok) {
                return respone.json();
            }
            else {
                throw new Error('Errore');
            }
        })
        .then((products) => {
            console.log(products)
            loadCards(products);
        })
        .catch((err) => {
            console.log('error', err);
        })

}

function loadCards(products) {
    for (let i = 0; i < products.length; i++) {

        let singleImg = products[i].imageUrl
        let singleName = products[i].name
        let singleBrand = products[i].brand
        let singleDescription = products[i].description
        let singlePrice = products[i].price
        let singleId = products[i]._id



        cardList.innerHTML +=

            `
            <div class="card col-sm-12 col-md-4 rounded-3 mb-lg-1 mb-5">
            <a href ="./details.html?_id=${singleId}">
                 
                 <div id="card-${singleId}">
                    <div class="card-image py-3">
                        <img src="${singleImg}" class="img-fluid rounded-3">
                    </div>
                     </a>
                    <div class="card-body p-0">
                        <div class="card-name mb-4">
                            <p class="fw-light mb-1"> ${singleName}</p>
                        </div>
                        <div class="card-brand mb-4">
                            <p class="fw-lighter"> ${singleBrand} </p>
                        </div>
                        <div class="card-description">
                            <p class="fw-lighter"> ${singleDescription} </p>
                        </div>
                        <div class="card-price">
                            <p> ${singlePrice} $</p>
                        </div>
                    </div>
                    </div>
                </div>
          
                  `
    }

}







window.onload = () => {
    getData();
}









//     const deleteBtn = document.getElementById(`deleteBtn-${singleId}`);

//     deleteBtn.addEventListener('click', function() {

//         fetch(`https://striveschool-api.herokuapp.com/api/product/${singleId}`, {
//             method: 'DELETE',
//             headers: {
//                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNmEyY2YyNjBjYzAwMTVjYzBlMGIiLCJpYXQiOjE3MjE5ODU1ODAsImV4cCI6MTcyMzE5NTE4MH0.hwKxgGnyE_jLDO7s9CwnN6F3zSur_gdQJr4IZfFyqDA"
//             }
//         })
//             .then((response) => {
//                 console.log(response);
//                 if (response.ok) {
//                     alert('Elemento Cancellato')
//                 }
//                 else {
//                     throw new Error('Errore');
//                 }
//             })
//             .catch((err) => {
//                 console.log('error', err);
//             })


//     })
// }
