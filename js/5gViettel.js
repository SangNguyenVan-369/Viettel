app.controller("5gViettelController", function($scope) {
    $scope.internetPackages = [
        {   
            title: "MI7D", 
            price: 7000, 
            data: 700,
            unit: "MB",
            date: "24h",
            details: "Hết lưu lượng hệ thống dừng truy cập.",
        },
        { 
            title: "6M10_100M", 
            price: 60000, 
            data: 100,
            unit: "MB",
            date: "30 ngày",
            details: "Hết lưu lượng hệ thống dừng truy cập.",

        },
        { 
            title: "ST70K", 
            price: 70000, 
            data: 500,
            unit: "MB",
            date: "30 ngày",
            details: "Hết lưu lượng hệ thống dừng truy cập.",
        },
        { 
            title: "SD90", 
            price: 90000, 
            data: 1.5,
            unit: "GB",
            date: "30 ngày",
            details: "Hết lưu lượng hệ thống dừng truy cập.",
        },
    ];
});
