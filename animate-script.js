function animateWaypoint(classEl, destroy, visible, posStart) {
    var classElIn = document.getElementsByClassName(classEl), hideEle = classElIn;
    if (visible === 'hidden'){
      $(classElIn).css('opacity','0'); 
    }    
    var waypoint = new Waypoint({
        element: classElIn,
        handler: function (direction) {
            if(direction === 'down'){

              $(classElIn[0]).toggleClass($(classElIn[0]).data('animated'));
              if (visible === 'hidden'){
                $(classElIn[0]).css('opacity','1'); 
              }          
            }else{
            $(classElIn[0]).toggleClass($(classElIn[0]).data('animated')); 
            };
            if(direction === 'up'){

                if (destroy === 'once') {
                    this.destroy();
                };
            };
        },
        offset: posStart
    });
};

//animateWaypoint(class animation:'Your class', 'animated',repeat animation:'null'once animation:'once' ,show or hidden elemen after animation:'show'or'hidden',position start animation:'percent' 'pixels' 'bottom-in-view');
var a = $('.animated'), i, destroy, vis, posStart;
for(i = 0;i < a.length; i++){
  if($(a[i]).data('animated') != null){
         $(a[i]).addClass('elanim'+i);
             var elclas = 'elanim'+i;
             console.log(elclas);
             /*Default Options*/
             destroy = 'once',
             posStart = 'bottom-in-view',
             vis = 'visable';
             /*Predefinion option data*/
             if($(a[i]).data('repeat') != null){
               destroy = $(a[i]).data('repeat');
             }
             if($(a[i]).data('pos-start') != null){
               posStart = $(a[i]).data('pos-start');
             }
             if($(a[i]).data('visible') != null){
               vis = $(a[i]).data('visible');
             }
             animateWaypoint(elclas, destroy, vis, posStart);
  }
}