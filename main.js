const container = document.querySelector(".container")

//Fetch API
fetch("https://dummyjson.com/products")
  .then((x) => x.json())
  .then((x) => renderAllItem(x.products));

function renderAllItem(Item) {
    Item.forEach((product) => {
    const cardProduct = document.createElement("div")
            
        //Create elements
            const priceSpan =document.createElement("span")
            const titleSpan =document.createElement("span")
            const imgSection=document.createElement("img")
            const letterIcon = document.createElement("i")
            const loveIcon = document.createElement("i")
            const Call = document.createElement("span")

           
            
        //Class Name
            cardProduct.className="cardProduct"
            priceSpan.className="price"
            titleSpan.className="title"
            letterIcon.className = "fa-solid fa-envelope"
            loveIcon.className ="fa-solid fa-heart"
            Call.className="call"
            
            
        //Set
            letterIcon.setAttribute("id", "icons")
            letterIcon.style.color="#bdbdbd"
            letterIcon.style.fontSize="20px"
            loveIcon.setAttribute("id", "icons")
            loveIcon.style.color="#bdbdbd"
            loveIcon.style.fontSize="20px"

        
            const image = product.images[1];
            const title=product.title
            const price = product.price
    
           
            titleSpan.innerText=` ${title}`
            priceSpan.innerText=`${price} AZN`
            Call.innerText = "Zəng edin"

            imgSection.src = image;
    
            cardProduct.appendChild(titleSpan)
            cardProduct.appendChild(priceSpan)
            cardProduct.appendChild(imgSection)
            cardProduct.appendChild(letterIcon)
            cardProduct.appendChild(loveIcon)
            cardProduct.appendChild(Call)
            
            
            container.appendChild(cardProduct)
  })
}
