
import React from 'react'; //{ useState, useEffect} 
import { Col, Layout, Row, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Image } from 'antd';
import '../Subscription.css';
import { subscriptionData } from './Subscriptions';

import baked1 from '../images/Baked1.png';
import baked2 from '../images/Baked2.png';
import baked3 from '../images/Baked3.png';
import baked4 from '../images/Baked4.png';

import savory1 from '../images/Savory1.png';
import savory2 from '../images/Savory2.png';
import savory3 from '../images/Savory3.png';
import savory4 from '../images/Savory4.png';

import comfort1 from '../images/Comfort1.png';
import comfort2 from '../images/Comfort2.png';
import comfort3 from '../images/Comfort3.png';
import comfort4 from '../images/Comfort4.png';

import herb1 from '../images/Herb1.png';
import herb2 from '../images/Herb2.png';
import herb3 from '../images/Herb3.png';
import herb4 from '../images/Herb4.png';

import fruit1 from '../images/Fruit1.png';
import fruit2 from '../images/Fruit2.png';
import fruit3 from '../images/Fruit3.png';
import fruit4 from '../images/Fruit4.png';

import spicy1 from '../images/Spicy1.png';
import spicy2 from '../images/Spicy2.png';
import spicy3 from '../images/Spicy3.png';
import spicy4 from '../images/Spicy4.png';




//Button 
import { Button, message } from 'antd';
const CancelButton = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Canceling...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Canceled!',
        duration: 2,
      });
    }, 1000);
  };
return (
  <>
    {contextHolder}
    <Button type="primary" icon={<ShoppingCartOutlined />} onClick={openMessage}>
      Cancel Subscription
    </Button>
  </>
);
};



const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;
const images = [baked1, baked2, baked3, baked4];
const images_1 = [herb1, herb2, herb3, herb4];
const images_2 = [comfort1, comfort2, comfort3, comfort4];
const images_3 = [spicy1, spicy2, spicy3, spicy4];
const images_4 = [fruit1, fruit2, fruit3, fruit4];
const images_5 = [savory1, savory2, savory3, savory4];




const ProfilePage = () => {

  return (
    <Layout>
      <Content style={{ padding: '2rem' }}>
        <Title level={1} style={{ textAlign: 'center', padding: '20px'}}>
          Subscription Options
        </Title>
        <Row>
          {subscriptionData.map((item) => (
            <Col span={8} className='flex'>
          <Card 
            hoverable={ true }
            style={{ width: 300 }}
            cover= {item.image}
            actions={[
          //<HeartOutlined key='save'/>,
         <CancelButton />
          ]}
        >

          <Meta 
            title= {item.name}
            description= {item.description}
          />
          </Card>
          </Col>
          
          ))}
        </Row> 
      </Content>
    </Layout>
  );
};

export default ProfilePage;
