angular.module("app.agenda").controller("ContatosCtrl", function($scope, $location){
	// Array contendo os contatos
	$scope.contatos = [
		{id: 1, nome: "Maria", sobrenome: "Antonieta", telefone: "9999-9999", email: "maria@mail.com"},
		{id: 2, nome: "João", sobrenome: "Carlos", telefone: "8888-8888", email: "joao@mail.com"},
		{id: 3, nome: "Pedro", sobrenome: "Watson", telefone: "7777-7777", email: "pedro@mail.com"},
		{id: 4, nome: "Ricardo", sobrenome: "Holmes", telefone: "6666-6666", email: "ricardo@mail.com"}
	];

	$scope.editarContato = function(contato){
		$scope.contato = angular.copy(contato);
		$scope.editando = true;
	}

	$scope.salvar = function(contato){
		function editar(contato){
			for (var i = 0; i < $scope.contatos.length; i++) {
				if($scope.contatos[i].id == $scope.contato.id)
					$scope.contatos[i] = contato;
			}
		}

		if($scope.editando == true){
			editar(contato);
			$scope.editando = false;
		}
		else {
			contato.id = $scope.contatos[$scope.contatos.length - 1].id + 1;
			$scope.contatos.push(contato);
		}

		$scope.contato = {};

		$("#modalSucesso").modal('show');
	};

	$scope.remover = function(index){
		$scope.contatos.splice(index, 1);
	}

	$scope.visualizar = function(id){
		$location.path("/contato/" + id);
	}
});