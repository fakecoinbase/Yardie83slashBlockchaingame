import React, { Component } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Nodes, Hasher, Signature, Wallet, UnspentTx, Mempool, Blockchain, Block, Publish } from '../index'
import { Provider, Container, Card } from 'rendition'

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class DashboardGrid extends Component {
	render() {
		// layout is an array of objects
		const layouts = {
			lg: [
				{ i: 'nodes', x: 0, y: 0, w: 2, h: 2, minH: 1, minW: 2, maxW: 2 },
				{ i: 'hasher', x: 0, y: 2, w: 2, h: 2, minW: 2, maxW: 2 },
				{ i: 'wallet', x: 0, y: 4, w: 2, h: 2 },
				{ i: 'signature', x: 2, y: 0, w: 3, h: 2 },
				{ i: 'unspentTx', x: 2, y: 4, w: 7, h: 2 },
				{ i: 'mempool', x: 2, y: 6, w: 7, h: 2 },
				{ i: 'blockchain', x: 5, y: 0, w: 4, h: 2 },
				{ i: 'block', x: 9, y: 0, w: 3, h: 5 },
				{ i: 'publish', x: 9, y: 9, w: 3, h: 1 }
			], md: [
				{ i: 'nodes', x: 0, y: 0, w: 3, h: 6 },
				{ i: 'hasher', x: 0, y: 3, w: 3, h: 6 },
				{ i: 'wallet', x: 0, y: 6, w: 3, h: 6 },
				{ i: 'signature', x: 3, y: 0, w: 3, h: 6 },
				{ i: 'unspentTx', x: 3, y: 6, w: 6, h: 6 },
				{ i: 'mempool', x: 3, y: 3, w: 6, h: 6 },
				{ i: 'blockchain', x: 6, y: 0, w: 3, h: 6 },
				{ i: 'block', x: 9, y: 0, w: 3, h: 12 },
				{ i: 'publish', x: 9, y: 9, w: 3, h: 6 }
			], sm: [
				{ i: 'nodes', x: 0, y: 0, w: 3, h: 6 },
				{ i: 'hasher', x: 0, y: 3, w: 3, h: 6 },
				{ i: 'wallet', x: 0, y: 6, w: 3, h: 6 },
				{ i: 'signature', x: 3, y: 0, w: 3, h: 6 },
				{ i: 'unspentTx', x: 3, y: 6, w: 6, h: 6 },
				{ i: 'mempool', x: 3, y: 3, w: 6, h: 6 },
				{ i: 'blockchain', x: 6, y: 0, w: 3, h: 6 },
				{ i: 'block', x: 9, y: 0, w: 3, h: 12 },
				{ i: 'publish', x: 9, y: 9, w: 3, h: 6 }
			], xs: [
				{ i: 'nodes', x: 0, y: 0, w: 3, h: 6 },
				{ i: 'hasher', x: 0, y: 6, w: 3, h: 6 },
				{ i: 'wallet', x: 0, y: 12, w: 3, h: 6 },
				{ i: 'signature', x: 0, y: 18, w: 3, h: 6 },
				{ i: 'unspentTx', x: 0, y: 24, w: 6, h: 6 },
				{ i: 'mempool', x: 0, y: 30, w: 6, h: 6 },
				{ i: 'blockchain', x: 0, y: 36, w: 3, h: 6 },
				{ i: 'block', x: 0, y: 42, w: 3, h: 12 },
				{ i: 'publish', x: 0, y: 54, w: 3, h: 6 }
			], xxs: [
				{ i: 'nodes', x: 0, y: 0, w: 3, h: 6 },
				{ i: 'hasher', x: 0, y: 3, w: 3, h: 6 },
				{ i: 'wallet', x: 0, y: 6, w: 3, h: 6 },
				{ i: 'signature', x: 0, y: 9, w: 3, h: 6 },
				{ i: 'unspentTx', x: 0, y: 12, w: 6, h: 6 },
				{ i: 'mempool', x: 0, y: 15, w: 6, h: 6 },
				{ i: 'blockchain', x: 0, y: 18, w: 3, h: 6 },
				{ i: 'block', x: 0, y: 21, w: 3, h: 12 },
				{ i: 'publish', x: 0, y: 24, w: 3, h: 6 }
			]
		};


		return (
			<Provider>
				<ResponsiveGridLayout className="layout" layouts={layouts}
					breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
					cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
					isDraggable={false}
					margin={[10, 10]}
					rowHeight={137}
				>
					<Card key="nodes" style={{ padding: "0px", overflowX: "hidden", overflowY: "scroll" }}><Nodes /></Card>
					<Card key="hasher" style={{ padding: "0px", overflowX: "hidden", overflowY: "scroll" }}><Hasher /></Card>
					<Card key="signature" style={{ padding: "0px", overflowX: "hidden", overflowY: "scroll" }}><Signature /></Card>
					<Card key="unspentTx" style={{ padding: "0px", overflowX: "hidden", overflowY: "scroll" }}><UnspentTx /></Card>
					<Card key="mempool" style={{ padding: "0px", overflowX: "hidden", overflowY: "scroll" }}><Mempool /></Card>
					<Card key="blockchain" style={{ padding: "0px", overflowX: "hidden", overflowY: "scroll" }}><Blockchain /></Card>
					<Card key="block" style={{ padding: "0px", overflowX: "hidden", overflowY: "scroll" }}><Block /></Card>
					<Card key="publish" style={{ padding: "0px", overflowX: "hidden", overflowY: "scroll" }}><Publish /></Card>
					<Card key="wallet" style={{ padding: "0px", overflowX: "hidden", overflowY: "scroll" }}><Wallet /></Card>
				</ResponsiveGridLayout>
			</Provider>
		)
	}
}

export class Wrapper extends Component {
	render() {
		var that = this;
		let newChildren = React.Children.map(this.props.children, function (child) {
			return React.cloneElement(child, { width: that.props.style.width, height: that.props.style.height })
		})

		return (
			<div {...this.props}>
				{newChildren}
			</div>
		)
	}
}

