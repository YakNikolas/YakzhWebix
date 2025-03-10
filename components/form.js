export function getForm() {
  return {
      view: "form",
      id: "myForm",
      gravity: 1,
      elements: [
          {view: "template", template: "Edit Films", type: "section"}, 
          { view: "text", name: "title", label: "Title" },
          { view: "text", name: "year", label: "Year" },
          { view: "text", name: "rating", label: "Rating" },
          { view: "text", name: "votes", label: "Votes" },
          {
              cols: [
                { view: "button",
                  css: "add_button",
                  id: "add_button",
                  value: "Add New", click: function () {
                    const values = $$("myForm").getValues();
                    console.log(values);
                    if (values.title && values.year && values.rating && values.votes) {
                        $$("datatable").add({
                            id: webix.uid(),
                            title: values.title,
                            year: values.year,
                            rating: values.rating,
                            votes: values.votes
                        });
                        $$("myForm").clear();
                    } else {
                        webix.message("Please fill all fields");
                    }
                }},
                { view: "button", value: "Clear", click: function () {
                    $$("myForm").clear();
                }},

              ]
          }
      ]
  };
}


webix.html.addStyle(`
  .add_button .webix_button  {
  background-color:rgb(28,161,193);
  color: #ffffff;
  border: none;
}
  .add_button .webix_button:hover {
  background-color:rgb(23, 132, 158);
}
  .add_button .webix_button:active {
  background-color:rgb(2, 88, 110);;
}
  .add_button .webix_button:focus {
  background-color:rgb(0, 79, 99);;
  outline: none;
}`);