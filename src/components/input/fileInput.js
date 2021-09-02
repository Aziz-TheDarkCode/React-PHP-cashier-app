import { useEffect } from "react";
import "./input.css"

export default function Fileinput() 
{
    useEffect(()=>{
        let fileInput = document.getElementById("file-upload-input");
        let fileSelect = document.getElementsByClassName("file-upload-select")[0];
        fileSelect.onclick = function() {
            fileInput.click();
        }
        fileInput.onchange = function() {
            let filename = fileInput.files[0].name;
            let selectName = document.getElementsByClassName("file-select-name")[0];
            selectName.innerText = filename;
        }
     },[])    
    return(
        <div className="mt-3 file-upload">
            <div onclick={()=>{
                document.getElementById("file-upload-input")[0].click()
            }} onChange={()=>{

            }} className="file-upload-select">
		        <div className="file-select-button" >Choisir image</div>
                <div className="file-select-name">Pas  de fichier selectionné...</div> 
                <input type="file" name="file-upload-input" id="file-upload-input"></input>
            </div>
        </div>
    )    
}