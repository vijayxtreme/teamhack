import React, { useState, useEffect } from 'react';
import Form from './components/form'
import GitHubButton from 'react-github-btn';
import '../node_modules/uikit/dist/css/uikit.css';
import './App.css';

let ideas = [
  'Business Dashboard',
  'Portfolio',
  'Web Scraper',
  'Chat App',
  'Polls / Contests',
  'Video Player Site',
  'Blog / CMS',
  'APIs',
  'Plugins / Widgets',
  'Apps (Health/Finance/Movie Search) etc',
  'Game Development'
];

let techs = [
  'HTML & CSS / SASS / Styled Components',
  'React / Vue / Angular ',
  'Redux / MobX / MVC ',
  'Mongo / DynamoDB / postgreSQL',
  'Next.js',
  'Node.js / Express ',
  'Gatsby / Static Site Gens',
  'Karma / Jest / Chai / Mocha',
  'Docker / Microservices',
  'Cloud / Serverless (AWS/Azure/GCP)',
  'React Native',
  'iOS / Swift',
  'Laravel / Ruby / Wordpress / Drupal'
]



function App() {
  let [toggle, setToggle] = useState(false)

  useEffect(() => {
    //componentDidMount
    const hideModal = e => {
      let modal = document.querySelector('.hb-form');
      let targetElement = e.target;
      do {
        if (targetElement === modal) {
          return
        }
        targetElement = targetElement.parentNode;
      } while (targetElement)
      if (modal.style.display !== "none") {
        setToggle(false)
      }
    }

    document.body.addEventListener('click', hideModal)
    return () => {
      document.body.removeEventListener('click', hideModal)
    }
  })


  let Submit = () => (<button onClick={() => setToggle(!toggle)} className={`uk-button uk-button-primary uk-button-large`}>Sign Up</button>)

  return (
    <>
      <div className={`App uk-align-center`}>
        <div className={`uk-text-center team-hack-bg team-hack`} >
          <div className={`jumbotron`}>
            <h1>Join Team Hack!</h1>
            <p>A Hacking Community to Build Awesome Stuff!</p>
            <p>by <a rel="noopener noreferrer" href="https://javascriptla.net" target="_blank">JavaScriptLA</a> & <a rel="noopener noreferrer" href="https://hackbuddy.com" target="_blank">Hackbuddy</a></p>
            <p>Join Our <a rel="noopener noreferrer" href="https://github.com/team-hack" target="_blank">GitHub Team</a></p>
            <p>
              Watch Us On <a href="https://twitch.tv/hackbuddyorg" target="_blank" rel="noopener noreferrer">Twitch</a>
            </p>
          </div>

          <p className={`uk-text-center`}><Submit /></p>
        </div>

        <div className={`hb-modal ${toggle ? '' : 'uk-hidden'}`}><Form toggle={toggle} setToggle={setToggle} /></div>
        <div className={`uk-container uk-padding`}>
          <section>
            <h2>What's Team Hack you say?</h2>
            <p>
            <GitHubButton href="https://github.com/team-hack" data-size="large" aria-label="Follow @team-hack on GitHub">Follow @team-hack</GitHubButton>
            </p>
            <p>
              Watch Us On <a href="https://twitch.tv/hackbuddyorg" target="_blank" rel="noopener noreferrer">Twitch</a>
            </p>
            <p>A chance to join your meetup developer friends once a month to hack around some ideas / cool projects and in the process, (hopefully) improve your own programming skills.  Hey you might also improve your social skills too -- if nothing else at least have a few more friends to hang out with!</p>
            <h2>How often are you doing this?</h2>
            <p>The calendar is still being fleshed out, but the goal here is to meet at least 1x a month and the rest of the time work to create a project together remotely.  Given that normal hackathons are also under 48 hours, I think this is a good place to try building and practicing for the real deal for later.  That said, the aim of this group isn't to get you hackathon ready, but rather to just help foster creativity and learning.</p>
          </section>
          <section>
            <h2>How is this different from JavaScriptLA?</h2>
            <p>JavaScriptLA is a sister site to HackBuddy.  JavaScriptLA exists to help people learn more about JavaScript and related technologies, and has meetups generally once a month which are free to attend to anyone.  HackBuddy is more a focused, project building group centered on full stack development and software engineering.</p>
            <h2>Can I work remotely on these projects?  What are the hours like?</h2>
            <p>Yes you can. Everything will be pushed to a central repo/code source repository.  You are free to push to the repo whenever you like, however generally we will be working together a few days out of the month to just help make sure the projects go towards completion.  That said, you can "phone it in" via Zoom/Google Meets/Discord/Slack, whatever technology we decide to use together.</p>
            <h2>I'm in.  What are some cool projects we might work on?</h2>
          </section>
          <section>
            <p>Here are some sample ideas:</p>
            <ul>
              {ideas.map((idea, i) => {
                return <li key={i}>{idea}</li>
              })}
            </ul>
            <p>Using some of these awesome technologies!</p>
            <ul>
              {techs.map((tech, i) => {
                return <li key={i}>{tech}</li>
              })}
            </ul>
          </section>
          <section>
            <h2>What Do I Need To Do Next?</h2>
            <p>Simply fill out the form to get an invite.  You'll need to be sure to add details about your current work profile, any projects you've done in the past and links to a portfolio, a github (either is fine).  If all looks good, you'll be hearing from us!</p>
            <p className={`uk-text-center`}><Submit toggle={toggle} setToggle={setToggle} /></p>
          </section>
          <footer className={`uk-text-center uk-padding`}>
            Copyright &copy; {new Date().getFullYear()} JavaScriptLA.  HackBuddy&#8482; is a trademark of JavaScriptLA, LLC.  All rights reserved.
      </footer>
        </div>
      </div>
    </>
  );
}

export default App;
