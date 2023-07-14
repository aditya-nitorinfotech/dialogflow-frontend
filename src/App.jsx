import React, { useEffect, useState } from 'react';
import './App.css';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./components/common/TopBar";
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/common/SideBar';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import { SafetyCheck } from '@mui/icons-material';

// var perf = require("./index");


const App = () => {
  let [htmlFileString, setHtmlFileString] = useState();

  const [theme, ColorMode] = useMode();
  const background = "./logo/neon-wave.jpg"


  useEffect(() => {
    //fetchHtml();
    const script = document.createElement('script');

    //car advise
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1";
    
    //mgb
    // script.src="https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1%22"
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);


  async function fetchHtml() {
    setHtmlFileString(await (await fetch("./index.html")).text());
  }

  const getMessenger = () => {
    return (
      <>
      </>
    )
  }

  window.addEventListener('dfMessengerLoaded', function (event) {
    const dfMessenger = document.querySelector('df-messenger');
    // const df=document.getElementById("df-messenger")

    dfMessenger.setAttribute("df-messenger-button-titlebar-color", "#df9b56")
    // df.style.color="#df9b56"
    const style = document.createElement('style');


    const nonMobileMinWidth = 501; // Breakpoint where DF Messenger switches between mobile/non-mobile styles

    style.textContent = '@media screen and (min-width: ' + nonMobileMinWidth + 'px) { .chat-wrapper { max-height: 65%} }';

    dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.appendChild(style);
  })



  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={ColorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <SideBar />
            {/* <div className="App" style={{ backgroundImage: `url("https://via.placeholder.com/500")` }}> */}


            {/* <iframe src={perf} ></iframe> */}
            {/* {getMessenger()} */}


            <main className="content" >
              <TopBar />
              {/* <CommonHeader /> */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </main>
          </div>



          <div dangerouslySetInnerHTML={{
            __html: `<df-messenger name="df-messenger" id="df-messenger" df-cx="true" location="us-central1" chat-title="AI Car Advisor"
        agent-id="02337e81-d79f-451e-80b2-d4ff63e13884" language-code="en" chat-icon="./logo/test-image.jpg" margin: 0; padding: 0; position: fixed;
        right: 0; transform: translateX(50%) translateY(50%); bottom: -90px; df-messenger-button-titlebar-color: #df9b56; } >
        
        
        </df-messenger>
        
        <style>
        // .container {
        //   background-image: url("img.png");
        //   background-repeat: no-repeat;
        //   min-height: 940px;
        //   height: 100%;
        //   margin: 10px 30px;
        // }

        df-messenger {
      
          --df-messenger-button-titlebar-color: #e95832;
                
        }
      </style>` }}

          />

{/* <div dangerouslySetInnerHTML={{
            __html: `<df-messenger name="df-messenger" id="df-messenger" df-cx="true" location="us-central1" chat-title="MGB AI Assistant"
            agent-id="a6483d5b-6df6-40c3-bb92-b468f70d9bd2" language-code="en" chat-icon="./logo/test-image.jpg" margin: 0; padding: 0; position: fixed;
            right: 0; transform: translateX(50%) translateY(50%); bottom: -90px; df-messenger-button-titlebar-color: #df9b56; } >
        
        </df-messenger>
        
        <style>
        // .container {
        //   background-image: url("img.png");
        //   background-repeat: no-repeat;
        //   min-height: 940px;
        //   height: 100%;
        //   margin: 10px 30px;
        // }

        df-messenger {
      
          --df-messenger-button-titlebar-color: #4cceac;
                
        }
      </style>` }}

          /> */}



        </ThemeProvider>
      </ColorModeContext.Provider >
    </BrowserRouter>


  )
}


export default App;
