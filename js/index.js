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
    console.log(response.data);
  }
};
