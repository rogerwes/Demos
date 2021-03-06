Bridge.assembly("KnockoutDemo", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,KnockoutDemo];
    $m($n[1].App, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void}]}; });
    $m($n[1].ViewModel, function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].String],"pi":[{"n":"first","pt":$n[0].String,"ps":0},{"n":"last","pt":$n[0].String,"ps":1}],"sn":"ctor"},{"a":2,"n":"firstName","t":16,"rt":Bridge.virtualc("KnockoutObservable"),"g":{"a":2,"n":"get_firstName","t":8,"rt":Bridge.virtualc("KnockoutObservable"),"fg":"firstName"},"s":{"a":2,"n":"set_firstName","t":8,"p":[Bridge.virtualc("KnockoutObservable")],"rt":$n[0].Void,"fs":"firstName"},"fn":"firstName"},{"a":2,"n":"fullName","t":16,"rt":ComputedString,"g":{"a":2,"n":"get_fullName","t":8,"rt":ComputedString,"fg":"fullName"},"s":{"a":2,"n":"set_fullName","t":8,"p":[ComputedString],"rt":$n[0].Void,"fs":"fullName"},"fn":"fullName"},{"a":2,"n":"lastName","t":16,"rt":Bridge.virtualc("KnockoutObservable"),"g":{"a":2,"n":"get_lastName","t":8,"rt":Bridge.virtualc("KnockoutObservable"),"fg":"lastName"},"s":{"a":2,"n":"set_lastName","t":8,"p":[Bridge.virtualc("KnockoutObservable")],"rt":$n[0].Void,"fs":"lastName"},"fn":"lastName"}]}; });
});
