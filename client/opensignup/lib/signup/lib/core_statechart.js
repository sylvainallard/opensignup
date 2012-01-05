SC.mixin(SU, {
    //global state chart
    statechart: SC.Statechart.create({
        //log trace
        trace: YES,

        rootState: SC.State.extend({

            initialSubstate: 'startupState',       

            startupState: SC.State.extend({

                enterState: function() {
                    console.log('enter signup');				
                },
            }),			

			createAccountAction: function(){
				console.log("Enter createAccountAction!!")
				SU.core_signup.register();
			},
			
			

        })
    })
});