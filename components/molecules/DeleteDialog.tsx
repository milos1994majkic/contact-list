import { Dialog } from '@mui/material';
import { useRouter } from 'next/router';
import { dataAPI } from '../../pages/utils/configLocalStorage';
import FormButton from '../atoms/FormButton';

export default function DeleteDialog({ contactId, setOpen, open }: any) {
  const router = useRouter();

  function deleteContact(contactId: string) {
    dataAPI().deleteContact(contactId);
    setOpen(false);
  }
  return (
    <Dialog
      onClose={() => {
        router.push('/');
      }}
      open={open}
      PaperProps={{ sx: { width: '46vw' } }}
    >
      <div>
        <p className='text-typeqast-gray p-6 border-b-2 font-medium'>Delete</p>
        <p className='p-4 text-typeqast-gray text-center mt-10'>
          Are you sure you want to delete this contact?
        </p>
        <div className='flex flex-col p-4 md:flex md:flex-row md:justify-around text-sm md:pt-14 md:pr-8 md:pb-6 md:pl-4'>
          <button
            className='w-auto my-4 bg-text-typeqast-gray md:w-4/12'
            onClick={() => setOpen(false)}
          >
            <FormButton text='Cancel' />
          </button>
          <button
            className='mb-4 bg-text-typeqast-blue md:mb-0'
            onClick={() => deleteContact(contactId)}
          >
            <FormButton text='Delete' />
          </button>
        </div>
      </div>
    </Dialog>
  );
}
