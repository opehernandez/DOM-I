const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



let nav = document.querySelectorAll("nav a")              //select all navs into a node list
for(let i=0; i < nav.length; i++) {                       //loop through all items in node list
  let index = "nav-item-" + (i + 1);                      // giving each item an index based on i
  nav[i].textContent = siteContent["nav"][index]          // setting each nav item in node list equal to sideContent data passing the index
}



let h1Content = document.querySelector(".cta-text h1")
h1Content.textContent = siteContent["cta"]["h1"]

let buttonContent = document.querySelector(".cta-text button")
buttonContent.textContent = siteContent["cta"]["button"]

let imgContent = document.querySelector("#cta-img")
imgContent.src = siteContent["cta"]["img-src"]


let topH4 = document.querySelectorAll(".top-content .text-content h4")
topH4[0].textContent = siteContent["main-content"]["features-h4"]
topH4[1].textContent = siteContent["main-content"]["about-h4"]
let topP = document.querySelectorAll(".top-content .text-content p")
topP[0].textContent = siteContent["main-content"]["features-content"]
topP[1].textContent = siteContent["main-content"]["about-content"]


let bottomH4 = document.querySelectorAll(".bottom-content .text-content h4")
bottomH4[0].textContent = siteContent["main-content"]["services-h4"]
bottomH4[1].textContent = siteContent["main-content"]["product-h4"]
bottomH4[2].textContent = siteContent["main-content"]["vision-h4"]
let bottomP = document.querySelectorAll(".bottom-content .text-content p")
bottomP[0].textContent = siteContent["main-content"]["services-content"]
bottomP[1].textContent = siteContent["main-content"]["product-content"]
bottomP[2].textContent = siteContent["main-content"]["vision-content"]


let contImg = document.querySelector(".main-content img").src = siteContent["main-content"]["middle-img-src"]

let contactH4 = document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"]

let contactP = document.querySelectorAll(".contact p")
contactP[0].textContent = siteContent["contact"]["address"]
contactP[1].textContent = siteContent["contact"]["phone"]
contactP[2].textContent = siteContent["contact"]["email"]

let footerP = document.querySelector("footer p")
footerP.textContent = siteContent["footer"]["copyright"]


let newDiv = document.createElement("div")
let test = document.querySelector(".main-content")
test.appendChild(newDiv)