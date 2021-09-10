

export  default function Category({icon,title,state,recipes,setRecipes ,filteredRecipes ,setFilteredRecipes}) 
{
    function chooseCategory(e) { 
        let filter = recipes.filter(recipe=>recipe.categoryName===title)
        setFilteredRecipes(filter)
        console.log(filter)
        document.querySelectorAll(".category").forEach(link => {
            link.classList.remove("active-category")
        });
        e.currentTarget.classList.add("active-category")   
    }
   
    return(
        <div onClick={(e)=>chooseCategory(e)} className='category rounded-box type-2 d-flex justify-content-center align-items-center flex-column'>
            <p className="medium bordered">{icon}</p>
            <p className="mt-2">{title}</p>
        </div>
    )    
}