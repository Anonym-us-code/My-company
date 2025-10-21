$(document).ready(
    function(){
        $('#openBtn').click(
            function(e){
                $('.mobileMenu').toggleClass('top');
                var thisBtn = $('#openBtn');
                if(thisBtn.text() == 'CLOSE') {
                    thisBtn.text('MENU');
                } else {
                    thisBtn.text('CLOSE')
                }
            }
        );

        var body = $('body');
        var width = parseInt(body.css('width'));

        body.resize(function (e) {
            if(width<1351) {
                alert('Your device is too small. You will see a blank page. Upgrade your device size.');
            body.css('background', 'white');
            body.html('');
            }
        })
        console.log(width);
        if(width < 1351) {
            alert('Your device is too small. You will see a blank page. Upgrade your device size.');
            body.css('background', 'white');
            body.html('');
        }
    }
)