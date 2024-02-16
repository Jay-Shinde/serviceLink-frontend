import React from "react";

const TagCompo = (props) => {
    return (
        <>
            <span className=" bg-[#F4F6F8] py-2 px-3 rounded-md text-[10px] uppercase text-[#7B8EC8] ">{props.tag}</span>
        </>
    )
}

export default TagCompo;