import { Checkbox } from "./components/Checkbox";
import { Select } from "./components/Select";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";

import './styles.css'
import { Tabs } from "./components/Tabs";

const root = document.querySelector("#root") as HTMLElement;

const checkbox = new Checkbox(
  false,
  (checked) => {
    console.log("Checkbox checked:", checked);
  },
  {
    size: "medium",
    borderColor: "blue",
    borderRadius: "8px",
    label: "Check me!",
  }
);

const select = new Select(
  [
    { value: "", label: "--Select--" },
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ],
  "",
  (value) => {
    console.log("Selected:", value);
  },
  {
    size: "medium",
    label: "Choose an option",
  }
);

const input = new Input(
  "",
  (value) => {
    console.log("Input value:", value);
  },
  {
    size: "medium",
    label: "Enter text",
  }
);

const textarea = new Textarea(
  "",
  (value) => {
    console.log("Textarea value:", value);
  },
  {
    size: "medium",
    borderColor: "purple",
    borderRadius: "8px",
    label: "Enter more text",
  }
);

const tab1 = document.createElement('div')
tab1.append(checkbox.render(), select.render(), input.render(), textarea.render())

const tab2 = document.createElement('div')
tab2.append(select.render(), input.render(), textarea.render())

const tab3 = document.createElement('div')
tab3.append(checkbox.render(), textarea.render())

const tabs = new Tabs(root, [
  {tab: 'Tab1', content: tab1},
  {tab: 'Tab2', content: tab2},
  {tab: 'Tab3', content: tab3},
])
