import { elements } from "./base";

// private function
const renderRecipe = (recipe) => {
  const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>`;

  // ul рүүгээ нэмнэ
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};

export const clearSearchQuery = () => {
  elements.searchInput.value = "";
};
export const clearSearchResult = () => {
  elements.searchResultList.innerHTML = "";
  elements.pageButtons.innerHTML = "";
};
export const getInput = () => elements.searchInput.value;
export const renderRecipes = (recipes, currentPage = 1, resPerPage = 10) => {
  // Хайлтын үр дүнг хуудаслаж үзүүлэх
  // currentPage = 2, start = 10, end = 20
  const start = (currentPage - 1) * resPerPage;
  const end = currentPage * resPerPage;

  recipes.slice(start, end).forEach((el) => renderRecipe(el));

  // Хуудаслалтын товчуудыг гаргаж ирэх
  const totalPages = Math.ceil(recipes.length / resPerPage);
  renderButtons(currentPage, totalPages);
};

// type ===> "prev", "next"
const createButton = (
  page,
  type,
  direction
) => `<button class="btn-inline results__btn--${type}" data-goto=${page}>
  <svg class="search__icon">
      <use href="img/icons.svg#icon-triangle-${direction}"></use>
  </svg>
  <span>Хуудас ${page}</span>
  </button>`;

const renderButtons = (currentPage, totalPages) => {
  let buttonHtml;

  if (currentPage === 1 && totalPages > 1) {
    // 1-р хуудас дээр бна, 2-р хуудас гэдэг товчийг гарга
    buttonHtml = createButton(2, "next", "right");
  } else if (currentPage < totalPages) {
    // Өмнөх болон дараачийн хуудас руу шилжих товчуудыг үзүүл
    buttonHtml = createButton(currentPage - 1, "prev", "left");
    buttonHtml += createButton(currentPage + 1, "next", "right");
  } else if (currentPage === totalPages) {
    // Хамгийн сүүлийн хуудас дээр бна. Өмнөх рүү шилжүүлэх товчийг л үзүүлнэ
    buttonHtml = createButton(currentPage - 1, "prev", "left");
  }

  elements.pageButtons.insertAdjacentHTML("afterbegin", buttonHtml);
};
