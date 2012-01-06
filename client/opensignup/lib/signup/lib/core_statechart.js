SC.mixin(SU, {
    //global state chart
    statechart: SC.Statechart.create({
        //log trace
        trace: NO,

        rootState: SC.State.extend({

            initialSubstate: 'readyState',       

            readyState: SC.State.extend({
                enterState: function() {
                    console.log('enter signup');
					SU.msgController.set('success', NO);
					SU.msgController.set('exist', NO);
					SU.msgController.set('error', NO);				
                },
            }),
			
			emailSubmittedState: SC.State.extend({
                enterState: function() {
                    console.log('enter emaiSubmittedState');				
                },
				successAction: function(){
					this.gotoState('successState');
				},
				invalidEmailAction: function(){
					this.gotoState('invalidEmailState');
				},
				alreadySignedUpAction: function(){
					this.gotoState('alreadySigneUpState');
				},
            }),

			successState: SC.State.extend({
                enterState: function() {
                    console.log('enter success state');
					SU.msgController.set('success', YES);
					SU.msgController.set('exist', NO);
					SU.msgController.set('error', NO);
					SU.emailController.set('value', '');
                },
            }),

			alreadySigneUpState: SC.State.extend({
                enterState: function() {
                    console.log('enter alreadySigneUpState');
					SU.msgController.set('success', NO);
					SU.msgController.set('exist', YES);
					SU.msgController.set('error', NO);
					SU.emailController.set('value', '');				
                },
            }),

			invalidEmailState: SC.State.extend({
                enterState: function() {
                    console.log('enter invalidEmailState');
					SU.msgController.set('success', NO);
					SU.msgController.set('exist', NO);
					SU.msgController.set('error', YES);
					SU.emailController.set('value', '');
                },
            }),

			createAccountAction: function(){
				console.log("Enter createAccountAction!!");
				this.gotoState('emailSubmittedState');
				SU.core_signup.register();
				
			},
			
			

        })
    })
});