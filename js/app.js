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
            ],
            reviews : [
                {
                    stars : 5,
                    body : "Very best dodeca gem",
                    author : "joe@usa.com"
                },
                {
                    stars : 2,
                    body : "Not so best. Had better yesterday.",
                    author : "jack@mail.in"
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
            ],
            reviews : [
                {
                    stars : 4,
                    body : "Almost as good as the other",
                    author : "susan@epost.org"
                }
            ]
        }
    ];

var app = angular.module("gemStore", ["store-products"]);

app.controller("StoreController", function(){
    this.products = gems;
});

app.controller("ReviewController", function(){
    this.review = {
        stars : 5
    };
    this.addReview = function(product) {
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
    };
});

})();
