// ***************Start-add entity to paragraph of side-bar************************
let decodeA = decodeURIComponent("%C3%82")
$("#decodeA").append(decodeA) 
// ***************End-add entity to paragraph of side-bar************************


// *******************Start-Side-bar-animation*************************************
$(".switch-two").hide();
$("#open-close").click(function(){
    let sideWidth = $(".side-content").outerWidth();
    if($("#side-bar").css("left") == "0px"){
        
        $("#side-bar").animate({left:`-${sideWidth}`} , 500);
        $(".switch-one").hide();
        $(".switch-two").show();
        $("#side-bar ul li").hide(300);
    }
    else{
        $("#side-bar").animate({left:`0px`} , 500)
        $(".switch-one").show();
        $(".switch-two").hide();
        $("#side-bar ul li").slideUp(5000).show(1000);
    }
})
// *******************End-Side-bar-animation*************************************



// *******************Start-main-meals*************************************
async function getData(){
    
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
    let males = await response.json();
    console.log(males);

    let cartona = ''    
    for(let i = 0; i< males.meals.length; i++){
        cartona+=`<div class="col-lg-3 px-5">
                    <img class="w-100" src="${males.meals[i].strMealThumb}" alt="">
                </div>`
        
        console.log(cartona);
    }

    $("#main-meals").append(`${cartona}`);
    
}
getData();
// *******************End-main-meals*************************************




