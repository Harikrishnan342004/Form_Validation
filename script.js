function validateForm()
    {
        // let x = document.forms["myForm"]["fname"].value;
        // if( x == "" )
        // {
        //     alert("Name must be filled out");
        //     return false;
        // }

        let org_phone = document.forms["myForm"]["phone"].value;
        let alt_phone = document.forms["myForm"]["falt_phone"].value;

        if( org_phone == alt_phone)
        {
            alert("Give different phone number");
            return false
             
        }


        let org_email = document.forms["myForm"]["f_email"].value;
        let alt_email = document.forms["myForm"]["falt_email"].value;

        if( org_email == alt_email)
        {
            alert("Give different mail id");
            return false
             
        }

    } 