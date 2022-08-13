let darkMode = false;
const iconSun = `<svg width='40' height='40' viewBox='0 0 40 40' fill='#888888' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M19.9999 13.6C16.4653 13.6 13.5999 16.4654 13.5999 20C13.5999 23.5346 16.4653 26.4 19.9999 26.4C23.5345 26.4 26.3999 23.5346 26.3999 20C26.3999 16.4654 23.5345 13.6 19.9999 13.6ZM10.3999 20C10.3999 14.6981 14.698 10.4 19.9999 10.4C25.3018 10.4 29.5999 14.6981 29.5999 20C29.5999 25.3019 25.3018 29.6 19.9999 29.6C14.698 29.6 10.3999 25.3019 10.3999 20Z'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M19.9999 0C20.8836 0 21.5999 0.805887 21.5999 1.8V5.4C21.5999 6.39411 20.8836 7.2 19.9999 7.2C19.1162 7.2 18.3999 6.39411 18.3999 5.4V1.8C18.3999 0.805887 19.1162 0 19.9999 0Z'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M19.9999 32.8C20.8836 32.8 21.5999 33.6059 21.5999 34.6V38.2C21.5999 39.1941 20.8836 40 19.9999 40C19.1162 40 18.3999 39.1941 18.3999 38.2V34.6C18.3999 33.6059 19.1162 32.8 19.9999 32.8Z'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M6.07969 6.07959C6.71914 5.44013 7.75591 5.44013 8.39536 6.07959L10.7205 8.40474C11.36 9.04419 11.36 10.081 10.7205 10.7204C10.0811 11.3599 9.04429 11.3599 8.40484 10.7204L6.07969 8.39526C5.44023 7.75581 5.44023 6.71904 6.07969 6.07959Z'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M29.2794 29.2796C29.9189 28.6401 30.9556 28.6401 31.5951 29.2796L33.9202 31.6047C34.5597 32.2442 34.5597 33.281 33.9202 33.9204C33.2808 34.5599 32.244 34.5599 31.6045 33.9204L29.2794 31.5953C28.6399 30.9558 28.6399 29.919 29.2794 29.2796Z'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M0 20C0 19.1163 0.805887 18.4 1.8 18.4H5.4C6.39411 18.4 7.2 19.1163 7.2 20C7.2 20.8837 6.39411 21.6 5.4 21.6H1.8C0.805887 21.6 0 20.8837 0 20Z'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M32.7998 20C32.7998 19.1163 33.6057 18.4 34.5998 18.4H38.1998C39.1939 18.4 39.9998 19.1163 39.9998 20C39.9998 20.8837 39.1939 21.6 38.1998 21.6H34.5998C33.6057 21.6 32.7998 20.8837 32.7998 20Z'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M10.7205 29.2796C11.36 29.919 11.36 30.9558 10.7205 31.5953L8.39536 33.9204C7.75591 34.5599 6.71914 34.5599 6.07969 33.9204C5.44023 33.281 5.44023 32.2442 6.07969 31.6047L8.40484 29.2796C9.04429 28.6401 10.0811 28.6401 10.7205 29.2796Z'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M33.9202 6.07959C34.5597 6.71904 34.5597 7.75581 33.9202 8.39526L31.5951 10.7204C30.9556 11.3599 29.9189 11.3599 29.2794 10.7204C28.6399 10.081 28.6399 9.04419 29.2794 8.40474L31.6045 6.07959C32.244 5.44013 33.2808 5.44013 33.9202 6.07959Z'/>
</svg>`;
const iconMoon = `<svg width='40' height='40' viewBox='0 0 40 40' fill='#AFAFAF' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M19.3998 0.636301C19.6417 1.06553 19.6089 1.59682 19.316 1.99303C17.4133 4.56713 16.4978 7.73864 16.7358 10.9307C16.9738 14.1228 18.3497 17.1235 20.6131 19.3869C22.8765 21.6503 25.8772 23.0262 29.0693 23.2642C32.2614 23.5023 35.4329 22.5867 38.007 20.684C38.4032 20.3911 38.9345 20.3583 39.3637 20.6002C39.7929 20.8421 40.04 21.3136 39.9947 21.8042C39.6444 25.5944 38.222 29.2065 35.8937 32.2178C33.5655 35.2291 30.4279 37.515 26.8479 38.8081C23.2679 40.1012 19.3937 40.348 15.6785 39.5197C11.9634 38.6913 8.56105 36.822 5.86954 34.1305C3.17804 31.439 1.30872 28.0366 0.48034 24.3215C-0.348046 20.6063 -0.101243 16.7321 1.19187 13.1521C2.48498 9.57215 4.77092 6.43448 7.78221 4.10626C10.7935 1.77805 14.4056 0.355589 18.1958 0.00532464C18.6864 -0.0400141 19.1579 0.207073 19.3998 0.636301ZM15.8283 2.93341C13.4699 3.51678 11.2486 4.58628 9.31136 6.08406C6.67574 8.12183 4.67498 10.8681 3.54318 14.0014C2.41139 17.1348 2.19537 20.5257 2.92042 23.7774C3.64546 27.029 5.28157 30.007 7.63731 32.3627C9.99304 34.7184 12.971 36.3545 16.2226 37.0796C19.4743 37.8046 22.8652 37.5886 25.9986 36.4568C29.1319 35.325 31.8782 33.3243 33.9159 30.6886C35.4137 28.7514 36.4832 26.5302 37.0666 24.1717C34.5442 25.4127 31.7206 25.9689 28.8834 25.7573C25.0941 25.4747 21.5322 23.8415 18.8453 21.1547C16.1585 18.4678 14.5253 14.9059 14.2427 11.1167C14.0311 8.27939 14.5873 5.45582 15.8283 2.93341Z'/>
</svg>`;

function toggleTheme() {

    // Converts to Dark Theme
    if (!darkMode) {
        
        Array.from(document.getElementsByClassName('themeElem')).forEach((elem) => {
            elem.classList.remove('light-text');
            elem.classList.add('dark-text');
        });
        Array.from(document.getElementsByClassName('themeElem-2')).forEach((elem) => {
            elem.classList.remove('light-2');
            elem.classList.add('dark-2');
        });
        
        document.getElementById('github-icon').src = './src/icons/icon_github_white.svg';
        document.getElementById('button-switch-theme').innerHTML = iconMoon;
        document.getElementById('output-img').src = './src/default/default-dark.png';
        document.getElementById('icon-download').style.fill = '#8899A6';
        document.getElementsByTagName('hr')[0].style.backgroundColor = 'white';
        document.getElementsByTagName('body')[0].style.background = 'linear-gradient(135deg, #021623, #130223)';
    }

    // Converts to Light Theme 
    else {

        Array.from(document.getElementsByClassName('themeElem')).forEach((elem) => {
            elem.classList.remove('dark-text');
            elem.classList.add('light-text');
        });
        Array.from(document.getElementsByClassName('themeElem-2')).forEach((elem) => {
            elem.classList.remove('dark-2');
            elem.classList.add('light-2');
        });
        
        document.getElementById('github-icon').src = './src/icons/icon_github_black.svg';
        document.getElementById('button-switch-theme').innerHTML = iconSun;
        document.getElementById('output-img').src = './src/default/default-light.png';
        document.getElementById('icon-download').style.fill = '#657786';
        document.getElementsByTagName('hr')[0].style.backgroundColor = 'black';
        document.getElementsByTagName('body')[0].style.background = 'linear-gradient(135deg, #f0f9ff, #e4ecff)';
    }
    
    darkMode = !darkMode;
}

function imageExists(url) {

    console.log(url);

    return new Promise((resolve, reject) => {

        var img = new Image();

        img.onload = function () {
            resolve(true);
        };
        img.onerror = function () {
            resolve(false);
        };

        img.src = url;
    });
}
  
async function getTwittercard() {
    
    const url = document.getElementById('input-url').value;
    let imgElem = document.getElementById('output-img');
    
    imgElem.src = `./src/loading/loading-${darkMode ? 'dark' : 'light'}.png`;

    if (url.includes('https://twitter.com/') && url.includes('/status/')) {

        const inputArr = url.split('/');
        const id = inputArr[inputArr.length - 1].split('?')[0];

        if (await imageExists(`http://twittercard.zixucheah331.ml/image?id=${id}${darkMode ? '&darkMode=true' : ''}`)) {

            imgElem.src = `http://twittercard.zixucheah331.ml/image?id=${id}${darkMode ? '&darkMode=true' : ''}`;
        } 
        else {imgElem.src = `./src/error/error-${darkMode ? 'dark' : 'light'}.png`;}
    } 
    else {imgElem.src = `./src/error/error-${darkMode ? 'dark' : 'light'}.png`;}
}