(function(global){
    var loginModel,
        app = global.app = global.app || {};
    
    loginModel = kendo.data.ObservableObject.extend({
        
        luname:'',
        lpwd:'',
        
        login:function(){
            var that = this,
                username = that.get("luname"),
                password = that.get("lpwd");
            
            if(username === "")
            {
                navigator.notification.alert("Please enter Username",function(){},"Notification","Ok");
            }
            else if(password === "")
            {
                navigator.notification.alert("Please enter password",function(){},"Notification","Ok");
            }
            else
            {
                this.slideTransition("left");
            }
        },
        
        clickme:function(a){
          alert("khjk");
            console.log(a.target.innerText);
        },
        slideLeft:function(e){
            this.slideTransition("left");
            console.log(e);
        },
        slideRight:function(){
            this.slideTransition("right");
        },
        slideUp:function(){
            this.slideTransition("up");
        },
        slideDown:function(){
            this.slideTransition("down");
        },
        flipLeft:function(){
            this.flipTransition("right");
        },
        slideTransition:function(direction){
            var options = {
                "direction"        : direction, // 'left|right|up|down', default 'left' (which is like 'next')
                "duration"         :  500, // in milliseconds (ms), default 400
                "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                "androiddelay"     :  150, // same as above but for Android, default 70
                "winphonedelay"    :  250,  // same as above but for Windows Phone, default 200,
                "fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS only)
                "fixedPixelsBottom":   60  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS only)
            };
            window.plugins.nativepagetransitions.slide(
                options,
                function (msg) {alert(msg);}, // called when the animation has finished
                function (msg) {alert("error: " + msg)} // called in case you pass in weird values
                );
        }
    });
    app.login = {
        viewModel : new loginModel()
    };
}(window));