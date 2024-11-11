// tv360Detail.js
app.controller("tvDetailController", function($scope, $routeParams) {
    const tvPackages = [
        {
            imgSrc: 'img/tv360-std.png',
            title: 'TV360 Standard',
            price: 30000,
            unit_price: ' vnđ/tháng',
            channels: 200,
        },
        {
            imgSrc: 'img/tv360-stdbox.png',
            title: 'TV360 Standard Box',
            price: 60000,
            unit_price: ' vnđ/tháng',
            channels: 200,
        },
        {
            imgSrc: 'img/tv360-vkp.png',
            title: 'TV360 Standard',
            price: 30000,
            unit_price: ' vnđ/tháng',
            channels: 200,
        },
        {
            imgSrc: 'img/tv360-vkpbox.png',
            title: 'TV360 Standard Box',
            price: 60000,
            unit_price: ' vnđ/tháng',
            channels: 200,
        },
        // Các gói khác nếu cần
    ];

     // Lấy gói dịch vụ dựa trên title từ $routeParams
     $scope.selectedPackage = tvPackages.find(pkg => pkg.title === $routeParams.title);

     // Tạo các chi tiết riêng biệt cho mỗi loại gói dịch vụ
     $scope.detailsStandard = {
         title: $scope.selectedPackage ? $scope.selectedPackage.title : 'TV Package Details',
         imgSrc: $scope.selectedPackage ? $scope.selectedPackage.imgSrc : '',
         channels: $scope.selectedPackage ? $scope.selectedPackage.channels : 'N/A',
         price: $scope.selectedPackage ? $scope.selectedPackage.price.toLocaleString() : 'N/A',
         unit_price: $scope.selectedPackage ? $scope.selectedPackage.unit_price : '',
         advantages: [
             'Xem 200 kênh truyền hình trong nước và quốc tế.',
             'Đầy đủ các tính năng của kênh: tạm dừng, xem lại trong 7 ngày, tua lại trong 2h.',
             'Kho phim HD bom tấn với hơn 100.000 giờ xem phim.',
             'Miễn phí gói VOD Giải trí tổng hợp: Kho nội dung không lồ gồm show giải trí, âm nhạc, thiếu nhi, thể thao, thời sự, clip hot, … liên tục cập nhật mới nhất.',
             '1 tài khoản xem đồng thời trên 2 thiết bị (tối đa 1 tivi).'
         ],
         offers: [
             'Giá cước ưu đãi, linh hoạt theo từng khu vực.',
             'Tốc độ truy cập internet cao và ổn định do sử dụng thiết bị Wifi 2 băng tần.',
             'Được miễn phí cước data 4G Viettel khi xem trên điện thoại di động.',
             'Lắp đặt nhanh chóng, chăm sóc và hỗ trợ Khách hàng 24/7.',
             'Đăng ký dễ dàng, tiện lợi qua tổng đài hoặc tại hệ thống cửa hàng Viettel trên toàn quốc.'
         ],
         target: 'Áp dụng toàn quốc'
     };
 
     $scope.detailsStandardBox = {
         title: $scope.selectedPackage ? $scope.selectedPackage.title : 'TV Package Details',
         imgSrc: $scope.selectedPackage ? $scope.selectedPackage.imgSrc : '',
         channels: $scope.selectedPackage ? $scope.selectedPackage.channels : 'N/A',
         price: $scope.selectedPackage ? $scope.selectedPackage.price.toLocaleString() : 'N/A',
         unit_price: $scope.selectedPackage ? $scope.selectedPackage.unit_price : '',
         advantages: [
             'Bao gồm thiết bị Set-top-box miễn phí.',
             'Xem 200 kênh truyền hình trong nước và quốc tế với chất lượng cao.',
             'Đầy đủ các tính năng của kênh: tạm dừng, xem lại trong 7 ngày, tua lại trong 2h.',
             'Kho phim HD bom tấn với hơn 100.000 giờ xem phim.',
             'Miễn phí gói VOD Giải trí tổng hợp: Kho nội dung phong phú gồm show giải trí, âm nhạc, thể thao, clip hot, … liên tục cập nhật mới nhất.'
         ],
         offers: [
             'Khuyến mãi đóng cước trước: Tặng 1 tháng khi đóng cước trước 6 tháng, tặng 2 tháng khi đóng cước trước 12 tháng.',
             'Miễn phí hòa mạng cho khách hàng đăng ký mới.',
             'Hỗ trợ kỹ thuật 24/7.',
             'Chi tiết liên hệ: 18008168 (Miễn phí)'
         ],
         target: 'Áp dụng tại 61 tỉnh và ngoại thành Hà Nội, TP Hồ Chí Minh'
     };
 
     // Set details based on selectedPackage title
     if ($scope.selectedPackage && $scope.selectedPackage.title.includes("Standard Box")) {
         $scope.details = $scope.detailsStandardBox;
     } else {
         $scope.details = $scope.detailsStandard;
     }
});
