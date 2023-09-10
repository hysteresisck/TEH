import React from "react";

const ContactEntry = ({heading, text}) =>
  <div>
    <h4 className="f4 b lh-title mb2 primary">{ heading }</h4>
    <p>{ text }</p>
  </div>;

const ContactEntries = ({data}) => data && data.length > 0
    ? <div className="flex-ns mb3">
      {data.map(({heading, text}) => <ContactEntry heading={heading} text={text} />)}
    </div>
    : "";

export default class ThankPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    const entryContactEntries = entry.getIn(["data", "contact_entries"]);
    const contactEntries = entryContactEntries ? entryContactEntries.toJS() : [];
   <div#foo>
<div class=content>
  <div class="wrapper-1">
    <div class="wrapper-2">
      <h1>Thank you !</h1>
      <p>Thanks for subscribing to our news letter.  </p>
      <p>you should receive a confirmation email soon  </p>
      <button class="go-home">
      go home
      </button>
    </div>
    <div class="footer-like">
      <p>Email not received?
       <a href="#">Click here to send again</a>
      </p>
    </div>
</div>
</div>


 </div>
<link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet">
  }
}
