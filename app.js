var app = angular.module('app', ['myMenu', 'ui.bootstrap']);

app.controller('menuController', function ($scope) {
    //$scope.navbar  [];
    //$scope.navbar.push({ href: '#/', title: 'Home', isActive: true });
    //$scope.navbar.push({ href: '#/claim', title: 'Claim', isActive: false });
    //$scope.navbar.push({ href: '#/request', title: 'Request', isActive: false });

    $scope.type = 1;

    $scope.menu1 = [
       { href: '#/', title: 'Home', route: '/' },
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

    // console.log($scope.menus);
});
