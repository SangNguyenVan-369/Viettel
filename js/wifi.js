const wifiController = function ($scope) {
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

    $scope.itemsPerPage = 3; // Still display 3 items at a time
    $scope.currentIndex = 0; // Start from the first item

    // Function to go to the next item
    $scope.nextPage = function() {
        if ($scope.currentIndex < $scope.internets.length - $scope.itemsPerPage) {
            $scope.currentIndex++;
        }
    };

    // Function to go to the previous item
    $scope.prevPage = function() {
        if ($scope.currentIndex > 0) {
            $scope.currentIndex--;
        }
    };
}
app.controller("wifiController",wifiController);