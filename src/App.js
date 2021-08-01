import { ThemeProvider } from "styled-components";
import { GreenTheme } from "./theme/theme";
import { useState } from "react";
import MyHeader from "./elements/MyHeader";
import MyButton from "./elements/MyButton";
import PageWrapper from "./elements/PageWrapper";

function App() {
  const pages = [
    {
      title: "Page 1",
      buttons: [
        {
          text: "next",
        },
      ],
    },
    {
      title: "Page 2",
      buttons: [
        { text: "prev" },
        {
          text: "next",
        },
      ],
    },
    {
      title: "Page 3",
      buttons: [
        { text: "prev" },
        {
          text: "next",
        },
      ],
    },
    {
      title: "Page 4",
      buttons: [
        {
          text: "prev",
        },
      ],
    },
  ];
  const [id, setId] = useState(0);
  let pageDisplay = pages[id];
  const go = (index) => {
    if (id === 0 && index === 0) {
      setId(id + 1);
    } else if (index === 0) {
      setId(id - 1);
    } else {
      setId(id + 1);
    }
  };
  return (
    <ThemeProvider theme={GreenTheme}>
      <div className="App">
        <MyHeader>{pageDisplay.title}</MyHeader>
        <PageWrapper pid={pageDisplay.id} npages={pages.length}>
          {pageDisplay.buttons.map((button, i) => {
            return (
              <MyButton key={i} onClick={() => go(i)}>
                {button.text}
              </MyButton>
            );
          })}
        </PageWrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
