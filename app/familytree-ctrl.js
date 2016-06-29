angular.module('familyTreeMod', [])
	.controller('FamilyTreeController', ['$scope', function($scope){
		$scope.familymembers = [
			{
				"descriptions": [
					{"key": "name", "val": "Rickard Stark"},
					{"key": "gender", "val": "Male"},
					{"key": "status", "val": "Deceased"}
				],
				"children": [
					{
						"descriptions": [
							{"key": "name", "val": "Brandon Stark"},
							{"key": "gender", "val": "Male"},
							{"key": "status", "val": "Deceased"}
						],
						"children": []
					},
					{
						"descriptions": [
							{"key": "name", "val": "Eddard Stark"},
							{"key": "gender", "val": "Male"},
							{"key": "status", "val": "Deceased"}
						],
						"children": [
							{
								"descriptions": [
									{"key": "name", "val": "Robb Stark"},
									{"key": "gender", "val": "Male"},
									{"key": "status", "val": "Deceased"}
								],
								"children": []
							},
							{
								"descriptions": [
									{"key": "name", "val": "Sansa Stark"},
									{"key": "gender", "val": "Female"},
									{"key": "status", "val": "Alive"}
								],
								"children": []
							},
							{
								"descriptions": [
									{"key": "name", "val": "Arya Stark"},
									{"key": "gender", "val": "Female"},
									{"key": "status", "val": "Alive"}
								],
								"children": []
							},
							{
								"descriptions": [
									{"key": "name", "val": "Bran Stark"},
									{"key": "gender", "val": "Male"},
									{"key": "status", "val": "Alive"}
								],
								"children": []
							},
							{
								"descriptions": [
									{"key": "name", "val": "Rickon Stark"},
									{"key": "gender", "val": "Male"},
									{"key": "status", "val": "Deceased"}
								],
								"children": 0
							}
						]
					},
					{
						"descriptions": [
							{"key": "name", "val": "Benjen Stark"},
							{"key": "gender", "val": "Male"},
							{"key": "status", "val": "Deceased-ish"}
						],
						"children": []
					},
					{
						"descriptions": [
							{"key": "name", "val": "Lyanna Stark"},
							{"key": "gender", "val": "Female"},
							{"key": "status", "val": "Deceased"}
						],
						"children": [
							{
								"descriptions": [
									{"key": "name", "val": "Jon Snow"},
									{"key": "gender", "val": "Male"},
									{"key": "status", "val": "Alive (again)"}
								],
								"children": []
							}
						]
					}
				]
			}
		];
	}])
;