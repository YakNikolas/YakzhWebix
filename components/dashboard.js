export function getDashboard(data) {
    return {
      view: "datatable",
      id: "datatable",
      select: true,
      autoConfig: true,
      data: data,
      gravity: 2,
      on: {
        onAfterSelect: function (id) {
            const item = this.getItem(id);
            $$("myForm").setValues(item);
        }
    }
    }
  }