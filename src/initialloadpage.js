function initialPageLoad(){
    const bodyJs = document.querySelector('#content');
    const header = document.createElement('div');
    const imageRestaurant = document.createElement('section');
    
    bodyJs.appendChild(header);
    bodyJs.appendChild(imageRestaurant);
    header.innerHTML = "<h1>Welcome to my restaurant</h1>";
    imageRestaurant.innerHTML = " <img class = 'restaurant-image' src ='https://dyn1.heritagestatic.com/lf?set=path%5B2%2F1%2F9%2F2%2F5%2F21925175%5D&call=url%5Bfile%3Aproduct.chain%5D' alt ='smurfs restaurant logo' > "
}

export default initialPageLoad