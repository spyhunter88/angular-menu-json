var app = angular.module('app', ['myMenu', 'ui.bootstrap']);

app.controller('menuController', function ($scope, $filter, $http) {
    //$scope.navbar  [];
    //$scope.navbar.push({ href: '#/', title: 'Home', isActive: true });
    //$scope.navbar.push({ href: '#/claim', title: 'Claim', isActive: false });
    //$scope.navbar.push({ href: '#/request', title: 'Request', isActive: false });

    $scope.type = 1;

    $scope.menu1 = [
       { href: '#/', title: 'DefaultMenu', route: '/' },
       { href: '#/customer', title: 'Customer', route: '/customer' },
       { href: '#/claim', title: 'Claim', route: '(/claim)|(/newClaim)', submenus: [] },
       {
           href: '', title: 'Request', route: '/request', submenus: [
               { href: '#/newRequest', title: 'New Request' },
               { href: '#/removeRequest', title: 'Remove Request' },
               { href: '', title: 'More', route: '/request', submenus: [
                    { href: '#/level31', title: 'Level 3.1' },
                    { href: '#/level32', title: 'Level 3.2' }
                    ]
                }
           ]
       }
    ];

    $scope.menu2 = [
       { href: '#/', title: 'Hom Page', route: '/' },
       { href: '', title: 'Claim', route: '(/claim)|(/newClaim)', submenus: [
            { href: '', title: 'New Claim', submenus: [
                { href: '#/claimA', title: 'Type A' },
                { href: '#/claimB', title: 'Type B' }
                ]
            },
            { href: '#/editClaim', title: 'Edit Claim' }
            ]
        }
    ];
    $scope.menus = $scope.menu1;

    $scope.changeMenu = function() {
        if ($scope.type == 1) {
            $scope.menus = $scope.menu2;
            $scope.type = 2;
        } else {
            $scope.menus = $scope.menu1;
            $scope.type = 1;
        }
    };

    $scope.loadJson = function() {
        $http.get('flat-menu.json').then(function(data){
            $scope.menus = data.data.nestedArray('submenus', 'id', 'parentID');
        });
    };

    $scope.flattenMenu = function() {
        var result = $scope.menus.flattenArray('submenus');
        console.log(result);
    };

    // tree view package
    $scope.list = [
        { name: 'Developer', opened: true, children: [
            { name: 'Front-End', children: [
                { name: 'Jack', title: 'Leader' },
                { name: 'John', title: 'Senior F2E' },
                { name: 'Jason', title: 'Junior F2E' }
            ]},
            { name: 'Back-End', children: [
                { name: 'Mary', title: 'Leader' },
                { name: 'Gary', title: 'Intern' }
            ]}
        ]},
        { name: 'Design', children: [
            { name: 'Freeman', title: 'Designer' }
        ]},
        { name: 'S&S', children: [
            { name: 'Nikky', title: 'Robot' }
        ]}
    ];

    // $scope.toggleAllCheckboxes = function($event) {
    //     var item, selected = $event.target.checked;

    //     for (var i = 0, len = $scope.list.length; i < len; i++) {
    //         item = $scope.list[i];
    //         item.selected = selected;
    //         if (item.children)
    //             $scope.$broadcast('changeChildren', item);
    //     }
    // };

    // $scope.initCheckbox = function(item, parentItem) {
    //     return item.selected = parentItem && parentItem.selected || 
    //                 item.selected || false;
    // };

    // $scope.toggleCheckbox = function(item, parentScope) {
    //     console.log(item);
    //     if (item.children != null) {
    //         $scope.$broadcast('changeChildren', item);
    //     }
    //     if (parentScope.item != null) {
    //         return $scope.$emit('changeParent', parentScope);
    //     }
    // };

    // $scope.$on('changeChildren', function (event, parentItem) {
    //     var child;
    //     for (var i = 0, len = parentItem.children.length; i < len; i++) {
    //         child = parentItem.children[i];
    //         child.selected = parentItem.selected;
    //         if (child.children != null) {
    //             $scope.$broadcast('changeChildren', child);
    //         }
    //     }
    // });

    // $scope.$on('changeParent', function(event, parentScope) {
    //     var children;
    //     children = parentScope.item.children;
    //     parentScope.item.selected = $filter('selected')(children).length == children.length;
    //     parentScope = parentScope.$parent.$parent;
    //     if (parentScope.item != null) {
    //         $scope.$broadcast('changeParent', parentScope);
    //     }
    // });

    // console.log($scope.menus);
});

// app.filter('selected', ['$filter', function($filter) {
//     return function(files) {
//         return $filter('filter')(files, {selected: true });
//     };
// }]);
