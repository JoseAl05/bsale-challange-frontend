import Layout from "./Layout.js";

export default class extends Layout {
    constructor(params) {
        super(params);
        this.categoryId = params.id;
        this.categoryName = params.name;
        this.setTitle(this.categoryName.toUpperCase());
        this.getProductsByCategory = this.getProductsByCategory();
    }
    async getProductsByCategory(){
        console.log(this.categoryId)
        let productsByCategory = [];
        const response = await fetch(`http://localhost:3000/api/productsByCategory/${this.categoryId}`).then(res => res.json()).then(data => {
            let producstByCategoryContainer = document.getElementById("producstByCategory");
            const mappedProducstByCategory = data.map((prodByCat,index) => {
                return `<div class="rounded overflow-hidden shadow-xl w-80 h-full mx-auto" key=${index}>
                <div class="px-6 py-4">
                    <img src=${prodByCat.url_image} loading="lazy" class="w-80 h-80 object-contain object-center"/>
                        <p class="font-bold text-xl mb-2">
                            ${prodByCat.name}
                        </p>
                    <hr>
                    <p class="text-end text-gray-400 text-lg">
                        $ ${prodByCat.price}
                    </p>
                </div>
            </div>`
            }).join('');
            producstByCategoryContainer.innerHTML = mappedProducstByCategory;
        }).catch(error => {
            console.error(error);
        })
        return productsByCategory;
      }
    async getHtml() {
        return `
            <h1 class="text-4xl text-black text-center mt-20 font-bold uppercase">${this.categoryName}</h1>
            <div id="producstByCategory" class="place-content-center p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"></div>
        `;
    }
}