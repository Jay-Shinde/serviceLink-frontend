import React, { useState } from "react"; 
import { TagsInput } from "react-tag-input-component"; 

export default function TagInput(){ 
const [selected, setSelected] = useState( [""] ); 
return ( 
	<div> 
	<h1>Keyword Input</h1> 
	<div> 
	<h1>Add Keywords</h1>  
	<TagsInput 
		value={selected} 
		onChange={setSelected} 
		name="keywords"
		placeHolder="keywords"
	/> 
	<em>Enter Keywords</em> 
	</div> 
	</div> 
); 
};      
