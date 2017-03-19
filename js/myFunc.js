 $(document).ready(function () {
     //Init facny box plug-in for photo viewer in life gallery section
     $(".fancybox").fancybox();
     //Scroll up between sections
     $(scrollUp).click(function () {
         //TODO got position working - fix scroll to and make proper classes
         var closestUp = 999999;
         var iter = 0;
         var corrElement;
         $('.scrollAnchor').each(function () {
             var post = $(this);
             var position = post.position().top - $(window).scrollTop();
             console.log(iter);
             iter++;
             console.log(position);
             if (position <= 0) { //scroll up means we want a negative
                 if (Math.abs(position) < closestUp) { //find the closest element
                     corrElement = $(this);
                     closestUp = Math.abs(position);
                     console.log("scroll to " + position);
                 }
             }
         });
         iter = 0;
         closestUp = 999999;
         $('html, body').animate({
             scrollTop: $(corrElement).offset().top
         }, 2000);
     });
     //Scroll down between sections
     $(scrollDown).click(function () {
         //TODO got position working - fix scroll to and make proper classes
         var closestDown = 999999;
         var iter = 0;
         var corrElement;
         $('.scrollAnchor').each(function () {
             var post = $(this);
             var position = post.position().top - $(window).scrollTop() - 1; //1 pixel offset
             console.log(iter);
             iter++;
             console.log(position);
             if (position > 0) { //scroll down means we want a posotive
                 if (position < closestDown) { //find the closest element
                     corrElement = $(this);
                     closestDown = position;
                     console.log("scroll to " + position);
                 }
             }
         });
         iter = 0;
         closestUp = 999999;
         $('html, body').animate({
             scrollTop: $(corrElement).offset().top
         }, 2000);
     });


     //Place popups 
     $(function () {
         $('.grow').balloon();
         $('.baloonPopUp').balloon();
     });


 });