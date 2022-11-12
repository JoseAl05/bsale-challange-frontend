import Layout from "./Layout.js";

export default class extends Layout {
  constructor(params) {
    super(params);
    this.setTitle("Productos");
    this.getProducts = this.getProducts();
  }

  async getProducts() {
    let products = [];
    const URL = process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/products"
        : `https://bsale-challange-server-production.up.railway.app/api/products`;

    const response = await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        let productsContainer = document.getElementById("products");
        const mappedProducts = data.map((prod, index) => {
          return `<div class="rounded overflow-hidden shadow-xl mx-auto" key=${index}>
                        <div class="px-6 py-4">
                            <img src="${prod.url_image}" class="w-80 h-80 object-contain object-center" loading="lazy"/>
                                <p class="font-bold text-xl mb-2">
                                    ${prod.name}
                                </p>
                            <hr>
                            <div class="flex justify-between items-center mt-10">
                                <p class="text-black font-semibold text-xl">
                                    $ ${prod.price}
                                </p>
                                <i class="fa-solid fa-cart-shopping fa-xl  cursor-pointer bg-[#008ab9] rounded-lg p-4 transition-all duration-300 hover:bg-[#00ace6]"></i>
                            </div>
                        </div>
                    </div>`;
        });

        productsContainer.innerHTML = mappedProducts.join("");
      })
      .catch((error) => {
        console.error(error);
      });
    return products;
  }

  async getHtml() {
    return `
            <h1 class="text-4xl text-black text-center mt-20 font-bold">Lista de Productos</h1>
            <div id="products" class="place-content-center p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"></div>
        `;
  }
}
