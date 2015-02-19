(function(){

var gems = [
        {
            name : "Dodecahedron",
            price : 9.95,
            description : "A cool dodeca gem",
            canPurchase : false,
            soldOut : false,
            images : [
                {
                    full : "./images/dodeca-01-full.jpg",
                    thumb : "./images/dodeca-01-thumb.jpg"
                },
                {
                    full : "./images/dodeca-02-full.jpg",
                    thumb : "./images/dodeca-02-thumb.jpg"
                }
            ]
        },
        {
            name : "Pentagonal",
            price : 5,
            description : "A cool penta gem",
            canPurchase : true,
            soldOut : false,
            images : [
                {
                    full : "./images/penta-01-full.jpg",
                    thumb : "./images/penta-01-thumb.jpg"
                },
                {
                    full : "./images/penta-02-full.jpg",
                    thumb : "./images/penta-02-thumb.jpg"
                }
            ]
        }
    ];

var app = angular.module("gemStore", []);

app.controller("StoreController", function(){
    this.products = gems;
});

app.controller("PanelController", function(){
    this.tab = 1;
    this.selectTab = function(tab) {
        this.tab = tab;
    };
    this.isTabSelected = function(tab) {
        return this.tab == tab;
    };
});


})();
