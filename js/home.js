const homeController = function($scope) {
    $scope.internets = [
        {
            imgSrc: "img/home1.png",
            title: "Internet Home",
            speed: 100,
            price: 165000,
            unit_speed: "Mbps",
            unit_price: " vnđ/tháng"
        },
        {
            imgSrc: "img/sun1.png",
            title: "Internet Sun1",
            speed: 150,
            price: 180000,
            unit_speed: "Mbps",
            unit_price: " vnđ/tháng"
        },
        {
            imgSrc: "img/sun2.png",
            title: "Internet Sun2",
            speed: 250,
            price: 229000,
            unit_speed: "Mbps",
            unit_price: " vnđ/tháng"
        },
        {
            imgSrc: "img/start1.png",
            title: "Internet Start1",
            speed: 150,
            price: 210000,
            unit_speed: "Mbps",
            unit_price: " vnđ/tháng"
        }
    ];

   

    $scope.cameraPlans = [
        {
            imgSrc: "img/camera-clound7.png",
            title: "CAMERA CLOUND 7",
            price: 40000,
            unit_price: "vnđ/tháng (Đã bao gồm VAT)",
            description: "Lưu trữ dữ liệu trên Cloud trong 7 ngày gần nhất.",
            
        },
        {
            imgSrc: "img/camera-clound15.png",
            title: "CAMERA CLOUND 15",
            price: 60000,
            unit_price: "vnđ/tháng (Đã bao gồm VAT)",
            description: "Lưu trữ dữ liệu trên Cloud trong 15 ngày gần nhất.",
            
        },
        {
            imgSrc: "img/camera-clound30.png",
            title: "CAMERA CLOUND 30",
            price: 90000,
            unit_price: "vnđ/tháng (Đã bao gồm VAT)",
            description: "Lưu trữ dữ liệu trên Cloud trong 30 ngày gần nhất."
        }
    ];

    // Thêm dữ liệu cho Devices
    $scope.devices = [
        {
            imgSrc: "img/camera.png",
            title: "CAMERA NGOÀI TRỜI",
            price: 990000,
            unit_price: "đ",
            advantages: [
             'Hoạt động bền bỉ với khí hậu Việt Nam.',
             'Ghi hình ban đêm sống động.',
             'Tính chống trộm, Cảnh báo khi có chuyển động.',
             'Độ phân giải Full HD 1080p.'
            ],
        },
        {
            imgSrc: "img/camera_tn.png",
            title: "CAMERA TRONG NHÀ",
            price: 690000,
            unit_price: "đ",
            advantages: [
             'Tự động xoay và bám theo chuyển động.',
             'Đàm thoại 2 chiều thông minh.',
             'Tính chống trộm, Cảnh báo khi có chuyển động.',
             'Độ phân giải Full HD 1080p.'
            ],
        }
    ];
};
app.controller("homeController", homeController);