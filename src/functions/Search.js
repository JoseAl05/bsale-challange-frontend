window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#myForm");

  form.addEventListener("submit", submitHandler);
});

function submitHandler(event) {
  event.preventDefault();
  let searchValue = document.getElementById("search").value;
  search(searchValue);
}

async function search(query) {
  const titleOfSearchedValues = document.getElementById("searchedValue");
  titleOfSearchedValues.innerHTML = `<h1 class="text-3xl font-semibold mt-20">Resultados de: ${query}</h1>`;

  let productSearched = [];
  let productSearchedContaienr = document.getElementById("productSearched");

  const URL = process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api/productsBySearch/${query}`
      : `https://bsale-challange-server-production.up.railway.app/api/productsBySearch/${query}`;

  const response = await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const productList = document.getElementById("productSearched");
      if (data.length === 0) {
        productList.classList.remove(
          "place-content-center",
          "p-10",
          "grid",
          "grid-cols-1",
          "sm:grid-cols-1",
          "md:grid-cols-3",
          "lg:grid-cols-3",
          "xl:grid-cols-3",
          "gap-5"
        );
        productList.classList.add("text-center", "mt-20");
        productSearchedContaienr.innerHTML = `<p class="text-xl font-semibold">Producto no encontrado...</p>`;
        return;
      } else {
        productList.classList.remove("text-center", "mt-20");
        productList.classList.add(
          "place-content-center",
          "p-10",
          "grid",
          "grid-cols-1",
          "sm:grid-cols-1",
          "md:grid-cols-3",
          "lg:grid-cols-3",
          "xl:grid-cols-3",
          "gap-5"
        );
      }

      const mappedProductSearched = data.map((prodSearch, index) => {
        return `
            <div class="rounded overflow-hidden shadow-xl mx-auto" key=${index}>
                <div class="px-6 py-4">
                    <img src="${prodSearch.url_image}" class="w-80 h-80 object-contain object-center" loading="lazy"/>
                        <p class="font-bold text-xl mb-2">
                            ${prodSearch.name}
                        </p>
                    <hr>
                    <div class="flex justify-between items-center mt-10">
                      <p class="text-black font-semibold text-xl">
                        $ ${prodSearch.price}
                      </p>
                      <i class="fa-solid fa-cart-shopping fa-xl cursor-pointer bg-[#008ab9] rounded-lg p-4 transition-all duration-300 hover:bg-[#00ace6]"></i>
                    </div>
                </div>
            </div>
        `;
      });

      productSearchedContaienr.innerHTML = mappedProductSearched.join("");
    })
    .catch((error) => console.log(error));

  const formAfterSubmit = document.getElementById("myForm");
  formAfterSubmit.reset();

  return productSearched;
}
