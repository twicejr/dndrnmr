var push =
{
    PushNotification: null,
    register: function(push_sender_id)
    {
        push.PushNotification = PushNotification.init({
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
        
        push.PushNotification.on('registration', push.registered);
        push.PushNotification.on('notification', push.notification);
        push.PushNotification.on('error',  push.error);
    },
    registered: function(data)
    {
        // data.registrationId
        console.log(data);
    },
    notification: function(data)
    {
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
        console.log(e);
        if(e.message == 'MISSING_INSTANCEID_SERVICE')
        {
            app.showPopup(text.translate('PLEASE_INSTALL_PLAYSTORE'));
        }
        // e.message
    }
};