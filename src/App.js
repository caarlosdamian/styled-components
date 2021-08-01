import Myheader from "./elements/MyHeader";
import MyButton from "./elements/MyButton";
import MySection from "./elements/MySection";
import MaterialButton from './elements/MaterialButton'
import {ThemeProvider} from  'styled-components'
import {GreenTheme} from './theme/theme'
function App() {
  return (
    <ThemeProvider theme={GreenTheme}>
    <div className="App">
      <MySection>
        <Myheader>My Header</Myheader>
        <MyButton primary>My Button</MyButton>
        <MyButton >My Button</MyButton>
        <MaterialButton >My Button</MaterialButton>
        <MaterialButton >My Button</MaterialButton>
      </MySection>
    </div>
    </ThemeProvider>
  );
}

export default App;
