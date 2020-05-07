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

    if (item === "music") {
        loadListeningPage();
    }
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

const embedClassical = 
  `
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/12641491&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/12641405&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/12641369&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/12641128&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/12640972&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
`
;

embedClassicalNode = document.getElementById("embed-classical");

const embedElectronic = 
  `
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/57691802&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/21071956&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/110637749&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/272643741&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/176465990&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/46074877&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/47042667&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/21071635&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/193220882&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/176940031&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/155008771&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/15753167&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=524206945/size=small/bgcol=ffffff/linkcol=0687f5/track=3234460618/transparent=true/" seamless><a href="http://ravertoothtiger.bandcamp.com/album/year-of-the-ravertooth-vol-1">Year Of The Ravertooth Vol.1 by Lucider</a></iframe>    
`
;

embedElectronicNode = document.getElementById("embed-electronic");

const loadListeningPage = () => {
  if (document.getElementById("embed-electronic").innerHTML) return;
  embedClassicalNode.innerHTML = embedClassical;
  embedElectronicNode.innerHTML = embedElectronic;
};

setTimeout(loadListeningPage, 0);