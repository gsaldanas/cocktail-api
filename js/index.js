import "mvp.css";
import "../css/style.scss";
import axios from "axios";
document.querySelector("form").onsubmit = async (e) => {
  e.preventDefault();
  const value = document.querySelector("form input[type=text]").value;
  console.log(value);
  if (value.length >= 2) {
    const response = await axios(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`
    );
    if (response.data) {
      document.querySelector("section").innerHTML = response.data.drinks
        .map(
          (drink) => `
        <aside>
            <h2>${drink.strDrink}.</h2>
            <img src="${drink.strDrinkThumb}" alt="" />
        </aside>
        `
        )
        .join("");
    }
  }
};
