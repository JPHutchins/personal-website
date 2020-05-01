const contents = [...document.querySelectorAll(".content")].map((node) => {
  return node.id;
});

const current = {
  link: document.getElementById(`${contents[0]}-link`),
  content: document.getElementById(contents[0]),
};

current.link.classList.add("current");
current.content.classList.remove("hidden");

contents.forEach((item) => {
  const link = document.getElementById(`${item}-link`);
  const content = document.getElementById(item);

  link.onclick = () => {
    if (!content) {
      return;
    }
    current.link.classList.remove("current");
    current.link = link;
    current.link.classList.add("current");

    current.content.classList.add("hidden");
    current.content = content;
    current.content.classList.remove("hidden");
  };

  content.querySelectorAll(".details").forEach((node) => {
    const projectDiv = node.parentElement;
    const more = projectDiv.querySelector(".expand");

    more.onclick = () => {
      if (projectDiv.classList.contains("expanded")) {
        projectDiv.classList.remove("expanded");
        node.classList.add("hidden");
        more.innerText = "More...";
        return;
      }
      projectDiv.classList.add("expanded");
      node.classList.remove("hidden");
      more.innerText = "Less...";
    };
  });
});
