import { Circle, Trash } from "phosphor-react";

export function Task() {
    
    return (
        <div className="flex justify-between items-start py-4 px-4">
            <span className="cursor-pointer text-pBlue-400 hover:text-pBlue-800"><Circle size={24} /></span>
            <span className="grow px-3">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
            <span className="cursor-pointer text-pGray-300 hover:text-pRed-300"><Trash size={24} /></span>
        </div>
    )
}