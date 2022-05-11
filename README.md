<div align="center">
  <img src="/public/favicon.png" width="100px" height="100px">
  <h3>onigiri</h3>
  <p>a very dark, minimal, powerful and fully customizable startpage made using vue.js and tailwind.</p>
  <img src="https://user-images.githubusercontent.com/68690233/167764295-d72e98d6-fe5b-4dee-b24d-16f34eabadbe.png" />
</div>

## ✨ Usage
You can either host your own instance of this startpage or use [this](https://onigiri.vercel.app/).

### Deploy you own instance
It's pretty easy, I'll suggest using vercel if you don't want to waste much time, create an account on [Vercel](https://vercel.com/) if you don't already have one and then just click here on this button.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fasheeeshh%2Fonigiri)

### Set as your startpage
Jsut set your browser's home url to https://onigiri.vercel.app/ if you're using my instance or your own link that you get from vercel after deploying.

## 🍙 Customize
To customize the startpage according to you follow these steps:

Fork the repo and clone it
```bash
git clone https://github.com/asheeeshh/onigiri.git
```
Open the app using your code editor [I'm using vs code here].
```bash
cd onigiri
code .
npm run dev
```

### Customizing links
Go to [`/src/applist.json`](/src/applist.json).

Suppose you want to add `FaceBook` to the list, just add the following snippet to the json. The  Link's position depends on the position of the object in the array.
```json
[
  ...
  {
        "name": "facebook",
        "link": "https://facebook.com",
        "icon": "facebook"
    },
  ...
]
```

All the ions are taken from [Simple Icons](https://simpleicons.org/s). You an check the icon name for your added app [here](https://github.com/simple-icons/simple-icons/blob/develop/slugs.md).

### Customizing images
There are two images used in the startpage.

- Vertical Image: https://github.com/asheeeshh/onigiri/blob/665fb34867a0bae436ebb9ba08767bbf0ecbeafa/src/components/Home.vue#L23
- Banner Image: https://github.com/asheeeshh/onigiri/blob/665fb34867a0bae436ebb9ba08767bbf0ecbeafa/src/components/Home.vue#L31

You can change the images by changing the `src` in the `<img />` tag.

### Customizing colors
You can customize the colors too if you have some basic knowledge of tailwind css.

## 🙋‍♂️ Have Questions?
Create an issue and I'll be glad to help you out!

## 🎐 Contributing
Contributions are most welcome.

## 💜 Ending Note
- Consider giving the repo a ⭐ if you liked the project!
- Checkout my other projects!
