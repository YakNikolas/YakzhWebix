import { getProfile } from "./profile.js";

export function getHeader() {
    return {
        view: "toolbar",
        css:"webix_dark",
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

