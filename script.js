$(function () {

    let modal = $('.modal');

    $('.color-block').each(function (index, element) {

        $(element).click(function () {

            let blockPosition = $(element).offset();
            let color = $(element).css('background-color');

            console.log(blockPosition);
            console.log(color);

            $('.modal-container').css({
                visibility: 'visible',
                zIndex: 3
            });

            modal.css({
                display: 'block',
                top: blockPosition.top,
                left: blockPosition.left,
                backgroundColor: color,
            });

            modal.animate({
                width: '400',
                height: '400',
                top: (window.innerHeight - 400) / 2,
                left: (window.innerWidth - 400) / 2,
            }, 1500, 'easeInSine');

            modal.on('click', function () {
                $(this).animate({
                    width: '150',
                    height: '150',
                    top: blockPosition.top,
                    left: blockPosition.left,
                    display: 'none',
                }, 1500, 'easeInSine', function () {
                    $('.modal-container').css({
                        visibility: 'hidden',
                        zIndex: -1,
                    });
                });
                $(modal).off('click');
            });
        });
    })

})
