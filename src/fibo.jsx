import ObjectRow from "./ObjectRow";
const numrows=5
export default function Fibo() {
    const rows = [];
 for (let i = 0; i < numrows; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<ObjectRow key={i} />);
}
return <div>{rows}</div>;
  
}
