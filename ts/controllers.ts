/// <reference path="../vendor/types/angularjs/angular.d.ts" />

module test {

  export interface Scope extends ng.IScope {
    data: string;
  }

  export class firstController {
    constructor($scope: Scope) {
      $scope.data = "";
    }
  }
}
