(function () {
  let button;

  Plugin.register("toggle_grid", {
    title: "ToggleGrid",
    author: "Cinderwolf",
    description: "Adds a button to toggle the grid.",
    about: "",
    icon: "grid_on",
    version: "1.0.0",
    variant: "both",
    onload() {
      button = new Action('toggle_grid_action', {
        name: 'Toggle Grid',
        descrioption: 'Toggle the grid on and off.',
        icon: 'grid_on',
        click: function () {
          three_grid.visible = !three_grid.visible;
        }
      });

      MenuBar.addAction(button, 'view');
    },
    onunload() {
      button.delete;
      MenuBar.removeAction('view.toggle_grid_action');
    },
    onuninstall() { 
      three_grid.visible = true;
    }
  });
})();
