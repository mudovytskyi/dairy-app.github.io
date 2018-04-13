import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import testData from './testData.json';

let localStorage;
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    localStorage = window.localStorage;
    localStorage.setItem("tasks", JSON.stringify(testData));
  }
  else {
    // Too bad, no localStorage for us
  }


ReactDOM.render(<App {...JSON.parse(localStorage.getItem("tasks")) || []} />, document.getElementById('root'));
// ReactDOM.render(<App tasks={[]} />, document.getElementById('root'));
registerServiceWorker();
