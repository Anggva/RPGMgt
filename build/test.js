/** @jsx React.DOM */

var Map = React.createClass({
	render: function() {
		return(
			<img src={this.props.image} style={"border:1px solid black"}/>
		);
	}
});

var Sidebar = React.createClass({
	getInitialState: function() {
		return {
		};
	},
	render: function() {
		return(
			<div id="sidebar">

			</div>
		);
	}
});


var World = React.createClass({
	getInitialState: function() {
		return {
			map: "testImage.jpg",
			locations: []
		};
	},
	render: function() {
		var locations;
		var children;
		return (
			<div>
			<div class="container" id="mapImageContainer">
				<Map image={this.state.map} />
			</div>
			<div class="container" id="sidebarContainer">
				<Sidebar />
			</div>
			</div>
		);
	}
})

React.render(
	<World />,
	document.body
);