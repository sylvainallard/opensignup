console.log("admin running...");



SU.core_signup = SC.Object.create({
   
	register: function() {
		console.log("ENTER register!!!");
        this.set('globalError', '');
		
        var postData = {
            email: SU.emailController.get('value'),
            
        };
        // Call server
        $.ajax({
            type: 'POST',
            url: SU.get('serverHost') + 'api_opensignup/public/signup',
            data: JSON.stringify(postData),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            context: this,
            error: function() {
                this.set('globalError', '_serverError'.loc());
            },
            success: function(data) {
                console.log(data);
                if (data.content == "_Success") {
                    SU.statechart.sendAction("successAction");		
                } else if (data.content == "_InUse"){
					SU.statechart.sendAction("alreadySignedUpAction");
				}else {
                    SU.statechart.sendAction("invalidEmailAction");			
                }
            },
            async: YES
        });
    }

    

});




$(document).ready(function() {
    SU.statechart.initStatechart();
});