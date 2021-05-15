/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
		if (same.checked){
      x=document.getElementById("shippingName")
      document.getElementById("billingName").value=x.value
      y=document.getElementById("shippingZip")
      document.getElementById("billingZip").value=y.value
		}
		else{ 
			document.getElementById("billingName").value=""
      document.getElementById("billingZip").value=""
      
		}
	}