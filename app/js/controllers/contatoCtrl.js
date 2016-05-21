angular.module("app.agenda").controller("ContatoCtrl", function($scope, $routeParams){
	$scope.id = $routeParams.id;

	$scope.contatos = [
		{id: 1, nome: "Maria", sobrenome: "Antonieta", telefone: "9999-9999", email: "maria@mail.com"},
		{id: 2, nome: "João", sobrenome: "Carlos", telefone: "8888-8888", email: "joao@mail.com"},
		{id: 3, nome: "Pedro", sobrenome: "Watson", telefone: "7777-7777", email: "pedro@mail.com"},
		{id: 4, nome: "Ricardo", sobrenome: "Holmes", telefone: "6666-6666", email: "ricardo@mail.com"}
	];

	$scope.selecionarContato = function(id){
		for (var i = $scope.contatos.length - 1; i >= 0; i--) {
			if($scope.contatos[i].id == id)
				$scope.contato = $scope.contatos[i];
		}
	};

	$scope.selecionarContato($scope.id);
});