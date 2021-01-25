function restaurantMenu(){
    const bodyJs = document.querySelector('#content');
    const header = document.createElement('div');
    const menuRestaurant = document.createElement('section');
    
    bodyJs.appendChild(header);
    bodyJs.appendChild(menuRestaurant);
    header.innerHTML = "<h1>Menu</h1>";
    menuRestaurant.innerHTML = `<ul>
    <li class ='menu-li'> Smurfs' pie : 5 beries <img class ='menu' src = 'https://lh3.googleusercontent.com/proxy/nlsxsIYvUQ-ZE0yw_BvyvfuDOz-V---8E6xXUQEahmBfF3II_avSpWvDChetFJ8SY3_L_njlW42jh2Fh0nsogt27l0RX317voEPx-ZNix26YhZ3DooQ' alt = 'smurf pie'> </li>
    <li class ='menu-li'> Smurfs' soup : 7 beries <img class ='menu' src = 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7600/9781760061951.jpg' alt = 'smurf pie'> </li>
    ` 
}

export default restaurantMenu