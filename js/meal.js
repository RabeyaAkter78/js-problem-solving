const loadMeals = (searchtext) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals[0]))
        .catch(error=>{
            console.log(error)
        })
        ;
}
// async ,await:

const loadMealDetails2=async(idMeal)=>{
const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${idMeal}`;
// handle error using async ,await: 
try{
    const res=await fetch(url);
    const data=await res.json();
    displayMeals(data.meals[0]);
}
catch{
console.log(error);

}

}




const displayMeals = (meals) => {
    // console.log(meals);
    const containerDiv = document.getElementById('container-div');
    containerDiv.innerText = '';
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');

        mealDiv.innerHTML = `
                        <div class="card h-100">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                        <!-- Button trigger modal -->
                        <button onclick="loadMealDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                        Details
                        </button>
                        </div>
                        </div>

                `;

        containerDiv.appendChild(mealDiv);
    });
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeals(searchText);
}
// modals details option:

const loadMealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showMealsDetails(data.meals[0]));
    console.log(idMeal);

}

const showMealsDetails = meal => {
document.getElementById('mealDetailsLabel').innerText=meal.strMeal;
const MealsDetails=document.getElementById('mealDetailsBody');
MealsDetails.innerHTML=`
<p>Category:${meal.strCategory}</p>
<p>Area:${meal.strArea}</p>

`



}


loadMeals('fish');