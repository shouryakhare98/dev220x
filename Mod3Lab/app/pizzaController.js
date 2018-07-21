app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
            toppings: [],
            toppingAdded: false
        };

        $scope.addTopping = function (topping) {
            $scope.model.toppings.push(topping);
            $scope.model.search = null;
            $scope.model.toppingAdded = true;
        }

        $scope.alreadyAdded = function (topping) {
            return $scope.model.toppings.indexOf(topping) == -1;
        }
    }
]);
