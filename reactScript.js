/** @jsx React.DOM */

var WorldMap = React.createClass({
	getInitialState: function() {
		return {
			rootMap: {
				mapName: "TESTMAP",
				imageSrc: "testImage.jpg",
				mapInfo: "",
				editingEnabled: true,
				childMaps: [],
				loc: {
					X: 0, Y: 0,
					size: 0
				}
			}
		};
	},
	render: function() {
		this.props.currentMap = this.props.currentMap || this.state.rootMap;
		return(
			<div className="container">
				<div className="container" id="mapImageContainer">
					<MapImage mapNode={this.props.currentMap} />
				</div>
				<div className="container" id="sidebarContainer">
					<Sidebar mapNode={this.props.currentMap} />
				</div>
			</div>
		);
	}
});

var MapImage = React.createClass({
	render: function() {
		return(
			<div className="container" id="mapFrame">
				<div className="container" id="map">
					<img id="mapImage" src={this.props.mapNode.imageSrc} />
					{this.props.mapNode.childMaps.map(function(childMap){
						return <div className="mapLoc" onclick="gotoLoc(childMap)" style=
							"left: childMap.loc.X, top: childMap.loc.Y,
							width: childMap.loc.size, height: childMap.loc.size"
						/>;
					})}
				</div>
			</div>
		);
	}
});

var Sidebar = React.createClass({
	render: function() {
		return(
			<div className="container" id="sidebar">
				<div id="title"><div id="t">
					<h1>{this.props.mapNode.mapName}</h1>
				</div></div>
				<div id="mapInfo">
					<p>{this.props.mapNode.mapInfo}</p>
				</div>
				<div id="options">
				</div>
				<div id="bottomBar"></div>
			</div>
		);
	}
});

React.render(
	<WorldMap />,
	document.body
);