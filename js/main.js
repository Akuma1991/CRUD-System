

var nameInp = document.getElementById('productName');
var categoryInp = document.getElementById('productCategory');
var priceInp = document.getElementById('productPrice');
var descInp = document.getElementById('productDescription');
var tbodyElement = document.getElementById('showProduct');
var searcInput = document.getElementById('searchInput');
var addProductBtn = document.getElementById('addProductBtn');

if (localStorage.getItem('allProduct') == null) {
    var productContainer = []; // JSON -- array of objects --js object notations

}
else {
    var productContainer = JSON.parse(localStorage.getItem('allProduct'));

}


showProduct();

function addProduct() {
    var product = {
        productName: nameInp.value,
        productCategory: categoryInp.value,
        productPrice: priceInp.value,
        productDecscription: descInp.value
    };
    productContainer.push(product);

    // var x = JSON.stringify(productContainer); // array after converted to string

    localStorage.setItem('allProduct', JSON.stringify(productContainer));

    showProduct();
    clearProduct();
}

function showProduct() {
    var productContainerLength = productContainer.length;
    var tbodyElementCopy = '';
    for (var i = 0; i < productContainerLength; i++) {


        tbodyElementCopy += `<tr> 
            <td>  ${i}  </td> 
            <td>  ${productContainer[i].productName}  </td> 
            <td>  ${productContainer[i].productCategory}  </td> 
            <td>  ${productContainer[i].productPrice}  </td> 
            <td>  ${productContainer[i].productDecscription}  </td> 
            <td> 
            <button class="btn btn-secondary" onclick="updateProduct(${i})"> 
            <i class="fas fa-edit"></i> 

            </button> 
            </td> 
             <td> 
            <button class="btn btn-danger"  onclick="getIndex(${i})" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">  

            <i class="fas fa-trash"></i> 
            </button> 
            </td> 

            </tr>`;

    }

    tbodyElement.innerHTML = tbodyElementCopy;
}


function clearProduct() {
    nameInp.value = '';
    categoryInp.value = '';
    priceInp.value = '';
    descInp.value = '';
}



function serachProduct() {
    var tbodyElementCopy = '';

    for (var i = 0; i < productContainer.length; i++) {



        if (productContainer[i].productName.toLowerCase().includes(searcInput.value.toLowerCase()) == true ) {
            var s = '';
            for (var k = 0; k < productContainer[i].productName.length; k++) {
                // if (productContainer[i].productName.charAt(k) == searcInput.value.toLowerCase() || 
                // productContainer[i].productName.charAt(k) == searcInput.value.toUpperCase())  {
                //     console.log("<span>" + productContainer[i].productName.charAt(k) + "</span>");
                //     s += "<span class='bg-warning text-danger '>" + productContainer[i].productName.charAt(k) + "</span>";
                // }
                // else if (productContainer[i].productName.charAt(k) == searcInput.value.charAt(k).toLowerCase() || 
                // productContainer[i].productName.charAt(k) == searcInput.value.charAt(k).toUpperCase())  {
                //     // console.log("<span>" + productContainer[i].productName.charAt(k) + "</span>");
                //     s += "<span class='bg-warning text-danger '>" + productContainer[i].productName.charAt(k) + "</span>";
                // }
                 if(searcInput.value.toLowerCase().includes(productContainer[i].productName.charAt(k).toLowerCase()))
                
                {
                    s += "<span class='bg-warning text-danger '>" + productContainer[i].productName.charAt(k) + "</span>";
                }
                else {
                    s += productContainer[i].productName.charAt(k);
                    console.log(productContainer[i].productName.charAt(k));
                }
            }
            // console.log(s);
            tbodyElementCopy += `<tr> 
            <td>  ${i}  </td> 
            <td>  ${s}  </td> 
            <td>  ${productContainer[i].productCategory}  </td> 
            <td>  ${productContainer[i].productPrice}  </td> 
            <td>  ${productContainer[i].productDecscription}  </td> 
            <td> 
            <button class="btn btn-secondary" onclick="updateProduct(${i})"> 
            <i class="fas fa-edit"></i> 

            </button> 
            </td> 
             <td> 
            <button class="btn btn-danger"  onclick="getIndex(${i})" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">  

            <i class="fas fa-trash"></i> 
            </button> 
            </td> 

            </tr>`;
        }



    }
    tbodyElement.innerHTML = tbodyElementCopy;


}




function getIndex(i) {
    var yesBtn = document.getElementById('yes');
    yesBtn.setAttribute("onclick", `deleteProduct(${i})`);
}

function deleteProduct(i) {


    productContainer.splice(i, 1);
    localStorage.setItem('allProduct', JSON.stringify(productContainer));
    showProduct();

}

function updateProduct(i) {
    addProductBtn.innerHTML = `update product`;
    addProductBtn.removeAttribute("onclick");
    addProductBtn.setAttribute("onclick", `editProduct(${i})`);
    nameInp.value = productContainer[i].productName;
    categoryInp.value = productContainer[i].productCategory;
    priceInp.value = productContainer[i].productPrice;
    descInp.value = productContainer[i].productDecscription;
}

function editProduct(i) {
    var product = {
        productName: nameInp.value,
        productCategory: categoryInp.value,
        productPrice: priceInp.value,
        productDecscription: descInp.value
    };
    productContainer[i] = product;
    localStorage.setItem('allProduct', JSON.stringify(productContainer));
    showProduct();
    clearProduct();
    allReset();
}

function allReset() {

    addProductBtn.innerHTML = `add product`;
    addProductBtn.removeAttribute("onclick");
    addProductBtn.setAttribute("onclick", `addProduct()`);
}




// for (var i = 0; i <productContainer[i].productName.length; i++) {
//     console.log(productContainer[i].productName.charAt(i));
//   }