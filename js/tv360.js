const tvController = function ($scope) {
    $scope.tvPackages = [
        {
            imgSrc: 'img/tv360-std.png',
            title: 'TV360 Standard',
            price: 30000,
            unit_price: ' vnđ/tháng',
            channels: 200,
            data: 'Miễn phí cước data 4G Viettel khi xem trên điện thoại di động',
            availability: 'Áp dụng trên toàn quốc'
        },
        {
            imgSrc: 'img/tv360-stdbox.png',
            title: 'TV360 Standard Box',
            price: 60000,
            unit_price: ' vnđ/tháng',
            channels: 200,
            data: 'Miễn phí cước data 4G Viettel khi xem trên điện thoại di động',
            availability: 'Áp dụng trên toàn quốc'
        },
        {
            imgSrc: 'img/tv360-vkp.png',
            title: 'TV360 Standard',
            price: 30000,
            unit_price: ' vnđ/tháng',
            channels: 200,
            data: 'Miễn phí cước data 4G Viettel khi xem trên điện thoại di động',
            availability: 'Áp dụng trên toàn quốc'
        },
        {
            imgSrc: 'img/tv360-vkpbox.png',
            title: 'TV360 Standard Box',
            price: 60000,
            unit_price: ' vnđ/tháng',
            channels: 200,
            data: 'Miễn phí cước data 4G Viettel khi xem trên điện thoại di động',
            availability: 'Áp dụng trên toàn quốc'
        },
        // Thêm các gói khác nếu cần
    ];

    // Hàm điều hướng tới trang chi tiết với tham số title
    $scope.goToDetail = function(title) {
        window.location.href = '#!/tvDetail/' + encodeURIComponent(title);
    };

    $scope.cameraPlans = [
        {
            imgSrc: "img/camera-clound7.png",
            title: "CAMERA CLOUND 7",
            price: 40000,
            unit_price: "vnđ/tháng (Đã bao gồm VAT)",
            description: "Lưu trữ dữ liệu trên Cloud trong 7 ngày gần nhất."
        },
        {
            imgSrc: "img/camera-clound15.png",
            title: "CAMERA CLOUND 15",
            price: 60000,
            unit_price: "vnđ/tháng (Đã bao gồm VAT)",
            description: "Lưu trữ dữ liệu trên Cloud trong 15 ngày gần nhất."
        },
        {
            imgSrc: "img/camera-clound30.png",
            title: "CAMERA CLOUND 30",
            price: 90000,
            unit_price: "vnđ/tháng (Đã bao gồm VAT)",
            description: "Lưu trữ dữ liệu trên Cloud trong 30 ngày gần nhất."
        }
    ];
};
app.controller("tvController", tvController);
