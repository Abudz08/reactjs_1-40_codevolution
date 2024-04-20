// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';             
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheets from './components/Stylesheets';
// import Inline from './components/Inline';
// import './appStyles.css';
// import styles from './components/appStyles.module.css';
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User';
// import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value='Abudz'>
        <ComponentC></ComponentC>
      </UserProvider>
      
      {/* <CounterTwo>
        {(count, incrementCount) => 
          <ClickCounterTwo 
            count={count} 
            incrementCount={incrementCount}>
          </ClickCounterTwo>
        }
      </CounterTwo>

      <CounterTwo>
        {(count, incrementCount) => 
          <HoverCounterTwo 
            count={count} 
            incrementCount={incrementCount}>
          </HoverCounterTwo>
        }
      </CounterTwo> */}

      {/* <User render={(isLoggedIn) => isLoggedIn ? 'Abudz' : 'Guest'}></User>
      <HoverCounterTwo></HoverCounterTwo>
      <ClickCounterTwo></ClickCounterTwo> */}


      {/* <HoverCounter></HoverCounter>
      <ClickCounter name='Abudz'></ClickCounter> */}


      {/* <ErrorBoundary>
      <Hero heroName="Batman"></Hero>
      <Hero heroName="Superman"></Hero>
      <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}

      
      {/* <PortalDemo></PortalDemo> */}


      {/* <FRParentInput></FRParentInput> */}


      {/* <FocusInput></FocusInput> */}


      {/* <RefsDemo></RefsDemo> */}


      {/* <ParentComp></ParentComp> */}
      
      
      {/* <Table></Table> */}
      
      
      {/* <FragmentDemo></FragmentDemo> */}
      
      
      {/* <LifecycleA></LifecycleA> */}
      
      
      {/* <Form></Form> */}
      
      
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      
      
      {/* <Inline></Inline> */}
      
      
      {/* <Stylesheets primary={true}></Stylesheets> */}
      
      
      {/* <NameList></NameList> */}
      
      
      {/* <UserGreeting></UserGreeting> */}
      
      
      {/* <ParentComponent></ParentComponent> */}
      
      
      {/* <EventBind></EventBind> */}
      
      
      {/* <FunctionClick></FunctionClick> */}
      
      
      {/* <ClassClick></ClassClick> */}
      
      
      {/* <Counter></Counter> */}
      
      
      {/* <Message></Message> */}
      
      
      {/* <Greet name="Abudz" heroName="Superman">
        <h2>I'm weak against kriptonite</h2>
      </Greet>  
      <Greet name="Aiman" heroName="Batman">
        <button>Action</button>
      </Greet>
      <Greet name="Aaron" heroName="Spiderman"></Greet> */}
      
      
      {/* <Welcome name="Abudz" heroName="Superman"></Welcome>
      <Welcome name="Aiman" heroName="Batman"></Welcome>
      <Welcome name="Aaron" heroName="Spiderman"></Welcome> */}


      {/* <Hello></Hello> */}
    </div>
  );
}

export default App;
