"use strict";define("forum/reset_code",function(){var r={};r.init=function(){var r=ajaxify.data.code;var a=$("#reset");var e=$("#password");var s=$("#repeat");a.on("click",function(){if(e.val().length<ajaxify.data.minimumPasswordLength){app.alertError("[[reset_password:password_too_short]]")}else if(e.val()!==s.val()){app.alertError("[[reset_password:passwords_do_not_match]]")}else{a.prop("disabled",true).html('<i class="fa fa-spin fa-refresh"></i> Changing Password');socket.emit("user.reset.commit",{code:r,password:e.val()},function(r){if(r){ajaxify.refresh();return app.alertError(r.message)}window.location.href=config.relative_path+"/login"})}return false})};return r});
//# sourceMappingURL=public/src/client/reset_code.js.map