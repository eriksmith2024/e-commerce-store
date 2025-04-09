// Import required dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Makes the central data manager ('store') accessible to the entire app. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// HyperioDev Level2-Front End Development/L2T01- NodeJS/11-033-2 NodeJS.pdf Accessed Monday 10th March 2025
// Hyperion Dev - Front End Development /L2T02 - React - Overview/ Accessed Tuesday 11th March 2025
// Hyperion Dev - Front End Development /L2T03 - React - Elements/ Accessed Wenesday 12th Match 2025
// Hyperion Dev - Level 2 - Front End Development /L2T04 - React - Components/ Accessed 13th March 2025
// Hyperion Dev Level 2 - Front End Development /L2T05 - React - Local State Management & Events/ Accessed 14th March 2025
// Hyperion Dev Level 2 - Front End Development /L2T06 - React - Hooks/ Accessed 15th March 2025
// Hyperion Dev Level 2 - /Level 2 - Front End Development/L2T07 - React - Routing/ Accessed 7th -19th March 2025
// Hyperion Dev Level 2 - /Level 2 - Front End Development/L2T08 - React - Form Validation Accessed 4th - 9th March 2025
// Hyperion Dev Level 2 - /Level 2 - Front End Development/L2T09 - React - Redux & Global State Management Accessed 4th - 9th March 2025
// Hyperion Dev Level 2 - /Level 2 - Front End Development/L2T09 - React - Redux & Global State Management Accessed 4th - 9th March 2025
// Hyperion Dev Level 2 - /Level 2 - Front End Development/L2T09 - React - React App Accessed 4th - 9th March 2025
// git-Cheat-Sheet-education Accessed 4th-9th March 2025
// Additional Reading Git Basics Accessed 4th-9th march 2025


// https://www.youtube.com/watch?v=XrtZynBLpXo Accessed 14th March 2025 - Multi page store Project initially structured around this video -->

// https://www.youtube.com/watch?v=7y-YyEH-eF8 Youtube video accessed 18th March 2025  around logins https://www.youtube.com/watch?v=RpbtR9XFSRE Youtube Video accessed 18th March 2025 

// https://www.youtube.com/watch?v=psU13XU1gDY Youtube Video -  Accessed 18th March 2025 - 
// https://www.youtube.com/watch?v=UBV2vtkKR5o Youtube Video Accessd 18th March 2025

// https://stackoverflow.com/questions/69173268/ stack overflow Accessed 18th March 2025 
// https://www.geeksforgeeks.org/react-hook-form-create-basic-reactjs-registration-and-login-form/? Accessed 18th March 2025
// how-can-i-use-local-storage-with-the-login-functionality-in-react? Accessed 18th March 2025
// https://stackoverflow.com/questions/74788127/react-and-localstorage? Accessed 18th March 2025

// Various Chat GPT chats Accessed 7th - 9th April 2025
// https://chatgpt.com/c/67f67d10-1d54-8007-a031-a7eef2fe73cc

// Various Gemini chats Accessed 7th - 9th April 2025
// https://gemini.google.com/app/37956bae6ab28cfa?is_sa=1&is_sa=1&android-min-version=301356232&ios-min-version=322.0&campaign_id=bkws&utm_source=sem&utm_source=google&utm_medium=paid-media&utm_medium=cpc&utm_campaign=bkws&utm_campaign=2024enGB_gemfeb&pt=9008&mt=8&ct=p-growth-sem-bkws&gad_source=1&gclid=CjwKCAjwtdi_BhACEiwA97y8BCVftHnklODFrK-2WpjeOj3KcpEZQduY1ewYkD_kd8n3aGSXlbfqhhoCy1oQAvD_BwE&gclsrc=aw.ds 

// VARIOUS Gemini chats Accessed 19th March 2025
// https://gemini.google.com/app/8b8b76763f91b2c7?is_sa=1&is_sa=1&android-min-version=301356232&ios-min-version=322.0&campaign_id=bkws&utm_source=sem&utm_source=google&utm_medium=paid-media&utm_medium=cpc&utm_campaign=bkws&utm_campaign=2024enGB_gemfeb&pt=9008&mt=8&ct=p-growth-sem-bkws&gad_source=1&gclid=Cj0KCQjw1um-BhDtARIsABjU5x4rDIbcmLJuOdm3FZ6sipmJwbGMvWVVg4BP-u29pq4VLIixllPX5HoaAhf2EALw_wcB&gclsrc=aw.ds 

// https://gemini.google.com/app/221b8f6d0c7e31a1?is_sa=1&is_sa=1&android-min-version=301356232&ios-min-version=322.0&campaign_id=bkws&utm_source=sem&utm_source=google&utm_medium=paid-media&utm_medium=cpc&utm_campaign=bkws&utm_campaign=2024enGB_gemfeb&pt=9008&mt=8&ct=p-growth-sem-bkws&gad_source=1&gclid=Cj0KCQjw1um-BhDtARIsABjU5x4rDIbcmLJuOdm3FZ6sipmJwbGMvWVVg4BP-u29pq4VLIixllPX5HoaAhf2EALw_wcB&gclsrc=aw.ds

// https://gemini.google.com/app/5f2604eaee0cb5a7?is_sa=1&is_sa=1&android-min-version=301356232&ios-min-version=322.0&campaign_id=bkws&utm_source=sem&utm_source=google&utm_medium=paid-media&utm_medium=cpc&utm_campaign=bkws&utm_campaign=2024enGB_gemfeb&pt=9008&mt=8&ct=p-growth-sem-bkws&gad_source=1&gclid=Cj0KCQjw1um-BhDtARIsABjU5x4rDIbcmLJuOdm3FZ6sipmJwbGMvWVVg4BP-u29pq4VLIixllPX5HoaAhf2EALw_wcB&gclsrc=aw.ds

// https://gemini.google.com/app/111bcafcae10da37?is_sa=1&is_sa=1&android-min-version=301356232&ios-min-version=322.0&campaign_id=bkws&utm_source=sem&utm_source=google&utm_medium=paid-media&utm_medium=cpc&utm_campaign=bkws&utm_campaign=2024enGB_gemfeb&pt=9008&mt=8&ct=p-growth-sem-bkws&gad_source=1&gclid=Cj0KCQjw1um-BhDtARIsABjU5x4rDIbcmLJuOdm3FZ6sipmJwbGMvWVVg4BP-u29pq4VLIixllPX5HoaAhf2EALw_wcB&gclsrc=aw.ds

// https://gemini.google.com/app/12c150bec1204a61?is_sa=1&is_sa=1&android-min-version=301356232&ios-min-version=322.0&campaign_id=bkws&utm_source=sem&utm_source=google&utm_medium=paid-media&utm_medium=cpc&utm_campaign=bkws&utm_campaign=2024enGB_gemfeb&pt=9008&mt=8&ct=p-growth-sem-bkws&gad_source=1&gclid=Cj0KCQjw1um-BhDtARIsABjU5x4rDIbcmLJuOdm3FZ6sipmJwbGMvWVVg4BP-u29pq4VLIixllPX5HoaAhf2EALw_wcB&gclsrc=aw.ds

// VARIOUS CHAT GPT Chats Accessed 19th March 2025
// https://chatgpt.com/c/67daa255-631c-8007-af4a-dc80c4459a91

// VARIOUS CHAT GPT Chats Accessed 18th March 2025
// https://chatgpt.com/c/67d9d9d0-1cac-8007-a99c-cf73473c6680

// https://chatgpt.com/c/67d9d7b1-9da4-8007-8503-da8748cc6244

// https://chatgpt.com/c/67d9d5db-ba0c-8007-a305-cf57ed3ad1ac

// https://chatgpt.com/c/67d9d31a-a5f4-8007-b147-cf7d52d65f6f

// https://chatgpt.com/c/67d9cf26-edf8-8007-97e3-f57919eca662

// https://chatgpt.com/c/67d9c7d5-509c-8007-9e29-482c14399b20

// https://chatgpt.com/c/67d98c92-5db8-8007-95c2-5180aa006b16

// https://chatgpt.com/c/67d9ad08-e150-8007-8874-680af4e8f8c6

