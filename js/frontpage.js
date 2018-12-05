<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="jquery.easing.1.3.js"></script>
<script type="text/javascript">
    $(function() {
        $('ul.nav a').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href=to eat')).offset().top
            }, 1500,'easeInOutExpo');
            event.preventDefault();
        });
    });
