
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launched chrome browser successfully.");
    } else if (browserName === "firefox") {
        console.log("Launched firefox browser successfully.");
    } else if (browserName === "safari") {
        console.log("Launched safari browser successfully.");
    } else if (browserName === "edge") {
        console.log("Launched edge browser successfully.");
    } else {
        console.log("Unsupported browser");
    }
}

function runTest(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Test...");
            break;
        case "funtional":
            console.log("Running Funtional Test...");
            break;
        case "regression":
            console.log("Running Regression Test...");
            break;
        case "sanity":
                console.log("Running Sanity Test...");
                break;    
        default:
            console.log("Running Smoke Test...");
            break;
    }
}

launchBrowser("chrome");
runTest("sanity");