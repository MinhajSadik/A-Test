const searchItem = () => {
    let searchRecipe = document.getElementById('search-item').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchRecipe}`)
        .then(res => res.json())
        .then(data => displayItemName(data.meals))
}

const displayItemName = names => {
    const recipes = document.getElementById('recipes');
    names.forEach(name => {
        const recipeDiv = document.createElement('div');
        recipeDiv.class = 'search-result container2';
        recipeDiv.innerHTML = `
        <div onclick="recipeDetails('${name.strMeal}')" class="item">
            <img src="${name.strMealThumb}" alt="img">
            <div class="flex-container">
              <h1 class="title">${name.strMeal}</h1>
            </div>
        </div>
        `;
        recipes.appendChild(recipeDiv);
    });
}

const recipeDetails = (mealName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayItemDetails(data.meals))
}

const displayItemDetails = info => {
    console.log(info);
    const details = document.getElementById('recipe-info');
    details.innerHTML = `
        <img src="${info[0].strMealThumb}" alt="">
        <h1 class="title">${info[0].strMeal}</h1>
        <p>Ingredients</p>
        <ul>
            <li>${info[0].strIngredient1}<li>
            <li>${info[0].strIngredient2}<li>
            <li>${info[0].strIngredient3}<li>
            <li>${info[0].strIngredient4}<li>
            <li>${info[0].strIngredient5}<li>
            <li>${info[0].strIngredient6}<li>
            <li>${info[0].strIngredient7}<li>
            <li>${info[0].strIngredient8}<li>
        </ul>
    `
}
