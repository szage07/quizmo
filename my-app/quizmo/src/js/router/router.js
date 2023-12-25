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