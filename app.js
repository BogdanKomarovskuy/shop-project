let productsCountEl = document.getElementById("products-count");

let addToCartBtns = document.querySelectorAll(".add-card");

for(let i=0; i < addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener("click", function(){
     productsCountEl.textContent = +productsCountEl.textContent + 1;


    })
}

let moreDetailsbtn = document.querySelectorAll(".but-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetailsbtn.forEach((item) => {
item.addEventListener("click", openModal);
});

btnClose.addEventListener("click", closeModal)

function openModal(){
    modal.classList.add("show")
    modal.classList.remove("hide")
}

function closeModal(){
    modal.classList.add("hide")
    modal.classList.remove("show") 
    
}

modal.addEventListener("click", function(e){
    if(e.target === modal){
        closeModal();
    }
})

let checklike = document.querySelectorAll(".like");
console.log(checklike);

checklike.forEach((like)=> {
    like.addEventListener("click", function(){
        like.classList.add("clickLike")
    })
})







