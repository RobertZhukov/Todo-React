import React from "react";

import "./info-panel.css"

const InfoPanel = () => {
	return (
		<div>
			<div className="badge badge-info">
				<i className="fa fa-lightbulb-o"></i>
			</div>
			<div className="help">
				To cross out the completed task - click on it
			</div>
		</div>
	);
};

export default InfoPanel;