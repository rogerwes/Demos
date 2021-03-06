Bridge.assembly("PixiJsDemo", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,PixiJsDemo];
    $m($n[1].App, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void}]}; });
    $m($n[1].Demo, function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"createBunny","t":8,"pi":[{"n":"x","pt":$n[0].Double,"ps":0},{"n":"y","pt":$n[0].Double,"ps":1}],"sn":"createBunny","rt":$n[0].Void,"p":[$n[0].Double,$n[0].Double]},{"a":1,"n":"onDragEnd","t":8,"pi":[{"n":"ev","pt":Bridge.virtualc("PIXI.interaction.InteractionEvent"),"ps":0}],"sn":"onDragEnd","rt":$n[0].Void,"p":[Bridge.virtualc("PIXI.interaction.InteractionEvent")]},{"a":1,"n":"onDragMove","t":8,"pi":[{"n":"ev","pt":Bridge.virtualc("PIXI.interaction.InteractionEvent"),"ps":0}],"sn":"onDragMove","rt":$n[0].Void,"p":[Bridge.virtualc("PIXI.interaction.InteractionEvent")]},{"a":1,"n":"onDragStart","t":8,"pi":[{"n":"ev","pt":Bridge.virtualc("PIXI.interaction.InteractionEvent"),"ps":0}],"sn":"onDragStart","rt":$n[0].Void,"p":[Bridge.virtualc("PIXI.interaction.InteractionEvent")]},{"a":1,"n":"app","t":4,"rt":PIXI.Application,"sn":"app","ro":true},{"a":1,"n":"texture","t":4,"rt":PIXI.Texture,"sn":"texture","ro":true}]}; });
});
