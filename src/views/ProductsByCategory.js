import Layout from "./Layout.js";

export default class extends Layout {
  constructor(params) {
    super(params);
    this.categoryId = params.id;
    this.categoryName = params.name;
    this.setTitle(this.categoryName);
    this.getProductsByCategory = this.getProductsByCategory();
  }
  async getProductsByCategory() {
    let productsByCategory = [];
    const URL =process.env.NODE_ENV === "development"
        ? `http://localhost:3000/api/productsByCategory/${this.categoryId}`
        : `https://bsale-challange-server-production.up.railway.app/api/productsByCategory/${this.categoryId}`;

    const response = await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        let producstByCategoryContainer =
          document.getElementById("producstByCategory");
        const mappedProducstByCategory = data.map((prodByCat, index) => {
          return `<div class="rounded overflow-hidden shadow-xl mx-auto" key=${index}>
                <div class="px-6 py-4">
                    <img src="${prodByCat.url_image}" class="w-80 h-80 object-contain object-center" loading="lazy"/>
                        <p class="font-bold text-xl mb-2">
                            ${prodByCat.name}
                        </p>
                    <hr>
                    <div class="flex justify-between items-center mt-10">
                        <p class="text-black font-semibold text-xl">
                            $ ${prodByCat.price}
                        </p>
                        <i class="fa-solid fa-cart-shopping fa-xl cursor-pointer bg-[#008ab9] rounded-lg p-4 transition-all duration-300 hover:bg-[#00ace6]"></i>
                    </div>
                </div>
            </div>`;
        });
        producstByCategoryContainer.innerHTML =
          mappedProducstByCategory.join("");
      })
      .catch((error) => {
        console.error(error);
      });
    return productsByCategory;
  }
  async getHtml() {
    return `
            <h1 class="text-4xl text-black text-center mt-20 font-bold uppercase">${decodeURI(
              this.categoryName
            )}</h1>
            <div id="producstByCategory" class="place-content-center p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"></div>
        `;
  }
}
