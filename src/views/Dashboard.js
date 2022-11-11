import Layout from "./Layout.js";

export default class extends Layout {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }
  async getHtml() {
    console.log(location.href);
    return (`
            <h1 class="text-4xl text-black text-center mt-36 font-bold">Tienda Online</h1>
            <h2 class="text-3xl text-black text-center mt-28 font-semibold">Busque un producto.</h2>
            <form id="myForm" class="mx-auto w-1/2 mt-10" method="get">

                <div class="relative">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#080055] focus:border-[#080055]" placeholder="Ingrese el producto que desea comprar" required>
                  <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-[#008ab9] hover:bg-[#080055] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition-all ease-in-out duration-200">Buscar</button>
              </div>
            </form>
            <div class="flex justify-around items-center mt-40">
              <div class="flex flex-col">
                <h1 class="text-xl font-medium">Si no conoce nuestro catalogo, haga click aqui!.</h1>
                <a href="/productos" class="text-white mt-5 bg-[#006482] p-1 text-lg text-center rounded-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105">Catalogo de Productos.</a>
              </div>
              <div class="flex flex-col pl-10">
                <h1 class="text-xl font-medium">Si prefiere buscar por categorias, haga click aqui!.</h1>
                <a href="/categorias" class="text-white mt-5 bg-[#006482] p-1 text-lg text-center rounded-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105">Categorias de nuestros productos.</a>
              </div>
            </div>
            <h1 id="searchedValue" class="text-center text-3xl font-semibold"></h1>
            <div id="productSearched" class="place-content-center p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"></div>
        `);
  }

}

