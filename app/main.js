/** @jsx React.DOM */
var React = require('react');
if (process.env !== 'production') {
	window.React = React;
}
var checkboxWithLabel = require('./checkboxWithLabel.js');

React.renderComponent(<checkboxWithLabel labelOn="On" labelOff="Off"/>, document.body);