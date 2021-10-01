export default function deleteRow() 
{
    document.querySelectorAll(".deleteIcon").forEach(
        el=>el.addEventListener('click',(e)=>{
            console.log(e.currentTarget)
        })
    )
}
