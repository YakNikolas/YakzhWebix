export function getProfile() {
  return {
      view: "window",
      id: "profile",
      head: "Profile",
      close: true,
      position: "center",
      move: true,
      body: {
          rows: [
              { view: "text", id: "profileName", label: "Name", placeholder: "Enter your name" },
              { view: "text", id: "profileEmail", label: "Email", placeholder: "Enter your email" },
              { view: "button", value: "Save", click: function () {
                  const name = $$("profileName").getValue();
                  const email = $$("profileEmail").getValue();
                  webix.message(`Saved: ${name}, ${email}`);
              }}
          ]
      },
      on: {
          onShow: function () {
              $$("profileName").focus();
              if ($$("profileBtn")) {
                  $$("profileBtn").disable();
              }
          },
          onHide: function () {
            $$("profileBtn").enable();
            $$('profile').close()
          }
      } 
  };
}