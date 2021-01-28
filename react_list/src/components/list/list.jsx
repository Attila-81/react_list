import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  width: max-content;
  background: #282c34;
  color: white;
`;

const lists = [
  "position",
  "display",
  "border",
  "padding",
  "margin",
  "overflow",
  "background",
  "font",
  "text",
  "transform",
];

const listItems = lists.map((list) => (
  <li key={list.toString()}>
    <input type="checkbox" />
    {list}
  </li>
));

const UlList = () => {
  return <StyledUl>{listItems}</StyledUl>;
};

export default UlList;
