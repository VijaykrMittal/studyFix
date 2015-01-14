(function(global){
    var signupModel,
        app = global.app = global.app || {};
    
    signupModel = kendo.data.ObservableObject.extend({
        
        show:function(){
          
            $("#sempname").css("background-color","#CCC").attr("readonly","true");
            $("#scolname").css("background-color","#CCC").attr("readonly","true");
            
            var data = [{name:"Employee",id:1},{name:"Student",id:2}];
            $("#professionList").kendoDropDownList({
                dataSource:data,
                dataTextField:"name",
                dataValueField:"id",
                optionLabel:"Select your Profession",
                select:function(e)
                {
                    console.log(e);
                    alert("kjkhkjh");
                }
            });
            
            var gender = [{name:"Male",id:1},{name:"Female",id:2}];
            $("#genderList").kendoDropDownList({
                dataSource:gender,
                dataTextField:"name",
                dataValueField:"id",
                optionLabel:"Gender",
                select:function(){
                    alert("khjkhh");
                }
            });
        }
    });
    app.signup = {
        viewModel: new signupModel()
    }
}(window));