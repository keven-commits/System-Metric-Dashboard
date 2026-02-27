import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorAlerts() {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error"></Alert>
        </Stack>
    );
}