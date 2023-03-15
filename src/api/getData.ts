import axios from 'axios';

export const getDataList = async ( collection: string ) => {

    const { data } = await axios({
      method: 'post',
      url: 'https://lvrq37enhi.execute-api.us-east-1.amazonaws.com/dev/backoffice/modelos',
      data: {
        detail: {
          type: `${ collection }`,
          data: {
              limit: 10,
              page: 0,
              method: "list"
          }
      }
      }
    });

    return data;
  }

export const getDataModel = async ( collection: string ) => {

    const { data } = await axios({
      method: 'post',
      url: 'https://lvrq37enhi.execute-api.us-east-1.amazonaws.com/dev/backoffice/estructura',
      data: {
        detail: {
          type: `${ collection }`
        }
      }
    });

    return data;
  }