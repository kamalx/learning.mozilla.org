var React = require('react');

var IconButtons = React.createClass({
  propTypes: {
    children: React.PropTypes.object.isRequired
  },
  render: function() {
    let numOfChildren = this.props.children.length;
    let colSpan = 12 / this.props.children.length; // Bootstrap uses 12-column grid

    return (
      <div className="icon-buttons inner-container">
        <section className="row">
          {
             React.Children.map(this.props.children, function(iconButton){
               return(
                 <div className={`col-sm-${colSpan} col-md-${colSpan} col-lg-${colSpan}`}>{iconButton}</div>
               );
             })
          }
        </section>
      </div>
    );
  }
});

module.exports = IconButtons;
