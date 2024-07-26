const url = "https://striveschool-api.herokuapp.com/api/product/"
const singleDetails = document.getElementById('singleDetails')



const addressBarParameters = new URLSearchParams(location.search)
const productID = addressBarParameters.get('_id')
console.log('productID', productID)


function loadDetail() {
    fetch(url + productID, {

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
        .then((singleProduct) => {
            console.log(singleProduct)
            displaySingle(singleProduct);
        })
        .catch((err) => {
            console.log('error', err);
        })

}

function displaySingle(singleProduct) {
    const singleImg = singleProduct.imageUrl;
    const singleName = singleProduct.name;
    const singleBrand = singleProduct.brand;
    const singleDesc = singleProduct.description;
    const singlePrice = singleProduct.price;

    singleDetails.innerHTML =
        `
                <div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                        <img src="${singleImg}" class="img-fluid rounded-3">
                </div>
                <div class="col-sm-12 col-md-6 col-lg-8 d-flex flex-column justify-content-around mb-3 mt-sm-3">
                    <div class="product-name mt-3 mb-3 mb-sm-3">
                        <div>
                            <p class="m-0 fw-lighter">product name:</p>
                        </div>
                        <div>
                            <p class="fs-2 m-0">${singleName}</p>
                        </div>
                    </div>
                    <div class="brand-name mb-3 mb-sm-3">
                        <div>
                            <p class="m-0 fw-lighter">brand name:</p>
                        </div>
                        <div>
                            <p class="fs-2 m-0">${singleBrand}</p>
                        </div>
                    </div>
                    <div class="description-product mb-3 mb-sm-3">
                        <div>
                            <p class="m-0 fw-lighter">description:</p>
                        </div>
                        <div>
                            <p class="fs-2 m-0">${singleDesc}</p>
                        </div>
                    </div>
                    <div class="price-product mb-3">
                        <div>
                            <p class="m-0 fw-lighter">price:</p>
                        </div>
                        <div>
                            <p class="fs-2 m-0">${singlePrice} $</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-around">

                    <button id="editBtn" class="btn btn-secondary w-25 me-sm-0 me-md-0 me-4 "> Edit </button> 

                    <button id="deleteBtn" onclick="deleteProd()" class="btn btn-secondary w-25"> Delete </button>

             </div>
                </div>

    `
}


function deleteProd() {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${productID}`, {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNmEyY2YyNjBjYzAwMTVjYzBlMGIiLCJpYXQiOjE3MjE5ODU1ODAsImV4cCI6MTcyMzE5NTE4MH0.hwKxgGnyE_jLDO7s9CwnN6F3zSur_gdQJr4IZfFyqDA"
        }
    })
        .then((response) => {
            if (response.ok) {
                alert('Prodotto Eliminato')
                location.assign('./home.html')

            } else {
                throw new Error('Probleman')
            }
        })
        .catch((err) => {
            console.log('error', err);
        })
}

function editProd() {

}





window.onload = () => {
    loadDetail();
}






