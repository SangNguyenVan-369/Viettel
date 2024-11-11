const cameraController = function($scope) {
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
app.controller("cameraController", cameraController);