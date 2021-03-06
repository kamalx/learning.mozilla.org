var React = require('react');
var HeroUnit = require('../components/hero-unit.jsx');
// use this LinkAnchorSwap component for hyperlinks
var LinkAnchorSwap = require('../components/link-anchor-swap.jsx');
var Illustration = require('../components/illustration.jsx');

var CurriculumWorkshop = React.createClass({
  statics: {
    pageClassName: 'curriculum-workshop',
    pageTitle: 'Curriculum Workshops'
  },
  render: function () {
    return (
        <div className="inner-container call-container">
          <section className="intro intro-after-banner">
           <Illustration
             height={175} width={175}
             src1x="/img/pages/community/svg/icon-circle-community.svg"
             alt="icon toolkit">
               <h1>Mozilla Curriculum Workshop</h1>
               <h2>Join us on the second Tuesday of each month!</h2>
           </Illustration>
          </section>

          <p>
            Co-hosts Amira Dhalla and Chad Sansing, along with producers Kristina Gorr and Paul Oh, help participants answer the question, <em>"How can I use the web to teach and learn what’s important to me?"</em> Join us as we prototype teaching and learning materials live on-air and think out-loud through the curriculum design process.
          </p>

          <section className="callout-box past-workshop">
            <h2>Past Workshop</h2>
            <p className="date">June 16th - 9 AM PT / 12 PM ET / 4 PM GMT / 5 PM BST</p>
            <h1>Summer Learning</h1>
            <p className="description">
              With Su Adams, Bud Hunt, and Christopher Rogers.
            </p>
          </section>

          <p>
            Join co-hosts Amira Dhalla and Chad Sansing broadcasting live from Mozilla’s all-hands work-week. Invited guests Su Adams, Bud Hunt, and Christopher Rogers, as well as drop-in Mozillians, will talk shop about summer learning, participatory learning outside school, and curriculum development on the web.
          </p>

          <p>
            You can also join the discussion on <LinkAnchorSwap to="https://discourse.webmaker.org/c/mozilla-curriculum-workshop">our community forum</LinkAnchorSwap> or <LinkAnchorSwap to="https://github.com/MozillaFoundation/curriculum-workshop">GitHub</LinkAnchorSwap>.
          </p>

          <h3>Workshop Video Stream</h3>

          <div className="video-wrapper">
            <iframe className="workshop-video" width="560" height="315" src="//www.youtube.com/embed/qXRGOJCVXdA?rel=0" frameBorder="0" allowFullScreen></iframe>
          </div>

          <h4>
            Open Agenda
            <a title="Open the agenda in a new tab" className="fa fa-external-link open-etherpad" href="https://public.etherpad-mozilla.org/p/curriculum-workshop-june-16-2016">
            </a>
          </h4>

          <iframe className="etherpad" src="https://public.etherpad-mozilla.org/p/curriculum-workshop-june-16-2016"></iframe>


        </div>
    );
  }
});

module.exports = CurriculumWorkshop;
