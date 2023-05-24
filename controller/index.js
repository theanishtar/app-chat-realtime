var app = angular.module("myApp", ["ngRoute"]);

var myApp = angular.module("myApp", []).controller("myCtrl", function ($scope, $http) {

	$http.get('db/user.json')
		.then(function (response) {
			console.log(response.data);
			$scope.users = response.data;
		});

	$scope.greeting = 'Hola!';


	$scope.sum = function () {
		$scope.kq = parseInt($scope.a) + parseInt($scope.b);
	}
});

app.config(function ($routeProvider) {
	$routeProvider
		.when("/main", {
			templateUrl: "router/main.html"
		})
		.when("/about", {
			templateUrl: "router/chat.html", controller: "aboutCrtl"
		})
		.when("/chat", {
			templateUrl: "router/chat.html", controller: "chatCrtl"
		})
		.otherwise({ redirectTo: "/main" });
});















let data = [
	{
		"id": 1,
		"fullname": "Tran Huu Dang",
		"username": "thean",
		"password": "123",
		"email": "dangth@gmail.com",
		"photo": "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/340140859_172260725699090_256784781362206605_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0U7rO6iCfnEAX9tioXh&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfB151S05FQKQ5s1iY-zp9_uZ-0PN3YEplqR-g3qUJgBrw&oe=646E9385",
		"isOnline": true,
		"isBlocked": false,
		"isAdmin": true
	},
	{
		"id": 2,
		"fullname": "Tran T My Duyen",
		"username": "duyen",
		"password": "123",
		"email": "duyentm@gmail.com",
		"photo": "https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/326836637_696078822164199_6225808794551558301_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zsyC9YAzLjgAX-hz7Ly&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfBweLQHsJ4X-HycWKeFmmZFnMPz6yZO6aItSHULk2msiA&oe=646E9846",
		"isOnline": true,
		"isBlocked": false,
		"isAdmin": false
	},
	{
		"id": 3,
		"fullname": "Ng Thi Diem Ngan",
		"username": "ngan",
		"password": "123",
		"email": "ngannd@gmail.com",
		"photo": "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/332890925_1397385734351965_253309619475963324_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4MW4NJwFixwAX9_m5qA&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfAbyDtHU--igaXdlMosWW0gQ4RdgEmtMMWZMGolsYXJGw&oe=646EF775",
		"isOnline": true,
		"isBlocked": false,
		"isAdmin": true
	},
	{
		"id": 4,
		"fullname": "Le T Ngoc Han",
		"username": "han",
		"password": "123",
		"email": "hanlt@gmail.com",
		"photo": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
		"isOnline": true,
		"isBlocked": false,
		"isAdmin": true
	},
	{
		"id": 5,
		"fullname": "Ng Hoang H Phuoc",
		"username": "phuoc",
		"password": "123",
		"email": "phuocnh@gmail.com",
		"photo": "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/336989068_6019667821403240_4874907610306169974_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-MeHkPXmFtEAX-CvxqL&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfAoRc8Z9TMGUgN242KV3RNWWsSXo5upshzJtcHezDyinA&oe=646E9E51",
		"isOnline": true,
		"isBlocked": false,
		"isAdmin": true
	},
	{
		"id": 6,
		"fullname": "Ng Tien Dat",
		"username": "dat",
		"password": "123",
		"email": "datnt@gmail.com",
		"photo": "https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/186513396_1210459376075966_768264148781185257_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=yAD6qMlEoK4AX9eUwRb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAVffJKSC6JXsbXDBkeI4MEJHPQAZnSmA7Ognu8Kj7KPg&oe=6491EF16",
		"isOnline": true,
		"isBlocked": false,
		"isAdmin": true
	}
]