(function(){

var app = angular.module('store-products', []);

app.directive('productTitle', function(){
    return {
        restrict : 'E', // This is an HTML element
        templateUrl : 'product-title.html' // URL of a template
    };
});

app.directive('productGallery', function(){
    return {
        restrict : 'E', // This is an HTML element
        templateUrl : 'product-gallery.html' // URL of a template
    };
});

app.directive('productPanels', function(){
    return {
        restrict : 'E', // This is an HTML attribute
        templateUrl : 'product-panels.html',
        controller: function(){ // We bind this controller to the product-panels HTML element
            this.tab = 1;
            this.selectTab = function(tab) {
                this.tab = tab;
            };
            this.isTabSelected = function(tab) {
                return this.tab == tab;
            };
        },
        controllerAs: 'panel' // We want to refer to the controller as "panel" in product-panels.html
    };
});

})();
