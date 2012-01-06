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
                    SU.msgController.set('success', YES);
					SU.msgController.set('exist', NO);
					SU.msgController.set('error', NO);
					SU.emailController.set('value', '');
					
                } else if (data.content == "_InUse"){
					SU.msgController.set('success', NO);
					SU.msgController.set('exist', YES);
					SU.msgController.set('error', NO);
					SU.emailController.set('value', '');
					
				}else {
                    SU.msgController.set('success', NO);
					SU.msgController.set('exist', NO);
					SU.msgController.set('error', YES);
					SU.emailController.set('value', '');
					
                }
            },
            async: YES
        });
    }

    

});




$(document).ready(function() {
    SU.statechart.initStatechart();
});