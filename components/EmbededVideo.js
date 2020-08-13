import React from 'react'
import styled from 'styled-components'

const Econtainer = styled.div`
	text-align: center;
`
const Iframe = styled.iframe`
	max-width: 100%; 
	max-height: 100%;
	border: none;
	border-radius: 5px;
`

export default function EmbededVideo({ url }) {
	return (
		<Econtainer>
			<Iframe
				allowFullScreen="allowfullscreen"
				mozallowfullscreen="mozallowfullscreen"
				msallowfullscreen="msallowfullscreen"
				oallowfullscreen="oallowfullscreen"
				webkitallowfullscreen="webkitallowfullscreen"
				width="912" height="491"
				src={url}
			></Iframe>
		</Econtainer>
	)
}
