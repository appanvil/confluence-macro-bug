import Editor from "./Editor";
import View from "./View";

const App = () => {
  const pathName = window.location.pathname;
  const Component = pathName.startsWith("/editor") ? Editor : View;

  return (
    <div>
      <Component />
    </div>
  );
};

export default App;
