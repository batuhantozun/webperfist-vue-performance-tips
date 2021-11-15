import { h } from "vue";

const Functional = (props, context) => {
  return h(`div${props.item}`, context.attrs, context.slots);
};

Functional.props = ["item"];

export default Functional;
