app.controller("wifiDetailController", function($scope, $routeParams) {
    const services = [
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
            imgSrc: "img/sun3.png",
            title: "Internet Sun3",
            speed: null,
            price: 279000,
            unit_speed: "Không giới hạn",
            unit_price: " vnđ/tháng"
        },
        {
            imgSrc: "img/start1.png",
            title: "Internet Start1",
            speed: 150,
            price: 210000,
            unit_speed: "Mbps",
            unit_price: " vnđ/tháng"
        },
        {
            imgSrc: "img/start2.png",
            title: "Internet Start2",
            speed: 250,
            price: 245000,
            unit_speed: "Mbps",
            unit_price: " vnđ/tháng"
        },
        {
            imgSrc: "img/start3.png",
            title: "Internet Start3",
            speed: null,
            price: 299000,
            unit_speed: "Không giới hạn",
            unit_price: " vnđ/tháng"
        }
    ];

    // Find the selected service based on the title from $routeParams
    $scope.selectedService = services.find(service => service.title === $routeParams.title);

    $scope.detailsHome = {
        title: $scope.selectedService ? $scope.selectedService.title : 'Service Details',
        advantages: [
            "Trang bị miễn phí Modem WiFi 2 băng tần và 01 đầu thu Set-top-box trong suốt thời gian sử dụng.",
            "Đường truyền internet 150Mbps + STD TV360Box.",
            "Với gần 200 kênh Truyền hình trong nước và quốc tế.",
            "Miễn phí gói VOD Giải trí tổng hợp: Kho nội dung không lồ gồm Thiếu nhi, phim, ca nhạc,…",
            "Đặc biệt miễn phí cước data Viettel (4G/5G) khi xem TV360 trên Smartphone.",
            "Khuyến mãi đóng cước trước internet: Tặng 1 tháng khi đóng cước trước 12 tháng.",
            "Khuyến mãi đóng cước trước truyền hình: Tặng 1 - 2 tháng khi đóng cước trước 6-12 tháng.",
            `Giá cước hàng tháng: ${$scope.selectedService ? $scope.selectedService.price.toLocaleString() : 'N/A'} vnđ (Đã bao gồm VAT)`,
            "Phí hòa mạng: 300.000 đồng."
        ],
        offers: [
            "Giá cước ưu đãi, hấp dẫn nhất thị trường và linh hoạt theo từng khu vực.",
            "Tốc độ truy cập internet cao và ổn định do sử dụng thiết bị Wifi 2 băng tần.",
            "Khách hàng sử dụng đầu thu Set-top-box có mức giá thấp nhất hiện nay. Ứng dụng TV360 được cài trên đầu thu giúp khách hàng thưởng thức cả 3 nhóm nội dung: Kênh truyền hình (VTV, VTVCab, HTV, VTC, THVL, Hollywood Classics, Box Movie…), Kho phim chọn lọc (phim bộ, phim phát sóng song song...), Kho video ngắn.",
            "Đặc biệt, gói cước này có bổ sung các kênh quốc tế cao cấp đặc sắc HBO, AXN, WarnerTV, CNN, Cartoon Network, Discovery Channel, ABC Australia. Giao diện ứng dụng đẹp và linh hoạt, giúp người dùng thao tác dễ dàng, thuận tiện.",
            "01 tài khoản có thể sử dụng trên 2 thiết bị đồng thời (01 đầu thu Set-top-box và 01 thiết bị thông minh).",
            "Lắp đặt nhanh chóng, chăm sóc và hỗ trợ Khách hàng 24/7.",
            "Đăng ký dễ dàng, tiện lợi qua tổng đài hoặc tại hệ thống cửa hàng Viettel trên toàn quốc.",
            "Chi tiết liên hệ: 18008168 (Miễn phí)"
        ],
        target: "Áp dụng tại 61 tỉnh và ngoại thành HNI, HCM"
    };    

    $scope.detailsSun = {
        title: $scope.selectedService ? $scope.selectedService.title : 'Service Details',
        advantages: [
            `Khuyến mãi đóng cước trước: tặng 1 tháng khi đóng cước trước 12 tháng.`,
            `Giá cước hàng tháng: ${$scope.selectedService ? $scope.selectedService.price.toLocaleString() : 'N/A'} vnđ (Đã bao gồm VAT)`,
            "Áp dụng tại 61 Tỉnh và ngoại thành Hà Nội, TP Hồ Chí Minh",
            "Phí lắp đặt: 300.000 đồng"
        ],
        offers: [
            "Giá cước ưu đãi, hấp dẫn nhất thị trường và linh hoạt theo từng khu vực.",
            "Tốc độ truy cập internet cao và ổn định.",
            "Không bị nhiễu Wifi do sử dụng thiết bị Wifi 2 băng tần.",
            "Lắp đặt nhanh chóng, chăm sóc và hỗ trợ Khách hàng 24/7.",
            "Đăng ký dễ dàng, tiện lợi qua tổng đài hoặc tại hệ thống cửa hàng Viettel trên toàn quốc."
        ],
        target: "Áp dụng tại 61 Tỉnh và ngoại thành Hà Nội, TP Hồ Chí Minh"
    };

    $scope.detailsStart = {
        title: $scope.selectedService ? $scope.selectedService.title : 'Service Details',
        advantages: [
            "Trang bị miễn phí Modem Wifi 2 băng tần cao cấp & thiết bị Homewifi đảm bảo cho 02 vùng phủ trong suốt thời gian sử dụng.",
            `Khuyến mãi đóng cước trước: tặng 1 tháng khi đóng cước trước 12 tháng.`,
            `Giá cước hàng tháng: ${$scope.selectedService ? $scope.selectedService.price.toLocaleString() : 'N/A'} vnđ (Đã bao gồm VAT)`,
            "Áp dụng tại 61 Tỉnh và ngoại thành Hà Nội, TP Hồ Chí Minh",
            "Phí lắp đặt: 300.000 đồng"
        ],
        offers: [
            "Gói cước Star được Viettel kết hợp giữa Wifi truyền thống (Modem Wifi) và thiết bị mở rộng vùng phủ Wifi (Home Wifi), là một hệ thống mạng lưới các điểm phát Wifi được kết nối với nhau một cách thống nhất và có khả năng phát Wifi trong phạm vi rộng bằng công nghệ Mesh.",
            "Công nghệ này sẽ khắc phục được các vấn đề của Wifi truyền thống như không thể phủ sóng đều khắp, chất lượng sóng bị suy giảm theo độ xa, khả năng chịu tải không lớn,…",
            "Với gói cước Star Viettel, vùng phủ Wifi rộng hơn, chịu tải lớn hơn, tốc độ và độ ổn định cao hơn đồng thời nhờ chỉ sử dụng 1 tài khoản Wifi (SSID) giúp kết nối Wifi luôn liền mạch."
        ],
        target: "Áp dụng tại 61 Tỉnh và ngoại thành Hà Nội, TP Hồ Chí Minh"
    };

    // Set details based on selectedService title
    if ($scope.selectedService && $scope.selectedService.title.includes("Home")) {
        $scope.details = $scope.detailsHome;
    } else if ($scope.selectedService && $scope.selectedService.title.includes("Sun")) {
        $scope.details = $scope.detailsSun;
    } else {
        $scope.details = $scope.detailsStart;
    }
});
