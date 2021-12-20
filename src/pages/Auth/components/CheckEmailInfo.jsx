import React from 'react';
import { Result, Button } from 'antd';

import { userApi } from 'utils/api';
import { Block } from 'components';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const renderTextInfo = (hash, verified) => {
  if (hash) {
    if (verified) {
      return {
        status: 'success',
        message: 'Аккаунт успешно подтвержден!',
      };
    } else {
      return {
        status: 'error',
        message: 'Ошибка при подтверждении аккаунта!',
      };
    }
  } else {
    return {
      status: 'success',
      message: 'Ссылка с подтверждением аккаунта отправлена на ваш E-Mail.',
    };
  }
};

const CheckEmailInfo = ({ location, history }) => {
  const [verified, setVerified] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const hash = location.search.split('hash=')[1];
  const info = renderTextInfo(hash, verified);

  React.useEffect(() => {
    if (hash) {
      userApi
        .verifyHash(hash)
        .then(({ data }) => {
          if (data.status === 'success') {
            setVerified(true);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [hash]);

  return isLoading ? (
    <Spin indicator={antIcon} />
  ) : (
    <div>
      <Block>
        <Result
          status={info.status}
          title={info.status === 'error' ? 'Ошибка!' : 'Готово!'}
          subTitle={info.message}
          extra={
            info.status === 'success' &&
            verified && (
              <Button type="primary" onClick={() => history.push('/signin')}>
                Войти
              </Button>
            )
          }
        />
      </Block>
    </div>
  );
};

export default CheckEmailInfo;
