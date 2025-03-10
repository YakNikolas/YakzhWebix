import { getProfile } from "./profile.js";

export function getHeader() {
    return {
        view: "toolbar",
        type: "header",
        autoheight: true,
        css: "header_style",
        elements: [
            { view: "label", 
              label: "My App",
              css: "logo" },
              
            { 
                view: "button", 
                label: "<span class='webix_icon wxi-user user_icon'></span><span class='text'>Profile</span>",
                id: "profileBtn", 
                width: 100, 
                css: "profile_button",
                click: function() {
                    webix.ui(getProfile()).show();
                }
            }
        ]
    };
}

webix.html.addStyle(`
    .profile_button .webix_button {
        background-color: transparent; 
        color: #ffffff; 
        border: none;
    }
    .profile_button .webix_button:hover {
        background-color: rgb(74, 86, 98); 
    }
    .profile_button .webix_button:active {
        background-color: rgb(62, 62, 62);
    }
    .profile_button .webix_button:focus {
        background-color: rgb(74, 86, 98);  
        outline: none;
    }
    .webix_view.webix_control .webix_disabled_box .webix_button {
        background-color: transparent;
        color:rgb(59, 59, 59);
    }
     .webix_secondary .webix_button .webix_icon{
        color: #ffffff;
    }
    .header_style { 
        background-color: rgb(101, 117, 132); 
        color: #ffffff; 
    }
    .webix_toolbar .webix_el_label .webix_el_box { 
        color: #ffffff; 
        padding: 5px; 
    }
`);
