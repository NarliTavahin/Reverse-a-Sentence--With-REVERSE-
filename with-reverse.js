function Submit() {  
   var str = document.getElementById("name").value;  
   let array = str.split(' ');
   
   document.getElementById("reverse").value=str;
  
   document.getElementById("reverse").value = array.reverse().join(" "); 

} 
