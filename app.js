import { getHeader } from "./components/header.js";
import { getDashboard } from "./components/dashboard.js";
import { getForm } from "./components/form.js";
import { getFooter } from "./components/footer.js";
import { small_film_set } from "./testData.js";
import { getList } from "./components/list.js";
     


webix.ready(function () {
    webix.ui({
        view: "layout",
        rows: [
            getHeader(),
            { 
                view: "layout",
                maxHeight: 670, 
                id: "main_layout", 
                cols: [
                    getList(),
                    { view: "resizer" },
                    getDashboard(small_film_set),
                    getForm()
                ],
            },
            getFooter()
        ]
    });
});
