import config from '../config/config.mjs';

type TEmailBody = {
    name: string;
    email: string;
    message: string;
}

const sendEmail = async (body: TEmailBody): Promise<boolean> => {
    try {


        debugger;
        const res = await fetch(`${config.apiUrl}/email`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(body),
        });

        if(!res.ok) {
            throw new Error;
            return false;
        }

        return true;

    } catch(error) {
        console.log('error ==================== ', error);
      return false;
    }
  }
  
  export default sendEmail;
  