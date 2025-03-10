export function getFooter() {
  return             {
    view: "template",
    css : "footer-style",
    align: "center",
    autoheight: true,
    template: `The software is provided by <a href="https://webix.com" target="_blank">https://webix.com</a>. All rights reserved (c)`,
    css: "footer-style"
}
}


webix.html.addStyle(`
  .footer-style {
  text-align: center;}`);