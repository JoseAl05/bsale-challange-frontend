import Layout from "./Layout.js";

export default class extends Layout {
  constructor(params) {
    super(params);
    this.setTitle("Categorias");
    this.getCategories = this.getCategories();
  }

  capitalizeAndPluralizeWord(word) {
    const hasMoreWords = word.trim().indexOf(" ") !== -1 ? true : false;

    if (hasMoreWords) {
      const arrayOfWords = word.split(" ");
      let capitalizedFirstLetterOfWords = "";
      let words = [];
      let restOfWords = "";
      for (let i = 0; i < arrayOfWords.length; i++) {
        capitalizedFirstLetterOfWords = arrayOfWords[i].charAt(0).toUpperCase();
        words[i] =
          capitalizedFirstLetterOfWords + arrayOfWords[i].slice(1) + "s";
      }
      return words.toString().replace(",", " ");
    }
    const capitalizedFirstLetterOfOneWord = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);

    return capitalizedFirstLetterOfOneWord + restOfWord + "s";
  }

  async getCategories() {
    let categories = [];
    const URL =process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/categories"
        : `https://bsale-challange-server-production.up.railway.app/api/categories`;

    const response = await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        let categoriesContainer = document.getElementById("categories");
        const mappedCategories = data
          .map((cat, index) => {
            return `<div class="w-full mx-auto" key=${index}>
                        <a href="/categorias/${this.capitalizeAndPluralizeWord(
                          cat.name
                        )}/${
              cat.id
            }" type="button" class="block text-center text-white mt-5 bg-[#006482] p-1 text-lg rounded-lg font-semibold w-full transition-all ease-in-out duration-300 hover:scale-110" data-link>${this.capitalizeAndPluralizeWord(
              cat.name
            )}</a>
                    </div>`;
          })
          .join("");
        categoriesContainer.innerHTML = mappedCategories;
      })
      .catch((error) => {
        console.error(error);
      });

    return categories;
  }

  async getHtml() {
    return `
            <h1 class="text-4xl text-black text-center mt-52 font-bold">Lista de Categorias</h1>
            <div id="categories" class="place-content-center p-10 mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-14"></div>
        `;
  }
}
