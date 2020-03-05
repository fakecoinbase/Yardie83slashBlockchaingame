import React, { useEffect, useState, useRef, Component, RefObject, MutableRefObject } from 'react';
import Tree, { ReactD3TreeItem, ReactD3TreeProps } from 'react-d3-tree';
import IconButton from '@material-ui/core/IconButton';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { useOnBlockAddedSubscription, Bloxx_Block, useBlockLazyQuery } from '../../generated/graphql';
import useSelectedBlock from '../../customHooks/useSelectedBlock/useSelectedBlock';
import { Heading } from 'rendition';
import ReactDOM from 'react-dom';
import useBlockchainModal from '../../customHooks/useBlockchainModal/useBlockchainModal';

const Blockchain = ({ admin }: any) => {
	const { data: blockSubscriptionData } = useOnBlockAddedSubscription();
	const [, setSelectedBlock] = useSelectedBlock();

	const [treeData, setTreeData] = useState<ReactD3TreeItem[]>([
		{
			name: 'Genesis',
			attributes: {
				BlockNumber: '-',
				BlockHash: '-',
				BlockStatus: '-',
			},
			children: [],
		},
	]);

	const createDataTree = (dataset: any[]): ReactD3TreeItem[] => {
		let hashTable = Object.create(null);
		dataset.forEach(
			(block: Bloxx_Block) =>
				(hashTable[block.blockHash] = {
					name: block.blockNumber === 0 ? 'Genesis' : 'Block ' + block.blockNumber,
					blockHash: block.blockHash,
					attributes: {
						Hash: block.blockHash.substr(0, 5) + '...' + block.blockHash.substr(block.blockHash.length - 5, 5),
						Status: block.blockStatus,
					},
					nodeSvgShape: {
						shape: 'rect',
						shapeProps: {
							width: 80,
							height: 20,
							y: -20,
							x: 8,
							fill: block.blockStatus === 'confirmed' ? '#d2f3e0' : '#ffd19a',
							stroke: 'none',
						},
					},
					children: [],
				})
		);
		let dataTree: ReactD3TreeItem[] = [];
		dataset.forEach((block: Bloxx_Block) => {
			if (block.previousBlockHash && hashTable[block.previousBlockHash] !== undefined) {
				hashTable[block.previousBlockHash].children.push(hashTable[block.blockHash]);
			} else dataTree.push(hashTable[block.blockHash]);
		});
		return dataTree;
	};

	useEffect(() => {
		let tree: ReactD3TreeItem[] = [];
		if (blockSubscriptionData !== undefined) {
			tree = createDataTree(blockSubscriptionData!.bloxx_block);
			if (tree.length !== 0) setTreeData(tree);
		}
	}, [blockSubscriptionData]);

	const [blockQuery, { data: blockQueryData }] = useBlockLazyQuery();

	const onClick = (blockHash: string) => {
		blockQuery({
			variables: {
				blockHash: blockHash,
			},
		});
	};

	useEffect(() => {
		setSelectedBlock(blockQueryData);
	}, [blockQueryData, setSelectedBlock]);

	const [, setShowBlockchainModal] = useBlockchainModal();

	const handleShowBlockchainModal = () => {
		setShowBlockchainModal({
			data: treeData,
			collapsible: false,
			pathFunc: 'diagonal',
			translate: { x: 50, y: 100 },
			scaleExtent: { min: 0.3, max: 2 },
			nodeSize: { x: 200, y: 100 },
		});
	};

	const [resetting, setResetting] = useState(false);

	const handleResetTree = () => {
		setResetting(true);
	};

	useEffect(() => {
		if (resetting) setResetting(false);
	}, [resetting]);

	return (
		//TODO The height of the div is hard coded. Should be dynamically calcuated from the react-grid-layout columns * rows
		<div style={{ height: admin ? 125 * 6 + 'px' : '220px', minWidth: '600px' }}>
			<div
				style={{
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					height: '35px',
				}}>
				<IconButton style={{ borderRadius: '0px' }} size='small' onClick={handleShowBlockchainModal}>
					<OpenWithIcon />
				</IconButton>
				<IconButton style={{ borderRadius: '0px' }} size='small' onClick={handleResetTree}>
					<RotateLeftIcon />
				</IconButton>
				<Heading.h5 style={{ display: 'inline-block', boxSizing: 'border-box' }}>Blockchain</Heading.h5>
			</div>
			{treeData !== undefined && !resetting && (
				<Tree
					data={treeData}
					collapsible={false}
					pathFunc={'straight'}
					translate={{ x: 50, y: 100 }}
					scaleExtent={{ min: 0.3, max: 2 }}
					nodeSize={{ x: 200, y: 100 }}
					onClick={(nodeData: any) => {
						if (nodeData && nodeData.blockHash) {
							onClick(nodeData!.blockHash);
						}
					}}
				/>
			)}
		</div>
	);
};

export default Blockchain;
