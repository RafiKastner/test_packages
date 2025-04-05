import logo from './logo.svg';
import './App.css';
import { Dropdown, DropdownItem, DropdownContextProvider} from '@reactjs-os/dropdown';


function App() {
  console.log(DropdownContextProvider) //idk why this isnt exporting right
  return (
    <DropdownContextProvider>
      <Dropdown inner="Hello">
        <DropdownItem text="bruh"/>
      </Dropdown>
    </DropdownContextProvider>
  );
}

export default App;
