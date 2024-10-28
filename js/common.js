document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.top-menu').addEventListener('mouseenter', function () {
        document.querySelector('header').classList.add('hover');
    });

    document.querySelector('header').addEventListener('mouseleave', function () {
        document.querySelector('header').classList.remove('hover');
    });
    document.querySelector('.icon-bar').addEventListener("click", function () {
        document.querySelector('#header').classList.toggle('all-menu');
        document.querySelector('body').classList.toggle('overflow');
    });

    setTimeout(function() {
        document.querySelector("body").classList.remove('intro');
      }, 6000);

const partnerTabItems = document.querySelectorAll('.partner-tab li'); 
    partnerTabItems.forEach(function(item) {
        item.addEventListener('click', function() {
            partnerTabItems.forEach(function(el) {
                el.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    const topButton = document.querySelector('.top-button');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) { 
        topButton.classList.add('on')
      } else {
        topButton.classList.remove('on')
      }
    });
    
    topButton.addEventListener('click', (event) => {
      event.preventDefault(); 
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });


});

const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
            return
        }
        entry.target.classList.add('show')
    });
});
const infoEls = document.querySelectorAll('.ani-bottom-top')
infoEls.forEach(function (el) {
    io.observe(el)
});
const infoLeftRightEls = document.querySelectorAll('.ani-left-right');
infoLeftRightEls.forEach(function (el) {
    io.observe(el);
});
const fadeInEls = document.querySelectorAll('.ani-fade-in');
fadeInEls.forEach(function (el) {
    io.observe(el);
});