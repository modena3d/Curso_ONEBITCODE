import Component from "./Component.js"; // Import usando ES6 modules
import Form from "./Form.js";
import Input from "./Input.js";
import Label from "./Label.js";

const h1 = new Component("h1", "body", "----");
h1.render();

const form = new Form("body");
form.render();

const label = new Label("Name:", form.getElement());
label.render();
label.brLine();

// const input1 = new Input("text", "InputText", form.getElement());
// input1.render();
