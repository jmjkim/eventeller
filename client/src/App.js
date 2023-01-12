import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/user";

import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About"
import DisplayAllEvents from "./components/Events/ViewAllEvents/DisplayAllEvents";
import DisplayEventDetail from "./components/Events/ViewEventDetail/DisplayEventDetail";
import DisplayCreatingEventForm from "./components/Events/DisplayCreatingEventForm";
import ManageEvent from "./components/Events/ManageEvents/ManageEvent";
import UpdateEvent from "./components/Events/ManageEvents/UpdateEvent";
import NoRouteMatch from "./components/NoRouteMatch"
import Footer from "./components/Footer";

const App = () => {
       document.title = "Eventeller"

       return (
            <>
              <UserProvider>
                <Navigation/>
                <Routes>
                  <Route exact path="/" element={<LandingPage/>}/>
                  <Route exact path="/about" element={<About/>}/>
                  <Route exact path="/events" element={<DisplayAllEvents/>}/>
                  <Route exact path="/events/:id" element={<DisplayEventDetail/>}/>
                  <Route exact path="/events/new" element={<DisplayCreatingEventForm/>}/>
                  <Route exact path="/events/manage" element={<ManageEvent/>}/>
                  <Route exact path="/events/:id/edit" element={<UpdateEvent/>}/>
                  <Route path="*" element={<NoRouteMatch />}/>
                </Routes>
              </UserProvider>
              <Footer/>
            </>
       )
}

export default App;