import UseCallbackDemo from "./built-in-hooks/UseCallbackDemo";
import UseMemoDemo from "./built-in-hooks/UseMemoDemo";
import UseRefDemo from "./built-in-hooks/UseRefDemo";
import CustomHooksDemo from "./custom-hooks";
import Posts from "./redunance-api-fetching-logic/Posts";
import Recipes from "./redunance-api-fetching-logic/Recipes";

export default function Day17() {
  return (
    <div>
      <h1>Day 17</h1>
      <div>
        {/* <Posts /> */}
        {/* <Recipes /> */}

        {/* <CustomHooksDemo /> */}
        {/* <UseMemoDemo /> */}
        {/* <UseCallbackDemo /> */}
        <UseRefDemo />
      </div>
    </div>
  );
}
