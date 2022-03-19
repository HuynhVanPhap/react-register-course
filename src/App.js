import { Title, Menu } from '@components';
import * as Styled from "./styled";
import './App.css';

function App() {
  return (
    <div>
      <Styled.MainContainer fixed>
        <Styled.MainContent 
          container 
          spacing={0}
          direction="column"
        >
          <Styled.Grid item xs={12}>
            <Title />
          </Styled.Grid>

          <Styled.Grid item xs={12}>
            <Menu />
          </Styled.Grid>
        </Styled.MainContent>
      </Styled.MainContainer>
    </div>
  );
}

export default App;
