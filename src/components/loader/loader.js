import './loader.css'

export default function Loader() 
{
    return(
        <div className="text-center">
            <div class="loading">
                <svg viewBox="0 0 50 50" class="spinner">
                <circle class="ring" cx="25" cy="25" r="22.5" />
                <circle class="line" cx="25" cy="25" r="22.5" />
                </svg>
            </div>
            <p className="text-primary">Chargement...</p>
        </div>
    )    
}