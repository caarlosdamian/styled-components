import Myheader from "./elements/MyHeader";
import MyButton from "./elements/MyButton";
import MySection from "./elements/MySection";

function App() {
  return (
    <div className="App">
      <MySection>
        <Myheader>My Header</Myheader>
        <MyButton>My Button</MyButton>
      </MySection>
    </div>
  );
}

export default App;
