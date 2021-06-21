import React from 'react';

import { Card, message } from 'antd';

export default (): React.ReactNode => {
  React.useEffect(() => {
    message.success('多次渲染');
  }, []);
  return <Card>二级路由</Card>;
};
