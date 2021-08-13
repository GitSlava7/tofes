

var pName,pPrice,pSelect,pImage;
var products = [];
var divStart = '<div>';
var divEnd = '</div>';
var h1Start = '<h1>';
var h1End = '</h1>';
var h2Start = '<h2>';
var h2End = '</h2>';
var h3Start = '<h3>';
var h3End = '</h3>';
var imgStart = '<img src="';
var imgEnd = '">';
var br = '<br>';
var tableStart = '<table>';
var tableEnd = '</table>';
var tableRowStart = '<tr>';
var tableRowEnd = '</tr>';
var tableDataStart = '<td>';
var tableDataEnd = '</td>';
var btnStart = '<button id="del_btn">Delete product';
var btnEnd = '</button>';



class Product {
   constructor(pName,pPrice,pSelect,pImage) {
       this.pPrice = pPrice;
       this.pName = pName;
       this.pSelect = pSelect;
       this.pImage = pImage;
   } 
}

function readData() {
     pName = document.getElementById("pName").value;
     pPrice = document.getElementById("pPrice").value;
     pSelect = document.getElementById("pSelect").value;
     pImage = document.getElementById("pImage").value;
}

function validateData() {
    if(pName == "" || pPrice == "" || pSelect == "" || pImage == "") {
        alert("please fill all fields!");
        return false;
    } else {
        return true;
    }
}

function saveData() {
    readData();
    if(validateData() == true);
     {
        let product1 = new Product(pName,pPrice,pSelect,pImage);
        products.push(product1);
        localStorage.setItem("products", JSON.stringify(products));
     showData();
    }
}

function showData() {
    let productsCart = "";
    for(let i = 0; i< products.length; i++) {

        let productsOneByOne = tableStart + tableRowStart + tableDataStart + "Name" + br + products[i].pName + tableDataEnd + tableDataStart + "Price" + br + products[i].pPrice + tableDataEnd + tableDataStart + "Selection" + br + products[i].pSelect + tableDataEnd + tableDataStart + "Image" + br + imgStart + products[i].pImage + imgEnd + tableDataEnd + tableDataStart + btnStart + btnEnd + tableDataEnd  + tableRowEnd + tableEnd;

        productsCart += productsOneByOne; 
    }
    
    document.getElementById("products_container").innerHTML = productsCart;
    document.getElementById("ProductForm").reset();
        
}



//bonus -> does not work((

//1.delete from memory
document.getElementById("del_btn").addEventListener("click",DeleteProduct());



function DeleteProduct() {
 for (let i = 0; i < products.length; i++) {
      products[i].pop();
 }
  }

//2.delete from screen

function deleteFromScreen() {

    var productsRow = tableRowStart + tableDataStart + "Name" + br + products[i].pName + tableDataEnd + tableDataStart + "Price" + br + products[i].pPrice + tableDataEnd + tableDataStart + "Selection" + br + products[i].pSelect + tableDataEnd + tableDataStart + "Image" + br + imgStart + products[i].pImage + imgEnd + tableDataEnd + tableDataStart + btnStart + btnEnd + tableDataEnd  + tableRowEnd;

    productsRow.remove();
}

document.getElementById("del_btn").addEventListener("click",deleteFromScreen());

// class ProductsTable{
//     constructor(productsRow) {
//         this.productsRow = productsRow;
//     }
// }

// let ProductsTable1 = new ProductsTable(productsRow);

// btnStart + 'Delete Product' + btnEnd 

// tableStart + tableRowStart + tableDataStart + "Name" + tableDataEnd + tableDataStart + "Price" + tableDataEnd + tableDataStart + "Selection" + tableDataEnd + tableDataStart + "Image" + tableDataEnd + br +



