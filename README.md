This is a simple website with info about myself that doubles as a demo for the **State Street** SPA framework.

Tools that were used in the creation of this website include: 
- [State Street](https://github.com/Joshabracks/state-street): An open-source single page application framework designed for ease-of-use (that I built myself)
- [Tailwindcss](https://tailwindcss.com/): A utility-first CSS framework (that I wanted to try out and ended up liking a lot)
- [Nodejs](https://nodejs.org/en): an open-source, cross-platform JavaScript runtime environment
- [Webpack](https://webpack.js.org/): a static module bundler for modern JavaScript applications

If you would like to use this app as a template for your own website, please feel free to do so by doing the following:

Open your favorite comand line interface and clone this repo:
```
git clone https://github.com/Joshabracks/State-Street.git
```
Navigate to the cloned repo (and probably change the name):
```
cd joshuabracks.com
```
install dependencies:
```
npm i
```
If you have not already done so, you'll need to install npx.  I suggest doing so globally:
```
npm i -g npx
```
Open a separate command line interface to run your tailwind server.  (This will compile your css changes in real-time)
```
npm run build:style
```
Run your build server in your original cli
```
npm run build:serve
```
Navigate to localhost:9000
- If I wrote this little tutorial properly and you followed all of the steps correctly, you should be seeing the website.  Now, any changes that you make in the app should update in real-time.
- Once you're happy with your changes, you can bundle your website up with the `npm run build:prod` command.  Your website files will be bundled under the `build` folder