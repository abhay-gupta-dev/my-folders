function printHello(event) {
  console.log("Hello");
  console.log(event);
}
function printbye(){
    console.log("bye!");
}
function printDoubleClick() {
console.log("Button was double clicked!");
}

export default function Button() {
  return (
   <>
<button onClick={printHello}>Click Me</button>

  <p onMouseOver={printbye}>This is the nice game</p>
  <button onDoubleClick={printDoubleClick()}>
Double Click Me
</button>

</>
  );
}