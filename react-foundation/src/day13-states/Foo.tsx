// because these two components do not receive props
// it's unnecessary update
export default function Foo() {
  console.log("foo rerenders");
  return <div>Foo</div>;
}
