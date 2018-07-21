app.controller("menuController", [
    "$scope", 
    function($scope) {
        $scope.model = {title: "Our Menu"};

        $scope.changeMainDish = function (item) {
            $scope.model.mainDish = item;
        };

        $scope.dishes = [
            {
                name: "Cheese Pizza",
                price: 12.99
            },
            {
                name: "Pepperoni Pizza",
                price: 14.99
            },
            {
                name: "Margherita Pizza",
                price: 13.99
            },
            {
                name: "BBQ Chicken Pizza",
                price: 16.99
            },
            {
                name: "Combo Pizza",
                price: 17.99
            }
        ];

        // $scope.$watch("model.mainDish", function (newValue, oldValue) {
        //     if (newValue === "BBQ Chicken Pizza") {
        //         alert("You chose BBQ Chicken Pizza!");
        //     }
        // });
    }
]);