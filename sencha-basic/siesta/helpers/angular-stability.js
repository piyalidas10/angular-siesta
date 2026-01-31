Siesta.Test.Browser.prototype.waitForAngular = function () {
    return this.waitFor(() => {
      if (!window.getAllAngularTestabilities) return true;
      return window
        .getAllAngularTestabilities()
        .every(t => t.isStable());
    });
  };
  