import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form from "@rjsf/mui";
import { formSchema } from './utils/make-form-schema';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

  
  export const FormData = () => {

    const [schemaData, setSchemaData] = useState({})

    const dataLoad = async () => {
      setSchemaData(await formSchema('product'));
    };

    const onError = (errors:any) => alert(errors);

    
    return (
      <>
      <Button onClick={ dataLoad } variant='outlined'>
        Cargar Info
      </Button>
      <Form schema={schemaData} validator={validator} liveValidate onError={onError}/>
      </>
    )
  }
