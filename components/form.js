export function getForm() {
  return {
      view: "form",
      id: "myForm",
      gravity: 1,
      minWidth: 300,
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
