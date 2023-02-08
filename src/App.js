import logo from './logo.svg';
import './App.css';
import HUseState from './hooks/hUseState';
import TwowayBinding from './hooks/TwowayBinding';
import TodoList from './hooks/TodoList';
import HUseEffect from './hooks/hUseEffect';
import Timer from './hooks/Timer';
import ChatApp from './hooks/ChatApp';
import HUseLayoutEffect from './hooks/hUseLayoutEffect';
import HUseRef from './hooks/hUseRef';
import Content from './hooks/memo';
import HUseCallback from './hooks/hUseCallback';
import HUseMemo from './hooks/hUseMemo';
import HUseReducer from './hooks/hUseReducer';
import Todo from './hooks/Todo';
import HUseContext from './hooks/hUseContext';
import TodoApp from './TodoUseContextAndReducer/app/TodoApp';
import HUseImperativeHandle from './hooks/hUseImperativeHandle';
import Heading from './css-module/Heading';
import Button from './css-module/ClsxCSS';

function App() {
  return (
    <div className="App">
      <HUseState></HUseState>
      <TwowayBinding></TwowayBinding>
      <TodoList></TodoList>
      <HUseEffect></HUseEffect>
      <ChatApp></ChatApp>
      <Timer></Timer>
      <HUseLayoutEffect></HUseLayoutEffect>
      <HUseRef></HUseRef>
      <Content></Content>
      <HUseCallback></HUseCallback>
      <HUseMemo></HUseMemo>
      <HUseReducer></HUseReducer>
      <Todo></Todo>
      <HUseContext></HUseContext>
      <TodoApp></TodoApp>
      <HUseImperativeHandle></HUseImperativeHandle>
      <Heading></Heading>
      <Button></Button>
    </div>
  );
}

export default App;
