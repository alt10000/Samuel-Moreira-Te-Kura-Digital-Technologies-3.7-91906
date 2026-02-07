//FIREBASE STUFF

// Imported functions from the SDKs
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
    import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

    //the firebase config, bunch of stuff that identifies my firebase database and allows for me to access it from JS
   const firebaseConfig = {
    apiKey: "AIzaSyB45f62RhCx_T0GijGFj3BX5nksRXtiHdU",
    authDomain: "dtech-3-7-te-kura.firebaseapp.com",
    databaseURL: "https://dtech-3-7-te-kura-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dtech-3-7-te-kura",
    storageBucket: "dtech-3-7-te-kura.firebasestorage.app",
    messagingSenderId: "453460675550",
    appId: "1:453460675550:web:592a2bb1a0ffb73632ab4f",
    measurementId: "G-W3DXTLK0BP"
    };



    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getDatabase(app);

    const nikauEndYearButton = document.querySelector(".nikauEndYear")

    if (nikauEndYearButton) {
        nikauEndYearButton.addEventListener("click", async () => {
        try {
            await set(ref(db, "children/Nikau/allowance"), 300);
            console.log("New Year for Nikau")
        } catch (err) {
            console.log("nikauEndYearButton faliure")
        }
        });
    }

    const hanaEndYearButton = document.querySelector(".hanaEndYear")

    if (hanaEndYearButton) {
        hanaEndYearButton.addEventListener("click", async () => {
        try {
            await set(ref(db, "children/Hana/allowance"), 300);
            console.log("New Year for Hana")
        } catch (err) {
            console.log("hanaEndYearButton faliure")
        }
        });
    }

    const tiaEndYearButton = document.querySelector(".tiaEndYear")

    if (tiaEndYearButton) {
        tiaEndYearButton.addEventListener("click", async () => {
        try {
            await set(ref(db, "children/Tia/allowance"), 300);
            console.log("New Year for Tia")
        } catch (err) {
            console.log("tiaEndYearButton faliure")
        }
        });
    }