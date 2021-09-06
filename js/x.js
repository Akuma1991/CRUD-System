

// var nameInp = document.getElementById('productName');
// var categoryInp = document.getElementById('productCategory');
// var priceInp = document.getElementById('productPrice');
// var descInp = document.getElementById('productDescription');
// var deleteBtn = document.getElementById('deletBtn');

// var productContainer = [];

// var tbodyElement = document.getElementById('showProduct');
// var tbodyElementCopy = '';

// function addProduct() {
//     var product = {
//         productName: nameInp.value,
//         productCategory: categoryInp.value,
//         productPrice: priceInp.value,
//         productDecscription: descInp.value
//     };
//     productContainer.push(product);
//     showProduct();
//     clearProduct();
// }

// function showProduct() {
//     var i = productContainer.length - 1;


//     tbodyElementCopy += `<tr> 
//             <td>  ${i}  </td> 
//             <td>  ${productContainer[i].productName}  </td> 
//             <td>  ${productContainer[i].productCategory}  </td> 
//             <td>  ${productContainer[i].productPrice}  </td> 
//             <td>  ${productContainer[i].productDecscription}  </td> 
//             <td> 
//             <button class="btn btn-secondary"> 
//             <i class="fas fa-edit"></i> 

//             </button> 
//             </td> 
//              <td> 
//             <button class="btn btn-danger" >  

//             <i class="fas fa-trash"></i> 
//             </button> 
//             </td> 

//             </tr>`;



//     tbodyElement.innerHTML = tbodyElementCopy;

// }


// function clearProduct() {
//     nameInp.value = '';
//     categoryInp.value = '';
//     priceInp.value = '';
//     descInp.value = '';
// }












function serachProduct() {
    var tbodyElementCopy = '';

    for (var i = 0; i < productContainer.length; i++) {



        if (productContainer[i].productName.toLowerCase().includes(searcInput.value.toLowerCase()) == true ) {
            var s = '';
            for (var k = 0; k < productContainer[i].productName.length; k++) {
                if (productContainer[i].productName.charAt(k) == searcInput.value.charAt(k).toLowerCase() || 
                productContainer[i].productName.charAt(k) == searcInput.value.charAt(k).toUpperCase())  {
                    // console.log("<span>" + productContainer[i].productName.charAt(k) + "</span>");
                    s += "<span class='bg-warning text-danger '>" + productContainer[i].productName.charAt(k) + "</span>";
                }
                else {
                    s += productContainer[i].productName.charAt(k);
                    // console.log(productContainer[i].productName.charAt(k));
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
