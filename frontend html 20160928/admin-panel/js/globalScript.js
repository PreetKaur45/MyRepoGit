


$(document).ready(function() {
    
    // When login button is pressed
    $("#loginbtn").click(function(){
        
        var myEmailAdmin = $('#myemail').val();
        var myPasswordAdmin =  $('#mypassword').val();
        var adminExists = false;
        var crntAdmin = {};
    
  
        //Get all admins
        $.ajax({
            url: "http://192.168.40.50:8080/Testicon-Backend/api/admins/"
             
        }).then(function(data, status, jqxhr) {
            
            
            // Loop through all users and check with entered email and password
            $.each( data, function( intValue, currentAdmin ) {
                
                if(myEmailAdmin == currentAdmin.email && myPasswordAdmin == currentAdmin.password){
                    adminExists = true;
                    crntAdmin = currentAdmin;
                    return false;
                }
          
            });
        
            if(adminExists){                         
            
                var adminName = crntAdmin.firstName + " " + crntAdmin.lastName;                
                

                //save admin name to cookie
                $.cookie('cookieadmin', adminName,  { path: '/' } );
               

                
                //Go to index
                window.location.href = 'index.html';  
                
            }else{
                alert("Wrong password or email!");
            }

        }); // End ajax



    }); // End click event



    // Log out
    $("#logout").click(function(){
        $.removeCookie('cookieAdmin', { path: '/' });

 
    });
});


