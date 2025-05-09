import { Checkbox } from "./components/Checkbox";
import { Select } from "./components/Select";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";

import "./styles.css";
import { Tabs } from "./components/Tabs";
import { ContentTab } from "./components/ContentTab";

const root = document.querySelector("#root") as HTMLElement;

const tab1 = new ContentTab([
  new Input("", () => {}, {
    label: "Target name",
  }).render(),
]).render();

const checkbox = new Checkbox(
  true,
  (a) => {
    wrapper.hidden = a;
  },
  {
    label: "Hide content",
  }
);

const wrapper = document.createElement("div");
wrapper.append(
  new Input("", () => {}, {
    label: "Target traffic",
  }).render(),
  new Textarea("", () => {}, {
    label: "Description",
  }).render()
);

wrapper.hidden = checkbox.getChecked()

const tab2 = new ContentTab([checkbox.render(), wrapper]).render();

const tab3 = new ContentTab([
  new Select(
    [
      { value: "", label: "" },
      { value: "market", label: "Marketing" },
      { value: "operation", label: "Operation" },
    ],
    "",
    () => {},
    {
      label: "Target type",
    }
  ).render(),
  new Input("", () => {}, {
    label: "Target audience",
  }).render(),
]).render();

new Tabs(root, [
  { tab: "Main", content: tab1 },
  { tab: "Traffic", content: tab2 },
  { tab: "Type target", content: tab3 },
]);
