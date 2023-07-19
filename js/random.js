const loadUsers = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

const displayUsers = user => {
    console.log(user);

    const containerDiv = document.getElementById('container');
    containerDiv.innerHTML = `
                 <img src="${user.results[0].picture.thumbnail}">
                <h1>Random User Id</h1>
                <h2>Name:${user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last}</h2>
                <h3>Contact Number: ${user.results[0].cell} </h3>
                <h3>Gender: ${user.results[0].gender} </h3>
                <h4>Location:${user.results[0].location
            .city}</h4>
         `;



    // const genderTag = document.getElementById('gender')
    // genderTag.innerHTML = user.results[0].gender;


    // // const name =user.results[0].name.title +' '+  user.results[0].name.first +' '+user.results[0].name.last; 

    // // document.getElementById('name').innerHTML=name;
    // // console.log(user.results[0].name)


    // const nameTag = document.getElementById('name');
    // nameTag.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;

    // const LocationTag = document.getElementById('location');
    // LocationTag.innerHTML = user.results[0].location
    //     .city;


    // const PictureTag = document.getElementById('image');
    // PictureTag.innerHTML = user.results[0].picture.thumbnail;

    // const container= document.getElementById('container');
    //  container.innerHTML=`


    //  `

    // console.log(user.results[0].picture.thumbnail);


    // 


}


loadUsers();