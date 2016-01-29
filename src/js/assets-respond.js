$( document ).ready( () => {
    $.isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test( navigator.userAgent.toLowerCase() );

    if( $.isMobile ) {
        $( "video" ).remove();
    }
})
