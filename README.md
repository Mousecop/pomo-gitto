<h1>PomoGitto</h1>
<p><a href="https://pomo-gitto.herokuapp.com">PomoGitto</a> is a full-stack app that helps developers see GitHub issues assigned to them and be able to use the Pomodoro technique to work as efficiently as possible.</p>


## Getting started


### Installing project locally

````
> git clone https://github.com/Jean-Luc19/pomo-gitto.git 

> cd pomo-gitto

> npm install 

```

### Launching 
```
> npm run dev

```
Then open [http://localhost:8080](http://localhost:8080) in a browser.

<h2>Introduction</h2>
<p>The main focus of PomoGitto was to help developers speed up their time by getting to see the issues that were assigned. Being able to see what you need without fumbling with links and menus, saves a lot of time that can then be spent on working on the actual problem. We decided to add a pomodoro timer to even further help the developer manage their time, well also increase workflow. Here's a <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">link</a> for more information.</p>

<h2>How it works</h2>
<h3>Sign into GitHub</h3>
<p>If you are a developer of any skill level, you most likely have an account on GitHub. One of the features for devs to work on projects together is the ability to assign issues, or a certain task, to be completed. This can be anything from a bug to a simple question. These are also very helpful when working on open source projects.</p>

<h3>Pomodoro Clock</h3>
<p>The main purpose of having a pomodoro clock is to be able to work for 25 mintues, and then take a 5 mintute break. You are not able to pause, nor reset the timer so you are locked into working for that set time. Studies show that following this technique helps improve concentration and overall productivity. In PomoGitto, this technique is implemented by being only able to start the clock by first selecting the issue. Once the timer is done, it will display a checkmark showing how many pomo's you have done for that issue.</p>

<h2>Wire Frames</h2>
<p>All wire frames were made with <a href="https://www.lucidchart.com/pages/b/content_section1?ab=1">LucidCharts</a>.</p>
<img src="public/images/pomogitto-collage.png">

<h2>Technologies</h2>
<h3>Front-End</h3>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>React / React-Router</li>
    <li>Redux / Redux-Thunk</li>
    <li>React-Redux</li>
    <li><a href="http://materializecss.com/">Materialize-Css</a> (material design)</li>
    <li><a href="https://github.com/js-cookie/js-cookie">JS-Cookie</a> to send a cookie to keep users logged in after app is closed.</li>
</ul>
<h3>Back-End</h3>
<ul>
    <li>Node.js + Express.js (web server)</li>
    <li>MongoDB + Mongoose</li>
    <li><a href="https://mlab.com/welcome/">mlab</a> for cloud database</li>
</ul>

<h3>Resposive</h3>
<ul>
    <li>PomoGitto quickly responds to change in screen size and looks great across all devices</li>
</ul>

<h3>Security</h3>
<ul>
    <li>Users login using GitHub's <a href="https://developer.github.com/v3/oauth/">OAuth2</a> to keep content secure</li>
    <li><a href=""http://passportjs.org/">Passport</a> is use to validate users with GitHub, and also control non-authorized users to certain endpoints.</li>
</ul>



