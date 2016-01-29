$( document ).ready( () => {
    /*let scrollMovement = ( e ) => {
        let movement = "none";

        console.log( e );

        e = e || window.event;

        if( e.type == "wheel" ) {
            return resolveScroll( detectMouseScroll( e ), e );
        }
        else if( e.type == "touch" ) {
            return resolveScroll( detectTouchScroll( e ), e );
        }
        else if( e.type == "keydown" ) {
            return resolveScroll( detectKeyScroll( e ), e );
        }
        else {
            return true;
        }
    };

    let detectKeyScroll = ( e ) => {
        return { 38: "up", 40: "down", 32: "down" }[ e.keyCode ] || "none";
    };

    let detectMouseScroll = ( e ) => {
        let wheelDelta = 0;

        if( e.wheelDelta ) {
            wheelDelta = e.wheelDelta;
        }
        else if( e.originalEvent.detail ) {
            wheelDelta = e.originalEvent.detail * -40;
        }
        else if( e.originalEvent && e.originalEvent.wheelDelta ) {
            wheelDelta = e.originalEvent.wheelDelta;
        }

        if( wheelDelta > 0 ) {
            return "up";
        }
        else if( wheelDelta < 0 ) {
            return "down";
        }
        else {
            return "none";
        }
    };

    let detectTouchScroll = ( e ) => {
    };

    let resolveScroll = ( movement, e ) => {
        if( movement == "none"  ) {
            return true;
        }
        else {
            e.preventDefault();

            if( movement == "up" ) {

            }
            else if( movement == "down" ) {

            }

            return false;
        }
    };*/

    /*let preventScroll = ( e ) => {
        e.preventDefault();
    }

    if( window.addEventListener ) window.addEventListener( 'DOMMouseScroll', preventScroll, false );
    window.onwheel = preventScroll;
    window.onmousewheel = document.onmousewheel = preventScroll;
    window.ontouchmove = preventScroll;
    document.onkeydown = preventScroll;*/
});
