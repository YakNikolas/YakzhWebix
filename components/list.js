let data = [
  { id: 1, title: "Dashboard" },
  { id: 2, title: "Users" },
  { id: 3, title: "Products" },
  { id: 4, title: "Locations" },
];

export function getList() {
  return {
    type: "clean",
    gravity: 0.5,
    css: "left_panel",
    rows: [
      {
        view: "list",
        id: "list",
        css: "custom_list",
        select: true,
        template: "#title#",

        scroll: false,
        data: data,
      },
      {
        view: "label",
        label: '✔ Connected',
        css: "custom_label",
        align: "center",
      }
    ]
  };
}

webix.html.addStyle(`
  .custom_label .webix_el_box {
    color: green;
    background-color: transparent;
  }

  .left_panel .webix_view{
    background-color: rgb(238,238,238);
  }

  .custom_list .webix_list_item {
    background-color: transparent;
    border: none;
  }
`);
