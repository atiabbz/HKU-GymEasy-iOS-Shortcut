const pages = [
  {
    filename: "./images/allow-untrusted-shortcuts.png",
    heading: "Allow Untrusted Shortcuts",
    bullets: [
      "Make sure you have untrusted shortcuts allowed in the Settings app.",
      `
        See <a href="https://www.howtogeek.com/699397/how-to-fix-allow-untrusted-shortcuts-grayed-out-on-iphone-or-ipad/" target="_blank" class="link-dark">
          here</a> for help in case of issues (especially if you're new to Shortcuts).
      `,
    ],
  },
  {
    filename: "./images/get-hku-gymEasy.png",
    heading: "Get HKU GymEasy",
    bullets: ["Open the Shortcuts app using the 'Get' button above."],
  },
  {
    filename: "./images/check-it-out.png",
    heading: "Check it out",
    bullets: ["Scroll down."],
  },
  {
    filename: "./images/tap-on-add-untrusted-shortcut.png",
    heading: "Tap on 'Add Untrusted Shortcut'",
    bullets: ["Almost there."],
  },
  {
    filename: "./images/initial-configuration.png",
    heading: "Initial configuration",
    bullets: [
      `<span class="fw-bold">Tip:</span> Read through the on-screen comment for the best experience.`,
    ],
  },
  {
    filename: "./images/enter-details.png",
    heading: "Enter details",
    bullets: ["Once and only once."],
  },
  {
    filename: "./images/using-hku-gymEasy.png",
    heading: "Using HKU GymEasy",
    bullets: ["Tap the 'Share' icon."],
  },
  {
    filename: "./images/say-goodbye-to-redundancies.png",
    heading: "Say goodbye to redundancies",
    bullets: [
      "(Here's where the tip from the comment comes in handy.)",
      "Find and tap on HKU GymEasy in the share sheet.",
    ],
  },
  {
    filename: "./images/allow-access-to-the-form.png",
    heading: "Allow access to the form",
    bullets: ["Required for first use only."],
  },
];

document.querySelector("#next").onclick = () => {
  const index = Number(document.querySelector("#pageNum").innerHTML);
  if (index < pages.length) {
    document.querySelector("#prev").classList.remove("disabled");
    const newPageNum = index + 1;
    if (newPageNum === pages.length) {
      document.querySelector("#next").classList.add("disabled");
    }
    document.querySelector("#pageNum").innerHTML = newPageNum.toString();
    const page = pages[index];
    document.querySelector("#image").src = page.filename;
    document.querySelector("#heading").innerHTML = page.heading;
    document.querySelector("#bullets").innerHTML = "";
    for (let bullet of page.bullets) {
      const li = document.createElement("li");
      li.innerHTML = bullet;
      document.querySelector("#bullets").appendChild(li);
    }
  } else {
    document.querySelector("#next").classList.add("disabled");
  }
};

document.querySelector("#prev").onclick = () => {
  const index = Number(document.querySelector("#pageNum").innerHTML) - 2;
  if (index >= 0) {
    document.querySelector("#next").classList.remove("disabled");
    const newPageNum = index + 1;
    if (newPageNum === 1) {
      document.querySelector("#prev").classList.add("disabled");
    }
    document.querySelector("#pageNum").innerHTML = newPageNum.toString();
    const page = pages[index];
    document.querySelector("#image").src = page.filename;
    document.querySelector("#heading").innerHTML = page.heading;
    document.querySelector("#bullets").innerHTML = "";
    for (let bullet of page.bullets) {
      const li = document.createElement("li");
      li.innerHTML = bullet;
      document.querySelector("#bullets").appendChild(li);
    }
  } else {
    document.querySelector("#prev").classList.add("disabled");
  }
};
