function setRouter(){
       switch(window.location.pathname){
        case "/":
        case "/index.html":
        case "/signup.html":
            if(localStorage.getItem("access_token")){
                window.location.pathname = "/startpage.html";
                
            }
            break;

         case "/":
         case "/index.html":
         case "/signup.html":
         case "/startpage.html":
         case "/numericalability.html":
         case "/numericalability2.html":
         case "/numericalability3.html": 
         case "/numericalability4.html": 
         case "/numericalability5.html": 
         case "/numericalability6.html": 
         case "/numericalability7.html": 
         case "/numericalability8.html": 
         case "/numericalability9.html":
         case "/analyticalability.html": 
         case "/analyticalability2.html": 
         case "/analyticalability3.html": 
         case "/analyticalability4.html": 
         case "/analyticalability5.html": 
         case "/analyticalability6.html": 
         case "/analyticalability7.html": 
         case "/analyticalability8.html": 
         case "/analyticalability9.html": 
         case "/analyticalability10.html": 
         case "/verbalability.html": 
         case "/verbalability2.html": 
         case "/verbalability3.html": 
         case "/verbalability4.html": 
         case "/verbalability5.html": 
         case "/verbalability6.html": 
         case "/verbalability7.html": 
         case "/verbalability8.html": 
         case "/verbalability9.html": 
         case "/verbalability10.html": 
         case "/geninfo.html": 
         case "/geninfo2.html": 
         case "/geninfo3.html": 
         case "/geninfo4.html": 
         case "/geninfo5.html": 
         case "/geninfo6.html": 
         case "/geninfo7.html": 
         case "/geninfo8.html": 
         case "/geninfo9.html": 
         case "/geninfo10.html": 
        


    
            if(localStorage.getItem("access_token")){
                 window.location.pathname = "/index.html";
                        
                }
                break;
        case "wlapaniexist.html":
            if(localStorage.getItem(role) != "Admin"){
                window.location.pathname = "/startpage.html";
                       
               }
               break;
            default:
            break;
       }

}
export {setRouter};