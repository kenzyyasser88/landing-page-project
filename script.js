const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");
const navigationLinks = document.querySelectorAll("#main-navigation a");

menuToggle.onclick = () => {
const isOpen = navigation.classList.toggle("is-open");

menuToggle.setAttribute("aria-expanded", String(isOpen));

menuToggle.setAttribute(
"aria-label",
isOpen ? "Close navigation menu" : "Open navigation menu"
);
};

navigationLinks.forEach((link) => {
link.onclick = () => {
navigation.classList.remove("is-open");

```
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Open navigation menu");
```

};
});

window.addEventListener("resize", () => {
if (window.innerWidth > 600) {
navigation.classList.remove("is-open");

```
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Open navigation menu");
```

}
});
