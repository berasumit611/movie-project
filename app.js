// -------------------------arrow
const arrows=document.querySelectorAll('.arrow');

const movie_lists=document.querySelectorAll('.movie-list');
console.log("hi");

arrows.forEach((arrow,i)=>{

    

    const item_Number=movie_lists[i].querySelectorAll("img").length;
    let click_counter=0;

    arrow.addEventListener('click',()=>{
        const ratio=Math.floor(window.innerHeight/270);

        click_counter++;
        if(item_Number-(4+click_counter) + (4 - ratio)>=0){
            movie_lists[i].style.transform=`translateX(${movie_lists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        }
        else{
            movie_lists[i].style.transform="translateX(0)";
            click_counter=0;
        }

    });

    // console.log(Math.floor(window.innerWidth/270));
   
});

//----Toggle
const ball=document.querySelector('.toggle-ball');
const items=document.querySelectorAll('.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle');

ball.addEventListener('click',()=>{
    items.forEach((item)=>{
        item.classList.toggle("active");
    });
    ball.classList.toggle('active');
});
