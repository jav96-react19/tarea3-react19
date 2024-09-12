import {useState} from "react";
const useButtonClick = () => 
{
    const [ButtonClick, setButtonClick] = useState({
        IsClick: false,
        Times: 0
    });

    return {ButtonClick, setButtonClick}
}
export default useButtonClick;