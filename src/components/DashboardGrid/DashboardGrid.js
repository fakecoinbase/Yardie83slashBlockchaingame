import React, { Component } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Nodes, Hasher, Signature, Wallet, UnspentTx, Mempool, Blockchain, Block, Publish } from '../index'
import { Provider} from 'rendition';
import {GridCard} from './DashboardGridStyles'
import {layouts, breakpoints, cols} from './gridLayout'

export default class DashboardGrid extends Component {
	render() {

		const ResponsiveGridLayout = WidthProvider(Responsive);

		return (
			<Provider>
				<ResponsiveGridLayout className="layout" layouts={layouts}
					breakpoints={breakpoints}
					cols={cols}
					isDraggable={false}
					margin={[10,20,10,20]}
					// FIXME rowHeight should be dynamic; it depends on the window height of each device
					rowHeight={125}
				>
					<GridCard key="nodes"><Nodes /></GridCard>
					<GridCard key="hasher"><Hasher /></GridCard>
					<GridCard key="signature"><Signature /></GridCard>
					<GridCard key="unspentTx"><UnspentTx /></GridCard>
					<GridCard key="mempool"><Mempool /></GridCard>
					<GridCard key="blockchain"><Blockchain /></GridCard>
					<GridCard key="block"><Block /></GridCard>
					<GridCard key="publish"><Publish /></GridCard>
					<GridCard key="wallet"><Wallet /></GridCard>
				</ResponsiveGridLayout>
			</Provider>
		)
	}
}

