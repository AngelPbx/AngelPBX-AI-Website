import { useEffect } from "react";

const GoogleTranslate = () => {
    useEffect(() => {
        // Define Google's init function globally
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: "en" },
                "google_translate_element"
            );
        };

        // Load Google Translate script
        const addGoogleTranslateScript = () => {
            if (!document.querySelector("script[src*='translate_a/element.js']")) {
                const script = document.createElement("script");
                script.src =
                    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
                script.async = true;
                document.body.appendChild(script);
            }
        };

        addGoogleTranslateScript();
    }, []);

    // Function to programmatically open the language dropdown
    const openLanguageDropdown = () => {
        const googleSpan = document.querySelector(".goog-te-gadget span");
        if (googleSpan) {
            googleSpan.click();
        }
    };

    return (
        <div className="language-selector me-3" style={{ position: "relative", zIndex: 9999 }} onClick={openLanguageDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='me-2'>
                <g clipPath="url(#clip0_53224_6275)">
                    <path d="M4.1665 6.66663L9.1665 11.6666M3.33317 11.6666L8.33317 6.66663L9.99984 4.16663M1.6665 4.16663H11.6665M5.83317 1.66663H6.6665M18.3332 18.3333L14.1665 9.99996L9.99984 18.3333M11.6665 15H16.6665" stroke="url(#paint0_linear_53224_6275)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_53224_6275" x1="9.99984" y1="1.66663" x2="9.99984" y2="18.3333" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#305CFD" />
                        <stop offset="1" stopColor="#6269FE" />
                    </linearGradient>
                    <clipPath id="clip0_53224_6275">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <i
                className="fa-solid fa-chevron-down dropdown-icon"
                style={{ cursor: "pointer", marginLeft: "5px" }}
                title="Change Language"
            ></i>
            <div id="google_translate_element" style={{ position: "absolute", top: "0px", opacity: 0, left: "0" }}></div>
            {/* <span className="language-text" style={{ marginLeft: "5px" }}>
        EN
      </span> */}


        </div>
    );
};

export default GoogleTranslate;
