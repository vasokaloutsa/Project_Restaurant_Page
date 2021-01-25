function contactDetails(){
    const bodyJs = document.querySelector('#content');
    const header = document.createElement('div');
    const contactInformation = document.createElement('section');
    
    bodyJs.appendChild(header);
    bodyJs.appendChild(contactInformation);
    header.innerHTML = "<h1>Contact info</h1>";
    contactInformation.innerHTML = "<p class = 'paragraphs-styles'> You can find us here: <img class = 'contact-image' src =' https://dyn1.heritagestatic.com/lf?set=path%5B1%2F3%2F6%2F1%2F4%2F13614564%5D&call=url%5Bfile%3Aproduct.chain%5D' alt ='restaurants location'></p> "
}

export default contactDetails