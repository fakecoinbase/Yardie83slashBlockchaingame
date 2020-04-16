import React, { useState } from 'react';
import { Input } from 'rendition';
import Title from '../util/Title/Title';
import Button from '@material-ui/core/Button';
import LabeledInput from '../util/LabeledInput';
import merkle from '../../services/merklService';

const Merkl = () => {
	const [input1, setInput1] = useState<string | undefined>('');
	const [input2, setInput2] = useState<string | undefined>('');
	const [input3, setInput3] = useState<string | undefined>('');
	const [input4, setInput4] = useState<string | undefined>('');
	const [output, setOutput] = useState<string | undefined>('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === 'i1') setInput1(e.target.value);
		if (e.target.id === 'i2') setInput2(e.target.value);
		if (e.target.id === 'i3') setInput3(e.target.value);
		if (e.target.id === 'i4') setInput4(e.target.value);
	};

	const onMerkl = () => {
		let txHashes = [];
		if (input1 !== '') txHashes.push(input1);
		if (input2 !== '') txHashes.push(input2);
		if (input3 !== '') txHashes.push(input3);
		if (input4 !== '') txHashes.push(input4);
		const output = merkle(txHashes);
		setOutput(output);
	};

	const handleClear = () => {
		setInput1('');
		setInput2('');
		setInput3('');
		setInput4('');
		setOutput('');
	};

	return (
		<>
			<Title title='Merkle' />
			<div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
				<div style={{ margin: 'auto', width: '100%' }}>
					<div style={{ float: 'right', width: '100%' }}>
						<LabeledInput placeholder={'Tx Hash 1'} id={'i1'} value={input1} onChange={onChange} />
						<LabeledInput placeholder={'Tx Hash 2'} id={'i2'} value={input2} onChange={onChange} />
						<LabeledInput placeholder={'Tx Hash 3'} id={'i3'} value={input3} onChange={onChange} />
						<LabeledInput placeholder={'Tx Hash 4'} id={'i4'} value={input4} onChange={onChange} />
					</div>
				</div>
				<div style={{ width: '100%', paddingTop: '10px' }}>
					<div style={{ paddingBottom: '5px' }}>
						<div style={{ flexDirection: 'row', flex: 1 }}>
							<Button
								onClick={onMerkl}
								variant='contained'
								color='primary'
								size='small'
								style={{ marginTop: '10px', marginBottom: '5px', marginRight: '10px' }}>
								Hash
							</Button>
							<Button variant='contained' color='default' size='small' onClick={handleClear}>
								Clear
							</Button>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							flex: 1,
							flexGrow: 1,
							boxSizing: 'border-box'
						}}>
						<Input style={{ height: '30px' }} value={output} placeholder='Output' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Merkl;
