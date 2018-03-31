const smoothScroll = (() => {

    var html, body;

    //getting all anchor elements
    var links = document.querySelectorAll('.navigation__link');
   
    //getting html
    html = document.documentElement;
   
    //getting body
    body = document.body;
   
      links.forEach((link) => {
   
          link.addEventListener('click', triggerScroll)
   
          function triggerScroll() {
              //getting current scroll position
              var scrollTop = Math.round(body.scrollTop || html.scrollTop);
              if (link.hash !== "") {
                  //preventing default anchor click behavior
                  event.preventDefault();
          
                  //getting element with id found in hash
                  var hashElement = document.getElementById(link.hash.substring(1));
                  var hashElementTop = 0;
                  var obj = hashElement;
                  while (obj.offsetParent) {
                    hashElementTop += obj.offsetTop;
                    obj = obj.offsetParent;
                  }

                  //getting element's position
                  hashElementTop = Math.round(hashElementTop);
          
                  scroll(scrollTop, hashElementTop, link.hash);
              }
          }
      })


      function scroll(from, to, hash) {
        var timeInterval = 1; //in ms
        var prevScrollTop;
        var increment = to > from ? 20 : -20;
      
        var scrollByPixel = setInterval(function() {
          //getting current scroll position
          var scrollTop = Math.round(body.scrollTop || html.scrollTop);
      
          if (
            prevScrollTop == scrollTop ||
            (to > from && scrollTop >= to) ||
            (to < from && scrollTop <= to)
          ) {
            clearInterval(scrollByPixel);
            //Add hash to the url after scrolling
            window.location.hash = hash;
          } else {
            body.scrollTop += increment;
            html.scrollTop += increment;
      
            prevScrollTop = scrollTop;
          }
        }, timeInterval);
      }


})()