$(function () {
  function typeWord(string) {
    return new Promise(resolve => {
      let maxspeed = 600;
      let currentLetter = 0;

      function character(start) {
        return string.substring(start, start + 1);
      }

      function typeLetter() {
        let randomTime = Math.floor(Math.random() * maxspeed);
        if (currentLetter > string.length) return resolve();

        $('#type').html(
          $('#type').html().slice(0, -14) + character(currentLetter) + `<span>|</span>`
        );
        currentLetter++;
        setTimeout(typeLetter, randomTime);
      }
      typeLetter();
    });
  }

  function removeWord() {
    return new Promise(resolve => {
      let maxspeed = 600;
      function removeLetter() {
        let randomTime = Math.floor(Math.random() * maxspeed);
        if ($('#type').html().length === 14) return resolve();

        $('#type').html($('#type').html().slice(0, -15) + `<span>|</span>`);

        setTimeout(removeLetter, randomTime);
      }

      removeLetter();
    });
  }

  async function doMagic() {
    await removeWord();
    await typeWord('Бара');
    await removeWord();
    await typeWord('Доставки');
    await removeWord();
    await typeWord('Кофеточки');
  }

  doMagic();
});
