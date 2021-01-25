import initialPageLoad from './initialloadpage'
import contactDetails from './contactdetails'
import restaurantMenu from './restaurantMenu'

initialPageLoad();

document.body.querySelector('#home-page').addEventListener('click', ()=>{
    document.querySelector('#content').innerHTML ='';
    return initialPageLoad()});

document.body.querySelector('#contact-page').addEventListener('click', ()=>{
    document.querySelector('#content').innerHTML ='';
    return contactDetails()});

document.body.querySelector('#menu-page').addEventListener('click', ()=>{
    document.querySelector('#content').innerHTML =''; 
    return restaurantMenu()});

