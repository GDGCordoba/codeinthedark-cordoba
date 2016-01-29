$( window ).load( () => {
    setTimeout( () => {
        $( "html" ).addClass( "page-loaded" );
        //$( "html, body" ).animate( { scrollTop: 0 }, 0 );

        setTimeout( () => {
            $( "#gdgcordoba" ).css( "display", "none" );
            $( "#codeinthedark" ).css( "display", "block" );

            setTimeout( () => {
                $( "html" ).addClass( "scroll-enabled" );
            }, 1);//2000 );
        }, 1);//5000 );
    }, 1);//1000 );
});
