(() => {
  app.directive("myChildComponent", function () {
    return {
      restrict: "E", // Restrict to element usage
      templateUrl: "page/comp1/comp1.html", // Path to your child component's template
      scope: {
        // Define scope bindings for data
        // data: "=",
      },
      link: function (scope, element, attrs) {
        // Your custom logic here
        // editorContent = "";
        scope.clickButton = function () {
          console.log(scope.editorContent);
        };
      },
    };
  });
})();
