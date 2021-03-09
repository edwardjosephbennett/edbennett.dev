import * as React from "react"
import { siteMetadata } from "../../gatsby-config"

// markup
const IndexPage = () => {
	return (
		<div className="w-full h-full grid place-items-center absolute top-0 left-0">
			<div className="flex flex-col text-center">
				<h1 className="font-header font-semibold text-red-500 mb-2">edbennett.dev</h1>
				<p className="font-body text-sm text-grey-500">New website under development</p>
			</div>
		</div>
	)
}

export default IndexPage
