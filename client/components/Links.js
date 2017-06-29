import React from 'react';
import { connect } from 'react-redux';
import cssLinks from './Links.css';

// Component //
class Links extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stack = this.props.stack;
    const git = this.props.git;

    return (
      <div className="links">
        <h1>Search Results Page</h1>
        <p>***Search results error to be placed here ***</p>
        <ul>
        {
          stack && stack.map(l => {
            return (
              <li key={ l.vendor_id } className="stackResults">

                <p><strong>Title: </strong>
                  <a href={l.url}>{l.title} </a>
                </p>

                <p>Last Activity Date: { l.updated_on }</p>

                <span>{l.views} Views</span>
                <span className="score"><strong>Score:</strong> {l.score}</span>
              </li>
            );
          })
        }
        {
          git && git.map(l => {
            return (
              <li key={ l.vendor_id } className="gitResults">

                <p><strong>Title: </strong>
                  <a href={l.url}>{l.title} </a>
                </p>

                <p>Last Activity Date: { l.updated_on }</p>

                <span>Status: {l.status}</span>
                <span className="score"><strong>Comments:</strong> {l.comments}</span>
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

export { Links };

// Container //
const mapState = (state) => ({
  stack: state.link.currentLinks.stackData,
  git: state.link.currentLinks.gitData,
});

export default connect(mapState)(Links);