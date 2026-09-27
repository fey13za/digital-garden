(function () {
  const dialog = document.getElementById("cookieModal");

  if (!dialog) {
    console.log(`<dialog id="cookieModal"> niet aanwezig: Doe niets`);
  } else {
    if (testForCookie() == "false") {
      console.log(
        `<dialog id="cookieModal"> aanwezig en geen consent cookie ingesteld: Toon de modal en laat de gebruiker een keuze maken.`,
      );
      dialog.showModal();
    } else {
      console.log(
        `<dialog id="cookieModal"> aanwezig en consent cookie ingesteld. Laad de webring data in!`,
      );
      getWebringLinks();
    }
  }
})();
