about = document.getElementById("about");
home = document.getElementById("home");
portfolio = document.getElementById("portfolio");
blog = document.getElementById("blog");
contact = document.getElementById("contact");




function moveHome(){
    about.classList.add("visually-hidden"); 
    home.classList.remove("visually-hidden");
    portfolio.classList.add("visually-hidden");
    blog.classList.add("visually-hidden");
    conctact.classList.add("visually-hidden");   
}

function moveAbout(){
        about.classList.remove("visually-hidden"); 
        home.classList.add("visually-hidden");
        portfolio.classList.add("visually-hidden");
        blog.classList.add("visually-hidden");
        conctact.classList.add("visually-hidden");   
}

function movePortfolio(){
    about.classList.add("visually-hidden"); 
    home.classList.add("visually-hidden");
    portfolio.classList.remove("visually-hidden");
    blog.classList.add("visually-hidden");
    conctact.classList.add("visually-hidden");   
}

function moveBlog(){
    about.classList.add("visually-hidden"); 
    home.classList.add("visually-hidden");
    portfolio.classList.add("visually-hidden");
    blog.classList.remove("visually-hidden");
    conctact.classList.add("visually-hidden");   
}

function moveContact(){
    about.classList.add("visually-hidden"); 
    home.classList.add("visually-hidden");
    portfolio.classList.add("visually-hidden");
    blog.classList.add("visually-hidden");
    conctact.classList.remove("visually-hidden");   
}


function selectNavbarItem(){
    var home = home,
    about = about,
    portfolio = portfolio,
    blog = blog,
    contact = conctact;
    

}
