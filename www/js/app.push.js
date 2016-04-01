var push =
{
    PushNotification: null,
    register: function(push_sender_id)
    {
        alert(1);
    
    
        try {
        alert(2);
    
                    setTimeout(function()
                    {
                           var gcm = window.PushNotification.init({
                android: {
                    senderID: push_sender_id
                },
                ios: {
                    alert: "true",
                    badge: "true",
                    sound: "true"
                },
                windows: {}
            });
                    }, 5);
         
        alert(3);
    

            gcm.on('registration', push.registered);
            gcm.on('notification', push.notification);
            gcm.on('error',  push.error);
        } catch ( e ) 
        {
            console.log(e);
            alert(e);
        }
    },
    registered: function(data)
    {
        // data.registrationId
        alert(data.registrationId);
        console.log(data);
        alert(data.registrationId);
        return true;
    },
    notification: function(data)
    {
        app.showPopup(data.title);
        console.log(data);
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
    },
    error: function(e)
    {
        alert(e.message);
        console.log(e);
        if(e.message == 'MISSING_INSTANCEID_SERVICE')
        {
            app.showPopup(text.translate('PLEASE_INSTALL_PLAYSTORE'));
        }
        // e.message
    }
};