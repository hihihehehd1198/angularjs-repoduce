app.directive("ckeditor", function () {
  return {
    require: "?ngModel",
    link: function (scope, element, attrs, ngModel) {
      if (!ngModel) return;

      // Initialize CKEditor
      var editor = CKEDITOR.replace(element[0]);

      // Update model when content changes
      editor.on("change", function () {
        scope.$apply(function () {
          ngModel.$setViewValue(editor.getData());
        });
      });

      // Update editor when model changes
      ngModel.$render = function () {
        editor.setData(ngModel.$viewValue);
      };
    },
  };
});
