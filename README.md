# Frontend Mentor - Manage landing page

![Design preview for the Manage landing page coding challenge](./design/desktop-preview.jpg)

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## Lessons learnt

- 💡 Carousels seem a mess to me. Difficult to create, but more importantly not good from a UI perspective as they hide content. It would take me so long to even approach making the one included here accessible that I didn't really try.
- I used the following code to enable the carousel only at small scree sizes. It was more complicated than I had hoped as I needed to set this up in a JS file before the carousel component was created:

```const width = window.matchMedia("(max-width: 45em)");
if (width.matches) {
	console.log(siemaContainerTest);
	siemaContainerTest.classList.add("siema");
}
```

## Future learning

- 🙇‍♂️ I need to understand JS modules, and import and export to better structure my JS files. As I am now getting to the stage where I am asking JS to do multiple things on a page a better structure is needed.

## Resources

- 🔗 I used [Siema](https://github.com/pawelgrzybek/siema) for the carousel. But even the creator acknowledges that " I consider carousels as an anti-pattern and I would suggest you to find a better UI pattern than carousel for your current project."
