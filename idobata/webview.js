module.exports = (Franz, options) => {
  function getMessages() {
    const title = document.querySelector("title").innerHTML.match(/\d+/);
    const count = title !== null ? title[0] : 0;

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
