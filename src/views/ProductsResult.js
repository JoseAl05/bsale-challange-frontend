import Layout from "./Layout.js";

export default class extends Layout {
  constructor(params) {
    super(params);
    this.query = params.query
    this.setTitle(query);
  }



  async getHtml() {
    return `
            <h1 class="text-4xl text-black text-center mt-20 font-bold">Lista de Productos</h1>
            <div id="products" class="place-content-center p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"></div>
        `;
  }
}
