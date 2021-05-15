  function upDate(imag){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    x=document.getElementById("image");
 y=imag.src; console.log(y);    x.style.backgroundImage='url('+y+')';;
    x.innerHTML=imag.alt ;
    
  
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    x=document.getElementById("image");
    x.style.backgroundImage="";
    x.innerHTML="Hover over an image below to display here."
		
	}