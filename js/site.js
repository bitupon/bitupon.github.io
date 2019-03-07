// Write your Javascript code.

function setPageLayout(){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width > 1023){
        var cont = $("#secsWorkWrapper");
        var contHeight = cont.height();
        var conPos = cont.position().top;

        var secWork = $("#secsWork");
        var secsHeight = secWork.height();

        var secJourney = $("#secJourney");
        var secJourneyPos = secJourney.position().top;
        

        var childs = secWork.find(".pf-section");
        
        var posLeft = 0;
        
        childs.map(function (key,item) {
            posLeft = (key * $(item).width());
            $(item).css({ left: posLeft + 'px', height: contHeight+'px' });
        })

        contHeight = (childs.length * $(childs[0]).width());
        cont.css({ height: contHeight + 'px' });

        $(window).scroll(function (e) {
            //Header Animation
            if ($(e.target).scrollTop() > 300) {
                $(".pf-header").addClass("pf-header--slideup");
            } else {
                $(".pf-header").removeClass("pf-header--slideup");
            }

            if (($(e.target).scrollTop() > conPos) && ($(e.target).scrollTop() < ((contHeight + conPos) ))) {                    
                secWork.css({
                    position: 'fixed',
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    background: '#eaeaea'                      
                });

                $(".pf-sections__title").css({
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right:'0'
                });
                secWork.scrollLeft($(e.target).scrollTop() - conPos);
                
            }
            else {
                secWork.css({
                    position: 'relative',
                    background: 'transparent',
                });
                $(".pf-sections__title").css({
                    position: 'relative'
                    
                });
                secWork.scrollLeft(0);
            }

            if ($(e.target).scrollTop() > (contHeight + conPos)) {
                $("#secJourneyTitle").css({
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0'

                });

                $(".pf-footer").addClass("pf-footer--slideup");
            } else {
                $("#secJourneyTitle").css({
                    position: 'relative'
                });

                $(".pf-footer").removeClass("pf-footer--slideup");
            }
        });
    }else{
        window.location.reload();
    }
};

$(document).ready(function () {
        
        $(window).resize(function() {
            setPageLayout();
       });

        // Smooth Scrolling
        $('#navBar a').click(function(e){
            var tg = $(e.currentTarget).attr('href');
            $("html, body").animate({ scrollTop: $(tg).position().top }, 700);
            return false;
        });
})
