let userInput = document.querySelector('#user-input');
// const userValue = document.querySelector('#user-input').value;
// const userFah = document.querySelector('#user-fah');
// const userCel = document.querySelector('#user-cel');
// const userKel = document.querySelector('#user-kel');
const convFah = document.querySelector('#conv-fah');
const convCel = document.querySelector('#conv-cel');
const convKel = document.querySelector('#conv-kel');
const subBtn = document.querySelector('#submit-btn');
const answer = document.querySelector('#converted-answer');
const fahInput = document.querySelector('#fah-input');
const celInput = document.querySelector('#cel-input');
const kelInput = document.querySelector('#kel-input');
const fahConv = document.querySelector('#fah-conv');
const celConv = document.querySelector('#cel-conv');
const kelConv = document.querySelector('#kel-conv');
const body = document.querySelector('body');

function convertCelToFah(cel) {
  let fahrenheit = cel * (9 / 5) + 32;
  return fahrenheit;
}

function convertCelToKel(cel) {
  let kelvin = cel + 273.15;
  return kelvin;
}

function convertFahToCel(fah) {
  let celsius = (fah - 32) * (5 / 9);
  return celsius;
}

function convertFahToKel(fah) {
  let kelvin = ((fah - 32) * 5) / 9 + 273.15;
  return kelvin;
}

function convertKelToFah(kel) {
  let fahrenheit = ((kel - 273.15) * 9) / 5 + 32;
  return fahrenheit;
}

function convertKelToCel(kel) {
  let celsius = kel - 273.15;
  return celsius;
}

// userInput.onfocus;

fahInput.addEventListener('click', function () {
  if (fahInput.checked) {
    fahConv.disabled = true;
    celConv.disabled = false;
    kelConv.disabled = false;
  }
});
celInput.addEventListener('click', function () {
  if (celInput.checked) {
    fahConv.disabled = false;
    celConv.disabled = true;
    kelConv.disabled = false;
  }
});
kelInput.addEventListener('click', function () {
  if (kelInput.checked) {
    fahConv.disabled = false;
    celConv.disabled = false;
    kelConv.disabled = true;
  }
});

subBtn.addEventListener('click', function () {
  const userValue = parseFloat(document.querySelector('#user-input').value);

  if (isNaN(userValue)) {
    console.error('Invalid user input. Please enter a valid number.');
    return;
  }

  if (fahInput.checked && celConv.checked) {
    const fah2Cel = convertFahToCel(userValue);
    answer.textContent = fah2Cel;
    if (fah2Cel < 21.1) {
      body.style.backgroundImage = 'url(images/fall-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
    if (fah2Cel < 4.5) {
      body.style.backgroundImage = 'url(images/winter-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
    if (fah2Cel > 21.1) {
      body.style.backgroundImage = 'url(images/spring-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
  }
  if (fahInput.checked && kelConv.checked) {
    const fah2Kel = convertFahToKel(userValue);
    answer.textContent = fah2Kel;
    if (fah2Kel < 294.261) {
      body.style.backgroundImage = 'url(images/fall-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
    if (fah2Kel < 277.6) {
      body.style.backgroundImage = 'url(images/winter-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
    if (fah2Kel > 294.261) {
      body.style.backgroundImage = 'url(images/spring-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
  }
  if (celInput.checked && fahConv.checked) {
    const cel2Fah = convertCelToFah(userValue);
    answer.textContent = cel2Fah;
    if (cel2Fah < 70) {
      body.style.backgroundImage = 'url(images/fall-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
    if (cel2Fah < 40) {
      body.style.backgroundImage = 'url(images/winter-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
    if (cel2Fah > 70) {
      body.style.backgroundImage = 'url(images/spring-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
  }
  if (celInput.checked && kelConv.checked) {
    const cel2Kel = convertCelToKel(userValue);
    answer.textContent = cel2Kel;
    console.log(cel2Kel);
    if (cel2Kel < 294.261) {
      body.style.backgroundImage = 'url(images/fall-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
    if (cel2Kel < 277.6) {
      body.style.backgroundImage = 'url(images/winter-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
    if (cel2Kel > 294.261) {
      body.style.backgroundImage = 'url(images/spring-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
  }
  if (kelInput.checked && fahConv.checked) {
    const kel2Fah = convertKelToFah(userValue);
    answer.textContent = kel2Fah;
    if (kel2Fah < 70) {
      body.style.backgroundImage = 'url(images/fall-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
    if (kel2Fah < 40) {
      body.style.backgroundImage = 'url(images/winter-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
    if (kel2Fah > 70) {
      body.style.backgroundImage = 'url(images/spring-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
  }
  if (kelInput.checked && celConv.checked) {
    const kel2Cel = convertKelToCel(userValue);
    answer.textContent = kel2Cel;
    if (kel2Cel < 21.1) {
      body.style.backgroundImage = 'url(images/fall-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
    if (kel2Cel < 4.5) {
      body.style.backgroundImage = 'url(images/winter-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
    if (kel2Cel > 21.1) {
      body.style.backgroundImage = 'url(images/spring-img.jpg)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
    }
  }
});
