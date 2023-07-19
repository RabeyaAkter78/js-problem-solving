loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    // clear search field
    phoneContainer.textContent = '';
    // display 10 phones only:
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }

    // display no phone found:
    const noPhoneFound = document.getElementById('no-found-massage');
    if (phones.length === 0) {
        noPhoneFound.classList.remove('d-none');
    }
    else {
        noPhoneFound.classList.add('d-none');
    }
    
    // display all phones:
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <h5 class="card-title">${phone.brand}</h5>
                
                <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, a.</p>

                <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show details</button>
                
      
        </div>
      </div>
        
        `;
        //   <a onclick="loadPhoneDetails${phone.slug}" href="#" class="btn btn-primary">Show details</a>
        phoneContainer.appendChild(phoneDiv);
    });
    // console.log(phones)
    // stop spinner loader:
    toggleSpinner(false);
}
const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

// handle search button click:
document.getElementById('btn-primary').addEventListener('click', function () {
    // start Loader:
    processSearch(10);
    // toggleSpinner(true);
    // const searchField = document.getElementById('search-field');
    // const searchText = searchField.value;
    // loadPhones(searchText);

});

// search input field Enter key Handler:
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10);
    }
});

const toggleSpinner = isLoading => {
    const loadingSection = document.getElementById('loader');
    if (isLoading) {
        loadingSection.classList.remove('d-none')
    }
    else {
        loadingSection.classList.add('d-none');
    }

};
// Not the best way to show All:
document.getElementById('show-all-btn').addEventListener('click', function () {
    processSearch();
})
const loadPhoneDetails = async (id) => {
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
};
const displayPhoneDetails = phone => {
    console.log(phone);
    const modalTitle = document.getElementById('phoneDetailModalLabel');
     modalTitle.innerText= phone.name;
     const phoneDetails=document.getElementById('phone-details');
     phoneDetails.innerHTML=`
     <img src="${phone.image
     }" alt="">
     <p>Realese Date:${phone.releaseDate}</p>
     <p>Bluetooth:${phone.others ? phone.others.Bluetooth:"No result found"}</p>
     <p>Storage:${phone.mainFeatures
        ? phone.mainFeatures
        .storage:"No result found"}</p>
       
     `

// const div=document.createElement('div');
// div.classList.add('modal-body');
// div.innerHTML=`
// <h3>${phone.name}</h3>

// `
// loadPhoneDetails.appendChild(div);


};

loadPhones('Apple');