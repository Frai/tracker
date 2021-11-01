import { Add, Delete } from '@mui/icons-material';
import TimePicker from '@mui/lab/TimePicker';
import { IconButton, TextField } from '@mui/material';
import { useState } from 'react';

export const Activity = () => {
	const [startTime, setStartTime] = useState('');
	const [endTime, setEndTime] = useState('');

	return (
		<div>
			Activity
			<div role='article' />
			<TimePicker
				label='Start time'
				value={startTime}
				onChange={time => setStartTime(time ?? '')}
				renderInput={params => <TextField {...params} />}
			/>
			<TimePicker
				label='End time'
				value={endTime}
				onChange={time => setEndTime(time ?? '')}
				renderInput={params => <TextField {...params} />}
			/>
			<TextField label='Description' />
			<IconButton><Add /></IconButton>
			<IconButton><Delete /></IconButton>
		</div>
	)
}