import Layout from "./Layout.js";

export default class extends Layout {
  constructor(params) {
    super(params);
    this.query = params.query
    this.setTitle(query);
  }

//   async getProducts(){
//     let products = [];
//     const response = await fetch('http://localhost:3000/api/products').then(res => res.json()).then(data => {
//         console.log(data);
//         let productsContainer = document.getElementById("products");
//         const mappedProducts = data.map((prod,index) => {
//             console.log(prod);
//             return `<div class="rounded overflow-hidden shadow-xl w-80 h-full mx-auto" key=${index}>
//                         <div class="px-6 py-4">
//                             <img src=${prod.url_image} loading="lazy" class="w-80 h-80 object-contain object-center"/>
//                                 <p class="font-bold text-xl mb-2">
//                                     ${prod.name}
//                                 </p>
//                             <hr>
//                             <p class="text-end text-gray-400 text-lg">
//                                 $ ${prod.price}
//                             </p>
//                         </div>
//                     </div>`
//         }).join('');
//         productsContainer.innerHTML = mappedProducts;
//     }).catch(error => {
//         console.error(error);
//     })
//     return products;
//   }



  async getHtml() {
    return `
            <h1 class="text-4xl text-black text-center mt-20 font-bold">Lista de Productos</h1>
            <div id="products" class="place-content-center p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"></div>
        `;
  }
}
