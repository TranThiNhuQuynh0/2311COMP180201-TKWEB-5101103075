$(document).ready(function() {
    const HALLOWEEN_COLOR = '#ff6600'; 
    
    const audio = document.getElementById("background-audio");
    const toggleButton = $('#toggle-audio');



    if (audio && toggleButton.length) {
        audio.load(); 

        audio.play().then(function() {
            toggleButton.html('<i class="fas fa-volume-up"></i> Tắt Nhạc');
        }).catch(function(error) {
            console.warn("Autoplay bị chặn, người dùng cần tương tác.");
        });
        
        toggleButton.click(function() {
            if (audio.paused || audio.readyState < 3) {
                audio.play().then(function() {
                     $(this).html('<i class="fas fa-volume-up"></i> Tắt Nhạc');
                }).catch(function(error) {
                    console.error("Lỗi phát nhạc sau khi click.", error);
                });
            } else {
                audio.pause();
                $(this).html('<i class="fas fa-volume-off"></i> Bật Nhạc');
            }
        });
    }


    if ($('.product-item').length) {
        $('.product-details').hide(); 
        $('.btn-details').html('Xem Chi Tiết <i class="fas fa-caret-down"></i>');
        $('.btn-details').attr('data-action', 'show');

        $('.btn-details').click(function() {
            var $this = $(this);
            var detailsDiv = $this.siblings('.product-details');
            
            detailsDiv.slideToggle(300, function() {
                if (detailsDiv.is(':visible')) {
                    $this.html('Thu Gọn <i class="fas fa-caret-up"></i>');
                    $this.attr('data-action', 'hide');
                } else {
                    $this.html('Xem Chi Tiết <i class="fas fa-caret-down"></i>');
                    $this.attr('data-action', 'show');
                }
            });
        });

        $('.product-item').hover(
            function() { 
                $(this).css('border-color', 'white'); 
            },
            function() { 
                $(this).css('border-color', HALLOWEEN_COLOR); 
            }
        );
        
        $('.btn-buy').click(function() {
            var itemName = $(this).closest('.product-item').find('h3').text();
            alert(`Đã thêm "${itemName}" vào giỏ hàng! (Chức năng đang được phát triển)`);
        });
    }

    $('.main-form').submit(function(e) {
        e.preventDefault(); 
        
        var formType = $(this).hasClass('contact-form') ? 'Liên Hệ' : 'Đăng Ký';
        var nameField = $(this).find('#name').val();
        var name = nameField ? nameField : 'Linh Hồn Bí Ẩn';
        
        alert(`Cảm ơn bạn, ${name}! Lời nhắn ${formType} đã được Hội Đồng Ma Quái tiếp nhận thành công. Chúng tôi sẽ liên lạc với bạn (trong giấc mơ) sớm nhất có thể.`);
        
        this.reset();
    });
});