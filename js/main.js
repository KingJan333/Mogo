$(function () {
    $('[data-collapse]').on('click', function(event){
        event.preventDefault();

        var $this = $(this),
            blockId =$this.data('collapse');
            
            $this.toggleClass("active");
            
    });

    $('[data-slider]').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}); 