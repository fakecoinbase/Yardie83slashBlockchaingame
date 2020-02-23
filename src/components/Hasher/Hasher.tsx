import React, { useState, useEffect } from 'react';
import {} from './HasherStyles.js';
import { Input, Textarea } from 'rendition';
import Title from '../util/Title/Title';
import Button from '@material-ui/core/Button';
import hash from '../../services/hasherService';
import useDataToHash from '../../customHooks/useDataToHash';

const Hasher = () => {
	const [input, setInput] = useState<string | undefined>('');
	const [output, setOutput] = useState<string | undefined>('');

	const [dataToHash]: [string, React.Dispatch<React.SetStateAction<string>>] = useDataToHash();

	useEffect(() => {
		setOutput('');
	}, [input]);

	useEffect(() => {
		if (dataToHash !== undefined) {
			setInput(dataToHash);
		}
	}, [dataToHash]);

	const hashInput = () => {
		const hashedInput = hash(input);
		setOutput(hashedInput);
	};

	return (
		<>
			<Title title='Hasher' />
			<div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
				<div style={{ width: '100%', paddingBottom: '10px' }}>
					<div style={{ float: 'right', width: '100%' }}>
						<span style={{ fontFamily: 'Source Sans Pro', color: '#4D4F5C' }}>Input</span>
						<Textarea
							value={input}
							style={{ height: '100px', minHeight: '100px' }}
							onChange={e => {
								setInput(e.target.value);
							}}></Textarea>
					</div>
				</div>
				<div style={{ width: '100%', paddingTop: '10px' }}>
					<div style={{ paddingBottom: '5px' }}>
						<Button
							onClick={hashInput}
							variant='contained'
							color='primary'
							size='small'
							style={{ marginTop: '10px', marginBottom: '5px' }}>
							Hash
						</Button>
					</div>
					<div
						style={{
							display: 'flex',
							flex: 1,
							flexGrow: 1,
							boxSizing: 'border-box',
						}}>
						<Input style={{ height: '30px' }} value={input === '' ? '' : output} placeholder='Output' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Hasher;
