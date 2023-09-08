import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Dashboard from "./pages/Dashboard";
// import Enrolled from "./components/dashboard/Enrolled";
// import Library from "./components/dashboard/Library";
// import Books from "./components/dashboard/Books";
// import Settings from "./components/dashboard/settings.jsx";
// import About from "./components/footer/about";
// import Contact from "./components/footer/contact";
// import Footer from "./components/footer";
// import '.././assets/style.css'

export default function App() {
  return (
    <></>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Dashboard/>} />
    //       <Route path="/enrolled" element={<Enrolled />} />
    //       <Route path="/library" element={<Library />} />
    //       <Route path="/books" element={<Books/>} />
    //       <Route path="/settings" element={<Settings/>} />
    //     </Route>
    //     <Route path="/" element={<About/>}>
    //       <Route path="/about" element={<About/>}/>
    //     </Route>
    //     <Route path="/" element={<Contact/>}>
    //       <Route path="/contact" element={<Contact/>}/>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

// function Doyin(props) {
//   return <h1>i am {props.color} in color</h1>;
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// root.render(<Doyin color="red"/>);


function Car(props) {
  return <h2>I am a {props.brand.seatSize} { props.brand.color} {props.property}!</h2>;
}

function Garage() {
  const carInfo = ['ford', 'Mustang']
  const ppt = {color:'Red', seatSize:'XXL' }
  return (
    <>
	    <h1 className="text-3xl">Who lives in my garage?</h1>
	    <Car brand={ ppt } property={carInfo[1]} />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />)

