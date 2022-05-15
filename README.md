<div align="center">
  <img src="/public/favicon.png" width="100px" height="100px">
  <h3>onigiri</h3>
  <p>a very dark, minimal, powerful and fully customizable startpage made using vue.js and tailwind.</p>
  <img src="https://i.imgur.com/46kgWXu.png" />
</div>

## 🍙 Customize
### General Customization
You can customize all the **colors** and **images** used in the startpage by changing [/config.js](/config.js) accordingingly.

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

All the ions are taken from [Simple Icons](https://simpleicons.org/s). You can check the icon name for your added app [here](https://github.com/simple-icons/simple-icons/blob/develop/slugs.md).

## 🍀 Usage
You can host this startpage on `GitHub Pages`, `Vercel`, `Netlify` or any other platform you may like. Though I would recmmend using vercel if you dont want to waste much time. First of all you will need to create your own fork of this repository and clone it.

### Using GitHub Pages
1. [Fork](https://github.com/asheeeshh/onigiri/fork) the Repo.
2. Clone the fork. Replace `your_username` with your github username here.
```bash
git clone -b pages https://github.com/your_username/onigiri.git
```
3. Run it to see if everything looks good and then you can customise it.
```bash
cd onigiri
npm run dev
```
4. Once you have customised it and commited the changes to your fork, run these command in terminal. Replace `your_username` with your github username here.
```bash
npm run build
cd dist
git init
git checkout -b main
git add -A
git commit -m 'deploy'
git push -f https://github.com/your-username/onigiri.git main:gh-pages
```
5. Head over to your GitHub Repository Settings.
6. Click on the `Pages` tab.
7. Change publishing branch to `gh-pages`.
8. Enfore `https` and hit save. It should look like this:

![screenshot](https://i.imgur.com/y6xngsY.png)

9. Now you can see your startpage on `https://your-username.github.io/onigiri/`.
10. Simply change your browser's home page and new tab page to `https://your-username.github.io/onigiri/` and you are done.

### Using Vercel
Follow the same steps as above till `Step 3`.

1. Customise the startpage.
2. Commit the changes.
```bash
git add .
git commit -m 'deploy'
git push -u origin main
```
3. Create an account on [Vercel](https://vercel.com/) if you don't already have one.
4. Deploy your startpage by choosing the repository.
5. Change your home page and new tab page to the link given by vercel.

## 🙋‍♂️ Have Questions?
Create an issue and I'll be glad to help you out!

## 🎐 Contributing
Contributions are most welcome.

## 💜 Ending Note
- Consider giving the repo a ⭐ if you liked the project!
- Checkout my other projects!
